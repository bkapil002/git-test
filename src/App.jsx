function App() {
  const email = "prem@brandingrain.com";
  const encodedEmail = btoa(email); // converts to Base64

  return (
    <>
      <form method="get" action="https://samzra.onrender.com">
        <input
          type="hidden"
          name="email"
          value={encodedEmail} // Base64 value
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;