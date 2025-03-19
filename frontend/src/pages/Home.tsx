function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to the Fitness Tracker App
      </h1>
      <p className="text-lg text-gray-700">
        Track your workouts, monitor your progress, and achieve your fitness
        goals.
      </p>
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Test Tailwind Button
      </button>
    </div>
  );
}

export default Home;
