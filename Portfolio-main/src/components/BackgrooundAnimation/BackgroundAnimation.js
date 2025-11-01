import React from 'react';

const BackgroundAnimation = () => (
  <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden' }}>
    {/* Professional Lunar Gradient Background */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: `
        linear-gradient(180deg, #1C1917 0%, #292524 30%, #44403C 60%, #292524 100%),
        radial-gradient(ellipse at 20% 20%, rgba(212, 175, 55, 0.12) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 80%, rgba(244, 228, 188, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 50% 10%, rgba(245, 245, 220, 0.05) 0%, transparent 40%)
      `,
      backgroundSize: '100% 100%, 800px 600px, 600px 800px, 1200px 400px',
      animation: 'lunarFlow 25s ease infinite'
    }} />
    
    {/* Elegant Floating Moons */}
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        style={{
          position: 'absolute',
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, 
            ${i % 2 === 0 ? 'rgba(212, 175, 55, 0.15)' : 'rgba(244, 228, 188, 0.12)'}, 
            transparent 70%)`,
          border: `1px solid ${i % 2 === 0 ? 'rgba(212, 175, 55, 0.2)' : 'rgba(244, 228, 188, 0.15)'}`,
          backdropFilter: 'blur(25px)',
          width: `${80 + i * 25}px`,
          height: `${80 + i * 25}px`,
          left: `${10 + i * 18}%`,
          top: `${5 + i * 20}%`,
          animation: `lunarFloat${i} ${12 + i * 3}s ease-in-out infinite`,
          filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.1))',
        }}
      />
    ))}
    
    {/* Professional Constellation Lines */}
    <svg style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0.15
    }}>
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g stroke="rgba(212, 175, 55, 0.3)" strokeWidth="1" fill="none" filter="url(#glow)">
        <path d="M100,150 L250,200 L400,120 L550,180" style={{animation: 'drawPath 8s ease-in-out infinite'}} />
        <path d="M150,300 L300,250 L450,320 L600,280" style={{animation: 'drawPath 10s ease-in-out infinite 2s'}} />
        <path d="M50,450 L200,400 L350,480 L500,420" style={{animation: 'drawPath 12s ease-in-out infinite 4s'}} />
      </g>
      <g fill="rgba(245, 245, 220, 0.8)">
        <circle cx="100" cy="150" r="2" style={{animation: 'starTwinkle 4s ease-in-out infinite'}} />
        <circle cx="250" cy="200" r="1.5" style={{animation: 'starTwinkle 3s ease-in-out infinite 1s'}} />
        <circle cx="400" cy="120" r="2" style={{animation: 'starTwinkle 5s ease-in-out infinite 2s'}} />
        <circle cx="550" cy="180" r="1.5" style={{animation: 'starTwinkle 3.5s ease-in-out infinite 0.5s'}} />
      </g>
    </svg>
    
    {/* Elegant Geometric Elements */}
    <div style={{
      position: 'absolute',
      top: '15%',
      right: '8%',
      width: '160px',
      height: '160px',
      border: '1px solid rgba(212, 175, 55, 0.25)',
      borderRadius: '24px',
      animation: 'elegantRotate 40s linear infinite',
      backdropFilter: 'blur(15px)',
      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05), transparent)',
    }} />
    
    <div style={{
      position: 'absolute',
      bottom: '15%',
      left: '8%',
      width: '120px',
      height: '120px',
      border: '2px solid rgba(244, 228, 188, 0.2)',
      borderRadius: '50%',
      animation: 'lunarPulse 6s ease-in-out infinite',
      background: 'radial-gradient(circle, rgba(245, 245, 220, 0.03), transparent)',
    }} />
    
    {/* Subtle Particles */}
    {[...Array(12)].map((_, i) => (
      <div
        key={`particle-${i}`}
        style={{
          position: 'absolute',
          width: '3px',
          height: '3px',
          background: 'rgba(245, 245, 220, 0.6)',
          borderRadius: '50%',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `particleDrift${i % 4} ${15 + Math.random() * 10}s linear infinite`,
          filter: 'blur(0.5px)',
        }}
      />
    ))}

    <style jsx>{`
      @keyframes lunarFlow {
        0%, 100% { 
          background-position: 0% 0%, 20% 20%, 80% 80%, 50% 10%; 
          transform: scale(1);
        }
        25% { 
          background-position: 100% 0%, 60% 40%, 40% 60%, 70% 30%; 
          transform: scale(1.02);
        }
        50% { 
          background-position: 0% 100%, 80% 60%, 20% 40%, 30% 70%; 
          transform: scale(1);
        }
        75% { 
          background-position: 100% 100%, 40% 80%, 60% 20%, 90% 50%; 
          transform: scale(1.01);
        }
      }
      
      @keyframes lunarFloat0 { 0%, 100% { transform: translate(0px, 0px) rotate(0deg); } 50% { transform: translate(-15px, -25px) rotate(180deg); } }
      @keyframes lunarFloat1 { 0%, 100% { transform: translate(0px, 0px) rotate(0deg); } 50% { transform: translate(20px, -30px) rotate(-120deg); } }
      @keyframes lunarFloat2 { 0%, 100% { transform: translate(0px, 0px) rotate(0deg); } 50% { transform: translate(-25px, -20px) rotate(240deg); } }
      @keyframes lunarFloat3 { 0%, 100% { transform: translate(0px, 0px) rotate(0deg); } 50% { transform: translate(30px, -35px) rotate(-60deg); } }
      @keyframes lunarFloat4 { 0%, 100% { transform: translate(0px, 0px) rotate(0deg); } 50% { transform: translate(-20px, -40px) rotate(300deg); } }
      
      @keyframes elegantRotate { 
        from { transform: rotate(0deg) scale(1); } 
        50% { transform: rotate(180deg) scale(1.1); }
        to { transform: rotate(360deg) scale(1); } 
      }
      
      @keyframes lunarPulse { 
        0%, 100% { transform: scale(1); opacity: 0.6; border-width: 2px; } 
        50% { transform: scale(1.15); opacity: 1; border-width: 1px; } 
      }
      
      @keyframes starTwinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.5); }
      }
      
      @keyframes drawPath {
        0% { stroke-dasharray: 0, 1000; }
        50% { stroke-dasharray: 500, 500; }
        100% { stroke-dasharray: 1000, 0; }
      }
      
      @keyframes particleDrift0 { 0% { transform: translateY(0px) translateX(0px); } 100% { transform: translateY(-100vh) translateX(50px); } }
      @keyframes particleDrift1 { 0% { transform: translateY(0px) translateX(0px); } 100% { transform: translateY(-100vh) translateX(-30px); } }
      @keyframes particleDrift2 { 0% { transform: translateY(0px) translateX(0px); } 100% { transform: translateY(-100vh) translateX(20px); } }
      @keyframes particleDrift3 { 0% { transform: translateY(0px) translateX(0px); } 100% { transform: translateY(-100vh) translateX(-40px); } }
    `}</style>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.3 }}
    >
      <g opacity="0.15">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
          stroke="url(#paint0_radial)"
          id="path_0"
        />
        <path
          d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
          stroke="url(#paint1_radial)"
          id="path_1"
        />
        <path
          d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
          stroke="url(#paint2_radial)"
          id="path_2"
        />
      </g>
      <ellipse
        cx="295.027"
        cy="193.118"
        transform="translate(-295.027 -193.118)"
        rx="1.07306"
        ry="1.07433"
        fill="#945DD6"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </ellipse>
      <path
        d="M294.685 193.474L268.932 219.258"
        transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
        stroke="url(#paint3_linear)"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </path>
      <ellipse
        cx="295.027"
        cy="193.118"
        transform="translate(-295.027 -193.118)"
        rx="1.07306"
        ry="1.07433"
        fill="#46737"
      >
        <animateMotion
          dur="5s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </ellipse>
      <path
        d="M294.685 193.474L268.932 219.258"
        transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
        stroke="url(#paint7_linear)"
      >
        <animateMotion
          dur="5s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </path>
      <ellipse
        cx="476.525"
        cy="363.313"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
        fill="#945DD6"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M476.171 362.952L450.417 337.168"
        transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
        stroke="url(#paint4_linear)"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <ellipse
        cx="382.164"
        cy="155.029"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-382.164 -155.029) rotate(90 382.164 155.029)"
        fill="#F46737"
      >
        <animateMotion
          dur="10s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M381.81 154.669L356.057 128.885"
        transform="translate(-381.81 -154.669) rotate(-45 381.81 154.669)"
        stroke="url(#paint5_linear)"
      >
        <animateMotion
          dur="10s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <ellipse
        cx="333.324"
        cy="382.691"
        rx="1.07306"
        ry="1.07433"
        transform="translate(-333.324 -382.691) rotate(-180 333.324 382.691)"
        fill="#F46737"
      >
        <animateMotion
          dur="5s"
          begin="0"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_1" />
        </animateMotion>
      </ellipse>
      <path
        d="M333.667 382.335L359.42 356.551"
        transform="scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)"
        stroke="url(#paint6_linear)"
      >
        <animateMotion
          dur="5s"
          begin="0"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_1" />
        </animateMotion>
      </path>
      <ellipse
        cx="165.524"
        cy="93.9596"
        rx="1.07306"
        ry="1.07433"
        transform="translate(-165.524 -93.9596)"
        fill="#F46737"
      >
        <animateMotion
          dur="10s"
          begin="3"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M165.182 94.3159L139.429 120.1"
        transform="translate(-165.182 -94.3159) rotate(45 165.182 94.3159)"
        stroke="url(#paint7_linear)"
      >
        <animateMotion
          dur="10s"
          begin="3"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <ellipse
        cx="476.525"
        cy="363.313"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
        fill="#13ADC7"
      >
        <animateMotion
          dur="12s"
          begin="4"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M476.171 362.952L450.417 337.168"
        transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
        stroke="url(#paint11_linear)"
      >
        <animateMotion
          dur="12s"
          begin="4"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0.333333" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0.333333" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0.333333" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint3_linear"
          x1="295.043"
          y1="193.116"
          x2="269.975"
          y2="218.154"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#945DD6" />
          <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="476.529"
          y1="363.31"
          x2="451.461"
          y2="338.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#945DD6" />
          <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="382.168"
          y1="155.027"
          x2="357.1"
          y2="129.989"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear"
          x1="333.309"
          y1="382.693"
          x2="358.376"
          y2="357.655"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear"
          x1="165.54"
          y1="93.9578"
          x2="140.472"
          y2="118.996"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint8_linear"
          x1="414.367"
          y1="301.156"
          x2="439.435"
          y2="276.118"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint9_linear"
          x1="515.943"
          y1="288.238"
          x2="541.339"
          y2="291.454"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint10_linear"
          x1="117.001"
          y1="230.619"
          x2="117.36"
          y2="258.193"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#945DD6" />
          <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint11_linear"
          x1="476.529"
          y1="363.31"
          x2="451.461"
          y2="338.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default BackgroundAnimation;