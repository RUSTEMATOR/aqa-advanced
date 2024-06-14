import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  {
    rules: {
        "no-unused-vars": "warn",
      "no-undef": "error",
      "eqeqeq": "error",
      "no-redeclare": "error",
      "camelcase": "error",
      "curly": "error",
      "no-useless-assignment": "error",
      "no-dupe-keys": "error",
      "getter-return": "error"
    }
}
];