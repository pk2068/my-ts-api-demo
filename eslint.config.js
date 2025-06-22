// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  // 1. ESLint's recommended rules for general JavaScript
  js.configs.recommended,

  // 2. TypeScript-ESLint's recommended rules for TypeScript
  //    The spread operator (...) is important here because tseslint.configs.recommended
  //    is itself an array of configurations.
  ...tseslint.configs.recommended,

  // 3. Project-specific configurations for all relevant files
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], // Apply to all JavaScript and TypeScript files
    languageOptions: {
      // Define global variables available in your environment.
      // Use Node.js globals for a Node.js project.
      globals: {
        ...globals.node,
        // If your project also had browser-side code, you might add:
        // ...globals.browser
      },
    },
    // Add any custom rules or overrides here if needed
    rules: {
      // Example: 'no-unused-vars': 'warn',
      // 'indent': ['error', 2],
      // 'quotes': ['error', 'single'],
      // 'semi': ['error', 'always']
    },
  },
];
