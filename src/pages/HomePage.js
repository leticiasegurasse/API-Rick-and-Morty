import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "../components/CharacterCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 2px solid #39ff14;
  border-radius: 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: rgba(30, 30, 30, 0.9);
  color: #ffff;
  width: 250px;
  outline: none;

  &:focus {
    border-color: #2fc110;
  }

  &::placeholder {
    color: #ffff;
    opacity: 1;
  }
`;

const FilterSelect = styled.select`
  padding: 12px;
  margin-right: 10px;
  font-size: 16px;
  border-radius: 20px;
  background-color: rgba(30, 30, 30, 0.9);
  color: #ffff;
  margin-left: 10px;
  margin-bottom: 10px;
  border: 2px solid #39ff14;
  width: 180px;
  outline: none;

  &:focus {
    border-color: #2fc110;
  }
`;

const PaginationButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: #39ff14;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2fc110;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const MessageBox = styled.div`
  background-color: rgba(30, 30, 30, 0.9);
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Message = styled.p`
  color: white;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const PageIndicator = styled.div`
  background-color: rgba(30, 30, 30, 0.9);
  padding: 10px 20px;
  border-radius: 20px;
  color: #ffff;
  font-size: 18px;
  font-weight: bold;
  margin: 0 auto;
  display: inline-block;
  text-align: center;
`;

class HomePage extends Component {
  state = {
    personagens: [],
    species: [],
    loading: true,
    error: null,
    searchQuery: "",
    selectedSpecies: "",
    selectedStatus: "", 
    noResults: false,
    page: 1, 
    totalPages: 1,
  };

  componentDidMount() {
    this.BuscarPersonagens();
    this.BuscarEspecies();
  }

  // Função que busca os personagens com paginação e filtros
  BuscarPersonagens = (query = "", species = "", status = "", page = 1) => {
    this.setState({ loading: true, noResults: false, error: null });

    let apiUrl = `https://rickandmortyapi.com/api/character?page=${page}&name=${query}&species=${species}&status=${status}`;

    axios
      .get(apiUrl)
      .then((response) => {
        if (response.data.results.length === 0) {
          this.setState({ noResults: true, loading: false });
        } else {
          this.setState({
            personagens: response.data.results,
            loading: false,
            page: page,
            totalPages: Math.ceil(response.data.info.count / 15), // Calcula o total de páginas baseado no número total de personagens
          });
        }
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  };

  BuscarEspecies = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        const personagens = response.data.results;
        const especiesUnicas = [
          ...new Set(personagens.map((character) => character.species)),
        ];
        this.setState({ species: especiesUnicas });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  searchChange = (e) => {
    const value = e.target.value;
    this.setState({ searchQuery: value }, () => {
      this.BuscarPersonagens(
        this.state.searchQuery,
        this.state.selectedSpecies,
        this.state.selectedStatus,
        1
      );
    });
  };

  especiesChange = (e) => {
    this.setState({ selectedSpecies: e.target.value }, () => {
      this.BuscarPersonagens(
        this.state.searchQuery,
        this.state.selectedSpecies,
        this.state.selectedStatus,
        1
      );
    });
  };

  statusChange = (e) => {
    this.setState({ selectedStatus: e.target.value }, () => {
      this.BuscarPersonagens(
        this.state.searchQuery,
        this.state.selectedSpecies,
        this.state.selectedStatus,
        1
      );
    });
  };

  goToNextPage = () => {
    const { page, searchQuery, selectedSpecies, selectedStatus } = this.state;
    this.BuscarPersonagens(
      searchQuery,
      selectedSpecies,
      selectedStatus,
      page + 1
    );
  };

  goToPreviousPage = () => {
    const { page, searchQuery, selectedSpecies, selectedStatus } = this.state;
    this.BuscarPersonagens(
      searchQuery,
      selectedSpecies,
      selectedStatus,
      page - 1
    );
  };

  render() {
    const {
      personagens,
      loading,
      searchQuery,
      species,
      selectedSpecies,
      selectedStatus,
      noResults,
      page,
      totalPages,
    } = this.state;

    const { navigateTo } = this.props;

    return (
      <>
        <SearchContainer>
          <SearchInput
            type="text"
            value={searchQuery}
            onChange={this.searchChange}
            placeholder="Procurar personagens..."
          />
          <FilterSelect value={selectedSpecies} onChange={this.especiesChange}>
            <option value="">All Species</option>
            {species.map((speciesName) => (
              <option key={speciesName} value={speciesName}>
                {speciesName}
              </option>
            ))}
          </FilterSelect>

          {/* Filtro de Status (Dead ou Alive) */}
          <FilterSelect value={selectedStatus} onChange={this.statusChange}>
            <option value="">All Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </FilterSelect>
        </SearchContainer>

        <Container>
          {noResults ? (
            <MessageBox>
              <Message>Naum tem</Message>
            </MessageBox>
          ) : (
            personagens.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                onClick={() => navigateTo("details", character.id)}
              />
            ))
          )}
        </Container>

        {loading && <p>Carregando personagens...</p>}

        {!loading && (
          <div style={{ textAlign: "center", margin: "20px" }}>
            <PaginationButton
              onClick={this.goToPreviousPage}
              disabled={page === 1}
            >
              Página Anterior
            </PaginationButton>

            <PaginationButton
              onClick={this.goToNextPage}
              disabled={page === totalPages}
            >
              Próxima Página
            </PaginationButton>

            {/* Exibindo o número da página atual*/}
            <PageIndicator>
              Página {page} de {totalPages}
            </PageIndicator>
          </div>
        )}
      </>
    );
  }
}

export default HomePage;
