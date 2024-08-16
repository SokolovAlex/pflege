import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  { 
    files: ["**/*.{ts,tsx}"]
  },
  {
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "prettier/prettier":[  //or whatever plugin that is causing the clash
            "error",
            {
                tabWidth: 4,
            }
        ],
      "react/react-in-jsx-scope": "off",
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'sort-keys': ['error', 'asc', { caseSensitive: true, natural: false }],
    },
  },
  eslintPluginPrettierRecommended,
];