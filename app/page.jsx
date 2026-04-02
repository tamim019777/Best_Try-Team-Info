"use client";
import React from "react";
import TeamCard from "./components/TeamCard"; 

const teamMembers = [
  {
    name: "Saimum Islam",
    role: "Team Leader, Frontend Developer",
    imageSrc: "https://i.ibb.co/Cp6hDgBv/Screenshot-2026-02-27-173811.png", 
    borderGradient: "from-cyan-400 to-blue-600",
    glowShadow: "shadow-cyan-500/50",
    position: "top-5 left-1/2 -translate-x-1/2", 
  },
  {
    name: "Tamim Iqbal",
    role: "Frontend Developer",
    imageSrc: "https://i.ibb.co/mCCvLvK5/Screenshot-2026-01-24-235608.png",
    borderGradient: "from-orange-400 to-yellow-500",
    glowShadow: "shadow-orange-500/50",
    position: "top-[25%] left-4 md:left-10", 
  },
  {
    name: "Alif Mahmud",
    role: "Co-Team Leader , Frontend Developer",
    imageSrc: "https://i.ibb.co/yBkfr64X/te.jpg",
    borderGradient: "from-purple-400 to-pink-600",
    glowShadow: "shadow-purple-500/50",
    position: "top-[25%] right-4 md:right-10", 
  },

];

export default function Home() {
  return (

    <main className="relative min-h-screen w-full bg-[#010308] overflow-hidden flex items-center justify-center antialiased">
      
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-100" 
          style={{ 
            backgroundImage: "url('https://i.ibb.co/h1tzVSC9/Screenshot-2026-02-27-162642.png')",
            backgroundRepeat: "no-repeat",

            imageRendering: "-webkit-optimize-contrast", 
            backfaceVisibility: "hidden",
            transform: "translateZ(0)"
          }} 
        />
        
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010308]/10 via-transparent to-[#010308]/80" />
      </div>

      <div className="relative w-full max-w-[1280px] h-[800px] z-10 mx-auto">
        {teamMembers.map((member, idx) => (
          <div key={idx} className={`absolute ${member.position} transition-all duration-500`}>
            <TeamCard
              name={member.name}
              role={member.role}
              title={member.title}
              imageSrc={member.imageSrc}
              borderGradient={member.borderGradient}
              glowShadow={member.glowShadow}
            />
          </div>
        ))}
      </div>

    </main>
  );
}