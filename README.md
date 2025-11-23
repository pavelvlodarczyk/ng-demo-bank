# ng-demo-bank

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0.


## Starting Applications

This workspace contains multiple Angular applications:

- **Web**: `/projects/web`
- **Admin**: `/projects/admin`
- **Mobile**: `/projects/mobile`

To start a specific app, use:

```bash
ng serve web
ng serve admin
ng serve mobile
```

Each app will run on a different port (default: web on 4200, admin on 4201, mobile on 4202). Open the corresponding URL in your browser.

## Code scaffolding

To generate a new component, run:

```bash
ng generate component component-name --project web
ng generate component component-name --project admin
ng generate component component-name --project mobile
```

For a complete list of available schematics, run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
