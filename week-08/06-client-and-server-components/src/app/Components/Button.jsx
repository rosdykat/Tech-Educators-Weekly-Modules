// TODO: I want for the user to click on the button, every time they click, there is one more like

// This needs to be a client component

"use client";

import { useState } from "react";

export default function Button() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <p>{likes}</p>
    </>
  );
}
