import React, { Component } from 'react';
import axios from 'axios';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

import RepoForm from './RepoForm/repoForm';
import RepoTable from './RepoTable/RepoTable';

import './App.css';
import '../node_modules/grommet-css';

class App extends Component {

  constructor() {
      super();

      this.state = {
          searchQuery: '',
          query: '',
          repos: []
      };
  }

  getReposDataFromAPI = () => {
    // Search repos: https://developer.github.com/v3/search/#search-repositories
    axios.get(`https://api.github.com/search/repositories?q=${this.state.query}+user:teffcode&order=desc`)
      .then(result => {
        console.log(result.data.items)
        this.setState({
          repos: result.data.items
        });
      })
      .catch(err => {
        this.setState({
          repos: [],
        });
      });
  }  

  handleSearchFormSubmit = (searchFormValue) => {
    this.setState({
        query: searchFormValue,
        repos: []
    }, this.getReposDataFromAPI);
  }

  renderRepos(){
    return this.state.repos.map((_repo) => <td>{_repo.name}</td>)
  }

  render() {
    return (
      <div>
        <RepoForm
          onSubmit={this.handleSearchFormSubmit}
          loading={this.state.loading}
        />
        <RepoTable
          lenguage={this.state.repos.map((_repo) => <TableRow><td>{_repo.name}</td></TableRow>)}
          branch={this.state.repos.map((_repo) =><TableRow><td>{_repo.default_branch}</td></TableRow>)}
          git_url={this.state.repos.map((_repo) =><TableRow><td>{_repo.url}</td></TableRow>)}
          name={this.state.repos.map((_repo) =><TableRow><td>{_repo.name}</td></TableRow>)}
          description={this.state.repos.map((_repo) =><TableRow><td>{_repo.description}</td></TableRow>)}
        >
        </RepoTable>
      </div>
    );
  }
}

export default App;
