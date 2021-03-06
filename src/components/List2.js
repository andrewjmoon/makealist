import React, { useState } from 'react';
import DeleteList from './DeleteList';
import NewPost from './NewPost';
//import DeleteList2 from './DeleteList2';
//import DeleteList3 from './DeleteList3';
//import NewPost from './NewPost';
//import { Query, Mutation } from 'react-apollo';
//import { getList, deleteList } from './Queries';

const handleScroll = ({ currentTarget }, onLoadMore) => {
  if (
    currentTarget.scrollTop + currentTarget.clientHeight >=
    currentTarget.scrollHeight
  ) {
    onLoadMore();
  }
};

const List2 = ({ onLoadMore, lists, id }) => {
  return (
    <div>
      <div>
        <h2>Chapter list</h2>

        <ul
          className="list-group chapter-list"
          onScroll={e => handleScroll(e, onLoadMore)}
        >
          {lists.map(({ id, lists, listname }) => (
            <li key={id} className="list-group-item">
              {listname} : {lists}
              <DeleteList id={id} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List2;
