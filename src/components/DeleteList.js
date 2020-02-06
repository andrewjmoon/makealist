import React from 'react';
import { Mutation } from 'react-apollo';
import { deleteList, getList } from './Queries';

const DeleteRecord = id => {
  return (
    <Mutation mutation={deleteList}>
      {(delete_lists, { data }) => (
        <span
          title="Delete Todo"
          className="float-right mt-n2 ml-4"
          onClick={e => {
            delete_lists({
              variables: id,
              refetchQueries: [{ query: getList }]
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
