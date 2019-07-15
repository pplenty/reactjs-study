import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Keyword from "./view/Keyword";
import { Button } from 'antd/lib/radio';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/topics" component={Topics} />
        <Route exact path="/style" component={Home} />
        <Route exact path="/view/rank" component={Keyword} />
      </div>
    </Router>
  );
}

class Home extends Component {
  state = {
    data: [],
    isOpen: false,
    canFly: true,
  };

  // Mounting
  constructor(props) {
    super(props);
    /**
     * props
     * {
     *    history..
     *    location..
     *    match..
     *    staticContext..
     * }
     */
    console.log(props);
    console.log('constructor');
  }

  componentWillMount() {
    console.log(this.props);
    console.log('componentWillMount');
  }

  test = () => {
    console.log(this.state.isOpen);

    this.setState(
      {
        isOpen: true,
        data: [1, 2, 3],
      }
    );
    console.log(this.state.isOpen);

    console.log('test');
  }

  render() {
    console.log('render', this.props);
    return <>
      <h2>Home</h2>
      <div>
        <Button onClick={this.test}>TEST</Button>
      </div>
    </>;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  // Updating
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: " + JSON.stringify(nextProps, null, 2) + " " + JSON.stringify(nextState, null, 2));
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate: " + JSON.stringify(nextProps, null, 2) + " " + JSON.stringify(nextState, null, 2));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.isOpen);
    console.log("componentDidUpdate: " + JSON.stringify(prevProps, null, 2) + " " + JSON.stringify(prevState, null, 2));
  }

  // Unmounting
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}

function About() {
  return <h2>About</h2>;
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
        <Link to="/view/rank">Rank</Link>
      </li>
    </ul>
  );
}

export default App;