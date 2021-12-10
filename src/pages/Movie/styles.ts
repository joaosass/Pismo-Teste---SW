import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(0deg, transparent, rgba(0, 0, 0, .75));
`;

export const Controls = styled.div`
  position: fixed;
  top: 15px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  padding: 0 25px;
`;

export const ActionButton = styled.div`
  cursor: pointer;
`;