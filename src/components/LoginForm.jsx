import React from 'react';

function LoginForm() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <form className="bg-transparent p-8 rounded-lg border-2 border-white shadow-xl shadow-cyan-500 animate-fall">
        <div className="mb-4">
          <label htmlFor="username" className="block font-bold text-white mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="border-2 border-gray-400 rounded-full w-full px-4 py-2 outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-bold text-white mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border-2 border-gray-400 rounded-full w-full px-4 py-2 outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 mt-2 w-full rounded-full text-white border-2 border-white p-2 outline-none font-bold hover:bg-blue-600"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
