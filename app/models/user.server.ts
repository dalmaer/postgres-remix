import { sql } from "@vercel/postgres";
import { seed } from "~/utils/seed";

export async function getUsers() {
  let data;
  let startTime = Date.now();

  try {
    data = await sql`SELECT * FROM users`;
  } catch (e: any) {
    if (e.message === `relation "users" does not exist`) {
      console.log(
        "Table does not exist, creating and seeding it with dummy data now..."
      );
      // Table is not created yet
      await seed();
      startTime = Date.now();
      data = await sql`SELECT * FROM users`;
    } else {
      throw e;
    }
  }

  const { rows: users } = data;
  return { users: users, duration: Date.now() - startTime };
}
