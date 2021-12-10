import styled, {keyframes} from "styled-components";

export const MovieOrder = styled.p`
  font-size: 2em;
  text-align: center;
  font-weight: bold;
  margin: 0 0 20px 0;
  color: #ffdc06;
  transition: color .4s, filter .4s;
  `;

  const Glow = keyframes`
    from {
      filter: drop-shadow(0 0 3px #ffdc06);
    }
    50% {
      filter: drop-shadow(0 0 6px #ffdc06);
    }
    to {
      filter: drop-shadow(0 0 3px #ffdc06);
    }
  `;

export const Cover = styled.article`
  width: 175px;
  height: 250px;
  background: #3d3646;
  margin: 0 15px 15px 15px;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-flow: column;
  justify-content: center;
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, .1);
  transition: box-shadow .4s, transform .4s;
  &:hover {
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, .1);
    transform: scale(1.025);
  }
  &:hover ${MovieOrder} {
    color: #fff;
    filter: drop-shadow(0 0 3px #ff0606);
    animation: ${Glow} 2.5s linear infinite;
  }
`;

export const Title = styled.h2`
  font-size: 1em;
  text-align: center;
`