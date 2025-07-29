import React, { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Paper,
  ListItemSecondaryAction,  // ✅ Add this
  IconButton   
} from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { list } from './api-user.js'
import auth from '../lib/auth-helper.js'
import ListItemButton from '@mui/material/ListItemButton';

const useStyles = makeStyles(theme => ({
  title: { margin: '16px' },
  root: { padding: '24px', maxWidth: 600, margin: 'auto' }
}))

export default function Users() {
  const [users, setUsers] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    const currentUser = auth.isAuthenticated().user;
  
    if (currentUser && currentUser.role === 'admin') {
      setIsAdmin(true);
  
      const abortController = new AbortController();
      const signal = abortController.signal;
      const token = auth.isAuthenticated().token;
  
      list(signal, token).then((data) => {
        if (data && data.error) {
          console.log(data.error);
        } else {
          setUsers(data);
        }
      });
  
      return () => abortController.abort();
    }
  }, []);
  

  if (!auth.isAuthenticated() || auth.isAuthenticated().user.role !== 'admin') {
  return <Typography variant="h6">Access denied</Typography>
}

  return (
    <Paper className={classes.root} elevation={4}>
      <Typography variant="h6" className={classes.title}>
        All Users
      </Typography>
      <List dense>
        {users.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton component={RouterLink} to={`/user/${item._id}`}>
              <ListItemAvatar>
                <Avatar>{item.name.charAt(0)}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} />
              <ListItemSecondaryAction>
                <IconButton edge="end">
                  <ArrowForward />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Paper>
  )
}
