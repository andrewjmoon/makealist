import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import List2 from './List2';
import { getList, deleteList } from './Queries';
import DeleteList from './DeleteList';

const ChapterListQuery = ({ id }) => (
  <Query
    query={getList}
    variables={{
      offset: 0,
      limit: 6
    }}
    fetchPolicy="cache-and-network"
  >
    {({ data, fetchMore, id }) =>
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

export default ChapterListQuery;
