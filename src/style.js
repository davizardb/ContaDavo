import styled from 'styled-components';

export const Title = styled.h1`
  color: #32b8bf;
`;

export const Div = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
  position:absolute;
  text-align:center;
  `;

export const Img = styled.img`
  width: 15.5%;
  transform: ${props => (props.davo ? 'scaleX(-1)' : 'scaleX(1)' )};
`;

export const Counter = styled.h1`
  margin-top: 1.5rem;
  color: ${props => (props.davo ? '#32b8bf' :  'hsl(0, 82%, 49%)')};
`;

// export const counterButton = styled.button`
//   background: #0b42c2;
//   color: #fff;
//   border: 0;
//   padding: 10px 15px;
//   cursor: pointer;
//   margin-top: 15px;
//   font-weight: bold;
//   font-size: 14px;
// `;