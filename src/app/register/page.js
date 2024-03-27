"use client";
import React, { useState } from "react";
import Image from "next/image";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl ">Register</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">
          or log in with provider
        </div>
        <button className="flex items-center gap-4 justify-center">
          <Image
            src={"/google.svg"}
            width={20}
            height={20}
            alt={"google icon"}
          ></Image>
          Login with Google
        </button>
      </form>
    </section>
  );
};

export default RegisterPage;
