/*import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
//import { makeStyles } from '@material-ui/core/styles'
import { makeStyles } from '@mui/styles'
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import {list} from './api-user.js'
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
//import Person from '@material-ui/core/Person'
//import ArrowForward from '@material-ui/core/ArrowForward'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
//import ArrowForward from '@material-ui/core/ArrowForward'
import ArrowForward from '@material-ui/icons/ArrowForward';
//import unicornbikeImg from './../assets/images/unicornbikeImg.jpg'

const useStyles = makeStyles(theme => ({
    card: {
      // Define your card styles here
    },
    textField: {
      // Define your text field styles here
    },
    error: {
      // Define your error icon styles here
    },
    submit: {
      // Define your submit button styles here
    },
    title: {
      // Define your title styles here
    },
    root: {
        // Define your root styles here
      },
  }));

export default function Users() {

    const [users, setUsers] = useState([])
useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    list(signal).then((data) => {
      console.log(data)
if (data && data.error) { 
console.log(data.error)
} else { 
    console.log(data)
setUsers(data)
} 
})
return function cleanup(){ 
abortController.abort()
} 
}, [])

  
    const classes = useStyles()
return (
<Paper className={classes.root} elevation={4}>
<Typography variant="h6" className={classes.title}> 
All Users
</Typography> 
<List dense>
{users.map((item, i) => { 
  return  <Link component={RouterLink} to={"/user/" + item._id} key={i}>
    
<ListItem button> 
<ListItemAvatar>
<Avatar> 

</Avatar>
</ListItemAvatar>
<ListItemText primary={item.name}/> 
<ListItemSecondaryAction>
<IconButton>
<ArrowForward/> 
</IconButton>
</ListItemSecondaryAction> 
</ListItem>
</Link> 
})} 
</List>
</Paper>
)
}


*/

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles'; // Updated import for makeStyles
import { Card, Paper, List, Typography, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, IconButton, Avatar, Link } from '@mui/material'; // Updated imports
import { Link as RouterLink } from 'react-router-dom';
import ArrowForward from '@mui/icons-material/ArrowForward'; // Updated icon import
import { list } from './api-user.js'; // Assuming list function fetches users

const useStyles = makeStyles((theme) => ({
  card: {
    // Define your card styles here
  },
  textField: {
    // Define your text field styles here
  },
  error: {
    // Define your error icon styles here
  },
  submit: {
    // Define your submit button styles here
  },
  title: {
    // Define your title styles here
    marginTop: theme.spacing(2), // Example for title margin
  },
  root: {
    padding: theme.spacing(3), // Example root padding
    maxWidth: 600, // Example maxWidth
    margin: '0 auto', // Centering the Paper
  },
}));

export default function Users() {
  const [users, setUsers] = useState([]);
  //const classes = useStyles(); //
  // Move this here to avoid hoisting issues

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    list(signal).then((data) => {
      console.log(data);
      if (data && data.error) {
        console.log(data.error);
      } else {
        console.log(data);
        setUsers(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <Paper className={classes.root} elevation={4}>
      <Typography variant="h6" className={classes.title}>
        All Users
      </Typography>
      <List dense>
        {users.map((item, i) => (
          <Link component={RouterLink} to={`/user/${item._id}`} key={i}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  {/* Optionally, you can add user initials or profile image here */}
                  {item.name.charAt(0)} {/* Example for initial */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} />
              <ListItemSecondaryAction>
                <IconButton>
                  <ArrowForward />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Link>
        ))}
      </List>
    </Paper>
  );
}

