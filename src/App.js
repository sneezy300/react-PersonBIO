import React, { Component } from 'react';
import BookApp from './components/BookApp';
import PersonBio from './components/PersonBio';

class App extends Component {
  render() {
    return (
      <div>
        <PersonBio />
        <BookApp />

      </div>
    );
  }
}
export default App;
