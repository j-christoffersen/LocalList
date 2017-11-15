import React from 'react';
import renderDom from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello React project</p>;
  }
}

renderDom.render(<App/>, document.getElementById('app'));