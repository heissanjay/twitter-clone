"use client"
import { useState } from "react";
import LoginPage from "./components/LoginPage/page";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  if (!isLoggedIn) {
    return (
      <main className="flex  min-h-screen flex-col items-center justify-between p-4">
        <LoginPage />
      </main>
    );
  }

  if (isLoggedIn) {
    return (
      <main className="flex mx-auto">

      </main>
    )
  }

}
