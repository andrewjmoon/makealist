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

const DeleteList = (id, lists) => {
  return (
    <Mutation mutation={deleteList}>
      {(delete_lists, { lists }) => (
        <span
          title="Delete Todo"
          className="float-right mt-n2 ml-4"
          onClick={e => {
            delete_lists({
              variables: id,
              //refetchQueries: [{ query: getList }],
              updateCache
            });
          }}
        >
          <button>Remove</button>
        </span>
      )}
    </Mutation>
  );
};
export default DeleteList;
