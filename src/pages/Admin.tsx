import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { motion } from 'framer-motion';

interface Registration {
  id: string;
  teamName: string;
  teamLeaderName: string;
  teamLeaderEmail: string;
  teamMembers: string;
  projectTheme: string;
  githubLink: string;
  liveLink: string;
  submissionDate: string;
  timestamp: any;
}

function Admin() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'registrations'));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Registration[];
        setRegistrations(data);
        setError(null);
      } catch (error: any) {
        console.error('Error fetching registrations:', error);
        setError('Access denied. Please make sure you have the correct permissions to view this page.');
      }
      setLoading(false);
    };

    fetchRegistrations();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="max-w-md w-full bg-gray-900/50 p-8 rounded-lg text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Access Denied</h1>
          <p className="text-gray-300">{error}</p>
          <p className="text-gray-400 mt-4 text-sm">
            Please contact the administrator for access.
          </p>
        </div>
      </div>
    );
  }

  if (registrations.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            Registered Teams
          </h1>
          <div className="max-w-2xl mx-auto bg-gray-900/50 p-8 rounded-lg text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4">No Teams Registered Yet</h2>
              <p className="text-gray-400 mb-6">
                Be the first team to register for the hackathon!
              </p>
              <a
                href="/"
                className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
              >
                Back to Home
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Registered Teams
        </h1>

        <div className="grid gap-6">
          {registrations.map((registration, index) => (
            <motion.div
              key={registration.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 p-6 rounded-lg hover:bg-gray-900/70 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-semibold text-purple-400">{registration.teamName}</h2>
                  <p className="text-gray-400 mt-1">Led by {registration.teamLeaderName}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Submission: {registration.submissionDate}</p>
                </div>
              </div>

              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-300">Team Members</h3>
                  <p className="text-gray-400">{registration.teamMembers}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-300">Project Theme</h3>
                  <p className="text-gray-400">{registration.projectTheme}</p>
                </div>
              </div>

              <div className="mt-4 flex gap-4">
                <a
                  href={registration.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  GitHub Repository
                </a>
                <a
                  href={registration.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Live Website
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;