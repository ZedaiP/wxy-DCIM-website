import React, { useState, useEffect } from 'react';
import { Heart, Stars, Music, Camera, Gift, MessageCircle, Sparkles, Coffee } from 'lucide-react';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('gallery');
  const [showConfetti, setShowConfetti] = useState(false);
  
  // 获取GitHub Pages的基础路径
  const basePath = window.location.pathname.includes('/wxy-DCIM-website') ? '/wxy-DCIM-website' : '';

  // 图片数据
  const photos = [
    {
      id: 1,
      src: `${basePath}/1.jpg`,
      caption: "Sweet & Lovely",
      desc: "最喜欢你温柔的笑眼，像星星一样亮晶晶 ✨",
      rotate: "rotate-2"
    },
    {
      id: 2,
      src: `${basePath}/2.jpg`,
      caption: "Winter Fairy",
      desc: "毛茸茸的冬天，戳戳你的脸颊，软乎乎的~ ❄️",
      rotate: "-rotate-1"
    },
    {
      id: 3,
      src: `${basePath}/4.jpg`,
      caption: "Graduation",
      desc: "毕业快乐！未来的每一天都要闪闪发光 🎓",
      rotate: "rotate-3"
    },
    {
      id: 4,
      src: `${basePath}/3.jpg`,
      caption: "Cheeky Mood",
      desc: "可可爱爱没有脑袋，捏捏脸！🤪",
      rotate: "-rotate-2"
    }
  ];

  // 简单的五彩纸屑效果逻辑
  const handleLoveClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  return (
    <div className="min-h-screen bg-pink-50 text-slate-700 font-sans selection:bg-pink-200">
      {/* 动态背景装饰 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-10 text-pink-200 animate-pulse delay-700">
          <Heart size={48} fill="currentColor" />
        </div>
        <div className="absolute top-1/3 right-10 text-pink-200 animate-bounce delay-1000">
          <Stars size={32} />
        </div>
        <div className="absolute bottom-20 left-1/4 text-purple-100 animate-spin-slow">
          <Sparkles size={56} />
        </div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 md:py-12">
        
        {/* Header / Hero Section */}
        <header className="text-center mb-16 relative">
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur opacity-75 animate-pulse"></div>
            <div className="relative bg-white p-2 rounded-full shadow-xl mb-6 inline-block">
               <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-pink-100">
                 <img src={`${basePath}/1.jpg`} alt="Avatar" className="w-full h-full object-cover" />
               </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-lg border border-pink-100">
              <Heart className="text-red-400 fill-red-400 animate-beat" size={24} />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Girlfriend</span>
          </h1>
          <p className="text-gray-500 font-medium tracking-wide uppercase text-xs md:text-sm">
             The cutest person in the world 
          </p>
        </header>

        {/* Navigation Tabs (Pill Shape) */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/60 backdrop-blur-md p-1.5 rounded-full shadow-sm border border-white/50 flex space-x-2">
            {[
              { id: 'gallery', icon: Camera, label: 'Moments' },
              { id: 'about', icon: Gift, label: 'About Her' },
              { id: 'note', icon: MessageCircle, label: 'Love Note' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md transform scale-105'
                    : 'text-gray-500 hover:bg-white hover:text-pink-400'
                }`}
              >
                <tab.icon size={16} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <main className="min-h-[400px]">
          
          {/* Gallery View */}
          {activeTab === 'gallery' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 perspective-1000">
              {photos.map((photo, index) => (
                <div 
                  key={photo.id}
                  className={`group relative bg-white p-3 md:p-4 rounded-2xl shadow-lg border border-pink-50 transition-all duration-500 hover:z-20 hover:scale-105 ${photo.rotate} hover:rotate-0`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 mb-4 relative">
                    <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/10 transition-colors z-10"></div>
                    <img 
                      src={photo.src} 
                      alt={photo.caption} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="text-center pb-2">
                    <h3 className="font-bold text-gray-800 text-lg font-serif">{photo.caption}</h3>
                    <p className="text-gray-500 text-sm mt-1">{photo.desc}</p>
                  </div>
                  {/* Decorative tape effect */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-pink-200/80 backdrop-blur-sm shadow-sm rotate-1 z-20"></div>
                </div>
              ))}
            </div>
          )}

          {/* About View */}
          {activeTab === 'about' && (
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/60 animate-fade-in-up">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                    <Sparkles className="text-yellow-400 mr-2" /> 
                    关于可爱的她
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-pink-50 rounded-2xl border border-pink-100">
                      <div className="bg-white p-2 rounded-full mr-4 shadow-sm text-pink-500">
                         <Coffee size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-700">她的超能力</h4>
                        <p className="text-sm text-gray-600 mt-1">只要笑一笑，就能治愈所有的不开心，拥有让冬天变温暖的魔法。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-4 bg-purple-50 rounded-2xl border border-purple-100">
                      <div className="bg-white p-2 rounded-full mr-4 shadow-sm text-purple-500">
                         <Music size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-700">性格关键词</h4>
                        <p className="text-sm text-gray-600 mt-1">温柔、俏皮、偶尔迷糊但超级可爱、小太阳。</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                   <div className="relative w-64 h-64">
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full animate-spin-slow blur-xl opacity-60"></div>
                      <img src={`${basePath}/1.jpg`} className="relative w-full h-full object-cover rounded-full border-8 border-white shadow-2xl" alt="Profile" />
                   </div>
                </div>
              </div>
            </div>
          )}

          {/* Note View */}
          {activeTab === 'note' && (
            <div className="max-w-2xl mx-auto animate-fade-in-up">
              <div className="bg-[#fff9c4] text-gray-800 p-8 rounded-sm shadow-lg transform rotate-1 border-t-8 border-[#f0e68c] relative">
                {/* Pin */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                   <div className="w-4 h-4 rounded-full bg-red-400 shadow-md border-2 border-white"></div>
                   <div className="w-0.5 h-4 bg-gray-400 mx-auto opacity-50"></div>
                </div>

                <h3 className="text-xl font-bold mb-4 font-serif text-center">To My Dearest Girl</h3>
                <div className="space-y-4 leading-relaxed font-serif text-lg opacity-90">
                  <p>亲爱的，</p>
                  <p>
                    看着这些照片，我总能想起我们在一起的每一个瞬间。
                    不管是你戴着学士帽自信的样子，还是冬天缩在毛领里可爱的样子，
                    或者是你搞怪捏脸的样子，我都好喜欢。
                  </p>
                  <p>
                    想为你做一个小网站，把这些美好的瞬间都存起来。
                    希望你每天都能像照片里一样开心，
                    我会一直陪着你，做你最坚实的后盾。
                  </p>
                  <p className="text-right mt-8 font-bold">—— 爱你的男朋友</p>
                </div>
                
                <div className="mt-8 flex justify-center">
                   <button 
                     onClick={handleLoveClick}
                     className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-full shadow-md transition-colors flex items-center space-x-2 active:scale-95"
                   >
                     <Heart size={20} className={showConfetti ? "animate-ping" : ""} fill="currentColor" />
                     <span>点我发送爱心</span>
                   </button>
                </div>
              </div>
            </div>
          )}

        </main>
        
        {/* Footer */}
        <footer className="text-center mt-20 pb-10 text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Made with ❤️ for Her</p>
        </footer>

      </div>
      
      {/* Confetti Overlay (Simplified CSS impl for demo) */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="text-6xl animate-bounce">💖</div>
        </div>
      )}
    </div>
  );
};

export default App;