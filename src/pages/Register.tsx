import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    teamName: '',
    teamLeaderName: '',
    teamLeaderEmail: '',
    teamMembers: '',
    cityState: '',
    hasParticipatedBefore: 'NO',
    teamMembersEmail: '',
    projectTheme: '',
    githubLink: '',
    liveLink: '',
    submissionDate: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, 'registrations'), {
        ...formData,
        timestamp: new Date()
      });
      alert('Registration successful!');
      navigate('/');
    } catch (error) {
      console.error('Error registering:', error);
      alert('Error registering. Please try again.');
    }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Register Your Team
        </h1>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-900/50 p-8 rounded-lg">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Team Name</label>
              <input
                type="text"
                name="teamName"
                required
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Team Leader Name</label>
              <input
                type="text"
                name="teamLeaderName"
                required
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Team Leader Email</label>
              <input
                type="email"
                name="teamLeaderEmail"
                required
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Team Members (comma separated)</label>
              <textarea
                name="teamMembers"
                required
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">City & State</label>
              <input
                type="text"
                name="cityState"
                required
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Have you participated in a hackathon before?</label>
              <select
                name="hasParticipatedBefore"
                required
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              >
                <option value="NO">No</option>
                <option value="YES">Yes</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Team Members Email (comma separated)</label>
              <textarea
                name="teamMembersEmail"
                required
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Project Theme (Optional)</label>
              <input
                type="text"
                name="projectTheme"
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">GitHub Repository Link (Optional)</label>
              <input
                type="url"
                name="githubLink"
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Live Website Link (Optional)</label>
              <input
                type="url"
                name="liveLink"
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Submission Date (Optional)</label>
              <input
                type="date"
                name="submissionDate"
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              {loading ? 'Registering...' : 'Register Team'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;