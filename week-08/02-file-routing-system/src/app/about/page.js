// This is a new route, just by adding a page.js in a folder
// this is a static page -> it will always be the "/about" route

import AboutSection from "@/Components/AboutSection";

export default function AboutPage() {
  return (
    <>
      <h1>This is the about page</h1>
      <AboutSection />
      <p>test</p>
    </>
  );
}
