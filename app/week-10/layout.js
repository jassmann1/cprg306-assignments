"use client";
import React from "react";
import { AuthContextProvider } from "./_utils/auth-context"; // Import AuthContextProvider

export default function Layout({ children }) {
  return (
    <AuthContextProvider>
      <div className="min-h-screen bg-white text-black">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-center text-xl">Welcome to the App</h1>
        </header>
        <main className="p-4">{children}</main>
        <footer className="bg-blue-600 text-white p-4 text-center">
          <p>&copy; 2025 My App. All rights reserved.</p>
        </footer>
      </div>
    </AuthContextProvider>
  );
}
