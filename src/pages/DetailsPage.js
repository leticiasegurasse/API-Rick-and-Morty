import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  margin: 20px auto;
  padding: 20px;
  text-align: center;
  background-color: rgba(30, 30, 30, 0.9);
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`;

const BackButton = styled.button`
  background-color: #39ff14;
  color: #000000;
  border: 2px #39ff14;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;

  &:hover {
    background-color: #2fc110;
  }
`;

const CharacterImage = styled.img`
  width: 200px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

class DetailsPage extends Component {
  state = {
    character: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    const { characterId } = this.props;
    axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then(response => {
        this.setState({ character: response.data, loading: false });
      })
      .catch(error => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { character, loading, error } = this.state;
    const { navigateTo } = this.props;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    return (
      <DetailsContainer>
        
        <CharacterImage src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Location: {character.location.name}</p>
        <BackButton onClick={() => navigateTo('home')}>Voltar</BackButton>
      </DetailsContainer>
    );
  }
}

export default DetailsPage;
