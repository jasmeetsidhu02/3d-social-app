import js from "@eslint/js";
import globals from "globals";

import tseslint from "typescript-eslint";

import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";

import nextPlugin from "@next/eslint-plugin-next";

import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,
  {
    ignores: ["node_modules/**", ".next/**", "coverage/**", "dist/**", "build/**"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      parser: tseslint.parser,

      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },

      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
      "@next/next": nextPlugin,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      /*
       * React
       */
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      /*
       * React Hooks
       */
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      /*
       * TypeScript
       */
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/no-explicit-any": "warn",

      /*
       * Imports
       */
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      /*
       * General
       */
      "no-console": [
        "warn",
        {
          allow: ["warn", "error"],
        },
      ],

      eqeqeq: ["error", "always"],

      curly: ["error", "all"],
    },
  },

  prettier,
];
