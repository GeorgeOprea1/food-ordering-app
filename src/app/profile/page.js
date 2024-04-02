"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

const ProfilePage = () => {
  const session = useSession();
  const { status } = session;
  const userImage = session.data.user.image;

  if (status === "loading") {
    return "Loading ...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4 ">Profile</h1>
      <form className="max-w-md mx-auto mt-8">
        <div className="flex flex-col gap-4 ">
          <div className="flex-1 h-full">
            <div className=" rounded-lg flex items-center flex-col gap-4">
              <Image
                src={userImage}
                width={80}
                height={80}
                alt={"avatar"}
                className="rounded-full"
              ></Image>
              <button type="button"> Change avatar</button>
            </div>
          </div>
          <div className="flex-1">
            <input type="text" placeholder="First and last name"></input>
            <input
              type="email"
              disabled={true}
              value={session.data.user.email}
            ></input>
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ProfilePage;
