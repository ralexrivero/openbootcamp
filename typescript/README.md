# TypeScript

```typescript
████████ ██    ██ ██████  ███████ ███████  ██████ ██████  ██ ██████  ████████ 
   ██     ██  ██  ██   ██ ██      ██      ██      ██   ██ ██ ██   ██    ██    
   ██      ████   ██████  █████   ███████ ██      ██████  ██ ██████     ██ 
   ██       ██    ██      ██           ██ ██      ██   ██ ██ ██         ██ 
   ██       ██    ██      ███████ ███████  ██████ ██   ██ ██ ██         ██ 
```

## Environment

[![Ubuntu](https://img.shields.io/static/v1?label=&message=Ubuntu&color=E95420&logo=Ubuntu&logoColor=E95420&labelColor=2F333A)](https://ubuntu.com/)<!-- ubuntu -->
[![Bash](https://img.shields.io/static/v1?label=&message=GNU%20Bash&color=4EAA25&logo=GNU%20Bash&logoColor=4EAA25&labelColor=2F333A)](https://www.gnu.org/software/bash/)<!-- bash -->
[![VS Code](https://img.shields.io/static/v1?label=&message=Visual%20Studio%20Code&color=007ACC&logo=Visual%20Studio%20Code&logoColor=007ACC&labelColor=2F333A)](https://code.visualstudio.com/)<!-- vs code -->
[![Docker](https://img.shields.io/static/v1?label=&message=Docker&color=2496ED&logo=Docker&labelColor=2F333A)](https://hub.docker.com)<!-- docker -->
[![node.js](https://img.shields.io/static/v1?label=&message=Node.js&color=339933&logo=Node.js&logoColor=339933&labelColor=F5F5F5)](https://nodejs.org/en/)<!-- Node.js -->
[![TypeScript](https://img.shields.io/static/v1?label=&message=TypeScript&color=3178C6&logo=TypeScript&logoColor=3178C6&labelColor=2F333A)](https://www.typescriptlang.org/)<!-- TS -->
[![eslint](https://img.shields.io/static/v1?label=&message=ESLint&color=4B32C3&logo=ESLint&logoColor=4B32C3&labelColor=F5F5F5)](https://eslint.org/)<!-- eslint -->

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

## Design patterns

- creational patterns
  - object creation
  - code reuse
  - code flexibility
- structural patterns
  - structure flexibility and efficiency
- behavioral patterns
  - solid principles
  - asign responsibility between objects
  - efficient communication between objects

### recomended lectures

- [Design Patterns](https://refactoring.guru/es/design-patterns)

## Documentation

- [TSDoc](https://tsdoc.org/)

- `npm i --save-dev typedoc` install typedoc
- add script to package.json

```json
  "scripts": {
    "docs": "typedoc --out docs ./src"
  },
```

- `npm run docs` generate documentation
- `npm i -g serve` install serve (as sudo, or exec sh as --user root in docker container)
- `serve -s docs` serve documentation

## linting

- `npm init @eslint/config` install and configure eslint
- `.eslintrc.json` eslint config file
- add to package.json

```json
  "scripts": {
    "lint": "eslint src --ext .ts"
  },
```

- `npm run linting` run linting or
- `npx eslint file.js` run linting for a file

## Author
<!-- twitter -->
[![Twitter](https://img.shields.io/twitter/follow/ralex_uy?style=social)](https://twitter.com/ralex_uy) <!-- linkedin --> [![Linkedin](https://img.shields.io/badge/LinkedIn-+28K-blue?style=social&logo=linkedin)](https://www.linkedin.com/in/ronald-rivero/) <!-- github --> [![Github](https://img.shields.io/github/followers/ralexrivero?style=social)](https://github.com/ralexrivero/) <!-- vagrant --> [![Vagrant](https://img.shields.io/static/v1?label=&message=Vagrant%20Profile&color=1868F2&logo=vagrant&labelColor=2F333A)](https://app.vagrantup.com/ralexrivero) <!-- docker --> [![Docker](https://img.shields.io/static/v1?label=&message=Docker%20Profile&color=2496ED&logo=Docker&labelColor=2F333A)](https://hub.docker.com/u/ralexrivero)
