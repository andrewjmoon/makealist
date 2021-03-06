import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from 'react-apollo';
//import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { GRAPHQL_URL } from './constants';
import About from './components/About';
import Resources from './components/Resources';
import PostList from './components/PostList';
import PostList2 from './components/PostList2';
import PostList3 from './components/PostList3';
import PostList5 from './components/PostList5';
import NewPost from './components/NewPost';
import ListComponent from './components/ListComponent';
import Pomodoro from './components/Pomodoro';

const httpLink = createHttpLink({
  uri: GRAPHQL_URL
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('auth0:id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false
  })
});

const provideClient = component => {
  return <ApolloProvider client={client}>{component}</ApolloProvider>;
};

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div className="container">
        <Route
          path="/"
          render={props => provideClient(<App auth={auth} {...props} />)}
        />
        <Route
          path="/home"
          render={props => provideClient(<Home auth={auth} {...props} />)}
        />
        <Route
          path="/about"
          render={props => provideClient(<About auth={auth} {...props} />)}
        />
        <Route
          path="/postlist"
          render={props => provideClient(<PostList auth={auth} {...props} />)}
        />
        <Route
          path="/postlist2"
          render={props => provideClient(<PostList2 auth={auth} {...props} />)}
        />
        <Route
          path="/postlist3"
          render={props => provideClient(<PostList3 auth={auth} {...props} />)}
        />
        <Route
          path="/postlist5"
          render={props => provideClient(<PostList5 auth={auth} {...props} />)}
        />
        <Route
          path="/postinput"
          render={props => provideClient(<NewPost auth={auth} {...props} />)}
        />
        <Route
          path="/resources"
          render={props => provideClient(<Resources auth={auth} {...props} />)}
        />
        <Route
          path="/pomodoro"
          render={props => provideClient(<Pomodoro auth={auth} {...props} />)}
        />
        <Route
          path="/listcomponent"
          render={props =>
            provideClient(<ListComponent auth={auth} {...props} />)
          }
        />

        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
      </div>
    </Router>
  );
};
