import React from 'react';
import { signInUser } from '../helpers/auth';

export default function Hero() {
  return (
    <div className="w-full h-screen"
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1615677679660-b923aed9b88e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
    >
      <div className="flex flex-col justify-center">
        <img className="w-full lg:w-1/3 mx-auto"src="https://i.imgur.com/RYT95Rk.png" alt="bestreads logo"></img>
        <div className="mx-auto">
        <button className="inline-block mr-0 text-md px-4 py-2 border rounded text-white bg-red-400  border-transparent hover:bg-red-500" id="logInBtn" onClick={signInUser}>Sign In</button>
        </div>
      </div>
    </div>
  );
}
