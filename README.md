# Stephania Nevado's Hedvig Full Stack case ✨

![][badge-ts] ![][badge-react] ![][badge-sc] ![][badge-react-query] ![][badge-jest]

Hello! This is my solution to the Hedvig full-stack "Admin tool" case. It's built with TypeScript, Next.js, styled-components and react-query. I also added a few unit tests with jest.

The code is formatted with [Prettier](.prettierrc.json) and linted with [ESLint](.eslintrc.json).

---

## Starting this app locally 🚀

### Prerequisites

1. Install [Node][node].
2. Install [npm][npm].

### Running

- Install dependencies by running `npm i` in the root.
- Build the app with `npm run build`.
- Run the app locally with `npm start`.
- Running a local dev server is also possible with `npm run dev`. However, due to the nature of how Next.js partially compiles files as well as the hot reloading of the dev server, the state of the in-memory event database becomes unstable (which is expected).

---

## Improvements 💅🏻

Since I had limited time, everything in this app is of course not perfect. I have listed some improvements below that I would have liked to implement if I would have had more time.

- Server side and client side pagination
- More unit tests - I only wrote a few to show how I would structure them.
- Improve UI/UX. I tried to make it pretty 💅 but I know that it's not perfect.

[badge-ts]: https://img.shields.io/badge/TypeScript-grey?logo=TypeScript
[badge-react]: https://img.shields.io/badge/React-20232A?logo=react&color=grey
[badge-sc]: https://img.shields.io/badge/styled--components-grey?logo=styled-components
[badge-react-query]: https://img.shields.io/badge/react--query-grey?logo=react-query
[badge-jest]: https://img.shields.io/badge/jest-grey?logo=jest
[npm]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[node]: https://nodejs.org/en/download
