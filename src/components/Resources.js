import React, { Component } from 'react';

class Resources extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;

    if (isAuthenticated()) {
      return (
        <div className="App">
          <h1 className="center">
            {' '}
            Resources Page: Check out the resources below
          </h1>
          <ul>
            <li className="Link">
              Best way to make a todo list on pen and paper.
              <a
                style={{ color: 'black' }}
                href="https://blog.hubspot.com/sales/pen-and-paper-to-do-list"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <br />
                https://blog.hubspot.com/sales/pen-and-paper-to-do-list
              </a>
            </li>
            <br />
            <li className="Link">
              Wunderlist site.
              <a
                style={{ color: 'black' }}
                href="https://www.wunderlist.com/windows/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <br />
                https://www.wunderlist.com/windows/
              </a>
            </li>
            <br />
            <li className="Link">
              Todoist site
              <a
                style={{ color: 'black' }}
                href="https://todoist.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <br />
                https://todoist.com/
              </a>
            </li>
            <br />
            <li className="Link">
              8 ways to make a todo-list according to experts.
              <a
                style={{ color: 'black' }}
                href="https://www.themuse.com/advice/8-expertbacked-secrets-to-making-the-perfect-todo-list"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <br />
                https://www.themuse.com/advice/8-expertbacked-secrets-to-making-the-perfect-todo-list
              </a>
            </li>
            <br />
            <li className="Link">
              7 to-do list hacks for a more productive day.
              <a
                style={{ color: 'black' }}
                href="https://www.theladders.com/career-advice/7-to-do-list-hacks-thatll-help-you-be-more-productive-every-day"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <br />
                https://www.theladders.com/career-advice/7-to-do-list-hacks-thatll-help-you-be-more-productive-every-day
              </a>
            </li>
            <br />
          </ul>
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

export default Resources;
