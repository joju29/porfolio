import React, { useEffect, useRef } from 'react';

import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 15, text: 'Projects Completed'},
  { number: 6, text: 'Certifications Earned', },
  { number: 3, text: 'Years of Experience', },
  { number: 8, text: 'Technologies Mastered', }
];

const certifications = [
  {
    title: "Data Analyst Certificate",
    image: "/images/data analyst cetificate coursera.jpeg",
    issuer: "Coursera"
  },
  {
    title: "Cyber Security and Privacy Certificate",
    image: "/images/Cyber Security and Privacy_241116_222542_page-0001.jpg",
    issuer: "Cyber Security Institute"
  },
  {
    title: "Database and Integration Certificate",
    image: "/images/database and integration certificate_page-0001.jpg",
    issuer: "Database Academy"
  },
  {
    title: "NASA Certificate",
    image: "/images/nasa certificate_page-0001.jpg",
    issuer: "NASA"
  },
  {
    title: "TATA Cybersecurity Certificate",
    image: "/images/tata cybersecurity_page-0001.jpg",
    issuer: "TATA"
  },
  {
    title: "Cloud InfoSys Certificate",
    image: "/images/cloudinfosys_page-0001.jpg",
    issuer: "Cloud InfoSys"
  }
];

const Acomplishments = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollDirection = 1; // 1 for right, -1 for left
    let isScrolling = true;
    let scrollSpeed = 1; // pixels per frame

    const autoScroll = () => {
      if (!isScrolling) return;

      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      
      if (scrollContainer.scrollLeft >= maxScrollLeft) {
        scrollDirection = -1; // Start scrolling left
      } else if (scrollContainer.scrollLeft <= 0) {
        scrollDirection = 1; // Start scrolling right
      }

      scrollContainer.scrollLeft += scrollDirection * scrollSpeed;
      
      requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll after a short delay
    const startDelay = setTimeout(() => {
      autoScroll();
    }, 2000);

    // Pause auto-scroll on hover
    const handleMouseEnter = () => {
      isScrolling = false;
    };

    const handleMouseLeave = () => {
      isScrolling = true;
      autoScroll();
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(startDelay);
      scrollContainer?.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Section>
      <SectionTitle>Achievements & Certifications</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{`${card.number}+`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
      
      <SectionTitle style={{ marginTop: '4rem', fontSize: '2.5rem' }}>Professional Certifications</SectionTitle>
      <div 
        ref={scrollRef}
        className="certificates-scroll"
        style={{ 
          display: 'flex',
          overflowX: 'auto',
          gap: '2rem',
          padding: '2rem 1rem',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(59, 130, 246, 0.5) rgba(0, 0, 0, 0.1)'
        }}>
        {certifications.map((cert, index) => (
          <div key={index} style={{
            minWidth: '300px',
            maxWidth: '300px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
          }}
          >
            <div style={{
              width: '100%',
              height: '220px',
              borderRadius: '15px',
              marginBottom: '1rem',
              overflow: 'hidden',
            border: '3px solid rgba(59, 130, 246, 0.3)',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(59, 130, 246, 0.2)',
              transition: 'all 0.3s ease'
            }}
            onClick={() => window.open(cert.image, '_blank')}
            >
              {cert.image.toLowerCase().endsWith('.pdf') ? (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  color: '#13ADC7',
                  textAlign: 'center'
                }}>
                  📄
                  <div style={{ fontSize: '1.2rem', marginTop: '10px', color: '#666' }}>
                    Click to view PDF
                  </div>
                </div>
              ) : (
                <>
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div style={{
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    color: '#13ADC7'
                  }}>
                    🏆
                  </div>
                </>
              )}
            </div>
                      <h3 style={{ 
            fontSize: '1.4rem', 
            color: '#3b82f6', 
            margin: '0 0 0.5rem 0',
            fontWeight: '600',
            lineHeight: '1.3'
          }}>
            {cert.title}
          </h3>
          <p style={{ 
            fontSize: '1rem', 
            color: '#94a3b8', 
            margin: 0,
            fontWeight: '400',
            opacity: 0.8
          }}>
            {cert.issuer}
          </p>
          </div>
        ))}
      </div>
      
      <SectionDivider/>
    
      <style jsx>{`
        .certificates-scroll::-webkit-scrollbar {
          height: 8px;
        }
        
        .certificates-scroll::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
        
      .certificates-scroll::-webkit-scrollbar-thumb {
        background: linear-gradient(90deg, #3b82f6, #1d4ed8);
        border-radius: 10px;
        transition: background 0.3s ease;
      }
      
      .certificates-scroll::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(90deg, #60a5fa, #3b82f6);
      }        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
          50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.6); }
        }
      `}</style>
    </Section>
  );
};

export default Acomplishments;