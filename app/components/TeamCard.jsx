"use client";
import React from 'react';

export default function TeamCard({ name, role, title, imageSrc, cardBg, borderGradient, glowShadow }) {
  return (
    <div className="relative group flex justify-center items-center w-52 h-52 sm:w-64 sm:h-64 transition-all duration-700 hover:scale-110 z-10 hover:z-50 flex-shrink-0">
      

      <div className={`absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-[spin_20s_linear_infinite] opacity-40 group-hover:opacity-100 group-hover:border-cyan-400 transition-all duration-500`} />


      <div className={`relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden flex flex-col items-center justify-center border-2 border-white/30 backdrop-blur-md shadow-2xl ${glowShadow} transition-all duration-500`}>

        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-20 transition-opacity duration-500"
          style={{ 
            backgroundImage: `url(${cardBg || 'https://i.ibb.co/0V1tZGbF/Screenshot-2026-02-27-155848.png'})` 
          }} 
        />
        

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90 z-0" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500 z-0" />

        <div className="relative z-10 mb-2">
          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2px] bg-gradient-to-tr ${borderGradient} shadow-[0_0_15px_rgba(255,255,255,0.3)]`}>
            <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden border border-white/20">
              {imageSrc ? (
                <img src={imageSrc} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-3xl bg-slate-800">👨‍💻</div>
              )}
            </div>
          </div>
        </div>


        <div className="z-20 text-center px-4">
          <h3 
            className="text-[12px] sm:text-[15px] font-black uppercase tracking-widest text-white mb-0.5"
            style={{ textShadow: '0px 0px 10px rgba(0,0,0,1)' }}
          >
            {name}
          </h3>
          
          <p className="text-[9px] sm:text-[11px] font-bold uppercase text-cyan-400">
            {role}
          </p>
          
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto my-1.5 shadow-[0_0_5px_cyan]" />
          
          <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.15em] text-gray-100 font-bold">
            {title}
          </p>
        </div>
      </div>

      <div className={`absolute top-4 right-8 w-2 h-2 rounded-full bg-cyan-400 animate-ping shadow-[0_0_10px_cyan] z-30`} />
    </div>
  );
}