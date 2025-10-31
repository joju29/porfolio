import React from 'react';

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
    image: "/images/Cyber Security and Privacy_241116_222542.pdf",
    issuer: "Cyber Security Institute"
  },
  {
    title: "Database and Integration Certificate",
    image: "/images/database and integration certificate.pdf",
    issuer: "Database Academy"
  },
  {
    title: "NASA Certificate",
    image: "/images/nasa certificate.pdf",
    issuer: "NASA"
  },
  {
    title: "TATA Cybersecurity Certificate",
    image: "/images/tata cybersecurity.pdf",
    issuer: "TATA"
  },
  {
    title: "Cloud InfoSys Certificate",
    image: "/images/cloudinfosys.pdf",
    issuer: "Cloud InfoSys"
  }
];

const Acomplishments = () => (
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
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
      gap: '3rem', 
      marginTop: '2rem',
      maxWidth: '1200px',
      margin: '2rem auto'
    }}>
      {certifications.map((cert, index) => (
        <div key={index} style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          borderRadius: '20px',
          padding: '2.5rem',
          textAlign: 'center',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(16px) saturate(180%)',
          position: 'relative',
          overflow: 'hidden',
          animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-15px) rotateX(5deg) scale(1.03)';
          e.currentTarget.style.boxShadow = '0 25px 50px rgba(99, 102, 241, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.4)';
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(236, 72, 153, 0.1))';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))';
        }}
        >
          <div style={{
            width: '100%',
            height: '200px',
            borderRadius: '10px',
            marginBottom: '1.5rem',
            background: 'linear-gradient(45deg, #f0f0f0, #e0e0e0)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            border: '2px solid rgba(13, 173, 181, 0.2)',
            cursor: 'pointer'
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
          <SectionText style={{ 
            fontSize: '1.6rem', 
            color: '#F8F8F8', 
            margin: '0 0 1rem 0',
            fontWeight: '600',
            lineHeight: '1.3'
          }}>
            {cert.title}
          </SectionText>
          <SectionText style={{ 
            fontSize: '1.2rem', 
            color: '#13ADC7', 
            margin: 0,
            fontWeight: '400',
            fontStyle: 'italic'
          }}>
            Issued by: {cert.issuer}
          </SectionText>
        </div>
      ))}
    </div>
    
    <SectionDivider/>
    
    <style jsx>{`
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

export default Acomplishments;