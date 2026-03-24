import { globalIgnores } from "eslint/config";
import coreWebVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const config = [
  ...coreWebVitals,
  ...nextTs,
  {
    rules: {
      // Next/MDX patterns (mounted gate, useMDXComponent) trip these; keep as warnings.
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/static-components": "warn",
    },
  },
  // Root CJS configs use require(); TypeScript rules still apply otherwise.
  {
    files: ["next.config.js", "tailwind.config.js", "postcss.config.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    ".contentlayer",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
];

export default config;
