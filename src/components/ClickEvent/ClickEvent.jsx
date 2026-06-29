function ClickEvent() {
  function calling() {
    alert(`function called`);
  }
  return (
    <>
      <div className="border border-top p-2">
        Click Event <br />
        <button
          className="bg-blue-600 p-2 text-white"
          onClick={() => calling()}
        >
          click here
        </button>
      </div>
    </>
  );
}
export default ClickEvent;

// React me function defination pass krte h na ki function calling.
