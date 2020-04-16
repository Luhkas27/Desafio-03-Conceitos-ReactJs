import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import RepositoryItem from '../../components/repository/item';
import Button from '../../components/button';

import * as S from './styles';

function RepositoriesPage() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/repositories').then((res) => {
      setRepositories(res.data);
    });
  }, []);

  async function handleAddRepository() {
    const res = await api.post('/repositories', {
      id: 1,
      url: 'http://github/com/luhkas27',
      title: `Repo ${Date.now()}`,
      techs: ['NodeJs, ReactJs, React Native'],
    });
    const repository = res.data;

    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
    await api.delete(`/repositories/${id}`, {});
    const repositoryId = repositories.findIndex(
      (repository) => repository.id === id
    );
    const list = repositories;

    repositories.splice(repositoryId, 1);
    setRepositories([...list]);
  }

  async function handleLikeRepository(id) {
    await api.post(`/repositories/${id}/like`, {});

    const repositoryLike = repositories.find(
      (repository) => repository.id === id
    );

    repositoryLike += 1;

    setRepositories([...repositoryLike]);
  }

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <ul data-testid="repository-list">
        {repositories.map((repository) => (
          <RepositoryItem
            key={repository.id}
            title={repository.title}
            techs={repository.techs}
            remove={() => handleRemoveRepository(repository.id)}
            like={() => handleLikeRepository(repository.id)}
          />
        ))}
      </ul>
      <Button
        title="Adicionar"
        click={handleAddRepository}
        buttonColor={false}
      />
    </S.Container>
  );
}

export default RepositoriesPage;
