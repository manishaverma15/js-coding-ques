import Link from "next/link";

const HomePage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4">
          JavaScript Interview MCQs
        </h1>
        <p className="text-gray-600 mb-6">
          Practice output-based JavaScript interview questions.
        </p>
        <Link
          href="/quiz"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Start Practice
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
