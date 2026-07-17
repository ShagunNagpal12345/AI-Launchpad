import { useState } from 'react';
import { 
  Play, Clock, PlayIcon, ExternalLink, 
  BarChart, Database, Code, AlertTriangle, Brain,
  Video, Film, Radio, GraduationCap, ListVideo, MessageSquare 
} from 'lucide-react';
import SplitGradientHeading from './SplitGradientHeading';

const YouTubePanel = ({ theme = "light" }) => {
  const normalizedTheme = String(theme).toLowerCase();
  const isLight = ["light", "day", "white"].includes(normalizedTheme);
  // --- 1. CHANNEL NAVIGATION TABS ---
  const channelTabs = [
    { name: 'Videos', icon: <Video size={16}/>, url: 'https://www.youtube.com/@Senseofdata/videos' },
    { name: 'Shorts', icon: <Film size={16}/>, url: 'https://www.youtube.com/@Senseofdata/shorts' },
    { name: 'Live', icon: <Radio size={16}/>, url: 'https://www.youtube.com/@Senseofdata/streams' },
    { name: 'Courses', icon: <GraduationCap size={16}/>, url: 'https://www.youtube.com/@Senseofdata/courses' },
    { name: 'Playlists', icon: <ListVideo size={16}/>, url: 'https://www.youtube.com/@Senseofdata/playlists' },
    { name: 'Posts', icon: <MessageSquare size={16}/>, url: 'https://www.youtube.com/@Senseofdata/posts' }
  ];

  // Video Data Configuration
const videos = [
  {
    id: 'WcMu3mGwwgU',
    title: "Claude Fable 5 vs Opus 4.8 vs GPT-5.5 Codex - Who Builds Better?",
    channel: "DataSense",
    views: "240K Views",
    duration: "--:--",
    category: "AI Battle",
    icon: <Brain size={14} className="text-purple-500" />
  },
  {
    id: '1nRxNtpRc-M',
    title: "Claude Code for Beginners: Build Slides, Videos & Websites With No Code",
    channel: "DataSense",
    views: "12K views",
    duration: "12:45",
    category: "Career Guide",
    icon: <AlertTriangle size={14} className="text-amber-500" />
  },
  {
    id: 'wgdeJUm38yU',
    title: "Python Project 1: Build Snake Game in Python",
    channel: "DataSense",
    views: "12K Views",
    duration: "--:--",
    category: "Python",
    icon: <Code size={14} className="text-emerald-500" />
  },
  
  {
    id: 'GYNal5k6Nlo',
    title: "AWS for FREE on Your Laptop • 47 Services • No Credit Card",
    channel: "DataSense",
    views: "18K Views",
    duration: "--:--",
    category: "Cloud",
    icon: <Database size={14} className="text-blue-500" />
  },
  {
    id: 'F1B3KRG-A1w',
    title: "Claude Fable 5 vs GPT-5.5 Play Chess: One Broke the Rules",
    channel: "DataSense",
    views: "100k Views",
    duration: "--:--",
    category: "AI Challenge",
    icon: <Brain size={14} className="text-purple-500" />
  },
  {
    id: 'b8kFTTFh-_I',
    title: "How to Upload a Project to GitHub from Your Laptop",
    channel: "DataSense",
    views: "8K Views",
    duration: "--:--",
    category: "GitHub",
    icon: <Code size={14} className="text-emerald-500" />
  },
  {
      id: 'sMeeC6IJ2Qo',
      title: "Complete SQL Roadmap for Data Science",
      channel: "DataSense",
      views: "8.5K views",
      duration: "45:20",
      category: "SQL Mastery",
      icon: <Database size={14} className="text-blue-500"/>
},

{

    id: 'W-jQg5D1RoE',
    title: "Power BI 15 Day Crash Course - Full Playlist",
    channel: "DataSense",
    views: "25K views",
    duration: "1:30:00",
    category: "Power BI",
    icon: <BarChart size={14} className="text-orange-500"/>

},
  {
    id: '1wND5uT3H7A',
    title: "Reinforcement Learning for First-Timers",
    channel: "DataSense",
    views: "15K Views",
    duration: "--:--",
    category: "AI/ML",
    icon: <Brain size={14} className="text-purple-500" />
  }


];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <section
      id="youtube-studio"
      className={`py-5 md:py-7 ${isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"}`}
    >
      <div className="mx-auto max-w-[1580px] px-4 sm:px-5 lg:px-6">
        <div className={`rounded-[22px] border px-5 py-6 sm:px-6 ${
          isLight
            ? "border-[#e4e9f1] bg-white shadow-[0_16px_55px_-44px_rgba(15,23,42,0.25)]"
            : "border-[#1d2d43] bg-[linear-gradient(145deg,#071426,#051121)] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)]"
        }`}>
        
        {/* --- HEADER SECTION --- */}
        <div className={`mb-8 border-b pb-6 ${isLight ? "border-[#edf0f4]" : "border-[#22344b]"}`}>
          
          {/* Logo & Title */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
                <div className={`relative flex h-11 w-11 items-center justify-center rounded-xl border shadow-[0_10px_26px_-22px_rgba(37,99,235,0.32)] ${
                  isLight ? "border-[#dbe5f2] bg-[#f8fbff]" : "border-[#22344b] bg-[#0d1b2d]"
                }`}>
  {/* 1. Invisible SVG Definition for the Linear Gradient */}
  <svg className="absolute w-0 h-0" width="0" height="0">
    <defs>
      {/* Mapping your exact colors: cyan-700 (#0e7490), teal-600 (#0d9488), and blue-400 (#60a5fa) */}
      <linearGradient id="playIconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0e7490" />   {/* cyan-700 */}
        <stop offset="50%" stopColor="#0d9488" />  {/* teal-600 */}
        <stop offset="100%" stopColor="#60a5fa" /> {/* blue-400 */}
      </linearGradient>
    </defs>
  </svg>

  {/* 2. Reference the gradient ID in the fill & stroke attributes */}
  <PlayIcon 
    size={20} 
    fill="url(#playIconGradient)" 
    stroke="url(#playIconGradient)" 
  />
</div>

                <SplitGradientHeading
                  theme={theme}
                  className={`text-[24px] font-extrabold tracking-[-0.035em] sm:text-[28px] ${
                    isLight ? "text-[#111a3b]" : "text-white"
                  }`}
                  plain="DataSense"
                  accent="Studio"
                />
            </div>
            
            {/* Embedded Direct Subscribe CTA */}
            <a 
                href={`https://www.youtube.com/watch?v=${currentVideo.id}`} 
                target="_blank" 
                rel="noreferrer"
                className={`inline-flex max-w-max items-center gap-2 rounded-[10px] border px-4 py-2.5 text-[12px] font-bold transition duration-200 hover:-translate-y-0.5 ${
                  isLight
                    ? "border-orange-200 bg-white text-orange-600 hover:border-orange-300 hover:bg-orange-50"
                    : "border-orange-400/25 bg-orange-400/10 text-orange-300 hover:bg-orange-400/15"
                }`}
            >
                Subscribe to Channel <ExternalLink size={14}/>
            </a>
          </div>

          {/* --- CHANNEL NAVIGATION BAR --- */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {channelTabs.map((tab) => (
                  <a 
                      key={tab.name}
                      href={tab.url}
                      target="_blank" 
                      rel="noreferrer"
                      className={`group flex items-center gap-2 rounded-[11px] border px-4 py-2 text-[13px] font-bold whitespace-nowrap transition duration-200 hover:-translate-y-0.5 ${
                        isLight
                          ? "border-[#e6eaf1] bg-[#fcfdff] text-[#5c677c] hover:border-blue-200 hover:bg-blue-50"
                          : "border-[#22344b] bg-[#0c1a2d] text-slate-300 hover:border-[#2f4b68] hover:bg-[#102139]"
                      }`}
                  >
                      <span className={`transition-colors ${isLight ? "text-slate-400 group-hover:text-blue-500" : "text-slate-500 group-hover:text-sky-300"}`}>
                          {tab.icon}
                      </span>
                      {tab.name}
                  </a>
              ))}
          </div>
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          
          {/* LEFT: Main Video Player */}
          <div className="lg:col-span-2 flex flex-col gap-5">
              <div className={`group relative overflow-hidden rounded-[18px] border pt-[56.25%] ${
                isLight
                  ? "border-[#e6eaf1] bg-[#fbfcfe] shadow-[0_16px_42px_-34px_rgba(15,23,42,0.18)]"
                  : "border-[#22344b] bg-[#0c1a2d] shadow-[0_20px_48px_-36px_rgba(0,0,0,0.62)]"
              }`}>
                  <iframe 
                      src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=0&rel=0`} 
                      title="YouTube video player"
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                  ></iframe>
              </div>
              
              {/* Video Info Card */}
              <div className={`rounded-[18px] border p-6 ${
                isLight ? "border-[#e6eaf1] bg-[#fcfdff]" : "border-[#22344b] bg-[#0c1a2d]"
              }`}>
                  <div className="flex flex-col gap-3">
                      <h1 className={`text-[22px] font-bold leading-snug tracking-[-0.03em] ${isLight ? "text-[#111a3b]" : "text-white"}`}>
                          {currentVideo.title}
                      </h1>
                      <div className={`flex flex-wrap items-center gap-3 text-[13px] ${isLight ? "text-[#6f7a8f]" : "text-slate-400"}`}>
                          <span className={`font-bold ${isLight ? "text-[#26324a]" : "text-white"}`}>{currentVideo.channel}</span>
                          <span className={isLight ? "text-slate-300" : "text-slate-600"}>•</span>
                          <span>{currentVideo.views}</span>
                          <span className={isLight ? "text-slate-300" : "text-slate-600"}>•</span>
                          <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${
                            isLight ? "border-blue-100 bg-blue-50 text-blue-600" : "border-sky-400/20 bg-sky-400/10 text-sky-300"
                          }`}>
                              {currentVideo.icon} {currentVideo.category}
                          </span>
                      </div>
                  </div>
              </div>
          </div>

          {/* RIGHT: Playlist Sidebar */}
          <div className="lg:col-span-1 flex flex-col h-full">
              <div className={`flex h-full max-h-[490px] flex-col overflow-hidden rounded-[18px] border md:max-h-[515px] ${
                isLight
                  ? "border-[#e6eaf1] bg-white shadow-[0_10px_30px_-28px_rgba(15,23,42,0.22)]"
                  : "border-[#22344b] bg-[#0c1a2d] shadow-[0_18px_42px_-34px_rgba(0,0,0,0.55)]"
              }`}>
                  
                  {/* Playlist Header */}
                  <div className={`flex items-center justify-between border-b px-5 py-4 ${
                    isLight ? "border-[#edf0f4] bg-[#fbfcfe]" : "border-[#22344b] bg-[#0f1d31]"
                  }`}>
                      <h3 className={`flex items-center gap-2 text-[15px] font-bold ${isLight ? "text-[#111a3b]" : "text-white"}`}>
                          Up Next
                      </h3>
                      <span className={`rounded-md px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
                        isLight ? "bg-slate-100 text-slate-400" : "bg-white/[0.06] text-slate-500"
                      }`}>Autoplay</span>
                  </div>

                  {/* Video List */}
                  <div className="overflow-y-auto p-3 space-y-2 flex-1 custom-scrollbar">
                      {videos.map((video) => (
                          <div 
                              key={video.id}
                              onClick={() => setCurrentVideo(video)}
                              className={`group flex cursor-pointer gap-3.5 rounded-xl border p-2.5 transition-all duration-300 ${
                                  currentVideo.id === video.id 
                                  ? isLight
                                    ? 'border-blue-100 bg-blue-50/70'
                                    : 'border-[#2f4b68] bg-[#102139]'
                                  : isLight
                                    ? 'border-transparent bg-transparent hover:bg-slate-50'
                                    : 'border-transparent bg-transparent hover:bg-white/[0.03]'
                              }`}
                          >
                              {/* Thumbnail Container */}
                              <div className={`relative aspect-video w-28 shrink-0 overflow-hidden rounded-lg shadow-sm ${isLight ? "bg-slate-100" : "bg-[#0a1322]"}`}>
                                  <img 
                                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                                      alt={video.title} 
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                  />
                                  <div className="absolute bottom-1 right-1 bg-slate-950/80 text-white text-[10px] font-bold px-1 py-0.5 rounded flex items-center gap-1 backdrop-blur-xs">
                                      <Clock size={9} /> {video.duration}
                                  </div>
                                  
                                  {currentVideo.id === video.id && (
                                      <div className="absolute inset-0 flex items-center justify-center bg-blue-900/20 backdrop-blur-xs">
                                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff7218] text-white shadow-lg shadow-orange-500/25">
                                              <Play size={11} fill="currentColor" className="ml-0.5" />
                                          </div>
                                      </div>
                                  )}
                              </div>

                              {/* Meta Details */}
                              <div className="flex flex-col justify-center min-w-0">
                                  <h4 className={`mb-1 line-clamp-2 text-[13px] font-bold leading-snug transition-colors ${
                                      currentVideo.id === video.id
                                        ? isLight ? 'text-blue-600' : 'text-sky-300'
                                        : isLight ? 'text-slate-800 group-hover:text-[#111a3b]' : 'text-slate-200 group-hover:text-white'
                                  }`}>
                                      {video.title}
                                  </h4>
                                  <div className={`text-[11px] font-medium flex flex-col gap-0.5 ${isLight ? "text-slate-400" : "text-slate-500"}`}>
                                      <span>{video.channel}</span>
                                      <span className="opacity-80">{video.views}</span>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
                  
                  {/* CTA Footer */}
                  <div className={`border-t p-4 text-center ${isLight ? "border-[#edf0f4] bg-[#fbfcfe]" : "border-[#22344b] bg-[#0f1d31]"}`}>
                      <a 
                        href="https://www.youtube.com/@Senseofdata" 
                        target="_blank" 
                        rel="noreferrer" 
                        className={`block text-[11px] font-bold uppercase tracking-wider transition-colors ${
                          isLight ? "text-slate-400 hover:text-orange-600" : "text-slate-500 hover:text-orange-300"
                        }`}
                      >
                          View Full Channel
                      </a>
                  </div>
              </div>
          </div>

        </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubePanel;
