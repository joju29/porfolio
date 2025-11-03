import React, { useState } from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { Box, Boxes, BoxNum, BoxText } from '../Acomplishments/AcomplishmentsStyles';
import IDCard from '../IDCard/IDCard';

const aboutData = [
  { number: '3+', text: 'Years Experience'},
  { number: '15+', text: 'Projects Completed'},
  { number: '6+', text: 'Certifications'},
  { number: '8+', text: 'Technologies'}
];

const Hero = () => {
  const [showIDCard, setShowIDCard] = useState(false);

  return (
    <>
      <Section row nopadding>
        <LeftSection style={{ 
          animation: 'heroFadeIn 1.2s ease-out',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
        <div style={{
          position: 'absolute',
          top: '-50px',
          left: '-50px',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'pulse 4s ease-in-out infinite',
          zIndex: -1
        }} />
        
        <SectionTitle main center style={{ 
          animation: 'slideInLeft 0.8s ease-out 0.2s both',
          background: 'linear-gradient(135deg, #ffffff, #3b82f6, #1d4ed8)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundSize: '200% 200%',
          animation: 'slideInLeft 0.8s ease-out 0.2s both, gradientShift 3s ease infinite',
          fontSize: '3.5rem',
          fontWeight: '700',
          lineHeight: '1.1',
          marginBottom: '3rem'
        }}>
          Hello, I'm Joju Sibi
        </SectionTitle>

        <Boxes style={{ marginBottom: '3rem' }}>
          {aboutData.map((card, index) => (
            <Box key={index} style={{
              animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(30, 41, 59, 0.9))',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.3)';
              e.currentTarget.style.border = '1px solid rgba(59, 130, 246, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.border = '1px solid rgba(59, 130, 246, 0.2)';
            }}
            >
              <BoxNum style={{ 
                color: '#3b82f6',
                fontSize: '2.5rem',
                fontWeight: '700'
              }}>
                {card.number}
              </BoxNum>
              <BoxText style={{ 
                color: '#e2e8f0',
                fontSize: '1rem',
                fontWeight: '500'
              }}>
                {card.text}
              </BoxText>
            </Box>
          ))}
        </Boxes>

        {/* Professional Content Layout */}
        <div className="professional-layout" style={{
          animation: 'slideInLeft 0.8s ease-out 0.4s both',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '100%',
          maxWidth: '900px',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Left Content */}
          <div className="left-content" style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            <SectionText style={{
              lineHeight: '1.8',
              fontSize: '1.2rem',
              color: '#e2e8f0',
              margin: 0,
              textAlign: 'left'
            }}>
              A dedicated Full-Stack Developer specializing in modern web technologies, cloud solutions, and database management. Passionate about creating scalable applications that deliver exceptional user experiences.
            </SectionText>

            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '500',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                border: '1px solid rgba(59, 130, 246, 0.2)'
              }}>
                React & Next.js
              </span>
              <span style={{
                background: 'linear-gradient(135deg, #10b981, #059669)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '500',
                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}>
                Node.js & Express
              </span>
              <span style={{
                background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '500',
                boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
                border: '1px solid rgba(139, 92, 246, 0.2)'
              }}>
                Database Management
              </span>
            </div>

            <Button
              onClick={() => setShowIDCard(true)}
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                border: 'none',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '12px',
                boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
                cursor: 'pointer',
                width: 'fit-content',
                alignSelf: 'flex-start'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.6)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>View Professional Profile</span>
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

          {/* Right Side - Professional Download CV */}
          <div className="cv-card" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '1.5rem',
            minWidth: '280px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(30, 41, 59, 0.95) 100%)',
              backdropFilter: 'blur(15px)',
              borderRadius: '20px',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              padding: '2rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(16, 185, 129, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.2)';
            }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>
                📄
              </div>
              <h3 style={{
                color: '#ffffff',
                fontSize: '1.3rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                margin: 0
              }}>
                Resume
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
                margin: '0.5rem 0 1.5rem 0',
                lineHeight: '1.4'
              }}>
                Download my complete professional resume with experience and skills
              </p>
              <Button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Joju_Sibi_Resume.pdf';
                  link.download = 'Joju_Sibi_Resume.pdf';
                  link.click();
                }}
                style={{
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  border: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  borderRadius: '12px',
                  boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)',
                  cursor: 'pointer',
                  width: '100%'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px) scale(1.02)';
                  e.target.style.boxShadow = '0 12px 30px rgba(16, 185, 129, 0.6)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.4)';
                }}
              >
                <span style={{ position: 'relative', zIndex: 1 }}>Download CV</span>
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
          </div>
        </div>

      </LeftSection>
    </Section>
    
    {/* ID Card Component */}
    <IDCard showCard={showIDCard} setShowCard={setShowIDCard} showButton={false} />
    
    <style jsx>{`
      @media (max-width: 768px) {
        .professional-layout {
          flex-direction: column !important;
          text-align: center !important;
        }
        .cv-card {
          min-width: auto !important;
          align-items: center !important;
        }
        .left-content {
          align-items: center !important;
        }
      }
      
      @keyframes heroFadeIn {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes slideInLeft {
        from { opacity: 0; transform: translateX(-50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      
      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(60px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
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
};

export default Hero;