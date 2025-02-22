import { FlatCompat } from "@eslint/eslintrc"
import { fileURLToPath } from "url"
import path from "path"
import typescriptPlugin from "@typescript-eslint/eslint-plugin"
import typescriptParser from "@typescript-eslint/parser"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default [
  {
    ignores: ["**/node_modules/**", ".next/**", "out/**"],
  },
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      typescript: typescriptPlugin,
    },
    rules: {
      "typescript/no-unused-vars": "warn",
      "react/no-unescaped-entities": "off",
    },
  },
]
