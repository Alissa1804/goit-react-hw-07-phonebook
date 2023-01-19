import styled from 'styled-components';

export const Input = styled.input`
  width: 167px;
  margin-left: 8px;
  font-family: inherit;
  font-weight: 200;
  font-size: 20px;
  background-color: transparent;
  border: 1px solid #bdd4f1;
  color: #bdd4f1;
  padding: 3px;
  &:focus {
    outline: 1px solid #bdd4f1;
  }
`;

export const Button = styled.button`
  color: #e7effa;
  font-family: inherit;
  font-weight: 200;
  font-size: 22px;
  min-width: 60px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  padding: 5px;
  align-self: stretch;
  &:hover {
    background-color: #bdd4f1;
    color: #121b28;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
  align-items: end;
`;
