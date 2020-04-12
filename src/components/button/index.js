import React from 'react';

import * as S from './styles';

const Button = ({ click, title, buttonColor }) => (
  <S.Button color={buttonColor ? 1 : 0} onClick={click}>
    {title}
  </S.Button>
);

export default Button;
