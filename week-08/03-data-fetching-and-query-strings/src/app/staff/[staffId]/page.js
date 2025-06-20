// As there are params, we need a default async function

import Link from "next/link";

export default async function StaffIdPage({ params }) {
  // - fetch data --> fetch()
  // - render items on the page --> dot notation
  const staffIdParams = await params.staffId;
  const response = await fetch(`https://dummyjson.com/users/${staffIdParams}`);
  const data = await response.json();
  console.log(data);
  // the data structure is an object with properties inside
  return (
    <>
      <h1>This is the staff name page!</h1>
      <p> {`Staff Name: ${data.firstName}`} </p>
      <p> {`Staff Name: ${data.lastName}`} </p>
      <p>{`StaffID: ${data.id}`}</p>
      <Link href={`/staff`}>Go Back</Link>
    </>
  );
}
