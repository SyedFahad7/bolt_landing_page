import { Link } from 'react-router-dom';
import { FaGraduationCap, FaChalkboardTeacher, FaBook, FaTrophy, FaChartLine, FaFolderOpen, FaCalendarAlt, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { HOME_PAGE } from '../../../constants/routes';

const SignPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen bg-black text-white pt-20 pb-12 px-4">
      {/* Back Button */}
      <Link 
        to={HOME_PAGE} 
        className="absolute top-8 left-8 p-3 rounded-full bg-[#121212] border border-[#2a2a2a] text-gray-400 hover:text-[#facb25] hover:border-[#facb25]/50 transition-all duration-300 group"
      >
        <FaArrowLeft size={20} className="" />
      </Link>

      {/* Header Section */}
      <div className="text-center mb-16 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Choose your <span className="text-[#facb25]">portal</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          Select how you want to sign in
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 tablet:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
        {/* Student Portal Card */}
        <div 
          onClick={() => window.location.href = 'https://student.boltabacus.com'}
          className="group relative bg-[#121212] rounded-3xl p-8 border border-[#2a2a2a] hover:border-[#facb25]/50 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full"
        >
          {/* Subtle Glow Effect */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#facb25]/10 rounded-full blur-3xl group-hover:bg-[#facb25]/20 transition-all duration-500" />
          
          {/* Icon Header */}
          <div className="w-14 h-14 bg-[#facb25]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#facb25]/20 group-hover:scale-110 transition-transform duration-300">
            <FaGraduationCap size={28} className="text-[#facb25]" />
          </div>

          <h2 className="text-3xl font-bold mb-4 text-white">Student Portal</h2>
          <p className="text-gray-400 mb-8 text-base leading-relaxed">
            Access your learning dashboard, practice sessions, and track your progress.
          </p>

          {/* Features List */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3 text-gray-300">
              <div className="text-[#facb25]"><FaBook size={16} /></div>
              <span className="text-sm font-medium">Interactive Learning Realms</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="text-[#facb25]"><FaTrophy size={16} /></div>
              <span className="text-sm font-medium">PvP Battles & Leaderboards</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="text-[#facb25]"><HiSparkles size={16} /></div>
              <span className="text-sm font-medium">Virtual Abacus Practice</span>
            </div>
          </div>

          {/* CTA Footer */}
          <div className="mt-auto pt-6 border-t border-[#2a2a2a] flex items-center gap-2 text-[#facb25] font-bold group-hover:gap-4 transition-all duration-300">
            <span>Enter as Student</span>
            <FaArrowRight size={14} />
          </div>
        </div>

        {/* Teacher Portal Card */}
        <div 
          onClick={() => window.location.href = 'https://teacher.boltabacus.com'}
          className="group relative bg-[#121212] rounded-3xl p-8 border border-[#2a2a2a] hover:border-[#4ade80]/50 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full"
        >
          {/* Subtle Glow Effect */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#4ade80]/10 rounded-full blur-3xl group-hover:bg-[#4ade80]/20 transition-all duration-500" />

          {/* Icon Header */}
          <div className="w-14 h-14 bg-[#4ade80]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#4ade80]/20 group-hover:scale-110 transition-transform duration-300">
            <FaChalkboardTeacher size={28} className="text-[#4ade80]" />
          </div>

          <h2 className="text-3xl font-bold mb-4 text-white">Teacher Portal</h2>
          <p className="text-gray-400 mb-8 text-base leading-relaxed">
            Manage your classes, students, and reports.
          </p>

          {/* Features List */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3 text-gray-300">
              <div className="text-[#4ade80]"><FaCalendarAlt size={16} /></div>
              <span className="text-sm font-medium">Class Management</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="text-[#4ade80]"><FaChartLine size={16} /></div>
              <span className="text-sm font-medium">Student Progress Reports</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="text-[#4ade80]"><FaFolderOpen size={16} /></div>
              <span className="text-sm font-medium">Teaching Resources</span>
            </div>
          </div>

          {/* CTA Footer */}
          <div className="mt-auto pt-6 border-t border-[#2a2a2a] flex items-center gap-2 text-[#4ade80] font-bold group-hover:gap-4 transition-all duration-300">
            <span>Enter as Teacher</span>
            <FaArrowRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignPage;
