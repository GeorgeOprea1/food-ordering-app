"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const session = useSession();
  const { status } = session;
  const userImage = session?.data?.user?.image; // Guarded access
  const [userName, setUserName] = useState("");
  const [saved, setSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
    }
  }, [session, status]);

  if (status === "loading") {
    return "Loading ...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  async function handleProfileInfoUpdate(e) {
    e.preventDefault();
    setSaved(false);
    setIsSaving(true);
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: userName }),
    });
    setIsSaving(false);
    if (response.ok) {
      setSaved(true);
    }
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4 ">Profile</h1>

      <div className="max-w-md mx-auto mt-8">
        <div className="flex flex-col gap-4 ">
          {saved && (
            <h2 className="text-center bg-green-100 rounded-xl border border-green-300 p-2">
              Profile saved!
            </h2>
          )}
          {isSaving && (
            <h2 className="text-center bg-blue-100 rounded-xl border border-blue-300 p-2">
              Saving...
            </h2>
          )}

          <div className="flex-1 h-full">
            <div className=" rounded-lg flex items-center flex-col gap-4">
              <Image
                src={userImage}
                width={80}
                height={80}
                alt={"avatar"}
                className="rounded-full"
              ></Image>
              <label>
                <input type="file" className="hidden" />
                <span className="cursor-pointer border-gray-300 p-2 border text-center rounded-xl">
                  Edit
                </span>
              </label>
            </div>
          </div>
          <form className="flex-1" onSubmit={handleProfileInfoUpdate}>
            <input
              type="text"
              placeholder="First and last name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
            <input
              type="email"
              disabled={true}
              value={session?.data?.user?.email} // Guarded access
            ></input>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
