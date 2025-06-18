import { db } from "@/utils/dbConnection";

export default async function RollercoasterPageId({ params }) {
  const idParams = await params.rollercoasterId;

  //query our db
  const query = await db.query(`SELECT * FROM rollercoasters WHERE id = $1`, [
    idParams,
  ]);

  const rollercoasterData = query.rows; //this is an array, each column is an object
  return (
    <>
      <h1>This is the Rollercoaster page!</h1>
      {rollercoasterData.map((roller) => (
        <div key={roller.id}>
          <h2>{`Name: ${roller.name}`}</h2>
          <h2>{`Height: ${roller.height}`}</h2>
        </div>
      ))}
    </>
  );
}

// import pg from "pg";

// export default async function Post({ params }) {
//   const slug = await params;
//   const db = new pg.Pool({
//     connectionString: process.env.NEXT_POSTGRES,
//   });

//   const post = (await db.query(`SELECT * FROM posts WHERE id = ${slug.id};`))
//     .rows;
//   return (
//     <>
//       <h1>This is the Rollercoaster page!</h1>
//       {rollercoasterData.map((roller) => (
//         <div key={roller.id}>
//           <h2>{roller.name}</h2>
//           <h2>{roller.height}</h2>
//         </div>
//       ))}
//     </>
//   );
// }
