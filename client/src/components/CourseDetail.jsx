import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function CourseDetail() {
  const [course, setCourse] = useState(null);
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/courses/${id}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        });
        setCourse(response.data);
      } catch (error) {
        setError('Failed to fetch course details');
        console.error('Fetch course failed:', error.response.data);
      }
    };

    fetchCourse();
  }, [id]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
      <p className="mb-4">{course.description}</p>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Created at:</strong> {new Date(course.created_at).toLocaleDateString()}</p>
      <p><strong>Updated at:</strong> {new Date(course.updated_at).toLocaleDateString()}</p>
      <Link to={`/courses/${id}/update`} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">
        Update Course
      </Link>
    </div>
  );
}

export default CourseDetail;