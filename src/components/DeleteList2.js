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

const DeleteRecord = ({ id, setValues, values }) => {
  return (
    <Mutation
      mutation={deleteList}
      refetchQueries={() => [{ query: getList, variables: { id } }]}
    >
      {(delete_lists, { data }) => (
        <span
          title="Delete Todo"
          className="float-right mt-n2 ml-4"
          onClick={async e => {
            await delete_lists({
              variables: id
            });
          }}
        >
          <button>Remove</button>
        </span>
      )}
    </Mutation>
  );
};
export default DeleteRecord;
