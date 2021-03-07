module.exports = {
  extends: [
    // Required to support .vue files
    'plugin:vue/essential',
  ],
  plugins: [
    'html',
    'vue',
    'unicorn',
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  // eslint-disable-next-line unicorn/prevent-abbreviations
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  globals: {},
  rules: {
    'indent': [2, 2, {MemberExpression: 0}],
    'comma-dangle': [2, 'always-multiline'],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'always',
      asyncArrow: 'always',
    }],
    'valid-jsdoc': [2, {
      requireReturn: false,
      prefer: {
        returns: 'return',
      },
    }],
    'require-jsdoc': 1,
    'max-len': [1, 120, 4, {
      ignoreComments: true,
      ignoreUrls: true,
      ignoreTrailingComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'camelcase': [2],
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': [2, 'as-needed', {requireForBlockBody: true}],
    'padded-blocks': 'off',
    // 'no-warning-comments': 'off',
    'semi': ['error', 'never'],
    'new-parens': ['error', 'always'],
    'no-negated-condition': 'off',

    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": false,
      "ignores": []
    }],

    'vue/experimental-script-setup-vars': 'off',

    'unicorn/explicit-length-check': 'off',
    'unicorn/import-index': 'off',
    'unicorn/no-console-spaces': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkShorthandProperties: true,
        replacements: {
          // eslint-disable-next-line unicorn/prevent-abbreviations
          cmd: {
            command: true,
          },
          // eslint-disable-next-line unicorn/prevent-abbreviations
          errCb: {
            handleError: true,
          },
          // eslint-disable-next-line unicorn/prevent-abbreviations
          dist: {
            distribute: true,
            distribution: true,
            distributable: true,
          },
          args: false,
          props: false,
          prop: false,
          dev: {
            development: false,
          },
          prod: {
            production: false,
          },
        },
      },
    ],

    // Eslint unicorn
    'unicorn/catch-error-name': 'error',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/custom-error-definition': 'off',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': 'error',
    // 'unicorn/explicit-length-check': 'error',
    'unicorn/filename-case': 'error',
    // 'unicorn/import-index': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-instanceof': 'error',
    // 'unicorn/no-console-spaces': 'error',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/no-unused-properties': 'off',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-event-key': 'error',
    'unicorn/prefer-exponentiation-operator': 'error',
    'unicorn/prefer-flat-map': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-node-remove': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-text-content': 'error',
    'unicorn/prefer-type-error': 'error',
    // 'unicorn/prevent-abbreviations': 'error',
    'unicorn/regex-shorthand': 'error',
    'unicorn/throw-new-error': 'error',

    // Defaults from XO
    // 'comma-dangle': ['error', 'never'],
    'no-cond-assign': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty': ['error', {
      allowEmptyCatch: true,
    }],
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error',
    'valid-typeof': ['error', {requireStringLiterals: true}],
    'no-unexpected-multiline': 'error',
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'complexity': 'warn',
    'curly': 'error',
    'default-case': 'error',
    'dot-notation': 'error',
    'dot-location': ['error', 'property'],
    'eqeqeq': 'error',
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-return-assign': ['error', 'always'],
    'no-script-url': 'error',
    // eslint-disable-next-line unicorn/prevent-abbreviations
    'no-self-assign': ['error', {props: true}],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-void': 'error',
    // 'no-warning-comments': 'warn',
    'no-with': 'error',
    'radix': 'error',
    'wrap-iife': ['error', 'inside'],
    'yoda': 'error',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': ['error', 'event'],
    'no-shadow-restricted-names': 'error',
    'no-undef-init': 'error',
    'no-undef': ['error', {
      typeof: true,
    }],
    'no-unused-vars': ['error', {varsIgnorePattern: '^_$'}],
    'no-use-before-define': ['error', 'nofunc'],
    'handle-callback-err': 'warn',
    'no-mixed-requires': ['error', {
      grouping: true,
      allowCall: true,
    }],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-restricted-imports': ['error', 'domain', 'freelist', 'smalloc', 'sys', 'colors'],
    'no-restricted-modules': ['error', 'domain', 'freelist', 'smalloc', 'sys', 'colors'],
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs', {
      allowSingleLine: false,
    }],
    // 'camelcase': ['error', {
    //     properties: 'always',
    // }],
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'eol-last': 'error',
    'func-call-spacing': ['error', 'never'],
    'func-names': ['error', 'never'],
    // 'indent': ['error', 'tab', {
    //     SwitchCase: 1,
    // }],
    'jsx-quotes': 'error',
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
    }],
    'keyword-spacing': 'error',
    'linebreak-style': ['error', 'unix'],
    'max-depth': 'warn',
    'max-nested-callbacks': ['warn', 4],
    'max-params': ['warn', {
      max: 4,
    }],
    'max-statements-per-line': 'error',
    'new-cap': ['error', {
      newIsCap: true,
      capIsNew: true,
    }],
    // 'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': ['error', {
      max: 1,
    }],
    'no-nested-ternary': 'warn',
    'no-new-object': 'error',
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-whitespace-before-property': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    // 'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', {
      allowTemplateLiterals: true,
    }],
    'semi-spacing': ['error', {
      before: false,
      after: true,
    }],
    'space-before-blocks': ['error', 'always'],
    // 'space-before-function-paren': ['error', {
    //     anonymous: 'always',
    //     named: 'never',
    // }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-'],
      },
      block: {
        markers: ['!'],
        balanced: true,
      },
    }],
    'unicode-bom': ['error', 'never'],
    'arrow-spacing': ['error', {
      before: true,
      after: true,
    }],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', 'both'],
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': ['error', {
      includeExports: true,
    }],
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'both'],
  },
}
