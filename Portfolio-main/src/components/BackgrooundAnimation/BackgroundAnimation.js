import React from 'react';

const BackgroundAnimation = () => (
  <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden' }}>
    {/* Main animated gradient background */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: `
        linear-gradient(135deg, #080c1c 0%, #0f172a 25%, #1e1b4b 50%, #312e81 75%, #1e1b4b 100%),
        radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 50% 100%, rgba(6, 182, 212, 0.08) 0%, transparent 60%)
      `,
      backgroundSize: '400% 400%, 600px 600px, 800px 800px, 1000px 1000px',
      animation: 'modernFlow 20s ease infinite'
    }} />
    
    {/* Floating orbs */}
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        style={{
          position: 'absolute',
          borderRadius: '50%',
          background: `linear-gradient(45deg, 
            ${i % 3 === 0 ? 'rgba(99, 102, 241, 0.4)' : 
              i % 3 === 1 ? 'rgba(236, 72, 153, 0.3)' : 'rgba(6, 182, 212, 0.35)'},
            transparent)`,
          backdropFilter: 'blur(20px)',
          width: `${60 + i * 20}px`,
          height: `${60 + i * 20}px`,
          left: `${15 + i * 12}%`,
          top: `${10 + i * 15}%`,
          animation: `float${i} ${8 + i * 2}s ease-in-out infinite`,
          filter: 'blur(1px)',
        }}
      />
    ))}
    
    {/* Geometric shapes */}
    <div style={{
      position: 'absolute',
      top: '20%',
      right: '10%',
      width: '200px',
      height: '200px',
      border: '1px solid rgba(99, 102, 241, 0.2)',
      borderRadius: '20px',
      animation: 'rotate 30s linear infinite',
      backdropFilter: 'blur(10px)',
    }} />
    
    <div style={{
      position: 'absolute',
      bottom: '20%',
      left: '10%',
      width: '150px',
      height: '150px',
      border: '2px solid rgba(236, 72, 153, 0.15)',
      borderRadius: '50%',
      animation: 'pulse 4s ease-in-out infinite',
    }} />

    <style jsx>{`
      @keyframes modernFlow {
        0%, 100% { background-position: 0% 50%, 25% 25%, 75% 75%, 50% 100%; }
        25% { background-position: 50% 25%, 75% 50%, 25% 25%, 75% 25%; }
        50% { background-position: 100% 75%, 50% 75%, 50% 50%, 25% 75%; }
        75% { background-position: 25% 100%, 25% 100%, 75% 25%, 100% 50%; }
      }
      
      @keyframes float0 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(180deg); } }
      @keyframes float1 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-30px) rotate(-180deg); } }
      @keyframes float2 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-25px) rotate(90deg); } }
      @keyframes float3 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-35px) rotate(-90deg); } }
      @keyframes float4 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(270deg); } }
      @keyframes float5 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-40px) rotate(-270deg); } }
      
      @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.1); opacity: 1; } }
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