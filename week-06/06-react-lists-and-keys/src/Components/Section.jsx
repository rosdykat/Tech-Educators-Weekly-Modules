import "./Section.css";

// TODO: I want to conditionally render the content in this section.
// - event: the user will click on the title to reveal (render) the content
// - state: we are going to save the "state" of our rendering (on or off)
// - conditional: I need some conditional syntax to allow my rendering to happen

import { useState } from "react";

export default function Section(props) {
  // declare our state
  const [showContent, setShowContent] = useState(false);

  // event handler
  function handleClick() {
    // when state is false, change it to true; when state is true, change it to false --> NOT operator (the !)
    setShowContent(!showContent);
  }
  //   You can't use if... else in the return of my component function
  // we will use a conditional synxtax called tenary operator
  return (
    <>
      <h1 className="title" onClick={() => handleClick()}>
        {props.title}
      </h1>

      {showContent ? <h2>{props.content}</h2> : null}

      {/* Above is the same as below, but using what we can in the return */}
      {/* if (showContent === true)P
      <h2>{props.content}
      } else {
       null
      } */}
    </>
  );
}
