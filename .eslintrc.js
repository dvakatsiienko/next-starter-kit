/* eslint-env node */

module.exports = {
    root:     true,
    settings: {
        react: {
            version: '16.13.1',
        },
    },
    env: {
        browser: true,
    },
    parser:        '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    globals: {
        __ENV__:  'readonly',
        __DEV__:  'readonly',
        __PROD__: 'readonly',
    },
    plugins: [ '@typescript-eslint', 'react', 'react-hooks' ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        /* Typescript */
        '@typescript-eslint/naming-convention':              0,
        '@typescript-eslint/no-use-before-define':           0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/ban-ts-comment':                 0,

        /* React: hooks */
        'react-hooks/rules-of-hooks':  1,
        'react-hooks/exhaustive-deps': 'warn',

        /* React: core */
        'react/no-deprecated':                        1,
        'react/no-unsafe':                            1,
        'react/no-children-prop':                     0,
        'react/no-danger':                            1,
        'react/no-direct-mutation-state':             1,
        'react/no-redundant-should-component-update': 1,
        'react/no-render-return-value':               1,
        'react/no-typos':                             1,
        'react/no-string-refs':                       1,
        'react/no-this-in-sfc':                       1,
        'react/no-unknown-property':                  1,
        'react/prop-types':                           0,
        'react/no-unused-prop-types':                 1,
        'react/no-unused-state':                      1,
        'react/react-in-jsx-scope':                   0,
        'react/void-dom-elements-no-children':        1,
        'react/display-name':                         0,

        /* React: JSX */
        'react/jsx-boolean-value': 1,
        'react/jsx-curly-spacing': [
            1,
            'always',
            {
                spacing: {
                    objectLiterals: 'never',
                },
            },
        ],
        'react/jsx-equals-spacing':           [ 1, 'always' ],
        'react/jsx-indent':                   [ 1, 4 ],
        'react/jsx-indent-props':             [ 1, 4 ],
        'react/jsx-no-comment-textnodes':     1,
        'react/jsx-no-duplicate-props':       1,
        'react/jsx-no-target-blank':          1,
        'react/jsx-no-undef':                 1,
        'react/jsx-pascal-case':              1,
        'react/jsx-uses-react':               1,
        'react/jsx-uses-vars':                1,
        'react/jsx-max-props-per-line':       [ 1, { maximum: 3, when: 'always' }],
        'react/jsx-first-prop-new-line':      1,
        'react/jsx-fragments':                [ 1, 'syntax' ],
        'react/jsx-closing-bracket-location': [
            1,
            {
                selfClosing: 'tag-aligned',
                nonEmpty:    'tag-aligned',
            },
        ],
        'react/jsx-closing-tag-location': 1,
        'react/jsx-sort-props':           [
            1,
            {
                callbacksLast:  true,
                shorthandFirst: true,
                shorthandLast:  false,
            },
        ],
        'react/jsx-wrap-multilines': [
            1,
            {
                declaration: 'parens-new-line',
                assignment:  'parens-new-line',
                return:      'parens-new-line',
                arrow:       'parens-new-line',
                condition:   'parens-new-line',
                logical:     'parens-new-line',
                prop:        'ignore',
            },
        ],

        'jsx-a11y/accessible-emoji': 0,
        'key-spacing':               [
            1,
            { beforeColon: false, afterColon: true, align: 'value' },
        ],
        'prefer-const': 1,
        indent:         [ 1, 4, { SwitchCase: 1 }],
        'jsx-quotes':   [ 1, 'prefer-single' ],

        /* ESLint: strict mode */
        strict: 1,

        /* ESLint: possible errors */
        'for-direction': 1,
        'getter-return': [
            1,
            {
                allowImplicit: false,
            },
        ],
        'no-await-in-loop':         0,
        'no-compare-neg-zero':      1,
        'no-cond-assign':           [ 1, 'always' ],
        'no-console':               1,
        'no-constant-condition':    1,
        'no-control-regex':         1,
        'no-debugger':              1,
        'no-dupe-keys':             1,
        'no-duplicate-case':        1,
        'no-empty':                 1,
        'no-empty-character-class': 1,
        'no-ex-assign':             1,
        'no-extra-boolean-cast':    1,
        'no-extra-parens':          [
            1,
            'all',
            {
                ignoreJSX: 'all',
            },
        ],
        'no-extra-semi':               1,
        'no-func-assign':              1,
        'no-invalid-regexp':           1,
        'no-irregular-whitespace':     1,
        'no-sparse-arrays':            1,
        'no-template-curly-in-string': 1,
        'no-unexpected-multiline':     1,
        'no-unreachable':              1,
        'no-unsafe-finally':           1,
        'no-unsafe-negation':          1,
        'use-isnan':                   1,
        'valid-jsdoc':                 0,
        'valid-typeof':                1,

        /* ESLint: base practices */
        'accessor-pairs':        1,
        'array-callback-return': 1,
        'block-scoped-var':      1,
        complexity:              0,
        curly:                   1,
        'default-case':          1,
        'dot-location':          [ 1, 'property' ],
        'dot-notation':          1,
        eqeqeq:                  1,
        'guard-for-in':          1,
        'no-alert':              1,
        'no-caller':             1,
        'no-case-declarations':  1,
        'no-div-regex':          1,
        'no-else-return':        1,
        'no-empty-function':     1,
        'no-empty-pattern':      1,
        'no-eq-null':            1,
        'no-eval':               1,
        'no-extend-native':      1,
        'no-extra-bind':         1,
        'no-extra-label':        1,
        'no-fallthrough':        1,
        'no-floating-decimal':   1,
        'no-global-assign':      1,
        'no-implicit-coercion':  [
            1,
            {
                allow: [ '!!' ],
            },
        ],
        'no-implicit-globals': 1,
        'no-implied-eval':     1,
        'no-iterator':         1,
        'no-labels':           1,
        'no-lone-blocks':      1,
        'no-loop-func':        1,
        'no-multi-str':        1,
        'no-new':              1,
        'no-new-func':         1,
        'no-new-wrappers':     1,
        'no-octal':            1,
        'no-octal-escape':     1,
        'no-param-reassign':   1,
        'no-proto':            1,
        'no-redeclare':        [
            1,
            {
                builtinGlobals: true,
            },
        ],
        'no-restricted-properties': 1,
        'no-return-assign':         [ 1, 'except-parens' ],
        'no-return-await':          1,
        'no-script-url':            1,
        'no-self-assign':           [
            1,
            {
                props: true,
            },
        ],
        'no-self-compare':              1,
        'no-sequences':                 1,
        'no-throw-literal':             1,
        'no-unmodified-loop-condition': 1,
        'no-unused-labels':             1,
        'no-useless-call':              1,
        'no-useless-concat':            1,
        'no-useless-return':            1,
        'no-with':                      1,
        'prefer-promise-reject-errors': 1,
        radix:                          1,
        'require-await':                1,
        'vars-on-top':                  1,
        'wrap-iife':                    1,
        yoda:                           1,

        /* ESLint: variables */
        'init-declarations':          1,
        'no-delete-var':              1,
        'no-label-var':               1,
        'no-restricted-globals':      [ 1, 'event' ],
        'no-shadow-restricted-names': 1,
        'no-undef':                   1,
        'no-undef-init':              1,
        'no-undefined':               1,
        'no-unused-vars':             1,
        'no-use-before-define':       0,
        'callback-return':            0,

        /* ESLint: stylistic issues */
        'array-bracket-spacing': [
            2,
            'always',
            {
                objectsInArrays: false,
                arraysInArrays:  false,
            },
        ],
        'comma-dangle': [
            2,
            {
                imports:   'never',
                exports:   'never',
                arrays:    'always-multiline',
                objects:   'always-multiline',
                functions: 'always-multiline',
            },
        ],
        /* Prefer prettier config */
        // 'max-len': [1, {
        //     code: 120
        // }],
    },
};
