"use client";
import { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoginInProgress(true);

    await signIn("credentials", { email, password, callbackUrl: "/" });

    setLoginInProgress(false);
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          disabled={loginInProgress}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          disabled={loginInProgress}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={loginInProgress} type="submit">
          Login
        </button>
        <div className="my-4 text-center text-gray-500">
          or log in with provider
        </div>
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex items-center gap-4 justify-center hover:border-2  border-blue-400"
        >
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
