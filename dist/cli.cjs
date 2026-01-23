#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/cli/analyzer.ts
var fs = __toESM(require("fs"), 1);
var path = __toESM(require("path"), 1);
function findFiles(dir, pattern, results = []) {
  if (!fs.existsSync(dir))
    return results;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (!file.startsWith(".") && file !== "node_modules" && file !== "dist") {
        findFiles(filePath, pattern, results);
      }
    } else if (pattern.test(file)) {
      results.push(filePath);
    }
  }
  return results;
}
function parseSFC(content) {
  const templateMatch = content.match(/<template[^>]*>([\s\S]*?)<\/template>/i);
  const scriptMatch = content.match(/<script(?!\s+setup)[^>]*>([\s\S]*?)<\/script>/i);
  const scriptSetupMatch = content.match(/<script\s+setup[^>]*>([\s\S]*?)<\/script>/i);
  return {
    template: templateMatch?.[1] || "",
    script: scriptMatch?.[1] || "",
    scriptSetup: scriptSetupMatch?.[1] || ""
  };
}
function analyzeTemplate(template) {
  const elements = [];
  const seen = /* @__PURE__ */ new Set();
  const addElement = (el) => {
    const key = `${el.line}:${el.tag}:${el.text}:${el.binding || ""}`;
    if (!seen.has(key) && (el.text || el.binding)) {
      seen.add(key);
      elements.push(el);
    }
  };
  const tagRegex = /<([A-Za-z][\w-]*)((?:\s+[^>]*)?)\s*>([\s\S]*?)<\/\1>/g;
  let match;
  while ((match = tagRegex.exec(template)) !== null) {
    const [fullMatch, tag, attrs, content] = match;
    const line = template.substring(0, match.index).split("\n").length;
    const parsedAttrs = parseAttributes(attrs);
    const textContent = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    const bindingMatches = content.match(/\{\{\s*([^}]+)\s*\}\}/g);
    const hasBinding = !!bindingMatches || attrs.includes(":") || attrs.includes("v-");
    const cleanText = textContent.replace(/\{\{[^}]+\}\}/g, "").trim();
    if (cleanText && cleanText.length > 0) {
      addElement({
        tag,
        text: cleanText,
        isStatic: !hasBinding,
        binding: bindingMatches ? bindingMatches.map((b) => b.replace(/[{}]/g, "").trim()).join(", ") : void 0,
        attributes: parsedAttrs,
        line
      });
    } else if (bindingMatches) {
      for (const bindingMatch of bindingMatches) {
        const binding = bindingMatch.replace(/[{}\s]/g, "");
        addElement({
          tag,
          text: `{{ ${binding} }}`,
          isStatic: false,
          binding,
          attributes: parsedAttrs,
          line
        });
      }
    }
  }
  const attrTextRegex = /<([A-Za-z][\w-]*)([^>]*(?:placeholder|title|label|field-name|aria-label|alt)="([^"]+)"[^>]*)>/gi;
  while ((match = attrTextRegex.exec(template)) !== null) {
    const [fullMatch, tag, attrs, attrValue] = match;
    const line = template.substring(0, match.index).split("\n").length;
    if (!attrs.match(/[:v-](?:placeholder|title|label|field-name|aria-label|alt)/)) {
      addElement({
        tag,
        text: attrValue,
        isStatic: true,
        attributes: parseAttributes(attrs),
        line
      });
    }
  }
  const vTextRegex = /<([A-Za-z][\w-]*)([^>]*\sv-(?:text|html)="([^"]+)"[^>]*)>/g;
  while ((match = vTextRegex.exec(template)) !== null) {
    const [fullMatch, tag, attrs, binding] = match;
    const line = template.substring(0, match.index).split("\n").length;
    addElement({
      tag,
      text: `v-text: ${binding}`,
      isStatic: false,
      binding: binding.trim(),
      attributes: parseAttributes(attrs),
      line
    });
  }
  const vModelRegex = /<([A-Za-z][\w-]*)([^>]*\sv-model(?:\.[\w]+)*="([^"]+)"[^>]*)>/gi;
  while ((match = vModelRegex.exec(template)) !== null) {
    const [fullMatch, tag, attrs, binding] = match;
    const line = template.substring(0, match.index).split("\n").length;
    const parsedAttrs = parseAttributes(attrs);
    const placeholder = parsedAttrs.placeholder || "";
    addElement({
      tag,
      text: placeholder ? `[${placeholder}] v-model: ${binding}` : `v-model: ${binding}`,
      isStatic: false,
      binding: binding.trim(),
      attributes: parsedAttrs,
      line
    });
  }
  const standaloneBindingRegex = /\{\{\s*([^}]+)\s*\}\}/g;
  while ((match = standaloneBindingRegex.exec(template)) !== null) {
    const binding = match[1].trim();
    const line = template.substring(0, match.index).split("\n").length;
    const alreadyExists = elements.some((e) => e.line === line && e.binding?.includes(binding));
    if (!alreadyExists) {
      addElement({
        tag: "text",
        text: `{{ ${binding} }}`,
        isStatic: false,
        binding,
        attributes: {},
        line
      });
    }
  }
  const clickableRegex = /<([A-Za-z][\w-]*)([^>]*@click[^>]*)>/g;
  while ((match = clickableRegex.exec(template)) !== null) {
    const [fullMatch, tag, attrs] = match;
    const line = template.substring(0, match.index).split("\n").length;
    const parsedAttrs = parseAttributes(attrs);
    const afterMatch = template.substring(match.index + fullMatch.length);
    const textMatch = afterMatch.match(/^([^<]*)/)?.[1]?.trim();
    if (textMatch && textMatch.length < 100) {
      addElement({
        tag,
        text: textMatch.replace(/\{\{[^}]+\}\}/g, "").trim() || "[\u30AF\u30EA\u30C3\u30AF\u8981\u7D20]",
        isStatic: !textMatch.includes("{{"),
        attributes: parsedAttrs,
        line
      });
    }
  }
  const linkRegex = /<(NuxtLink|RouterLink|router-link|nuxt-link)([^>]*)>([\s\S]*?)<\/\1>/gi;
  while ((match = linkRegex.exec(template)) !== null) {
    const [fullMatch, tag, attrs, content] = match;
    const line = template.substring(0, match.index).split("\n").length;
    const parsedAttrs = parseAttributes(attrs);
    const textContent = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (textContent) {
      addElement({
        tag: "link",
        text: textContent,
        isStatic: !content.includes("{{"),
        binding: parsedAttrs.to || parsedAttrs[":to"],
        attributes: parsedAttrs,
        line
      });
    }
  }
  return elements;
}
function parseAttributes(attrString) {
  const attrs = {};
  const regex = /([\w:-]+)(?:="([^"]*)")?/g;
  let match;
  while ((match = regex.exec(attrString)) !== null) {
    attrs[match[1]] = match[2] || "";
  }
  return attrs;
}
function analyzeScript(script, scriptSetup) {
  const combined = script + "\n" + scriptSetup;
  const apiCalls = [];
  const dataBindings = [];
  const imports = [];
  const importRegex = /import\s+(?:\{[^}]+\}|\w+)\s+from\s+['"]([^'"]+)['"]/g;
  let match;
  while ((match = importRegex.exec(combined)) !== null) {
    imports.push(match[1]);
  }
  const apiCallRegex = /(?:const|let)\s+\{?\s*(\w+)\s*\}?\s*=\s*(?:await\s+)?(?:api|useApi\(\))\.(\w+)\.(\w+)\s*\(/g;
  while ((match = apiCallRegex.exec(combined)) !== null) {
    const [, variable, resource, action] = match;
    apiCalls.push({
      composable: `${resource}.${action}`,
      variable
    });
  }
  const directApiRegex = /(?:const|let)\s+(\w+)\s*=\s*(?:await\s+)?(\w+(?:Show|List|Create|Update|Destroy))\s*\(/g;
  while ((match = directApiRegex.exec(combined)) !== null) {
    const [, variable, funcName] = match;
    apiCalls.push({
      composable: funcName,
      variable
    });
  }
  const refRegex = /(?:const|let)\s+(\w+)\s*=\s*(ref|reactive|computed)\s*[(<]/g;
  while ((match = refRegex.exec(combined)) !== null) {
    const [, name, type] = match;
    dataBindings.push({
      name,
      source: "local",
      type
    });
  }
  const storeRegex = /(?:const|let)\s+(\w+)\s*=\s*use(\w+)Store\s*\(/g;
  while ((match = storeRegex.exec(combined)) !== null) {
    const [, variable, storeName] = match;
    dataBindings.push({
      name: variable,
      source: `${storeName}Store`,
      type: "store"
    });
  }
  const propsRegex = /defineProps\s*<?\s*\{([^}]+)\}/;
  const propsMatch = combined.match(propsRegex);
  if (propsMatch) {
    const propsContent = propsMatch[1];
    const propNames = propsContent.match(/(\w+)\s*[?:]?\s*:/g) || [];
    for (const prop of propNames) {
      const name = prop.replace(/[?:]/g, "").trim();
      dataBindings.push({
        name,
        source: "props",
        type: "prop"
      });
    }
  }
  return { apiCalls, dataBindings, imports };
}
function analyzeApiComposable(content, filePath) {
  const pathMatch = content.match(/\/\/\s*API\s*PATH:\s*([^\n]+)/i);
  const endpoint = pathMatch?.[1]?.trim() || "";
  let method = "GET";
  const fileName = path.basename(filePath, ".ts");
  if (fileName.includes("create") || content.includes("method: 'POST'") || content.includes('method: "POST"')) {
    method = "POST";
  } else if (fileName.includes("update") || content.includes("method: 'PUT'") || content.includes('method: "PUT"')) {
    method = "PUT";
  } else if (fileName.includes("destroy") || fileName.includes("delete") || content.includes("method: 'DELETE'")) {
    method = "DELETE";
  } else if (content.includes("method: 'PATCH'")) {
    method = "PATCH";
  }
  const descMatch = content.match(/\/\/\s*Description:\s*([^\n]+)/i);
  const description = descMatch?.[1]?.trim();
  const responseFields = [];
  const responseInterfaceMatch = content.match(/interface\s+\w*Response\s*\{([^}]+)\}/s);
  if (responseInterfaceMatch) {
    const fieldsContent = responseInterfaceMatch[1];
    const fieldRegex = /(\w+)\??\s*:\s*([^;\n]+)/g;
    let fieldMatch;
    while ((fieldMatch = fieldRegex.exec(fieldsContent)) !== null) {
      responseFields.push({
        name: fieldMatch[1],
        type: fieldMatch[2].trim()
      });
    }
  }
  const requestFields = [];
  const requestInterfaceMatch = content.match(/interface\s+\w*(?:Request|Body|Params)\s*\{([^}]+)\}/s);
  if (requestInterfaceMatch) {
    const fieldsContent = requestInterfaceMatch[1];
    const fieldRegex = /(\w+)\??\s*:\s*([^;\n]+)/g;
    let fieldMatch;
    while ((fieldMatch = fieldRegex.exec(fieldsContent)) !== null) {
      requestFields.push({
        name: fieldMatch[1],
        type: fieldMatch[2].trim()
      });
    }
  }
  if (!endpoint && responseFields.length === 0) {
    return null;
  }
  return {
    endpoint,
    method,
    description,
    responseFields,
    requestFields
  };
}
function analyzeTypeFile(content) {
  const types = [];
  const interfaceRegex = /(?:export\s+)?interface\s+(\w+)\s*\{([^}]+)\}/gs;
  let match;
  while ((match = interfaceRegex.exec(content)) !== null) {
    const [, name, fieldsContent] = match;
    const fields = [];
    const fieldRegex = /(\w+)(\?)?:\s*([^;\n]+)/g;
    let fieldMatch;
    while ((fieldMatch = fieldRegex.exec(fieldsContent)) !== null) {
      fields.push({
        name: fieldMatch[1],
        type: fieldMatch[3].trim(),
        optional: !!fieldMatch[2]
      });
    }
    types.push({ name, fields });
  }
  return types;
}
function analyzeComponent(filePath, apiMappings) {
  const content = fs.readFileSync(filePath, "utf-8");
  const sfc = parseSFC(content);
  const componentName = path.basename(filePath, ".vue");
  const templateElements = analyzeTemplate(sfc.template);
  const scriptAnalysis = analyzeScript(sfc.script, sfc.scriptSetup);
  const elements = [];
  for (const el of templateElements) {
    const mapping = {
      selector: generateSelector(el),
      type: determineElementType(el),
      line: el.line,
      component: componentName
    };
    if (el.isStatic) {
      mapping.text = el.text;
    } else if (el.binding) {
      mapping.binding = el.binding;
      const apiInfo = traceBindingToApi(el.binding, scriptAnalysis, apiMappings);
      if (apiInfo) {
        mapping.api = {
          endpoint: apiInfo.endpoint,
          method: apiInfo.method,
          description: apiInfo.description
        };
        const dbInfo = mapToDatabase(el.binding, apiInfo);
        if (dbInfo) {
          mapping.db = dbInfo;
        }
      }
    }
    elements.push(mapping);
  }
  return {
    filePath,
    componentName,
    elements,
    apis: scriptAnalysis.apiCalls.map((api) => ({
      endpoint: apiMappings[api.composable]?.endpoint || "",
      method: apiMappings[api.composable]?.method || "GET",
      composable: api.composable,
      responseType: api.variable
    })),
    imports: scriptAnalysis.imports
  };
}
function generateSelector(el) {
  const parts = [el.tag];
  if (el.attributes.id) {
    return `#${el.attributes.id}`;
  }
  if (el.attributes.class) {
    const classes = el.attributes.class.split(/\s+/).slice(0, 2);
    parts.push(...classes.map((c) => `.${c}`));
  }
  return parts.join("");
}
function determineElementType(el) {
  if (el.tag === "button" || el.attributes["@click"] || el.attributes.role === "button") {
    return "button";
  }
  if (el.tag === "a" || el.attributes.href || el.attributes.to) {
    return "link";
  }
  if (["input", "select", "textarea"].includes(el.tag)) {
    return "form";
  }
  if (el.isStatic) {
    return "static";
  }
  if (el.binding) {
    return "data";
  }
  return "unknown";
}
function traceBindingToApi(binding, scriptAnalysis, apiMappings) {
  const rootVar = binding.split(".")[0].split("[")[0];
  for (const apiCall of scriptAnalysis.apiCalls) {
    if (apiCall.variable === rootVar || binding.includes(apiCall.variable || "")) {
      return apiMappings[apiCall.composable] || null;
    }
  }
  for (const dataBinding of scriptAnalysis.dataBindings) {
    if (dataBinding.name === rootVar && dataBinding.type === "store") {
    }
  }
  return null;
}
function mapToDatabase(binding, apiInfo) {
  const parts = binding.split(".");
  const fieldName = parts[parts.length - 1];
  const field = apiInfo.responseFields.find((f) => f.name === fieldName);
  if (!field)
    return null;
  const tableMatch = apiInfo.endpoint.match(/\/api\/v\d+\/(\w+)/);
  const tableName = tableMatch?.[1] || "";
  if (!tableName)
    return null;
  return {
    table: tableName,
    column: fieldName,
    type: field.type
  };
}
async function analyzeProject(projectPath, options = {}) {
  const { output, verbose } = options;
  console.log(`
\u{1F50D} Analyzing project: ${projectPath}
`);
  const vueFiles = findFiles(projectPath, /\.vue$/);
  const apiFiles = findFiles(path.join(projectPath, "composables", "useApi"), /\.ts$/);
  const altApiFiles = findFiles(path.join(projectPath, "front", "composables", "useApi"), /\.ts$/);
  const typeFiles = findFiles(path.join(projectPath, "server", "types"), /\.ts$/);
  const altTypeFiles = findFiles(path.join(projectPath, "front", "server", "types"), /\.ts$/);
  const allApiFiles = [...apiFiles, ...altApiFiles];
  const allTypeFiles = [...typeFiles, ...altTypeFiles];
  if (verbose) {
    console.log(`Found ${vueFiles.length} Vue files`);
    console.log(`Found ${allApiFiles.length} API composable files`);
    console.log(`Found ${allTypeFiles.length} type definition files`);
  }
  console.log("\u{1F4E1} Analyzing API composables...");
  const apiMappings = {};
  for (const apiFile of allApiFiles) {
    const content = fs.readFileSync(apiFile, "utf-8");
    const analysis = analyzeApiComposable(content, apiFile);
    if (analysis) {
      const relativePath = apiFile.replace(/.*useApi\//, "").replace(/\.ts$/, "");
      const key = relativePath.replace(/\//g, ".").replace(/\/index$/, "");
      apiMappings[key] = analysis;
      if (verbose) {
        console.log(`  \u2713 ${key}: ${analysis.method} ${analysis.endpoint}`);
      }
    }
  }
  console.log("\u{1F4CB} Analyzing type definitions...");
  const typeDefinitions = {};
  for (const typeFile of allTypeFiles) {
    const content = fs.readFileSync(typeFile, "utf-8");
    const types = analyzeTypeFile(content);
    for (const type of types) {
      typeDefinitions[type.name] = type;
      if (verbose) {
        console.log(`  \u2713 ${type.name}: ${type.fields.length} fields`);
      }
    }
  }
  console.log("\u{1F9E9} Analyzing Vue components...");
  const components = {};
  for (const vueFile of vueFiles) {
    try {
      const analysis = analyzeComponent(vueFile, apiMappings);
      const relativePath = path.relative(projectPath, vueFile);
      components[relativePath] = analysis;
      if (verbose) {
        const staticCount = analysis.elements.filter((e) => e.type === "static").length;
        const dataCount = analysis.elements.filter((e) => e.type === "data").length;
        console.log(`  \u2713 ${relativePath}: ${staticCount} static, ${dataCount} data`);
      }
    } catch (e) {
      console.error(`  \u2717 Error analyzing ${vueFile}:`, e);
    }
  }
  const result = {
    projectPath,
    analyzedAt: (/* @__PURE__ */ new Date()).toISOString(),
    components,
    apiMappings
  };
  if (output) {
    const outputPath = path.resolve(output);
    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
    console.log(`
\u2705 Analysis saved to: ${outputPath}`);
  }
  const totalElements = Object.values(components).reduce((sum, c) => sum + c.elements.length, 0);
  const staticElements = Object.values(components).reduce(
    (sum, c) => sum + c.elements.filter((e) => e.type === "static").length,
    0
  );
  const dataElements = Object.values(components).reduce(
    (sum, c) => sum + c.elements.filter((e) => e.type === "data").length,
    0
  );
  console.log(`
\u{1F4CA} Analysis Summary:
   Components: ${Object.keys(components).length}
   Total elements: ${totalElements}
   - Static: ${staticElements}
   - Data: ${dataElements}
   - Other: ${totalElements - staticElements - dataElements}
   API endpoints: ${Object.keys(apiMappings).length}
`);
  return result;
}
if (typeof require !== "undefined" && require.main === module) {
  const args2 = process.argv.slice(2);
  const projectPath = args2[0] || ".";
  const outputFlag = args2.indexOf("-o");
  const output = outputFlag !== -1 ? args2[outputFlag + 1] : "dev-inspector-analysis.json";
  const verbose = args2.includes("-v") || args2.includes("--verbose");
  analyzeProject(projectPath, { output, verbose }).catch(console.error);
}

// src/cli/index.ts
var args = process.argv.slice(2);
function printHelp() {
  console.log(`
vue-dev-inspector - \u30BD\u30FC\u30B9\u30B3\u30FC\u30C9\u89E3\u6790\u30C4\u30FC\u30EB

\u4F7F\u3044\u65B9:
  npx vue-dev-inspector analyze <project-path> [options]

\u30B3\u30DE\u30F3\u30C9:
  analyze    Vue \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u89E3\u6790\u3057\u3066\u8981\u7D20\u30DE\u30C3\u30D4\u30F3\u30B0\u3092\u751F\u6210

\u30AA\u30D7\u30B7\u30E7\u30F3:
  -o, --output <file>   \u51FA\u529B\u30D5\u30A1\u30A4\u30EB (\u30C7\u30D5\u30A9\u30EB\u30C8: dev-inspector-analysis.json)
  -v, --verbose         \u8A73\u7D30\u30ED\u30B0\u3092\u51FA\u529B
  -h, --help            \u30D8\u30EB\u30D7\u3092\u8868\u793A

\u4F8B:
  npx vue-dev-inspector analyze ./src
  npx vue-dev-inspector analyze ./front -o analysis.json -v
  npx vue-dev-inspector analyze /path/to/project --verbose
`);
}
async function main() {
  if (args.length === 0 || args.includes("-h") || args.includes("--help")) {
    printHelp();
    process.exit(0);
  }
  const command = args[0];
  if (command === "analyze") {
    const projectPath = args[1] || ".";
    const outputFlagIndex = args.findIndex((a) => a === "-o" || a === "--output");
    const output = outputFlagIndex !== -1 ? args[outputFlagIndex + 1] : "dev-inspector-analysis.json";
    const verbose = args.includes("-v") || args.includes("--verbose");
    try {
      await analyzeProject(projectPath, { output, verbose });
    } catch (error) {
      console.error("Error:", error);
      process.exit(1);
    }
  } else {
    console.error(`Unknown command: ${command}`);
    printHelp();
    process.exit(1);
  }
}
main();
