# @fudgi-packages/eslint-plugin-simple-import-sort

@fudgi-packages/eslint-plugin-simple-import-sort is a patched release of the original eslint-plugin-simple-import-sort. This version introduces support of **react lazy loading imports**

original package: https://github.com/lydell/eslint-plugin-simple-import-sort

# .eslintrc

```
{
...
"plugins": ["@fudgi-packages/simple-import-sort"],
...
"@fudgi-packages/simple-import-sort/imports": "error",
"@fudgi-packages/simple-import-sort/exports": "error"
}
```
