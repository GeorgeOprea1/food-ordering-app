"use client";
import { useState } from "react";
import Image from "next/image";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="max-w-xs mx-auto">
        <input
          type="email"
          placeholder="email"
          disabled={false}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          disabled={false}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
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

export default LoginPage;
