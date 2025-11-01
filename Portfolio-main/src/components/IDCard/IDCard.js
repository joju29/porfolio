import React, { useState } from 'react';
import { 
  IDCardContainer, 
  IDCardButton, 
  IDCardModal, 
  IDCardContent, 
  IDCardHeader, 
  IDCardBody,
  ProfileImage,
  DetailRow,
  DetailLabel,
  DetailValue,
  CloseButton
} from './IDCardStyles';

const IDCard = ({ showCard = false, setShowCard = () => {}, showButton = true }) => {
  const [internalShowCard, setInternalShowCard] = useState(false);
  
  // Use external state if provided, otherwise use internal state
  const isCardVisible = showCard || internalShowCard;
  const handleSetShowCard = setShowCard !== (() => {}) ? setShowCard : setInternalShowCard;

  const userDetails = {
    name: "Joju Sibi",
    gender: "Male", 
    role: "Full Stack Developer",
    image: "/images/WhatsApp Image 2025-11-01 at 09.39.35_947e309e.jpg",
    department: "Software Engineering",
    github: "github.com/joju29",
    specialization: "Angular • PHP • Java • MySQL"
  };

  return (
    <>
      {/* View Details Button - only show if showButton is true */}
      {showButton && (
        <IDCardButton onClick={() => handleSetShowCard(true)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
          </svg>
          View Details
        </IDCardButton>
      )}

      {/* ID Card Modal */}
      {isCardVisible && (
        <IDCardModal onClick={() => handleSetShowCard(false)}>
          <IDCardContainer onClick={(e) => e.stopPropagation()}>
            <IDCardHeader>
              <h3>Developer ID Card</h3>
              <CloseButton onClick={() => handleSetShowCard(false)}>×</CloseButton>
            </IDCardHeader>
            
            <IDCardContent>
              <IDCardBody>
                <ProfileImage src={userDetails.image} alt={userDetails.name} />
                
                <div style={{ flex: 1 }}>
                  <DetailRow>
                    <DetailLabel>Name:</DetailLabel>
                    <DetailValue>{userDetails.name}</DetailValue>
                  </DetailRow>
                  
                  <DetailRow>
                    <DetailLabel>Gender:</DetailLabel>
                    <DetailValue>{userDetails.gender}</DetailValue>
                  </DetailRow>
                  
                  <DetailRow>
                    <DetailLabel>Role:</DetailLabel>
                    <DetailValue>{userDetails.role}</DetailValue>
                  </DetailRow>
                  
                  <DetailRow>
                    <DetailLabel>Department:</DetailLabel>
                    <DetailValue>{userDetails.department}</DetailValue>
                  </DetailRow>
                  
                  <DetailRow>
                    <DetailLabel>GitHub:</DetailLabel>
                    <DetailValue>{userDetails.github}</DetailValue>
                  </DetailRow>
                  
                  <DetailRow>
                    <DetailLabel>Specialization:</DetailLabel>
                    <DetailValue>{userDetails.specialization}</DetailValue>
                  </DetailRow>
                </div>
              </IDCardBody>
              
              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(244, 228, 188, 0.05))',
                borderRadius: '12px',
                textAlign: 'center',
                fontSize: '1.1rem',
                color: '#F4E4BC',
                opacity: 0.8
              }}>
                This card is valid for portfolio viewing purposes
              </div>
            </IDCardContent>
          </IDCardContainer>
        </IDCardModal>
      )}
    </>
  );
};

export default IDCard;