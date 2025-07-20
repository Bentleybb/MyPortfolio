/*import '../src/contact.css'
import {create} from '../contact/api-contact.js'
//import {create} from './api-shop.js'
//import {Link, Navigate} from 'react-router-dom'
export default function Contact() {
     return (
     <>
     <p>Contact</p>
     <form id="ffp">
		
			
				<label htmlFor="myFName"> *First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
				
				<label htmlFor="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				
				
				<label htmlFor="myEmail"> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
				
				<input type="submit" className="submit" value="Submit" /> <br />
					
		
		</form> <br></br>
          <p><i>Call me on: <strong>888.555.5555 </strong></i></p>
 <p>facebook:www.xyz.facebook.com</p>
 <p>email:xyz@yahoo.com</p>
     </>
     );
     }
     
    */
//////////////////////////////////
/*
     import '../src/contact.css';
     import '../src/index.css'
     import contact4 from '../src/assets/contact4.jfif';
import { useState } from 'react';


export default function Contact() {
    const [formData, setFormData] = useState({
        myFName: '',
        myLName: '',
        myEmail: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission

        try {
            const response = await fetch('http://localhost:3000/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email : formData.myEmail,
                    lastname: formData.myLName,
                    firstname: formData.myFName
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Success:', result);
            alert('Data saved successfully!');
            // Optionally reset the form
            setFormData({
                myFName: '',
                myLName: '',
                myEmail: '',
            });
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error saving the data.');
        }
    };

    return (
        <>
            <p>Contact</p>
            <div>
    <img src={contact4} alt="contact1" className="worksImg"  width="1500px" height="80px"/><br/><br/>
    </div>
            <form id="ffp" onSubmit={handleSubmit}>
                <label htmlFor="myFName"> *First Name: </label>
                <input
                    type="text"
                    id="myFName"
                    name="myFName"
                    value={formData.myFName}
                    onChange={handleChange}
                    required
                    autoFocus
                />
                <br />
                <br />

                <label htmlFor="myLName"> *Last Name: </label>
                <input
                    type="text"
                    id="myLName"
                    name="myLName"
                    value={formData.myLName}
                    onChange={handleChange}
                    required
                />
                <br />
                <br />

                <label htmlFor="myEmail"> *Email: </label>
                <input
                    type="email"
                    id="myEmail"
                    name="myEmail"
                    value={formData.myEmail}
                    onChange={handleChange}
                    required
                />
                <br />
                <br />

                <input type="submit" className="submit" value="Submit" />
                <br />
            </form>
            <br />
            <p>
                <i>Call me on: <strong>888.555.5555 </strong></i>
            </p>
            <p>facebook: www.xyz.facebook.com</p>
            <p>email: xyz@yahoo.com</p>
        </>
    );
}
    */
////////////////////////////
/*import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

export default function FormWithValidation() {

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: ""
    }
  });

  useEffect(() => {
    let data = {
      firstName: "Homer",
      lastName: "Simpson",
      email:"simpson@yahoo.com"
    }

    // set the values of each form field to match "data"
    for (const prop in data) {
      setValue(prop, data[prop]);
    }
  }, []);

  function submitForm(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      First Name: <br />
      <input {...register("firstName")} /><br /><br />

      Last Name: <br />
      <input {...register("lastName")} /><br /><br />

      Age: <br />
      <input type="email" {...register("email")} /><br /><br />

      <button type="submit">submit</button>
    </form>
  );
}
*/




import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { create } from '../contact/api-contact.js';
import contact4 from '../src/assets/contact4.jfif';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, TextField, Button, Grid } from '@mui/material';
//import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
//import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Contact() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitForm = async (data) => {
    console.log(data);
    try {
      await create(data);
      // Reset form values after submission
      setValues({
        firstname: "",
        lastname: "",
        email: "",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally handle the error
    }
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>Contact</Typography>
          <div>
            <img src={contact4} alt="Contact" style={{ width: '100%', height: 'auto' }} />
            <br /><br />
          </div>
          <form onSubmit={handleSubmit(submitForm)}>
            <Grid container spacing={2}>
              {/* First Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  {...register("firstname", { required: "First name is required" })}
                  value={values.firstname}
                  onChange={handleChange('firstname')}
                  error={!!errors.firstname}
                  helperText={errors.firstname ? errors.firstname.message : ""}
                />
              </Grid>

              {/* Last Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  {...register("lastname", { required: "Last name is required" })}
                  value={values.lastname}
                  onChange={handleChange('lastname')}
                  error={!!errors.lastname}
                  helperText={errors.lastname ? errors.lastname.message : ""}
                />
              </Grid>

              {/* Email */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  {...register("email", { required: "Email is required" })}
                  value={values.email}
                  onChange={handleChange('email')}
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
