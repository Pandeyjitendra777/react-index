function Jsx() {
  const name = "Hello";
  return (
    <>
      <div className="border border-top p-2">
        {name}- Jsx Component
        <div>{10 + 20 + 30}</div>
      </div>
    </>
  );
}
export default Jsx;

// It stands for javascript extension.
// Jsx allows to write html and javascript together.
