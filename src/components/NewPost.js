import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { addList, getList } from './Queries';

const NewPost = () => {
  const [lists, setLists] = useState('');
  const [listname, setListname] = useState('');

  //const [episode, setEpisode] = useState('');
  //const [rating, setRating] = useState('');
  const resetInput = () => {
    setLists('');
    setListname('');
  };

  return (
    <Mutation
      mutation={addList}
      refetchQueries={() => {
        return [
          {
            query: getList,
            variables: { lists, listname }
          }
        ];
      }}
      resetInput
    >
      {(addLists, { data }) => (
        <>
          <h1 className="App">Enter Input Below:</h1>
          <br />
          <form
            className="App"
            onSubmit={e => {
              e.preventDefault();
              addLists({
                variables: {
                  lists,
                  listname
                }
              }).then(resetInput);
            }}
          >
            <fieldset>
              <input
                type="text"
                placeholder="listname"
                value={listname}
                onChange={e => setListname(e.target.value)}
              />
              <input
                type="text"
                placeholder="rating"
                value={lists}
                onChange={e => setLists(e.target.value)}
              />

              <button type="submit">Submit</button>
            </fieldset>
          </form>
        </>
      )}
    </Mutation>
  );
};
export default NewPost;
