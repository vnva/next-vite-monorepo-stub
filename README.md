# Next, Vite Monorepo Stub

Used 18.6.0 NodeJS Version.

For start in dev environment run:

> Tip: Don't forget to install the dependencies

```
npm run dev
```

For commits use:

```
npm run commit
```

## Installing dependencies

```sh
npm i <package-name> -w <workspace-name>

# or

npm i <package-name> -w <workspace-path>

# by name
# npm i axios -w @apps/admin

# by path
# npm i axios -w apps/admin
```

## Useful scripts

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
- [@packages/assets](/packages/assets/README.md)
- [@packages/ui-kit](/packages/ui-kit/README.md)
