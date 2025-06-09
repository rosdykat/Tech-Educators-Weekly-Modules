// I need to tell my bedroom component that there are props waiting. This component needs to accept the props by adding them as a parameter

import BedroomBed from "./BedroomBed";

export default function Bedroom(props) {
  // the props parameter is an object containing properties
  // props = {
  // numberCats: value
  // }
  return (
    <section id="catBox">
      <h2>This is the bedroom component</h2>
      <p>{`This bedroom has ${props.numberCats} cats`}</p>
      <img src={props.src} alt="" width={200} />
      <BedroomBed />
    </section>
  );
}
