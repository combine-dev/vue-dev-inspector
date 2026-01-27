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

// src/cli/index.ts
var fs2 = __toESM(require("fs"), 1);

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
  const isPlaceholderText = (text) => {
    if (!text)
      return true;
    const trimmed = text.trim();
    if (/^\[[^\]]+コンポーネント\]$/.test(trimmed))
      return true;
    if (trimmed.length === 0)
      return true;
    return false;
  };
  const addElement = (el) => {
    const key = `${el.line}:${el.tag}:${el.text}:${el.binding || ""}`;
    if (!seen.has(key) && (el.text || el.binding)) {
      if (el.isStatic && isPlaceholderText(el.text)) {
        return;
      }
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
  const selfClosingRegex = /<([A-Z][\w]*)([^>]*)\s*\/>/g;
  while ((match = selfClosingRegex.exec(template)) !== null) {
    const [, tag, attrs] = match;
    const line = template.substring(0, match.index).split("\n").length;
    const parsedAttrs = parseAttributes(attrs);
    const hasBinding = attrs.includes(":") || attrs.includes("v-");
    if (!hasBinding)
      continue;
    const bindingAttrs = attrs.match(/:(\w+)="([^"]+)"/g);
    const bindings = bindingAttrs?.map((b) => {
      const m = b.match(/:(\w+)="([^"]+)"/);
      return m ? `${m[1]}=${m[2]}` : "";
    }).filter(Boolean).join(", ");
    if (bindings) {
      addElement({
        tag,
        text: `{{ ${bindings} }}`,
        isStatic: false,
        binding: bindings,
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
  const componentImports = [];
  const importRegex = /import\s+(?:\{[^}]+\}|\w+)\s+from\s+['"]([^'"]+)['"]/g;
  let match;
  while ((match = importRegex.exec(combined)) !== null) {
    imports.push(match[1]);
  }
  const componentImportRegex = /import\s+([A-Z][a-zA-Z0-9]*)\s+from\s+['"]([^'"]+)['"]/g;
  while ((match = componentImportRegex.exec(combined)) !== null) {
    const componentName = match[1];
    componentImports.push(componentName);
  }
  const namedImportRegex = /import\s+\{\s*([^}]+)\s*\}\s+from\s+['"]([^'"]+)['"]/g;
  while ((match = namedImportRegex.exec(combined)) !== null) {
    const names = match[1].split(",").map((n) => n.trim().split(" as ").pop()?.trim() || "");
    for (const name of names) {
      if (name && /^[A-Z][a-zA-Z0-9]*$/.test(name)) {
        componentImports.push(name);
      }
    }
  }
  const apiCallRegex1 = /(?:const|let)\s+(\w+)(?::\s*\w+)?\s*=\s*(?:await\s+)?(?:api|useApi\(\))\.(\w+)\.(\w+)\s*\(/g;
  while ((match = apiCallRegex1.exec(combined)) !== null) {
    const [, variable, resource, action] = match;
    apiCalls.push({
      composable: `${resource}.${action}`,
      variable
    });
  }
  const apiCallRegex2 = /(\w+)(?:\.value)?\s*=\s*(?:await\s+)?(?:api|useApi\(\))\.(\w+)\.(\w+)\s*\(/g;
  while ((match = apiCallRegex2.exec(combined)) !== null) {
    const [, variable, resource, action] = match;
    if (!apiCalls.some((c) => c.composable === `${resource}.${action}`)) {
      apiCalls.push({
        composable: `${resource}.${action}`,
        variable
      });
    }
  }
  const apiCallRegex3 = /(?:const|let)\s+\{\s*(\w+)\s*\}\s*=\s*(?:await\s+)?(?:api|useApi\(\))\.(\w+)\.(\w+)\s*\(/g;
  while ((match = apiCallRegex3.exec(combined)) !== null) {
    const [, variable, resource, action] = match;
    if (!apiCalls.some((c) => c.composable === `${resource}.${action}`)) {
      apiCalls.push({
        composable: `${resource}.${action}`,
        variable
      });
    }
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
  return { apiCalls, dataBindings, imports, componentImports };
}
function extractBalancedBraces(content, startIndex) {
  let depth = 0;
  let started = false;
  let result = "";
  for (let i = startIndex; i < content.length; i++) {
    const char = content[i];
    if (char === "{") {
      depth++;
      started = true;
    }
    if (started) {
      result += char;
    }
    if (char === "}") {
      depth--;
      if (depth === 0 && started) {
        return result;
      }
    }
  }
  return result;
}
function parseInterfaceFields(content, prefix = "") {
  const fields = [];
  const inner = content.slice(1, -1);
  let depth = 0;
  let currentField = "";
  const fieldStrings = [];
  for (const char of inner) {
    if (char === "{" || char === "<")
      depth++;
    if (char === "}" || char === ">")
      depth--;
    if (char === "\n" && depth === 0) {
      if (currentField.trim()) {
        fieldStrings.push(currentField.trim());
      }
      currentField = "";
    } else {
      currentField += char;
    }
  }
  if (currentField.trim()) {
    fieldStrings.push(currentField.trim());
  }
  for (const fieldStr of fieldStrings) {
    const match = fieldStr.match(/^(\w+)\??:\s*([\s\S]+)$/);
    if (!match)
      continue;
    const [, fieldName, fieldType] = match;
    const fullName = prefix ? `${prefix}.${fieldName}` : fieldName;
    const dbColumn = camelToSnake(fieldName);
    const trimmedType = fieldType.trim();
    if (trimmedType.startsWith("{") || fieldStr.includes(": {")) {
      const braceIndex = fieldStr.indexOf("{");
      if (braceIndex !== -1) {
        const nestedContent = extractBalancedBraces(fieldStr, braceIndex);
        if (nestedContent && nestedContent.length > 2) {
          fields.push(...parseInterfaceFields(nestedContent, fullName));
        }
      }
    } else if (trimmedType.includes("Array<{") || fieldStr.includes("Array<{")) {
      const arrayStart = fieldStr.indexOf("Array<{") + 6;
      const nestedContent = extractBalancedBraces(fieldStr, arrayStart);
      if (nestedContent && nestedContent.length > 2) {
        fields.push(...parseInterfaceFields(nestedContent, `${fullName}[]`));
      }
    } else {
      const simpleType = trimmedType.split("\n")[0].trim();
      fields.push({
        name: fullName,
        type: simpleType,
        dbColumn: prefix ? `${camelToSnake(prefix.replace("[]", ""))}.${dbColumn}` : dbColumn
      });
    }
  }
  return fields;
}
function camelToSnake(str) {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`).replace(/^_/, "");
}
function parseRailsSchema(schemaPath) {
  if (!fs.existsSync(schemaPath)) {
    return null;
  }
  const content = fs.readFileSync(schemaPath, "utf-8");
  const tables = {};
  const tableRegex = /create_table\s+"(\w+)"[^]*?(?:comment:\s*"([^"]*)")?[^]*?do\s*\|t\|([\s\S]*?)(?=^\s*end\s*$)/gm;
  let tableMatch;
  while ((tableMatch = tableRegex.exec(content)) !== null) {
    const tableName = tableMatch[1];
    const tableComment = tableMatch[2] || null;
    const columnsBlock = tableMatch[3];
    const columns = {};
    const columnRegex = /t\.(\w+)\s+"(\w+)"(?:[^,\n]*,\s*comment:\s*"([^"]*)")?/g;
    let colMatch;
    while ((colMatch = columnRegex.exec(columnsBlock)) !== null) {
      const colType = colMatch[1];
      const colName = colMatch[2];
      const colComment = colMatch[3] || null;
      if (colType === "index")
        continue;
      columns[colName] = {
        name: colName,
        type: colType,
        comment: colComment,
        nullable: !columnsBlock.includes(`"${colName}"`) || !columnsBlock.match(new RegExp(`"${colName}"[^,]*null:\\s*false`))
      };
    }
    tables[tableName] = {
      name: tableName,
      comment: tableComment,
      columns
    };
  }
  return { tables };
}
function findRailsSchema(projectPath) {
  const possiblePaths = [
    path.join(projectPath, "../api/db/schema.rb"),
    path.join(projectPath, "api/db/schema.rb"),
    path.join(projectPath, "../db/schema.rb"),
    path.join(projectPath, "db/schema.rb"),
    path.join(projectPath, "../../api/db/schema.rb")
  ];
  for (const schemaPath of possiblePaths) {
    if (fs.existsSync(schemaPath)) {
      return schemaPath;
    }
  }
  return null;
}
function extractTableName(endpoint) {
  const match = endpoint.match(/\/api\/v\d+\/([a-z_]+)/);
  if (match) {
    return match[1];
  }
  const segments = endpoint.split("/").filter((s) => s && !s.startsWith(":") && !s.startsWith("{"));
  return segments[segments.length - 1] || "";
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
  const tableName = extractTableName(endpoint);
  let responseFields = [];
  const responseInterfaceStart = content.search(/interface\s+\w*Response\s*\{/);
  if (responseInterfaceStart !== -1) {
    const braceStart = content.indexOf("{", responseInterfaceStart);
    const interfaceContent = extractBalancedBraces(content, braceStart);
    responseFields = parseInterfaceFields(interfaceContent);
  }
  let requestFields = [];
  const requestInterfaceStart = content.search(/interface\s+\w*(?:Request|Body|Params)\s*\{/);
  if (requestInterfaceStart !== -1) {
    const braceStart = content.indexOf("{", requestInterfaceStart);
    const interfaceContent = extractBalancedBraces(content, braceStart);
    requestFields = parseInterfaceFields(interfaceContent);
  }
  if (!endpoint && responseFields.length === 0) {
    return null;
  }
  return {
    endpoint,
    method,
    description,
    tableName,
    responseFields,
    requestFields
  };
}
var globalDbTypes = {};
function analyzeTypeFile(content, filePath) {
  const types = [];
  const isApiType = filePath?.includes("/types/api/") || false;
  let inferredTableName;
  if (filePath && !isApiType) {
    const fileName = path.basename(filePath, ".ts");
    if (fileName !== "index") {
      inferredTableName = fileName.endsWith("s") ? fileName : fileName + "s";
    }
  }
  const interfaceStartRegex = /(?:export\s+)?(?:interface|type)\s+(\w+)\s*(?:=\s*)?\{/g;
  let match;
  while ((match = interfaceStartRegex.exec(content)) !== null) {
    const name = match[1];
    const braceStart = match.index + match[0].length - 1;
    const interfaceContent = extractBalancedBraces(content, braceStart);
    if (!interfaceContent)
      continue;
    const fields = parseTypeFields(interfaceContent, inferredTableName);
    types.push({
      name,
      fields,
      tableName: inferredTableName,
      isDbType: !isApiType
    });
  }
  return types;
}
function parseTypeFields(content, tableName) {
  const fields = [];
  const inner = content.slice(1, -1);
  const fieldRegex = /(\w+)(\?)?:\s*([^;\n,]+)/g;
  let fieldMatch;
  while ((fieldMatch = fieldRegex.exec(inner)) !== null) {
    const fieldName = fieldMatch[1];
    const fieldType = fieldMatch[3].trim();
    const dbColumn = camelToSnake(fieldName);
    fields.push({
      name: fieldName,
      type: fieldType,
      optional: !!fieldMatch[2],
      dbColumn
    });
  }
  return fields;
}
function extractUsedComponents(template) {
  const components = /* @__PURE__ */ new Set();
  const pascalRegex = /<([A-Z][a-zA-Z0-9]+)[\s/>]/g;
  let match;
  while ((match = pascalRegex.exec(template)) !== null) {
    components.add(match[1]);
  }
  const kebabRegex = /<([a-z]+-[a-z-]+)[\s/>]/g;
  while ((match = kebabRegex.exec(template)) !== null) {
    const kebab = match[1];
    const pascal = kebab.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join("");
    components.add(pascal);
  }
  return [...components];
}
function extractScriptStaticStrings(script) {
  const results = [];
  const useHeadRegex = /useHead\s*\(\s*\{[^}]*title:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = useHeadRegex.exec(script)) !== null) {
    const line = script.substring(0, match.index).split("\n").length;
    results.push({ text: match[1], source: "useHead.title", line });
  }
  const pageMetaRegex = /definePageMeta\s*\(\s*\{[^}]*title:\s*['"]([^'"]+)['"]/g;
  while ((match = pageMetaRegex.exec(script)) !== null) {
    const line = script.substring(0, match.index).split("\n").length;
    results.push({ text: match[1], source: "definePageMeta.title", line });
  }
  const seoMetaRegex = /useSeoMeta\s*\(\s*\{[^}]*title:\s*['"]([^'"]+)['"]/g;
  while ((match = seoMetaRegex.exec(script)) !== null) {
    const line = script.substring(0, match.index).split("\n").length;
    results.push({ text: match[1], source: "useSeoMeta.title", line });
  }
  return results;
}
function analyzeComponent(filePath, apiMappings) {
  const content = fs.readFileSync(filePath, "utf-8");
  const sfc = parseSFC(content);
  const componentName = path.basename(filePath, ".vue");
  const templateElements = analyzeTemplate(sfc.template);
  const scriptAnalysis = analyzeScript(sfc.script, sfc.scriptSetup);
  const templateComponents = extractUsedComponents(sfc.template);
  const scriptComponents = scriptAnalysis.componentImports || [];
  const usedComponents = [.../* @__PURE__ */ new Set([...templateComponents, ...scriptComponents])];
  const scriptStaticStrings = extractScriptStaticStrings(sfc.script + "\n" + sfc.scriptSetup);
  const elements = [];
  for (const ss of scriptStaticStrings) {
    elements.push({
      selector: `script:${ss.source}`,
      type: "static",
      text: ss.text,
      line: ss.line,
      component: componentName
    });
  }
  for (const el of templateElements) {
    const elementType = determineElementType(el);
    if (elementType === "unknown" && /^[A-Z]/.test(el.tag) && !el.text && !el.binding) {
      continue;
    }
    const mapping = {
      selector: generateSelector(el),
      type: elementType,
      line: el.line,
      component: componentName
    };
    if (el.isStatic && elementType === "static") {
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
    imports: scriptAnalysis.imports,
    usedComponents
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
  if (el.binding) {
    return "data";
  }
  if (el.isStatic) {
    return "static";
  }
  return "unknown";
}
function traceBindingToApi(binding, scriptAnalysis, apiMappings) {
  const parts = binding.split(".");
  const rootVar = parts[0].split("[")[0];
  const fieldName = parts[parts.length - 1];
  for (const apiCall of scriptAnalysis.apiCalls) {
    if (apiCall.variable === rootVar || binding.includes(apiCall.variable || "")) {
      return apiMappings[apiCall.composable] || null;
    }
  }
  for (const apiCall of scriptAnalysis.apiCalls) {
    const apiInfo = apiMappings[apiCall.composable];
    if (!apiInfo)
      continue;
    const matchingField = apiInfo.responseFields.find((f) => {
      const fName = f.name.split(".").pop() || f.name;
      return fName === fieldName || f.name.endsWith(`.${fieldName}`) || f.name.endsWith(`[].${fieldName}`);
    });
    if (matchingField) {
      return apiInfo;
    }
  }
  for (const dataBinding of scriptAnalysis.dataBindings) {
    if (dataBinding.name === rootVar && dataBinding.type === "store") {
      const storeName = dataBinding.source.replace("Store", "").toLowerCase();
      const matchingApi = Object.entries(apiMappings).find(
        ([key]) => key.toLowerCase().includes(storeName)
      );
      if (matchingApi) {
        return matchingApi[1];
      }
    }
  }
  return null;
}
function mapToDatabase(binding, apiInfo) {
  let cleanBinding = binding;
  const funcMatch = binding.match(/\w+\(([^)]+)\)/);
  if (funcMatch) {
    cleanBinding = funcMatch[1];
  }
  const parts = cleanBinding.split(".");
  const fieldName = parts[parts.length - 1];
  const rootVar = parts[0];
  for (let i = parts.length - 1; i >= 0; i--) {
    const fieldPath = parts.slice(i).join(".");
    const field = apiInfo.responseFields.find(
      (f) => f.name === fieldPath || f.name.endsWith(`.${fieldPath}`) || f.name.endsWith(`[].${fieldPath}`)
    );
    if (field) {
      const columnParts = field.dbColumn.split(".");
      const column = columnParts[columnParts.length - 1];
      let comment;
      if (globalDbSchema) {
        const table = globalDbSchema.tables[apiInfo.tableName];
        if (table && table.columns[column]) {
          comment = table.columns[column].comment || void 0;
        }
      }
      return {
        table: apiInfo.tableName,
        column,
        type: field.type,
        comment
      };
    }
  }
  for (const [typeName, typeDef] of Object.entries(globalDbTypes)) {
    const typeNameLower = typeName.toLowerCase();
    const rootVarLower = rootVar.toLowerCase();
    if (typeNameLower === rootVarLower || rootVarLower.includes(typeNameLower) || typeNameLower.includes(rootVarLower.replace(/s$/, ""))) {
      const typeField = typeDef.fields.find(
        (f) => f.name === fieldName || f.dbColumn === camelToSnake(fieldName)
      );
      if (typeField && typeDef.tableName) {
        if (globalDbSchema) {
          const table = globalDbSchema.tables[typeDef.tableName];
          const dbColumn = typeField.dbColumn || camelToSnake(fieldName);
          if (table && table.columns[dbColumn]) {
            return {
              table: typeDef.tableName,
              column: dbColumn,
              type: table.columns[dbColumn].type || typeField.type,
              comment: table.columns[dbColumn].comment || void 0
            };
          }
        }
      }
    }
  }
  const lastPart = parts[parts.length - 1];
  if (apiInfo.tableName && globalDbSchema) {
    const table = globalDbSchema.tables[apiInfo.tableName];
    if (table) {
      const snakeColumn = camelToSnake(lastPart);
      const lastWord = lastPart.replace(/^[a-z]+(?=[A-Z])/, "").toLowerCase();
      const candidates = [snakeColumn, lastWord];
      const singularTable = apiInfo.tableName.replace(/s$/, "");
      if (lastPart.toLowerCase().startsWith(singularTable)) {
        const withoutPrefix = lastPart.slice(singularTable.length);
        if (withoutPrefix) {
          candidates.push(withoutPrefix.toLowerCase());
          candidates.push(camelToSnake(withoutPrefix));
        }
      }
      for (const candidate of candidates) {
        if (table.columns[candidate]) {
          return {
            table: apiInfo.tableName,
            column: candidate,
            type: table.columns[candidate].type || "unknown",
            comment: table.columns[candidate].comment || void 0
          };
        }
      }
    }
  }
  return null;
}
var globalDbSchema = null;
async function analyzeProject(projectPath, options = {}) {
  const { output, verbose, schemaPath } = options;
  console.log(`
\u{1F50D} Analyzing project: ${projectPath}
`);
  const railsSchemaPath = schemaPath || findRailsSchema(projectPath);
  if (railsSchemaPath) {
    console.log(`\u{1F4CA} Loading Rails schema: ${railsSchemaPath}`);
    globalDbSchema = parseRailsSchema(railsSchemaPath);
    if (globalDbSchema && verbose) {
      console.log(`   Found ${Object.keys(globalDbSchema.tables).length} tables`);
    }
  } else {
    console.log("\u26A0\uFE0F  Rails schema.rb not found - DB comments will not be available");
    globalDbSchema = null;
  }
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
  globalDbTypes = {};
  for (const typeFile of allTypeFiles) {
    const content = fs.readFileSync(typeFile, "utf-8");
    const types = analyzeTypeFile(content, typeFile);
    const isApiType = typeFile.includes("/types/api/");
    for (const type of types) {
      typeDefinitions[type.name] = type;
      if (type.isDbType && type.tableName) {
        globalDbTypes[type.name] = type;
        if (verbose) {
          console.log(`  \u2713 [DB] ${type.name} -> ${type.tableName}: ${type.fields.length} fields`);
        }
      } else if (verbose) {
        console.log(`  \u2713 [API] ${type.name}: ${type.fields.length} fields`);
      }
    }
  }
  if (verbose) {
    console.log(`  Total: ${Object.keys(globalDbTypes).length} DB types, ${Object.keys(typeDefinitions).length - Object.keys(globalDbTypes).length} API types`);
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
    apiMappings,
    // Include DB schema for browser UI selector
    dbSchema: globalDbSchema || void 0
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
  npx vue-dev-inspector <command> [options]

\u30B3\u30DE\u30F3\u30C9:
  analyze <path>         Vue \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u89E3\u6790\u3057\u3066\u8981\u7D20\u30DE\u30C3\u30D4\u30F3\u30B0\u3092\u751F\u6210
  merge <changes-file>   \u30D6\u30E9\u30A6\u30B6\u3067\u306E\u7DE8\u96C6\u5185\u5BB9\u3092 JSON \u306B\u53CD\u6620

analyze \u30AA\u30D7\u30B7\u30E7\u30F3:
  -o, --output <file>    \u51FA\u529B\u30D5\u30A1\u30A4\u30EB (\u30C7\u30D5\u30A9\u30EB\u30C8: dev-inspector-analysis.json)
  -s, --schema <file>    Rails schema.rb\u306E\u30D1\u30B9 (\u81EA\u52D5\u691C\u51FA\u3082\u53EF\u80FD)
  -v, --verbose          \u8A73\u7D30\u30ED\u30B0\u3092\u51FA\u529B

merge \u30AA\u30D7\u30B7\u30E7\u30F3:
  -a, --analysis <file>  \u89E3\u6790JSON\u30D5\u30A1\u30A4\u30EB (\u30C7\u30D5\u30A9\u30EB\u30C8: dev-inspector-analysis.json)
  -o, --output <file>    \u51FA\u529B\u30D5\u30A1\u30A4\u30EB (\u7701\u7565\u6642\u306F\u4E0A\u66F8\u304D)

\u4F8B:
  npx vue-dev-inspector analyze ./src
  npx vue-dev-inspector analyze ./front -o analysis.json -v
  npx vue-dev-inspector merge changes.json -a public/dev-inspector-analysis.json
`);
}
function mergeChanges(changesPath, analysisPath, outputPath) {
  console.log(`
\u{1F504} Merging browser changes...`);
  console.log(`   Changes file: ${changesPath}`);
  console.log(`   Analysis file: ${analysisPath}`);
  if (!fs2.existsSync(changesPath)) {
    console.error(`\u274C Changes file not found: ${changesPath}`);
    process.exit(1);
  }
  const changes = JSON.parse(fs2.readFileSync(changesPath, "utf-8"));
  if (!fs2.existsSync(analysisPath)) {
    console.error(`\u274C Analysis file not found: ${analysisPath}`);
    process.exit(1);
  }
  const analysis = JSON.parse(fs2.readFileSync(analysisPath, "utf-8"));
  let removedCount = 0;
  if (changes.removed && changes.removed.length > 0) {
    console.log(`
\u{1F5D1}\uFE0F  Removing ${changes.removed.length} elements...`);
    for (const [componentPath, component] of Object.entries(analysis.components)) {
      const comp = component;
      const originalLength = comp.elements.length;
      comp.elements = comp.elements.filter((el) => !changes.removed.includes(el.selector));
      const removed = originalLength - comp.elements.length;
      if (removed > 0) {
        console.log(`   - ${componentPath}: ${removed} elements removed`);
        removedCount += removed;
      }
    }
  }
  const finalOutput = outputPath || analysisPath;
  fs2.writeFileSync(finalOutput, JSON.stringify(analysis, null, 2));
  console.log(`
\u2705 Merge complete!`);
  console.log(`   Removed: ${removedCount} elements`);
  console.log(`   Output: ${finalOutput}`);
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
    const schemaFlagIndex = args.findIndex((a) => a === "-s" || a === "--schema");
    const schemaPath = schemaFlagIndex !== -1 ? args[schemaFlagIndex + 1] : void 0;
    const verbose = args.includes("-v") || args.includes("--verbose");
    try {
      await analyzeProject(projectPath, { output, verbose, schemaPath });
    } catch (error) {
      console.error("Error:", error);
      process.exit(1);
    }
  } else if (command === "merge") {
    const changesPath = args[1];
    if (!changesPath) {
      console.error("\u274C Changes file path required");
      printHelp();
      process.exit(1);
    }
    const analysisFlagIndex = args.findIndex((a) => a === "-a" || a === "--analysis");
    const analysisPath = analysisFlagIndex !== -1 ? args[analysisFlagIndex + 1] : "dev-inspector-analysis.json";
    const outputFlagIndex = args.findIndex((a) => a === "-o" || a === "--output");
    const outputPath = outputFlagIndex !== -1 ? args[outputFlagIndex + 1] : void 0;
    try {
      mergeChanges(changesPath, analysisPath, outputPath);
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
