// TODO: This is where each individual rollercoaster will be dynamically rendered

import { db } from "@/utils/dbConnection";
import Link from "next/link";

export default async function RollercoastersPage() {
  // query our database
  const query = await db.query(`SELECT * FROM rollercoasters`);
  const rollercoastersData = query.rows;
  return (
    <>
      <h1>This is the Rollercoasters page!</h1>
      {rollercoastersData.map((rollercoasters) => (
        <div key={rollercoasters.id}>
          <Link href={`rollercoasters/${rollercoasters.id}`}>
            <h1>{rollercoasters.name}</h1>
          </Link>
        </div>
      ))}
    </>
  );
}
