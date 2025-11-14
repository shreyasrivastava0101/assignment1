import React from "react";

const Registration = () => {
  return (
    <div>
      <h2>Registration Page</h2>
      <form>
        <input type="text" placeholder="Username" /><br />
        <input type="email" placeholder="Email" /><br />
        <input type="password" placeholder="Password" /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
