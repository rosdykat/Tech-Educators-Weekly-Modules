import "./App.css";
import Section from "./Components/Section.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import { data } from "./lib/data.js";
import Numbers from "./Components/Numbers.jsx";

export default function App() {
  return (
    <>
      <Header />
      {data.map(function (dataItem) {
        return (
          <Section
            key={dataItem.id}
            title={dataItem.title}
            content={dataItem.content}
          />
        );
      })}
      <Numbers />
      <Footer />
    </>
  );
}
