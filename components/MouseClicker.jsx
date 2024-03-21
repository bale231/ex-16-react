export function MouseClicker() {
  function handleClick(e) {
    console.log(e.target);
  }

  return (
    <button name="first-button" onClick={handleClick}>
      <img
        src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="React img"
        width={60}
      />
      <span>Click image to print tag img!</span>
    </button>
  );
}
