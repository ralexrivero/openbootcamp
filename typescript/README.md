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

- `tsc` typescript compiler
- `-- init` generate tsconfig.json
- `-- rootDir` set root directory, where the solution is located when compiled
- `-- esModuleInterop` enable interoperability between modules, default value true
- `-- resolveJsonModule` use json modules and files, generate config file
- `-- lib es6` ecma script version to use, in this case es6
- `-- module commonjs` transpile to commonjs module for all browsers
- `-- allowjs true` allows js and ts files in the project
- `-- noImplicitAny true` disallow implicit any, default value true. No inferred any type. All variables must be typed.

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

### Transpile final version to JavaScript

add script to package.json

```json
  "scripts": {
    "build": "tsc"
  },
```

- `npm run build` transpile typescript to javascript

## rimraf for production

- `npm i --save-dev rimraf` install rimraf for production

add script to package.json

```json
  "scripts": {
    "build:prod": "rimraf ./build && tsc",
    "start:prod": "npm run build:prod && node build/index.js"
  },
```

## Define data types in TypeScript

Define types

Builtin types

- `let myString: string;` string type
- `let myNumber: number;` number type
- `let myBoolean: boolean;` boolean type
- `let myVoid: void;` void type
- `let myNull: null;` null type
- `let myUndefined: undefined;` undefined type

Complex types

- `let strArr: string[];` string array type
- `let numArr: number[];` number array type
- `let boolArr: boolean[];` boolean array type
- `let strNumTuple: [string, number];` tuple type
- `let myNever: never;` never type

Any type

- `let myVar: any;` any type

Combined types

- `let strNumArr: (string | number)[];` combined list of types

Enums

- `enum Colors {Red = 1, Green, Blue}` enum type
- `let c: Colors = Colors.Green`

### Cookies

- `npm i cookies-utils --save` install cookies-utils
