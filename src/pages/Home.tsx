import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Instagram, Disc as Discord } from 'lucide-react';
import { GradientText } from '../components/GradientText';
import { GradientButton } from '../components/GradientButton';

function Home() {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0118] text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-violet-900/20" />
      <motion.div
        className="fixed inset-0"
        animate={{
          background: [
            'radial-gradient(600px circle at 0% 0%, rgba(129, 140, 248, 0.1), transparent 80%)',
            'radial-gradient(600px circle at 100% 100%, rgba(167, 139, 250, 0.1), transparent 80%)',
            'radial-gradient(600px circle at 100% 0%, rgba(139, 92, 246, 0.1), transparent 80%)',
            'radial-gradient(600px circle at 0% 100%, rgba(167, 139, 250, 0.1), transparent 80%)',
          ],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "linear"
        }}
      />
      
      <div className="relative">
        <div className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.h1 
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text"
            >
              LearnNeural
            </motion.h1>

            <GradientText className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 block">
              Hackathon 2025
            </GradientText>

            <motion.div
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-violet-500/20 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-violet-400 mb-2">Registration Closed!</h2>
              <p className="text-violet-200 mb-4">
                Thank you for your interest! We've received an overwhelming response.
              </p>
              <Link to="/registered">
                <GradientButton>
                  View Registered Teams →
                </GradientButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <footer className="py-8 text-center">
          <GradientText className="text-xl sm:text-2xl font-bold">
            LearnNeural
          </GradientText>
          <div className="flex justify-center gap-4 mt-4">
            {[
              { href: "https://github.com/learnneural", icon: Github },
              { href: "https://instagram.com/learnneural", icon: Instagram },
              { href: "https://discord.gg/learnneural", icon: Discord }
            ].map((social, index) => (
              <motion.a
                key={social.href}
                href={social.href}
                className="text-violet-400 hover:text-violet-300 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;