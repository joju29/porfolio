import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(59, 130, 246, 0.2);
  text-align: center;
  width: 400px;
  background: rgba(30, 41, 59, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
    border: 1px solid rgba(59, 130, 246, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #ffffff;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #ffffff;
  font-family: 'Times New Roman', Times, serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#ffffff;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #ffffff;
font-size: 1.5rem;
`