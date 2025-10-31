import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection style={{ 
        animation: 'heroFadeIn 1.2s ease-out',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50px',
          left: '-50px',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'pulse 4s ease-in-out infinite',
          zIndex: -1
        }} />
        
        <SectionTitle main center style={{ 
          animation: 'slideInLeft 0.8s ease-out 0.2s both',
          background: 'linear-gradient(135deg, #ffffff, #a78bfa, #ec4899)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundSize: '200% 200%',
          animation: 'slideInLeft 0.8s ease-out 0.2s both, gradientShift 3s ease infinite'
        }}>
          Hey, I am Joju Sibi <br />
          <span style={{ 
            color: '#6366f1',
            position: 'relative',
            display: 'inline-block'
          }}>
            Frontend Developer
            <span style={{
              position: 'absolute',
              bottom: '-5px',
              left: '0',
              width: '100%',
              height: '2px',
              background: 'linear-gradient(90deg, #6366f1, #ec4899)',
              animation: 'expandWidth 1s ease-out 1.5s both'
            }} />
          </span>
        </SectionTitle>
        
        <SectionText style={{ 
          animation: 'slideInLeft 0.8s ease-out 0.4s both',
          lineHeight: '1.7'
        }}>
        I'm a passionate Frontend Developer with expertise in modern web technologies. I create responsive, user-friendly applications using React, Angular, and other cutting-edge frameworks.
        </SectionText>
        
        <div style={{ animation: 'slideInLeft 0.8s ease-out 0.6s both' }}>
          <Button 
            onClick={() => window.location = 'https://github.com/joju29?tab=repositories'}
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              border: 'none',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.05)';
              e.target.style.boxShadow = '0 10px 25px rgba(99, 102, 241, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.2)';
            }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>View My Work</span>
            <span style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              transition: 'left 0.6s ease'
            }} />
          </Button>
        </div>
      </LeftSection>
    </Section>
    
    <style jsx>{`
      @keyframes heroFadeIn {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes slideInLeft {
        from { opacity: 0; transform: translateX(-50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      
      @keyframes gradientShift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      
      @keyframes expandWidth {
        from { width: 0; }
        to { width: 100%; }
      }
      
      @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.2); opacity: 0.4; }
      }
    `}</style>
  </>
);

export default Hero;