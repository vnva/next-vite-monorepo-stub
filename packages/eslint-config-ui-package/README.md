# Basic ESLint config

Basic eslint configuration package for ui packages.

## Installing

Install package for needed workspace:

```
npm i @packages/eslint-config-ui-package -w <workspace-name>
```

## Usage

Example of usage:

```js
module.exports = {
  root: true,
  extends: ['@packages/eslint-config-ui-package'],
};
```

Features:

- [x] typescript parser;
- [x] react hooks eslint plugin
