import React from 'react';
import { Mutation } from 'react-apollo';
import { deleteList, getList } from './Queries';
import { client } from '../routes';

const updateCache = id => {
  const data = client.readQuery({
    query: getList,
    variables: {
      id
    }
  });
  const newData = {
    lists: data.lists.filter(t => t.id !== id)
  };
  client.writeQuery({
    query: getList,
    variables: {
      id
    },
    data: newData
  });
};

const DeleteList3 = (id, lists) => {
  return (
    <Mutation
      mutation={deleteList}
      update={(cache, { data: { delete_lists } }) => {
        const { lists } = cache.readQuery({ query: getList });
        cache.writeQuery({
          query: getList,
          data: { lists: lists.filter(i => i.id !== delete_lists.id) }
        });
      }}
    >
      {(delete_lists, { lists }) => (
        <span
          title="Delete Todo"
          className="float-right mt-n2 ml-4"
          onClick={async e => {
            await delete_lists({
              update: updateCache
            });
          }}
        >
          <button>Remove</button>
        </span>
      )}
    </Mutation>
  );
};
export default DeleteList3;
