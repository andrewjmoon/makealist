/*
import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import List3 from './List3';
import List from './List';
import { getList, deleteList } from './Queries';
import DeleteList from './DeleteList';

const PostList5 = ({ data }) => {
  const handleScroll = ({ currentTarget }, onLoadMore) => {
    if (
      currentTarget.scrollTop + currentTarget.clientHeight >=
      currentTarget.scrollHeight
    ) {
      onLoadMore();
    }
  };

  return (
    <Query
      query={getList}
      variables={{
        offset: 0,
        limit: 6
      }}
      fetchPolicy="cache-and-network"
    >
      {({ data, fetchMore }) =>
        data && (
          <List3
            lists={data.lists || []}
            onLoadMore=
            {() =>
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
            className="list-group chapter-list" onScroll=
            {e => handleScroll(e, onLoadMore)}
            <ul>
            {lists.map(({ id, lists, listname }) => (
              <li key={id} className="list-group-item">
                {listname} : {lists}
              </li>
            ))}
            </ul>
          />
        )
      }
    </Query>
  );
};

export default PostList5;

*/
