function App() {
  const email = "prem@brandingrain.com";
  const encodedEmail = btoa(email); // Base64

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `https://samzra.onrender.com/signIn/${encodedEmail}`;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="hidden" value={encodedEmail} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
