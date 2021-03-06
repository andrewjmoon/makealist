import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated()) {
      return (
        <div className="App">
          <Button
            component={Link}
            variant="contained"
            color=""
            className="center"
            to="/home"
          >
            Home
          </Button>
          <br />
          <br />
          <Button
            component={Link}
            className="center"
            variant="contained"
            to="/about"
            color="primary"
          >
            About
          </Button>
          <br />
          <br />
          <Button
            component={Link}
            variant="contained"
            className="center"
            to="/postlist"
            color="primary"
          >
            Post List
          </Button>
          <br />
          <br />
          <Button
            component={Link}
            variant="contained"
            className="center"
            to="/postlist2"
            color="primary"
          >
            Post List 2
          </Button>
          <br />
          <br />
          <Button
            component={Link}
            variant="contained"
            className="center"
            to="/postlist3"
            color="primary"
          >
            Post List 3
          </Button>
          <br />
          <br />
          <Button
            component={Link}
            variant="contained"
            className="center"
            to="/postlist5"
            color="primary"
          >
            Post List 5
          </Button>
          <br />
          <br />
          <Button
            component={Link}
            variant="contained"
            className="center"
            to="/postinput"
            color="primary"
          >
            Post Input
          </Button>
          <br />
          <br />
          <Button
            component={Link}
            variant="contained"
            className="center"
            to="/listcomponent"
            color="primary"
          >
            Combined List/Input
          </Button>
          <br />
          <br />
          <Button
            component={Link}
            variant="contained"
            className="center"
            to="/pomodoro"
            color="primary"
          >
            Pomodoro Clock
          </Button>
          <br />
          <br />

          <Button
            component={Link}
            variant="contained"
            className="center"
            to="/resources"
            color="primary"
          >
            Resources
          </Button>
          <br />
        </div>
      );
    }
    return (
      <div className="container">
        <h4>
          You are not logged in! Please{' '}
          <a style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>
            Log In
          </a>{' '}
          to continue.
        </h4>
      </div>
    );
  }
}

export default Home;
