import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/courses/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        });
        setCourses(response.data);
      } catch (error) {
        setError('Failed to fetch courses');
        console.error('Fetch courses failed:', error.response.data);
      }
    };

    fetchCourses();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Courses</h2>
      <Link to="/courses/create" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">
        Create New Course
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map(course => (
          <div key={course.id} className="bg-white shadow-md rounded p-4">
            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            <p className="mb-2">{course.description}</p>
            <Link to={`/courses/${course.id}`} className="text-blue-500 hover:text-blue-700">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;