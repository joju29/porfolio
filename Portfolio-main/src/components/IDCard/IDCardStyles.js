import styled from 'styled-components';

export const IDCardButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(244, 228, 188, 0.1));
  border: 2px solid rgba(212, 175, 55, 0.3);
  color: #D4AF37;
  padding: 12px 20px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 8px 32px rgba(212, 175, 55, 0.2);

  &:hover {
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.3), rgba(244, 228, 188, 0.2));
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(212, 175, 55, 0.3);
    border-color: rgba(212, 175, 55, 0.5);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const IDCardModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const IDCardContainer = styled.div`
  background: linear-gradient(135deg, 
    rgba(28, 25, 23, 0.95), 
    rgba(41, 37, 36, 0.9)
  );
  border: 2px solid rgba(212, 175, 55, 0.3);
  border-radius: 20px;
  padding: 0;
  width: 95%;
  max-width: 700px;
  min-height: 500px;
  backdrop-filter: blur(20px);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(212, 175, 55, 0.2);
  animation: slideIn 0.4s ease;
  overflow: hidden;

  @keyframes slideIn {
    from { 
      opacity: 0; 
      transform: translateY(-50px) scale(0.9); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0) scale(1); 
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 95%;
    max-width: 500px;
    min-height: 450px;
  }
`;

export const IDCardHeader = styled.div`
  background: linear-gradient(135deg, 
    rgba(212, 175, 55, 0.2), 
    rgba(244, 228, 188, 0.1)
  );
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);

  h3 {
    color: #D4AF37;
    margin: 0;
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.5rem;
    
    h3 {
      font-size: 1.3rem;
    }
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #D4AF37;
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.1);
    transform: rotate(90deg);
  }
`;

export const IDCardContent = styled.div`
  padding: 2.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem;
  }
`;

export const IDCardBody = styled.div`
  display: flex;
  gap: 3rem;
  align-items: flex-start;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

export const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 20px;
  object-fit: cover;
  border: 4px solid rgba(212, 175, 55, 0.5);
  box-shadow: 0 12px 35px rgba(212, 175, 55, 0.3);
  flex-shrink: 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 140px;
    height: 140px;
  }
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 0;
  border-bottom: 1px solid rgba(212, 175, 55, 0.1);

  &:last-child {
    border-bottom: none;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 1rem 0;
  }
`;

export const DetailLabel = styled.span`
  color: #B8860B;
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  min-width: 120px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1rem;
  }
`;

export const DetailValue = styled.span`
  color: #F4E4BC;
  font-weight: 400;
  font-size: 1.2rem;
  text-align: right;

  @media ${(props) => props.theme.breakpoints.sm} {
    text-align: left;
    font-size: 1.1rem;
  }
`;