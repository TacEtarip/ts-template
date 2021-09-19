module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
      'jest',
      'import',
      'node',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
    ],
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    rules: {
        "comma-dangle": ["error", "always-multiline"],
		    "comma-spacing": "error",
		    "comma-style": "error",
        "node/exports-style": ["error", "module.exports"],
        "node/file-extension-in-import": ["error", "never"],
        "node/prefer-global/buffer": ["error", "always"],
        "node/prefer-global/console": ["error", "always"],
        "node/prefer-global/process": ["error", "always"],
        "node/prefer-global/url-search-params": ["error", "always"],
        "node/prefer-global/url": ["error", "always"],
        "node/prefer-promises/dns": "error",
        "node/prefer-promises/fs": "error",
        "node/file-extension-in-import": [
          "error",
          "never",
          {
              "tryExtensions": [".js", ".json", ".node", ".ts", ".tsx"],
              ".json": "always",
          }
      ]
    },
};