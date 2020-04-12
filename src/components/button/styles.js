import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ color }) => (color ? '#ca4949' : '#7159c1')};
  color: #fff;
  border: 0;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 15px;
  font-weight: bold;
  font-size: 14px;
`;
