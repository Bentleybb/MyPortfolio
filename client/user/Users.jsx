import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import ArrowForward from '@material-ui/icons/ArrowForward'
import { list } from './api-user.js'
import auth from '../lib/auth-helper.js'

const useStyles = makeStyles(theme => ({
  title: { margin: '16px' },
  root: { padding: '24px', maxWidth: 600, margin: 'auto' }
}))

export default function Users() {
  const [users, setUsers] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    const currentUser = auth.isAuthenticated().user

    if (currentUser && currentUser.role === 'admin') {
      setIsAdmin(true)

      const abortController = new AbortController()
      const signal = abortController.signal

      list(signal).then((data) => {
        if (data && data.error) {
          console.log(data.error)
        } else {
          setUsers(data)
        }
      })

      return () => abortController.abort()
    }
  }, [])

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
          <Link component={RouterLink} to={`/user/${item._id}`} key={i}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>{item.name.charAt(0)}</Avatar>
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
  )
}
