// import uocra from '../../public/uocra.jpg'
// import Image from "next/image";

export default function About() {
  return (
    <div className="aboutPageContaner">
      <h4>its not an about page, now is a input tests</h4>

      <label htmlFor="text-input">Text input:</label>
      <input type="text" id="text-input" placeholder="Enter text" />
      <br />

      <label htmlFor="number-input">Number input:</label>
<input type="text" id="number-input" inputMode="decimal" placeholder="Enter number" /><br />

    </div>
  );
}
