/*import project1 from '../src/assets/project1.png';
import project2 from '../src/assets/project2.jpg';
import project3 from '../src/assets/project3.jpg';
import project4 from '../src/assets/project4.jpg';
import project5 from '../src/assets/project5.jpg';
import project6 from '../src/assets/project6.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/project.css'
import projectn2 from '../src/assets/projectn2.jfif';
export default function Project() {
     return <>
     
     <section id="works">
         
          <h2 className="worksTitle">Projects</h2>
          <div>
    <img src={projectn2} alt="contact1" className="worksImg"  width="1500px" height="80px"/><br/><br/>
    </div>
          <span className="worksDesc">I take pride in paying attention to the smallest details and making sure my work is pixel perfect/ 
          I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span> 
          <div className="worksImgs">
                   <img src={project1} alt="project1" className="worksImg" /><br/><br/>
                   <img src={project2} alt="project2" className="worksImg" /><br/><br/>
                   <img src={project3} alt="project3" className="worksImg" /><br/><br/>
                   <img src={project4} alt="project4" className="worksImg" /><br/><br/>
                   <img src={project5} alt="project5" className="worksImg" /><br/><br/>
                   <img src={project6} alt="project6" className="worksImg" /><br/><br/>
                  
               
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
          <button className="workBtn">See More</button>
                  
                  
     </section>
    

     </>
    }
    */
    import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { create } from '../project/api-project.js';
import { Card, CardContent, Typography, TextField, Button, Grid } from '@mui/material';
import '@fontsource/roboto/400.css';
import projectn2 from '../src/assets/projectn2.jfif';

export default function Project() {
  const [values, setValues] = useState({
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    completion: "",
    description: ""
  });

  // Destructuring methods from react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Submission function for the form
  const submitForm = () => {
    const project = {
      title: values.title || undefined,
      firstname: values.firstname || undefined,
      lastname: values.lastname || undefined,
      email: values.email || undefined,
      completion: values.completion || undefined,
      description: values.description || undefined,
    };

    console.log(project);
    create(project);
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Projects
      </Typography>
      <div style={{ textAlign: "center" }}>
        <img src={projectn2} alt="Academic Qualification" className="worksImg" width={1500} height={80} />
        <br /><br />
      </div>
      <Grid container justifyContent="center">
        <Card style={{ maxWidth: 800, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <form onSubmit={handleSubmit(submitForm)}>
              <Grid container spacing={2}>
                {/* Title */}
                <Grid item xs={12}>
                  <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    {...register("title", { required: "Title is required" })}
                    value={values.title}
                    onChange={handleChange('title')}
                    error={!!errors.title}
                    helperText={errors.title ? errors.title.message : ""}
                  />
                </Grid>

                {/* First Name */}
                <Grid item xs={12}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    {...register("firstname", { required: "First name is required" })}
                    value={values.firstname}
                    onChange={handleChange('firstname')}
                    error={!!errors.firstname}
                    helperText={errors.firstname ? errors.firstname.message : ""}
                  />
                </Grid>

                {/* Last Name */}
                <Grid item xs={12}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
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
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
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
                    label="Completion Date"
                    variant=""
                    fullWidth
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
                    label="Description"
                    variant="standard"
                    fullWidth
                    multiline
                    rows={4}
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
      </Grid>
    </>
  );
}
