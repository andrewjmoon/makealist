import React from 'react';
import PostList from './PostList';
import PostList3 from './PostList3';
import NewPost from './NewPost';
import DeleteList from './DeleteList';

class CombinedRecords extends React.Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    const userId = localStorage.getItem('auth0:id_token:sub');
    if (isAuthenticated()) {
      return (
        <div className="App">
          <h1 className="center"> Type in your Lists here: </h1>
          <NewPost userId={userId} />
          <PostList3 />
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

export default CombinedRecords;
