import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
  Typography,
  Icon
} from '@mui/material';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import auth from './auth-helper.js';
import { signin } from './api-auth.js';

export default function Signin() {
  const navigate = useNavigate();
  const location = useLocation();

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
    <Card
      sx={{
        maxWidth: 600,
        margin: 'auto',
        mt: 5,
        textAlign: 'center',
        pb: 2
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Sign In
        </Typography>
        <TextField
          id="email"
          type="email"
          label="Email"
          sx={{ mx: 1, width: 300 }}
          value={values.email}
          onChange={handleChange('email')}
          margin="normal"
        /><br />
        <TextField
          id="password"
          type="password"
          label="Password"
          sx={{ mx: 1, width: 300 }}
          value={values.password}
          onChange={handleChange('password')}
          margin="normal"
        />
        {values.error && (
          <Typography component="p" color="error" sx={{ mt: 2 }}>
            <Icon color="error" sx={{ verticalAlign: 'middle' }}>error</Icon>
            {values.error}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          onClick={clickSubmit}
          sx={{ margin: 'auto', mb: 2 }}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
