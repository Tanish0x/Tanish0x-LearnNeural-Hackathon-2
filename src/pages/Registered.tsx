import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '../components/GradientText';
import { Users, Trophy, Medal } from 'lucide-react';
import { FaSearch, FaArrowLeft } from 'react-icons/fa'; // FaArrowLeft for back icon
import { useNavigate } from 'react-router-dom';

interface Team {
  id: number;
  teamName: string;
  leaderName: string;
  email: string;
}

const teams: Team[] = [
  { id: 1, teamName: "Dev Circle", leaderName: "Burhan Ahmad", email: "" },
  { id: 2, teamName: "Techatrons", leaderName: "Rahul Dewangan", email: "rahul2108dewangan@gmail.com" },
  { id: 3, teamName: "Starks", leaderName: "Tanushree Chaudhary", email: "ctanushree800@gmail.com" },
  { id: 4, teamName: "Bug Busters", leaderName: "Harshil Bhudiya", email: "bhudiyaharshil6@gmail.com" },
  { id: 5, teamName: "Code Crafters", leaderName: "Sneha Amballa", email: "sneha.amballa0804@gmail.com" },
  { id: 6, teamName: "TrailBlazers", leaderName: "Susritha Gudimetla", email: "gudimetlasusritha@gmail.com" },
  { id: 7, teamName: "ASM", leaderName: "ADAP MUKHESH RAJU", email: "mukheshraju30@gmail.com" },
  { id: 8, teamName: "Error Explorer", leaderName: "Aftab Alam", email: "course.aftabalam@gmail.com" },
  { id: 9, teamName: "Innovex", leaderName: "Pathan Sofiya Parvez", email: "sophiasad1421@gmail.com" },
  { id: 10, teamName: "Top Runners", leaderName: "Arjun (Oggy)", email: "xarjunpatil@gmail.com" },
  { id: 11, teamName: "MehenatiPeeps", leaderName: "Priyansh Luthra", email: "thats.priyanshluthra@gmail.com" },
  { id: 12, teamName: "Pineapple", leaderName: "Mayank Kumar", email: "dev.01mayank@gmail.com" },
  { id: 13, teamName: "Codestorm", leaderName: "Shlok", email: "thinkbuild8@gmail.com" },
  { id: 14, teamName: "Lone Wolf", leaderName: "Umesh.L", email: "umesh.l3457@gmail.com" },
  { id: 15, teamName: "Code Crafters", leaderName: "Radhika", email: "radhikabansal365@gmail.com" },
  { id: 16, teamName: "Eightbyte", leaderName: "Aejaz Ahmad Ansari", email: "aejazansari242@gmail.com" },
  { id: 17, teamName: "Neural Nexus", leaderName: "Aryan Vashishtha", email: "vashishthaaryan149@gmail.com" },
  { id: 18, teamName: "Code fusion", leaderName: "Jiya Kukreja", email: "sunitakukreja3275@gmail.com" },
  { id: 19, teamName: "knockout", leaderName: "Harshavardhana M", email: "harshagowdasudha@gmail.com" },
  { id: 20, teamName: "NewbiesDev", leaderName: "Riya Pradhan", email: "riyapradhan2445@gmail.com" },
  { id: 21, teamName: "ByteBusters", leaderName: "Parthasaradhi Ganta", email: "parthasaradhiganta@gmail.com" },
  { id: 22, teamName: "Tech Bugs", leaderName: "Saboohi Fatima Shafia", email: "syedasaboohishafia@gmail.com" },
  { id: 23, teamName: "Solution makers", leaderName: "Mohammed umar", email: "" },
  { id: 24, teamName: "Spadex", leaderName: "Aiku", email: "aiku007aiku@gmail.com" },
  { id: 25, teamName: "ByteMinds", leaderName: "a8kj7sea", email: "A8kj7sea@gmail.com" },
  { id: 26, teamName: "ByteMinds", leaderName: "A8kj7sea", email: "a8kj7sea@gmail.com" },
  { id: 27, teamName: "Black panther", leaderName: "Alliya Fatma", email: "bongsoonah100@gmail.com" },
  { id: 28, teamName: "Team Runtime Terror", leaderName: "Shubham kumar", email: "shubhamkumar.sit.entc@gmail.com" },
  { id: 29, teamName: "Codémber", leaderName: "Shiv Tarunkumar Jani", email: "shivjani2005@gmail.com" },
  { id: 30, teamName: "Team Code2Skills", leaderName: "Shaswat upadhyay", email: "shashwatup619@gmail.com" },
  { id: 31, teamName: "Code Duet", leaderName: "Shubham Nayak", email: "shubham.nayak1972@gmail.com" },
  { id: 32, teamName: "Binary Bandits", leaderName: "Dhanush D Prabhu", email: "dhanushdprabhu18@gmail.com" },
  { id: 33, teamName: "Loop", leaderName: "Manoj Kumar kummari", email: "mammy2manu@gmail.com" },
  { id: 34, teamName: "DevStorm Team", leaderName: "Atiksh Soni", email: "ateekshsoni@gmail.com" },
  { id: 35, teamName: "Pixel pioneers", leaderName: "Krishnanunni S", email: "krishnanunniupasana10@gmail.com" },
  { id: 36, teamName: "Ghhhh", leaderName: "Ttyyu", email: "ttyyu@ghh.com" },
  { id: 37, teamName: "VM Shieldx", leaderName: "Akash V", email: "2k23csbs02@kiot.ac.in" },
  { id: 38, teamName: "Scarface ByteClan", leaderName: "Parthiv Joshi", email: "shambhlo2006@gmail.com" },
  { id: 39, teamName: "TEAMSPIRIT", leaderName: "ANURAG JAYASWAL", email: "anurag1.230101034@iiitbh.ac.in" },
  { id: 40, teamName: "Code Crafters", leaderName: "Sahil Rajput", email: "sahilrazput18@gmail.com" },
  { id: 41, teamName: "Trident coders", leaderName: "RUPESH KUMAR SAH", email: "rupeshshah.b86@gmail.com" },
  { id: 42, teamName: "Error 404: Team name not found", leaderName: "Rodrigo Cazarin", email: "rodrigocazarin08@gmail.com" },
  { id: 43, teamName: "Crew", leaderName: "Hari Vignesh S", email: "harivigneshs002@gmail.com" },
  { id: 44, teamName: "CodeX", leaderName: "Srushti Santosh Borhade", email: "srushtiborhade0@gmail.com" },
  { id: 45, teamName: "Solo", leaderName: "Aditya Rangari", email: "adityar9890@gmail.com" },
  { id: 46, teamName: "Frontline Coders", leaderName: "Alefiya Hirani", email: "alefiyahirani8@gmail.com" },
  { id: 47, teamName: "Tech Trio", leaderName: "Asmita Singh", email: "asingh290704@gmail.com" },
  { id: 48, teamName: "The Frontenders", leaderName: "Udeme Comfort", email: "udemecomfort0711@gmail.com" },
  { id: 49, teamName: "404 Not Found", leaderName: "Asmita Singh", email: "asingh290704@gmail.com" },
  { id: 50, teamName: "FronBuild", leaderName: "Asma BABEKER", email: "asma27ba@gmail.com" },
  { id: 51, teamName: "", leaderName: "", email: "" },
  { id: 52, teamName: "FronCoders", leaderName: "MOHAMMED YASIR SHAHID", email: "yasirshahid9870@gmail.com" },
  { id: 53, teamName: "Ok Let's Go", leaderName: "Arafat Haque Biswas", email: "arafathaquebiswas@gmail.com" },
  { id: 54, teamName: "Dev Hero's", leaderName: "Venkat Ashwin kumar", email: "" },
  { id: 55, teamName: "Tread Connect", leaderName: "Rahul kushwaha", email: "rahulkush6392@gmail.com" },
  { id: 56, teamName: "Hack it up", leaderName: "Bollineni Mohan krishna sai", email: "mohankrishnasaibollineni@gmail.com" },
  { id: 57, teamName: "Team CRYSIS", leaderName: "Anant Bhatnagar", email: "workwithanant7@gmail.com" },
  { id: 58, teamName: "Tech wizard", leaderName: "Chandan Delhi", email: "ckseptember7@gmail.com" },
];

function Registered() {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const searchVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: '200px', opacity: 1, transition: { duration: 0.3 } }
  };

  const filteredTeams = teams.filter(team =>
    team.teamName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0A0118] text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-violet-900/20" />
      
      <div className="relative container mx-auto px-4 py-12">
        {/* Sticky Header with Back Icon and Search */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#0A0118]/80 backdrop-blur-sm px-4 py-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-2 rounded-lg hover:opacity-90 transition cursor-pointer"
            >
              <FaArrowLeft size={24} />
            </motion.div>

            <div className="flex items-center gap-2">
              <FaSearch
                className="text-violet-400 cursor-pointer"
                size={24}
                onClick={() => setSearchOpen(!searchOpen)}
              />
              {searchOpen && (
                <motion.input
                  variants={searchVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  type="text"
                  placeholder="Enter Team Name"
                  className="bg-white/10 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              )}
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-20"></div>

        {/* Branding outside header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-violet-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text">
            LearnNeural Hackathon 2025
          </h1>
          <p className="text-xl text-violet-200">Registered Teams</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-violet-500/20"
          >
            <div className="flex items-center gap-4">
              <Users className="w-8 h-8 text-violet-400" />
              <div>
                <h3 className="text-2xl font-bold text-violet-400">{teams.length}</h3>
                <p className="text-violet-200">Total Teams</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-violet-500/20"
          >
            <div className="flex items-center gap-4">
              <Trophy className="w-8 h-8 text-indigo-400" />
              <div>
                <h3 className="text-2xl font-bold text-indigo-400">Not Yet Declared</h3>
                <p className="text-violet-200">Finalists</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-violet-500/20"
          >
            <div className="flex items-center gap-4">
              <Medal className="w-8 h-8 text-fuchsia-400" />
              <div>
                <h3 className="text-2xl font-bold text-fuchsia-400">Not Yet Declared</h3>
                <p className="text-violet-200">Winners</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTeams.map((team) => (
            <motion.div
              key={team.id}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-violet-500/20 hover:border-violet-500/40 transition-colors"
            >
              <h3 className="text-xl font-semibold text-violet-400 mb-2">{team.teamName}</h3>
              <p className="text-violet-200">{team.leaderName}</p>
              <p className="text-violet-300/60 text-sm truncate">{team.email}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Registered;