import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 90%;
    padding: 0 1rem;
    min-height: 70vh;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 85%;
    padding: 0 2rem;
    min-height: 75vh;
  }
`;
