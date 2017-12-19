import React, { Component } from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stories:{},
      authors:[""],
    }
    this.articles= []
    this.handleThis.bind(this)
  }
  componentDidMount() {
    const newLinks = [];
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(res => res.json())
    .then(stories => {
      for (let i = 0; i < 10; i++) {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${stories[i]}.json?print=pretty`)
        .then(res => res.json())
        .then(article => newLinks.push(article))
        .then(() => {
          this.setState({
            links: newLinks,
            authors: []
          })
        })
      }
    })
  }
  handleThis = () => {
    let authorArr = []
    if(this.state.links.length === 10){
      return this.state.links.map((article) => {
        authorArr.push(article.by)
        this.setState({ authors: authorArr })
        return <li>article.by</li>
      })
    }
  }
  renderAuthors(){
    const mapper = this.state.authors.map((author) =>   <li>{author}</li>);
    return (
      <ul>{mapper}</ul>
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Click the Button Below To       Display TOP 10 Authors Of HACKERNEWS!
          </h1>
        </header>
        <div>
          <RaisedButton label="Display Authors"
            onClick={e => this.handleThis(e)}
          />
          <h1>
            {this.renderAuthors()}
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
