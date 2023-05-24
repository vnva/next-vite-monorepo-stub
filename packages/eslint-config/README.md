# Basic ESLint config

Basic eslint configuration package for all applications and other packages.

## Installing

Install package for needed workspace:

```
npm i @packages/eslint-config -w <workspace-name>
```

## Usage

Example of usage:

```js
module.exports = {
  root: true,
  extends: ['@packages/eslint-config'],
};
```

Features:

- [x] imports;
- [x] prettier;
