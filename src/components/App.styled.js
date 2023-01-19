import styled from 'styled-components';

export const Container = styled.div`
  max-width: 680px;
  min-height: 680px;
  padding: 50px 25px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Readex Pro', sans-serif;
  background: #45546b;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 42px;
  color: #e7effa;
`;
export const MTitle = styled.h2`
  font-weight: 600;
  color: #cdbba7;
  font-size: 36px;
`;
