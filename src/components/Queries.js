import gql from 'graphql-tag';

const getList = gql`
  query lists($limit: Int, $offset: Int) {
    lists(limit: $limit, offset: $offset) @connection(key: "lists") {
      id
      listname
      lists
    }
  }
`;

const addList = gql`
  mutation addList($lists: String!, $listname: String!) {
    insert_lists(objects: [{ lists: $lists, listname: $listname }])
      @connection(key: "lists") {
      returning {
        listname
        lists
      }
    }
  }
`;
const deleteList = gql`
  mutation delete_lists($id: Int) {
    delete_lists(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;

export { addList, deleteList, getList };

/*
const getList = gql`
  query lists($todoLimit: Int, $todoOffset: Int) {
    lists(limit: $todoLimit, offset: $todoOffset) {
      id
      listname
      lists
    }
  }
`;
*/
