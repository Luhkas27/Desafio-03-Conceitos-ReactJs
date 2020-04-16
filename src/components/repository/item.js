import React from 'react';

import Button from '../button';

import * as S from './styles';

const RepositoryItem = ({ title, techs, remove, like }) => (
  <S.Item>
    <S.Title>{title}</S.Title>
    <S.Subtitle>
      Tecnogias: <S.Techs> {techs}</S.Techs>
    </S.Subtitle>
    <Button title="Remover" click={remove} buttonColor />
    <Button title="Like" click={like} buttonColor />
  </S.Item>
);

export default RepositoryItem;
