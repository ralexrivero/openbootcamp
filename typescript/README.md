# TypeScript

```typescript
████████ ██    ██ ██████  ███████ ███████  ██████ ██████  ██ ██████  ████████ 
   ██     ██  ██  ██   ██ ██      ██      ██      ██   ██ ██ ██   ██    ██    
   ██      ████   ██████  █████   ███████ ██      ██████  ██ ██████     ██ 
   ██       ██    ██      ██           ██ ██      ██   ██ ██ ██         ██ 
   ██       ██    ██      ███████ ███████  ██████ ██   ██ ██ ██         ██ 
```

## Environment

- Docker
- Node.js 16 LTS
- TypeScript 4.4.4

## What is TypeScript?

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

## install TypeScript

- `npm init -y` Create directory and package
- `npm install --save-dev @types/node node mon ts-node typescript` install development tools and dependencies
- `npx tsc --init --rootDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowjs true --noImplicitAny true` Create tsconfig.json

`tsc` typescript compiler
`-- init` generate tsconfig.json
`-- rootDir` set root directory, where the solution is located when compiled
`-- esModuleInterop` enable interoperability between modules, default value true
`-- resolveJsonModule` use json modules and files, generate config file
`-- lib es6` ecma script version to use, in this case es6
`-- module commonjs` transpile to commonjs module for all browsers
`-- allowjs true` allows js and ts files in the project
`-- noImplicitAny true` disallow implicit any, default value true. No inferred any type. All variables must be typed.

## run TypeScript from npm

add script to package.json

```json
  "scripts": {
    "tsNode": "cd src && ts-node index.ts"
  },
```

- `npm run tsNode` run typescript from npm

create nodemon.json

```json
{
    "watch": ["src"],
    "ext": ".ts, .js",
    "ignore": ["node_modules"],
    "exec": "ts-node ./src/index.ts"
}
```

add script to package.json

```json
  "scripts": {
    "start": "nodemon"
  },
```
