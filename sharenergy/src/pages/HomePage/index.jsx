import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nad";
import Search from "./Search";
import Repositories from "./Repositories";
import { getRepositories } from "../../services/api";

import "./styles.css";

const userId = "63cb066a690a414e3824f478";

const HomePage = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  const loadData = async (query = "") => {
    try {
      const response = await getRepositories(userId);
      setRepositories(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoadingError(true);
    }
  };

  useEffect(() => {
    (async () => await loadData())();
  }, []);

  const handleLogout = () => {
    console.log("logout");
  };

  const handleSearch = (query) => {
    console.log("query", query);
  };

  const handleDeleteName = (repositories) => {
    console.log("clear", repositories);
  };

  const handleNewName = (name) => {
    console.log("new name", name);
  };

  if (loadingError) {
    return (
      <div className="loading">
        Erro ao carregar os dados... <Link to="/login">Voltar</Link>
      </div>
    );
  }

  if (loading) {
    return <div className="loading">Carregando ...</div>;
  }

  return (
    <div id="main">
      <Nav onLogout={handleLogout} />
      <Search onSearch={handleSearch} />
      <Repositories
        repositories={repositories}
        onDeleteName={handleDeleteName}
        onNewName={handleNewName}
      />
    </div>
  );
};

export default HomePage;
