import { PlopTypes } from '@turbo/gen';

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('package:simple', {
    description: 'Generate simple ts package without configuration',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the package?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of the package?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/{{name}}/package.json',
        templateFile: 'templates/package-simple/package.json.hbs',
      },
    ],
  });

  plop.setGenerator('package:ts', {
    description: 'Generate simple ts package with eslint-config',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the package?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of the package?',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'packages/{{name}}',
        base: 'templates/package-ts',
        templateFiles: [
          'templates/package-ts/package.json.hbs',
          'templates/package-ts/.eslintrc.js.hbs',
          'templates/package-ts/src/index.ts.hbs',
        ],
      },
    ],
  });

  plop.setGenerator('package:ui', {
    description: 'Generate simple ui package with eslint-config',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the package?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of the package?',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'packages/{{name}}',
        base: 'templates/package-ui',
        templateFiles: [
          'templates/package-ui/package.json.hbs',
          'templates/package-ui/.eslintrc.js.hbs',
          'templates/package-ui/tsconfig.json.hbs',
          'templates/package-ui/declarations.d.ts.hbs',
        ],
      },
      {
        type: 'add',
        path: 'packages/{{name}}/src/index.ts',
        template: '// export your component here',
      },
    ],
  });
}
