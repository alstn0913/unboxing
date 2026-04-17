import { useState, type ChangeEvent } from "react";

const MAX_LENGTH = 20;

export default function Input() {
  const [text, setText] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  const isEmpty = text.trim().length === 0;
  const isTooLong = text.length > MAX_LENGTH;
  const isContained = text.includes("contained");

  return (
    <div>
      <h2>Input Practice</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        maxLength={MAX_LENGTH + 5}
        placeholder="Type something"
      />
      <p>Current: {text || "(empty)"}</p>
      <p>
        Length: {text.length}/{MAX_LENGTH}
      </p>
      {isContained && <p>The text contains 'contained'.</p>}
      {isEmpty && <p>Please enter at least one character.</p>}
      {isTooLong && <p>Too long. Keep it within {MAX_LENGTH} characters.</p>}
    </div>
  );
}
