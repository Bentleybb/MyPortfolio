import React, { useState } from 'react';
import {
  Card, CardActions, CardContent, Button, TextField,
  Typography, Icon
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import auth from './auth-helper.js';
import { signin } from './api-auth.js';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  error: {
    verticalAlign: 'middle',
  },
  title: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2),
  },
}));

export default function Signin() {
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();

  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    redirectToReferrer: false,
  });

  const clickSubmit = () => {
    const user = {
      email: values.email || undefined,
      password: values.password || undefined,
    };

    signin(user).then((data) => {
    if (data?.error) {
      if (data.error.toLowerCase().includes("not found")) {
        navigate('/signup', {
          state: {
            message: 'User not found. Please create an account.',
            from: location
          }
        });
      } else {
        setValues({ ...values, error: data.error });
      }
    } else {
      auth.authenticate(data, () => {
        setValues({ ...values, error: '', redirectToReferrer: true });
      });
    }
  });
};

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const { from } = location.state || { from: { pathname: '/' } };
  const { redirectToReferrer } = values;
  if (redirectToReferrer) {
    return <Navigate to={from} />;
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" className={classes.title}>Sign In</Typography>
        <TextField id="email" type="email" label="Email"
          className={classes.textField} value={values.email}
          onChange={handleChange('email')} margin="normal" /><br />
        <TextField id="password" type="password" label="Password"
          className={classes.textField} value={values.password}
          onChange={handleChange('password')} margin="normal" />
        {values.error && (
          <Typography component="p" color="error">
            <Icon color="error" className={classes.error}>error</Icon>
            {values.error}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
