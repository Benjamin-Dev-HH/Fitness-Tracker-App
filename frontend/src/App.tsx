import React from "react";
import GoogleLoginButton from "./components/GoogleLoginButton";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-600">Fitness Tracker</h1>
        <p className="text-gray-700 mt-2">
          Track your fitness journey with ease.
        </p>
      </header>
      <main className="text-center">
        <GoogleLoginButton />
      </main>
      <footer className="mt-8 text-gray-500">
        &copy; 2023 Fitness Tracker. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
