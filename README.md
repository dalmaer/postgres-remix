# Remix with Vercel Postgres

This project was a love child of the [base Remix and Vercel example](https://github.com/vercel/vercel/tree/main/examples/remix) that was created by the amazing [TooTallNate](https://twitter.com/tootallnate), and the Vercel Storage examples from Next and SvelteKit.

It is a hacky version of how to use [Remix](https://remix.run/docs) with [Vercel Postgres](https://vercel.com/storage/postgres).

You can craete a new remix project using this as a starter via

```sh
npx create-remix@latest --template https://github.com/dalmaer/postgres-remix postgres-remix
```

And you will want to copy the `.env.example` to `.env` and fill in the Postgres environment variables from your Vercel deployment.

## Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dalmaer/postgres-remix&template=remix)

_Live Example: https://postgres-remix.vercel.app_

You can also deploy using the [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!
