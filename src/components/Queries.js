import gql from 'graphql-tag';

const getList = gql`
  query lists {
    lists {
      id
      lists
      listname
    }
  }
`;

const addList = gql`
  mutation addList($lists: String!, $listname: String!) {
    insert_lists(objects: [{ lists: $lists, listname: $listname }]) {
      returning {
        lists
        listname
      }
    }
  }
`;

const deleteList = gql`
  mutation delete_list($id: uuid) {
    delete_lists(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;

export { addList, deleteList, getList };
