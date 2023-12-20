# TODO TASKS APP FOR SPARTA TECHNICAL TEST

This is a technical test for SPARTA

## Prerequisites 

I  developed the app with PNPM and with Node v18.17.1

## How to run the project

1. - First step clone the repo
```sh
git@github.com:Swarleys/ToDoTasks.git
```
2. - Install the Packages 

```sh
pnpm install
```

3A. - Dev mode

```sh
pnpm dev
```

and open [http://localhost:3000](http://localhost:3000) 

3B. - Build
```sh 
pnpm build
pnpm start
```

and open [http://localhost:3000](http://localhost:3000) 

## Testing

I added e2e testing with [Cypress](https://www.cypress.io/), and unit testing with [Jest](https://jestjs.io/)

### E2E

You need to have the dev server running with

```sh
pnpm dev
```

and then

```sh
pnpm cy:open
```

or

```sh
pnpm cy:run
```

### Unit Testing

```sh
pnpm test
```

## Stack

- [React](https://reactjs.org/)
- [Typescritp](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [NextJs](https://nextjs.org/)
