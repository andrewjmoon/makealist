import React from 'react';
import { Query } from 'react-apollo';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { getList } from './Queries';
import DeleteList from './DeleteList';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    alignItems: 'flex-start'
  },
  paper: {
    maxWidth: 600,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: 'lightblue'
  }
}));

function PostList() {
  const classes = useStyles();

  return (
    <Query query={getList}>
      {({ data, error, loading }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error...</div>;
        return (
          <div className="App">
            <h1> Lists</h1>
            {data.lists.map(({ lists, listname, id }) => {
              return (
                <Paper
                  direction="column"
                  alignItems="center"
                  justify="center"
                  className={classes.paper}
                >
                  <Grid
                    container
                    spacing={0}
                    direction="column"
                    className={classes.root}
                  >
                    <List className={classes.root} key={id}>
                      <ListItem justify="center" className={classes.root}>
                        Listname: {listname}
                      </ListItem>
                      <ListItem justify="center" className={classes.root}>
                        Lists: {lists}
                      </ListItem>

                      <ListItem justify="center" className={classes.root}>
                        <DeleteList id={id} />
                      </ListItem>
                    </List>
                  </Grid>
                </Paper>
              );
            })}
          </div>
        );
      }}
    </Query>
  );
}

export default PostList;

/*
// post sorted in descending order by time of creation
export const POSTS_LIST = gql`
  {
    post(order_by: { created_at: desc }) {
      id
      created_at
      url
      description
      user {
        id
        name
      }
      points_aggregate {
        aggregate {
          count(columns: id)
        }
      }
    }
  }
`;
*/
