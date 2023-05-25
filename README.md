# Next, Vite Monorepo Stub

For open project in VSCode open [workspace file](https://code.visualstudio.com/docs/editor/workspaces), for example:

```
code workspace.conde-workspace
```

For start in dev environment run:

> Don't forget to install the dependencies

```
npm run dev
```

## Useful scripts

For commit use:

```
npm run commit
```

Linting:

Run lint script in all workspaces

```
npm run lint
```

Types checking:

```
npm run typecheck
```

Run in Docker:

```
docker-compose -f docker-compose.local.yml up
```

## Code generation

Choose from all generators:

```
npm run generate
```

Generate simple package:

```
npm run generate:package-simple
```

Generate ts package:

```
npm run generate:package-ts
```

Generate ui package:

```
npm run generate:package-ui
```

Generate [@packages/ui-kit](/packages/ui-kit/) component:

```
npm run generate:ui-kit-component
```

## Packages docs:

- [@packages/eslint-config](/packages/eslint-config/README.md)
- [@packages/eslint-config-ui-package](/packages/eslint-config-ui-package/README.md)
- [@packages/stylelint-config](/packages/stylelint-config/README.md)
- [@packages/ui-kit](/packages/ui-kit/README.md)
