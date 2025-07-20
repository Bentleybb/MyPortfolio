/*import '../src/index.css'
import '../src/education.css'
import academic from '../src/assets/academic.jfif';
export default function Education() {
     return (
     <>
   
    <h2 className="worksTitle">Academic Qualification</h2>
    <div>
    <img src={academic} alt="acada1" className="worksImg"  width="1500px" height="80px"/><br/><br/>
    </div>

    <form id="ppy">

                    <label htmlFor="myTitle"> *Title: </label>
				<input type="text" id="myTitle" name="myTitle" required="required" autoFocus /> <br /> <br />
				
			
				<label htmlFor="myFName"> *First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
				
				<label htmlFor="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				
				
				<label htmlFor="myEmail"> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
				
                    <label htmlFor="myDate"> *Completion Date: </label>
				<input type="date" id="myDate" name="myDate" required="required" /> <br /> <br />
				
                    <label htmlFor="myDescription"> *Description: </label>
				<input type="text" id="myDescription" name="myDescription" required="required" /> <br /> <br />

				<input type="submit" className="submit" value="Submit" /> <br />
					
		
		</form> 
         <br/>
     </>
     );
     }
    */

     import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { create } from '../qualification/api-qualification.js';
import academic from '../src/assets/academic.jfif';
import '../src/education.css';
import { Card, CardContent, Typography, TextField, Button, Grid } from '@mui/material';
import '@fontsource/roboto/400.css';

export default function Qualification() {
  const [values, setValues] = useState({
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    completion: "",
    description: "",
  });

  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitForm = async (data) => {
    console.log(data);
    try {
      await create(data);
      // Reset form values after successful submission
      setValues({
        title: "",
        firstname: "",
        lastname: "",
        email: "",
        completion: "",
        description: "",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <>
      <Typography variant="h4" align="center" className="worksTitle">Academic Qualification</Typography>
      <img src={academic} alt="Academic Qualification" className="worksImg" style={{ width: '100%' }} />
      <br /><br />
      
      <Card style={{ maxWidth: 800, padding: "20px 5px", margin: "0 auto" }}>
        <CardContent>
          <form onSubmit={handleSubmit(submitForm)}>
            <Grid container spacing={2}>
              {/* Title */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Title"
                  variant="standard"
                  {...register("title", { required: "Title is required" })}
                  value={values.title}
                  onChange={handleChange('title')}
                  error={!!errors.title}
                  helperText={errors.title ? errors.title.message : ""}
                />
              </Grid>

              {/* First Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant=""
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

              {/* Completion Date */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Completion Date"
                  variant="outlined"
                  {...register("completion", { required: "Completion Date is required" })}
                  value={values.completion}
                  onChange={handleChange('completion')}
                  error={!!errors.completion}
                  helperText={errors.completion ? errors.completion.message : ""}
                />
              </Grid>

              {/* Description */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  variant="outlined"
                  {...register("description", { required: "Description is required" })}
                  value={values.description}
                  onChange={handleChange('description')}
                  error={!!errors.description}
                  helperText={errors.description ? errors.description.message : ""}
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
    </>
  );
}
