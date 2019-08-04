# TypeScript Design Patterns

## TIL

### tsconfig.json

-   create `tsconfig.json` automatically

```bash
tsc --init
```

### concurrently

-   Run multiple commands concurrently
-   [npm](https://www.npmjs.com/package/concurrently)

```bash
npm install --save-dev concurrently
```

-   `package.json`

```json
"scripts": {
    "start:run": "nodemon build/index.js",
    "start:tsc": "tsc -w",
    "start": "concurrently npm:start:*"
}
```
