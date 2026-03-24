"use client";

import { useState } from "react";
import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [error,setError] = useState(null);

  const handleSignOut = async() => {
    setError(null);
    try {
      await firebaseSignOut();
    } catch (error) {
      setError("Failed to Sign Out. Please try again!")
    }
  }

  const handleSignIn = async() => {
    setError(null);
    try {
      await gitHubSignIn();
    } catch (error) {
      setError("Failed to Sign In. Please try again!")
    }
  }

  if (error) {
    return <p>{error}</p>;
  }


  return (
    <section className="my-3 mx-2 text-blue-900 text-xl">
      {!user ? (
        <div className="text-center p-10">
          <p>Please Sign in to continue!</p>
          <button onClick={handleSignIn} className="cursor-pointer hover:bg-blue-600 bg-blue-900 text-white rounded-2xl px-5 py-3 my-3">Sign in with GitHub</button>
        </div>
      ) : (
        <div className="text-center p-10">
          <p>Welcome, {user.displayName} ({user.email})</p>
          <Link href="/week-9/shopping-list" className="inline-block border-2 rounded-2xl px-4 py-3 my-3 bg-blue-300 font-bold">Go to Shopping List</Link>
          <button onClick={handleSignOut} className="block m-auto cursor-pointer hover:bg-blue-600 bg-blue-900 text-white rounded-2xl px-5 py-3">Sign Out</button>
        </div>
      )
      }

    </section>
  );
}