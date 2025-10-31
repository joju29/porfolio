// 🎨 Background Options for Your Portfolio

// Option 1: Current - Animated Gradient Mesh (Already Applied)

// Option 2: Floating Particles Background
const FloatingParticles = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,  
    background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)',
    overflow: 'hidden'
  }}>
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        style={{
          position: 'absolute',
          width: Math.random() * 4 + 'px',
          height: Math.random() * 4 + 'px',
          background: `hsl(${Math.random() * 60 + 180}, 70%, 70%)`,
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          borderRadius: '50%',
          animation: `float ${Math.random() * 20 + 10}s linear infinite`,
          animationDelay: Math.random() * 20 + 's'
        }}
      />
    ))}
    <style jsx>{`
      @keyframes float {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
      }
    `}</style>
  </div>
);

// Option 3: Geometric Pattern Background
const GeometricPattern = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    background: `
      linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 76%, transparent 77%, transparent),
      linear-gradient(rgba(255,255,255,0.05) 50%, transparent 50%),
      linear-gradient(135deg, #0f0f23 25%, #1a1a2e 25%, #1a1a2e 50%, #0f0f23 50%, #0f0f23 75%, #1a1a2e 75%, #1a1a2e)
    `,
    backgroundSize: '50px 50px, 50px 50px, 100px 100px'
  }}
  />
);

// Option 4: Waves Background
const WavesBackground = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)'
  }}>
    <svg style={{position: 'absolute', bottom: 0, left: 0, width: '100%', height: '200px'}}>
      <path d="M0,160 Q150,120 300,140 T600,130 L600,200 L0,200 Z" fill="rgba(17,153,142,0.3)">
        <animate attributeName="d" dur="10s" repeatCount="indefinite"
          values="M0,160 Q150,120 300,140 T600,130 L600,200 L0,200 Z;
                  M0,140 Q150,180 300,150 T600,160 L600,200 L0,200 Z;
                  M0,160 Q150,120 300,140 T600,130 L600,200 L0,200 Z"
        />
      </path>
    </svg>
  </div>
);

// Option 5: Matrix-style Digital Rain
const MatrixRain = () => {
  const chars = '010101アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      background: '#000',
      overflow: 'hidden'
    }}>
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: Math.random() * 100 + '%',
            color: '#0f4',
            fontSize: '14px',
            fontFamily: 'monospace',
            animation: `rain ${Math.random() * 5 + 5}s linear infinite`,
            animationDelay: Math.random() * 5 + 's'
          }}
        >
          {chars.charAt(Math.floor(Math.random() * chars.length))}
        </div>
      ))}
      <style jsx>{`
        @keyframes rain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export { FloatingParticles, GeometricPattern, WavesBackground, MatrixRain };