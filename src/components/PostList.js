import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { getList } from './Queries';
import DeleteList from './DeleteList';
import InfiniteScroll from 'react-infinite-scroll-component';
import { client } from '../routes';

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

  let _isMounted = true;
  //Setting the states from the component.
  const todoLimit = 10;
  const [values, setValues] = useState({
    loadedAllLists: false,
    showNew: false,
    lists: []
  });

  // Fetch Todo info.
  const getLists = () => {
    client
      .query({
        query: getList,
        variables: {
          todoLimit: 10,
          todoOffset: 0
        }
      })
      .then(data => {
        // .then() is called right after the query is finished.
        // Set the state to returned array of todo's.
        setTimeout(() => {
          setValues({
            ...values,
            lists: data.data.lists,
            loadedAllLists: data.data.lists < todoLimit ? true : false
          });
        }, 1000);
      });
  };
  const loadMoreLists = () => {
    client
      .query({
        query: getList,
        variables: {
          todoLimit: 10,
          todoOffset: values.lists.length
        }
      })
      .then(data => {
        if (_isMounted) {
          const mergedLists = values.lists.concat(data.data.lists);
          // update state with new lists
          setTimeout(() => {
            setValues({
              ...values,
              lists: mergedLists,
              loadedAllLists: data.data.lists < todoLimit ? true : false
            });
          }, 1500);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    _isMounted = true;
    // Fetch lists on first render of page
    setTimeout(() => {
      getLists();
    }, 1500);
    return () => {
      _isMounted = false;
    };
  }, []);
  //id="scrollableDiv" style={{ height: 300, overflow: 'auto' }}
  return (
    <div>
      <div className="App">
        <h1>Things To Do:</h1>
        <div>
          <InfiniteScroll
            dataLength={values.lists.length}
            next={loadMoreLists}
            hasMore={!values.loadedAllLists}
            loader={<div>Loading...</div>}
            height={600}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>You are at the end of the list!</b>
              </p>
            }
            //scrollableTarget="scrollableDiv"
          >
            <ol>
              {values.lists.map(lists => {
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
                      <List className={classes.root} key={lists.id}>
                        <ListItem justify="center" className={classes.root}>
                          Listname: {lists.listname}
                        </ListItem>
                        <ListItem justify="center" className={classes.root}>
                          Lists: {lists.lists}
                        </ListItem>
                        <ListItem justify="center" className={classes.root}>
                          <DeleteList id={lists.id} />
                        </ListItem>
                      </List>
                    </Grid>
                  </Paper>
                );
              })}
            </ol>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

export default PostList;
