import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import List2 from './List2';
import List from './List';
import { getList, deleteList } from './Queries';

const PostList3 = () => (
  <Query
    query={getList}
    variables={{
      offset: 0,
      limit: 6
    }}
  >
    {({ data, fetchMore }) =>
      data && (
        <List2
          lists={data.lists || []}
          onLoadMore={() =>
            fetchMore({
              variables: {
                offset: data.lists.length
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                  lists: [...prev.lists, ...fetchMoreResult.lists]
                });
              }
            })
          }
        />
      )
    }
  </Query>
);

export default PostList3;
