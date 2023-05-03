import { Link, useLoaderData } from "@remix-run/react";
import type { V2_MetaFunction } from "@vercel/remix";
import { json } from "@vercel/remix";
import ExpandingArrow from "~/components/expanding-arrow";
import TablePlaceholder from "~/components/table-placeholder";
import Table from "~/components/table";

import { getUsers } from "~/models/user.server";

export const loader = async () => {
  return json(await getUsers());
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Postgres Remix Demo" },
    { charset: "utf-8" },
    { viewport: "width=device-width,initial-scale=1" },
    { description: "A simple Remix app with Vercel Postgres as the database" },
  ];
};

export default function Index() {
  let data = useLoaderData();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <Link
        to="https://vercel.com/templates/remix/postgres-starter"
        className="group mt-20 sm:mt-0 rounded-full flex space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
      >
        <p>Deploy your own to Vercel</p>
        <ExpandingArrow />
      </Link>
      <h1 className="pt-4 pb-8 bg-clip-text text-center text-4xl font-medium tracking-tight md:text-7xl">
        Postgres on Vercel
      </h1>

      {data?.users && data?.duration ? (
        <Table users={data.users} duration={data.duration} />
      ) : (
        <TablePlaceholder />
      )}

      <p className="font-light text-gray-600 w-full max-w-lg text-center mt-6">
        <Link
          to="https://vercel.com/postgres"
          className="font-medium underline underline-offset-4 hover:text-black transition-colors"
        >
          Vercel Postgres
        </Link>{" "}
        demo. <br /> Built with{" "}
        <Link
          to="https://remix.run/"
          className="font-medium underline underline-offset-4 hover:text-black transition-colors"
        >
          Remix
        </Link>
        .
      </p>

      <div className="flex justify-center space-x-5 pt-10 mt-10 border-t border-gray-300 w-full max-w-xl text-gray-600">
        <Link
          to="https://postgres-prisma.vercel.app/"
          className="font-medium underline underline-offset-4 hover:text-black transition-colors"
        >
          Prisma
        </Link>
        <Link
          to="https://postgres-kysely.vercel.app/"
          className="font-medium underline underline-offset-4 hover:text-black transition-colors"
        >
          Kysely
        </Link>
      </div>

      <div className="sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between">
        <Link to="https://vercel.com">
          <img src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />
        </Link>
        <Link
          to="https://github.com/dalmaer/postgres-remix"
          className="flex items-center space-x-2"
        >
          <img src="/github.svg" alt="GitHub Logo" width={24} height={24} />
          <p className="font-light">Source</p>
        </Link>
      </div>
    </main>
  );
}
