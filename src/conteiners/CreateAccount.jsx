import React from "react";

const CreateAccount = () => {
  return (
    <div className="login">
      <div className="form-conteiner">
        <h1 className="title">My account</h1>

        <form action="/" className="form">
          <div>
            <label for="name" className="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Fidel"
              className="input input-name"
            />

            <label for="email" className="label">
              Email address
            </label>
            <input
              type="text"
              id="email"
              placeholder="platzi@example.com"
              className="input input-email"
            />

            <label for="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="new-password"
              placeholder="*********"
              className="input input-password"
            />
          </div>

          <input
            type="submit"
            value="Create"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
