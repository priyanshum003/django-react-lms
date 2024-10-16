import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to LMS Portal</h1>
      <p className="mb-4">Start your learning journey today!</p>
      <Link to="/courses" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Browse Courses
      </Link>
    </div>
  );
}

export default Home;