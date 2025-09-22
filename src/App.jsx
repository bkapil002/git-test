import React, { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault(); // stop actual POST request

    // Create FormData object from the form
    const data = new FormData(e.target);

    // Convert FormData to an object
    const values = Object.fromEntries(data.entries());

    // Save in state (just for printing here)
    setFormData(values);

    console.log("Form Values:", values);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Register</h2>

      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input type="text" name="name" required />
        </div>

        <div>
          <label>Email:</label>
          <br />
          <input type="email" name="email" required />
        </div>

      

        <br />
        <button type="submit">Register</button>
      </form>

      {/* Print submitted values */}
      {formData.name && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid gray",
          }}
        >
          <h3>Submitted Values</h3>
          <p>
            <b>Name:</b> {formData.name}
          </p>
          <p>
            <b>Email:</b> {formData.email}
          </p>
    
        </div>
      )}
    </div>
  );
}
