// TODO: I want to have a form here to collect new data about rollercoasters

// this is a server component --> "/new-rollercoaster"

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"; //Make sure this is the redirect from navigation

export default function NewRollercoasterPage() {
  // handle submit in the server --> server function
  // server function --> an asynchronous function that runs in the server
  async function handleSubmit(formData) {
    // we need to tell Next to run this function in the server
    "use server";
    // collect the form data and insert it into the database

    // fiurst, we collect the data
    formData = {
      name: formData.get("name"),
      height: formData.get("height"),
      country: formData.get("country"),
    };

    // second, insert the data into the database
    db.query(
      `INSERT INTO rollercoasters (name, height, country) VALUES ($1, $2, $3)`,
      [formData.name, formData.height, formData.country]
    );
    // When we submit new data into the table, we need to revalidate the cache
    revalidatePath("/rollercoasters");
    // We can also redirect users to the location
    redirect("/rollercoasters");
  }

  return (
    <>
      <h1>This is the form page</h1>
      {/* Because I cannot have a submit event, I will use the action attribute to connect the server function and the form */}
      <form action={handleSubmit}>
        <fieldset>
          <legend>Rollercoaster&apos;s</legend>
          <label htmlFor="name">Rollercoaster Name</label>
          <input type="text" name="name" required />
          <label htmlFor="height">Rollercoaster Height</label>
          <input type="number" name="height" required min={0} />
          <label htmlFor="country">Rollercoaster Country</label>
          <input type="text" name="country" required />
        </fieldset>
        <button>Submit</button>
      </form>
    </>
  );
}
