import { JSX as JSX_2 } from 'react/jsx-runtime';

/**
 * React wrapper that mounts the Vue-based DevInspector inside a Shadow DOM.
 * Uses the TanStack DevTools approach: Vue app runs in isolation within Shadow DOM,
 * completely separated from the host React/Next.js application's styles.
 */
export declare function DevInspector(props: DevInspectorProps): JSX_2.Element;

export declare interface DevInspectorProps {
    storageKey?: string;
    enabledInProduction?: boolean;
    initialAnnotations?: Record<string, unknown>;
}

export { }


declare module '@nuxt/schema' {
    interface PublicRuntimeConfig {
        devInspector: {
            storageKey?: string;
            enabledInProduction?: boolean;
        };
    }
}

