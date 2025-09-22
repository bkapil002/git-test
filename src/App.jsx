
function App() {


  return (
    <>
     <form method="get" action="https://samzra.onrender.com/signin">
        <input 
          type="email" 
          id="fname" 
          name="email" 
          defaultValue="prem@brandingrain.com" 
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default App
