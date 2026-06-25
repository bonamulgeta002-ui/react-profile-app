
export default function MyButton() {
  function ButtonClicked() {
    alert("Button clicked!");
  }

  return (
    <button onClick={ButtonClicked}>
      I am button
    </button>
  );
}