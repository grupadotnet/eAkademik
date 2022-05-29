module.exports = {
  "extends": [
    "eslint-config-react-app",
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript"
  ],
  "plugins": [
    "react",
    "@typescript-eslint",
    "import",
    "simple-import-sort",
  ],
  "rules": {
    "import/no-unresolved": "error",
    "linebreak-style": 0,
    "prefer-arrow-callback": "error",
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": [0, { "extensions": [".js", ".jsx"] }],
    "react/function-component-definition": [0, { namedComponents: "function-declaration" }],
    "react/jsx-props-no-spreading": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "react": {
      "pragma": "React",
      "version": "detect"
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      }
    }
  },
  "parserOptions": {
    "project": ["./tsconfig.json"]
  },
}
