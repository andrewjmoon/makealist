import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';
import List3 from './List3';
import { getList, deleteList } from './Queries';

const ChapterListQuery = ({ id }) => {
  const { fetchMore, data } = useQuery(getList, {
    variables: {
      offset: 0,
      limit: 6
    }
  });
  return (
    data && (
      <List3
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
  );
};

export default ChapterListQuery;
