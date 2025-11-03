import React, { useState } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showVideo, setShowVideo] = useState({});

  const toggleVideo = (projectId) => {
    setShowVideo(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main style={{ textAlign: 'center', marginBottom: '1rem' }}>
        Featured Projects
      </SectionTitle>
      <SectionText style={{ 
        textAlign: 'center', 
        maxWidth: '600px', 
        margin: '0 auto 4rem auto',
        fontSize: '1.8rem',
        opacity: 0.9
      }}>
        Here are some of my recent projects that showcase my frontend development skills and creativity.
      </SectionText>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {projects.map((p, i) => {
          return (
            <div 
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '3rem',
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12), rgba(244, 228, 188, 0.08))',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                borderRadius: '20px',
                padding: '3rem',
                backdropFilter: 'blur(20px) saturate(180%)',
                boxShadow: '0 12px 40px rgba(28, 25, 20, 0.4), 0 4px 12px rgba(212, 175, 55, 0.1)',
                animation: `slideInUp 0.6s ease-out ${i * 0.2}s both`,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredProject === i ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                flexDirection: 'row',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Subtle moon glow effect */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-30%',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(139, 157, 195, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
                opacity: hoveredProject === i ? 1 : 0.5,
                transition: 'opacity 0.4s ease'
              }} />

              {/* Left Side - Content */}
              <div style={{ flex: 1, paddingRight: '2rem' }}>
                <TitleContent>
                  <HeaderThree 
                    style={{ 
                      background: 'linear-gradient(135deg, #F5F5DC, #F4E4BC, #D4AF37)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: '2.8rem',
                      marginBottom: '1.5rem',
                      textAlign: 'left',
                      fontWeight: 'bold',
                      letterSpacing: '1px'
                    }}
                  >
                    {p.title}
                  </HeaderThree>
                </TitleContent>

                <CardInfo 
                  className="card-info"
                  style={{ 
                    fontSize: '1.6rem',
                    lineHeight: '1.8',
                    margin: '1.5rem 0',
                    opacity: 0.9,
                    textAlign: 'justify'
                  }}
                >
                  {p.description}
                </CardInfo>

                {/* Tech Stack */}
                <div style={{ marginBottom: '2rem' }}>
                  <TitleContent style={{ fontSize: '1.6rem', marginBottom: '1rem', textAlign: 'left', color: '#F4E4BC' }}>
                    Technologies Used
                  </TitleContent>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    {p.tags.map((t, tagIndex) => {
                      return (
                        <Tag 
                          key={tagIndex}
                          style={{
                            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(184, 134, 11, 0.12))',
                            border: '1px solid rgba(212, 175, 55, 0.3)',
                            color: '#D4AF37',
                            padding: '0.8rem 1.2rem',
                            borderRadius: '12px',
                            fontSize: '1.3rem',
                            fontWeight: '500',
                            boxShadow: '0 2px 8px rgba(212, 175, 55, 0.1)',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {t}
                        </Tag>
                      );
                    })}
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ 
                  display: 'flex', 
                  gap: '1.5rem',
                  marginTop: '2rem'
                }}>
                  {p.video ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleVideo(p.id);
                      }}
                      style={{
                        background: 'linear-gradient(135deg, #32CD32, #228B22)',
                        color: 'white',
                        padding: '1rem 2rem',
                        borderRadius: '12px',
                        border: 'none',
                        fontSize: '1.4rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(50, 205, 50, 0.3)',
                        textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                      }}
                    >
                      🎬 Watch Demo
                    </button>
                  ) : (
                    <ExternalLinks 
                      href={p.visit}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: 'linear-gradient(135deg, #32CD32, #228B22)',
                        color: 'white',
                        padding: '1rem 2rem',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        fontSize: '1.4rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(50, 205, 50, 0.3)',
                        textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                      }}
                    >
                      🚀 Live Demo
                    </ExternalLinks>
                  )}
                  <ExternalLinks 
                    href={p.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
                      color: 'white',
                      padding: '1rem 2rem',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontSize: '1.4rem',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                      textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    💻 Source Code
                  </ExternalLinks>
                </div>
              </div>

              {/* Right Side - Media */}
              <div style={{ 
                flex: 1,
                position: 'relative', 
                height: '400px', 
                overflow: 'hidden',
                borderRadius: '20px',
                maxWidth: '500px'
              }}>
                {showVideo[p.id] && p.video ? (
                  <video 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderRadius: '20px'
                    }}
                    controls
                    autoPlay
                    muted
                    loop
                  >
                    <source src={p.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Img 
                    src={p.image} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                      transform: hoveredProject === i ? 'scale(1.05)' : 'scale(1)',
                      borderRadius: '20px'
                    }}
                  />
                )}
                
                {/* Video Toggle Button */}
                {p.video && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleVideo(p.id);
                    }}
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.9), rgba(184, 134, 11, 0.8))',
                      border: '2px solid rgba(245, 245, 220, 0.3)',
                      borderRadius: '50%',
                      width: '60px',
                      height: '60px',
                      color: 'white',
                      fontSize: '1.8rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(15px)',
                      boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                    }}
                  >
                    {showVideo[p.id] ? '🖼️' : '▶️'}
                  </button>
                )}
                
                {/* Project Number Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: 'linear-gradient(135deg, #D4AF37, #F4E4BC)',
                  color: '#2F2B28',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  boxShadow: '0 3px 12px rgba(212, 175, 55, 0.4)',
                  border: '2px solid rgba(245, 245, 220, 0.2)'
                }}>
                  {i + 1}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
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
      `}</style>
    </Section>
  );
};

export default Projects;