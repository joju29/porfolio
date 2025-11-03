import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const ProfessionalSummary = styled.div`
  max-width: 1200px;
  margin: 4rem auto 5rem;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(30, 41, 59, 0.95) 100%);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  border: 1px solid rgba(59, 130, 246, 0.3);
  box-shadow: 0 20px 50px rgba(59, 130, 246, 0.1);
  
  @media ${props => props.theme.breakpoints.md} {
    margin: 3rem auto 4rem;
    padding: 2.5rem;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    margin: 2rem auto 3rem;
    padding: 2rem;
  }
`;

const TimelineContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  padding: 2rem;
  background: rgba(15, 23, 42, 0.3);
  border-radius: 20px;
  border: 1px solid rgba(59, 130, 246, 0.1);
  
  .timeline-line {
    @media ${props => props.theme.breakpoints.md} {
      left: 20px !important;
    }
  }
  
  .timeline-item {
    @media ${props => props.theme.breakpoints.md} {
      padding-left: 60px !important;
    }
    
    @media ${props => props.theme.breakpoints.sm} {
      padding-left: 50px !important;
    }
  }
  
  @media ${props => props.theme.breakpoints.md} {
    padding: 1.5rem;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  flex-direction: ${props => props.index % 2 === 0 ? 'row' : 'row-reverse'};
  
  @media ${props => props.theme.breakpoints.md} {
    flex-direction: column;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const TimelineContent = styled.div`
  width: 45%;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 41, 59, 0.95) 100%);
  backdrop-filter: blur(15px);
  border-radius: 16px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
  }
  
  @media ${props => props.theme.breakpoints.md} {
    width: 100%;
    margin-top: 2rem;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    padding: 1.5rem;
  }
`;

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about" style={{ padding: '5rem 0' }}>
      <SectionTitle style={{ 
        fontSize: '4rem', 
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, #ffffff, #3b82f6, #60a5fa)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        About My Professional Journey
      </SectionTitle>
      <SectionText style={{ 
        fontSize: '1.4rem', 
        maxWidth: '800px', 
        margin: '0 auto 3rem',
        lineHeight: '1.8',
        color: 'rgba(255, 255, 255, 0.9)'
      }}>
        Passionate Full-Stack Developer with expertise in modern web technologies. Dedicated to creating exceptional user experiences through clean code and innovative solutions that drive business success.
      </SectionText>
      
      {/* Professional Summary */}
      <ProfessionalSummary>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          {/* Left Side - About Content */}
          <div>
            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              About My Expertise
            </h3>
            <p style={{
              fontSize: '1.3rem',
              lineHeight: '1.9',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: '0 0 2rem 0',
              textAlign: 'justify'
            }}>
              I specialize in creating responsive, user-centric web applications using cutting-edge technologies. 
              My journey spans from mastering programming fundamentals to building sophisticated full-stack solutions 
              that deliver exceptional user experiences.
            </p>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              color: 'rgba(255, 255, 255, 0.8)',
              margin: '0 0 2rem 0',
              textAlign: 'justify'
            }}>
              I'm passionate about clean code, modern design patterns, scalable architecture, and continuous learning 
              in the ever-evolving world of web development. My approach combines technical expertise with creative 
              problem-solving to build applications that not only function flawlessly but also provide intuitive user experiences.
            </p>
          </div>

          {/* Right Side - Skills & Highlights */}
          <div>
            <h4 style={{
              fontSize: '1.8rem',
              fontWeight: '600',
              color: '#3b82f6',
              marginBottom: '2rem'
            }}>
              Core Competencies
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                background: 'rgba(59, 130, 246, 0.1)',
                padding: '1.5rem',
                borderRadius: '15px',
                border: '1px solid rgba(59, 130, 246, 0.2)'
              }}>
                <h5 style={{ color: '#60a5fa', fontSize: '1.2rem', margin: '0 0 1rem 0' }}>Frontend Excellence</h5>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: 0, fontSize: '1rem' }}>
                  React, Next.js, TypeScript, Modern CSS, Responsive Design, UI/UX Implementation
                </p>
              </div>
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '1.5rem',
                borderRadius: '15px',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}>
                <h5 style={{ color: '#10b981', fontSize: '1.2rem', margin: '0 0 1rem 0' }}>Backend Mastery</h5>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: 0, fontSize: '1rem' }}>
                  Node.js, Express, RESTful APIs, Database Design, Server Architecture
                </p>
              </div>
              <div style={{
                background: 'rgba(139, 92, 246, 0.1)',
                padding: '1.5rem',
                borderRadius: '15px',
                border: '1px solid rgba(139, 92, 246, 0.2)'
              }}>
                <h5 style={{ color: '#8b5cf6', fontSize: '1.2rem', margin: '0 0 1rem 0' }}>Cloud & DevOps</h5>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: 0, fontSize: '1rem' }}>
                  AWS, Azure, Docker, CI/CD, Git Version Control, Deployment Strategies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Responsive Styles */}
        <style jsx>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }
        `}</style>
      </ProfessionalSummary>

      {/* Professional Vertical Timeline */}
      <TimelineContainer>
        {/* Left Timeline Line */}
        <div className="timeline-line" style={{
          position: 'absolute',
          left: '30px',
          top: '0',
          bottom: '0',
          width: '3px',
          background: 'linear-gradient(180deg, #3b82f6 0%, #1d4ed8 50%, #3b82f6 100%)',
          borderRadius: '2px',
          zIndex: 1,
        }} />
        
        {TimeLineData.map((item, index) => (
          <div
            key={index}
            className="timeline-item"
            style={{
              position: 'relative',
              marginBottom: '4rem',
              paddingLeft: '100px',
            }}
          >
            {/* Timeline Dot */}
            <div style={{
              position: 'absolute',
              left: '18px',
              top: '20px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              border: '4px solid rgba(15, 23, 42, 1)',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
              zIndex: 2,
            }} />
            
            {/* Year Badge */}
            <div style={{
              position: 'absolute',
              left: '60px',
              top: '0',
              padding: '0.4rem 1rem',
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              color: 'white',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: '600',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
              zIndex: 3,
            }}>
              {item.year}
            </div>
            
            {/* Content Card */}
            <div style={{
              marginTop: '2.5rem',
              padding: '2.5rem',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(30, 41, 59, 0.95) 100%)',
              backdropFilter: 'blur(15px)',
              borderRadius: '12px',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              position: 'relative',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(8px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
            }}
            >
              {/* Left Border Accent */}
              <div style={{
                position: 'absolute',
                left: '0',
                top: '0',
                bottom: '0',
                width: '4px',
                background: `linear-gradient(180deg, 
                  ${index === 0 ? '#3b82f6' : 
                    index === 1 ? '#1d4ed8' :
                    index === 2 ? '#2563eb' :
                    index === 3 ? '#1e40af' : '#1e3a8a'} 0%, 
                  transparent 100%)`,
                borderRadius: '0 2px 2px 0',
              }} />
              
              {/* Content */}
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'rgba(255, 255, 255, 0.95)',
                margin: 0,
                paddingLeft: '0.5rem',
              }}>
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </TimelineContainer>
      
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
