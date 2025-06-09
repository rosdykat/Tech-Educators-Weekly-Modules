import Button from "./Button";
import ButtonWin from "./ButtonWin";
import "./Section.css";

export default function Section() {
  return (
    <section className="section">
      <h2>This is the section</h2>
      <p>This is the count!!!</p>
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <ButtonWin />
      <ButtonWin />
      <Button />
      <Button />
      <Button />
    </section>
  );
}
