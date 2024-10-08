import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: rgba(30, 30, 30, 0.9);
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  width: 200px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    background-color: #2fc110;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
`;

const CharacterCard = ({ character, onClick }) => {
  return (
    <Card onClick={onClick}>
      <Image src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
    </Card>
  );
};

export default CharacterCard;
