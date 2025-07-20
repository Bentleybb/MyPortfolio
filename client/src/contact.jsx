import React from "react";
import { useForm } from "react-hook-form";
import { create } from "../contact/api-contact.js";
import auth from "../lib/auth-helper";
import { useNavigate } from "react-router-dom";
import { Typography, TextField, Button, Grid, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import "./index.css";

export default function Contact() {
  const navigate = useNavigate();
  const isLoggedIn = auth.isAuthenticated();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

const submitForm = async (data) => {
  try {
    console.log('Submitting form data:', data);
    const response = await create(data);
    if (response?.message) {
      alert('Your appointment has been submitted successfully!');
      reset(); 
    } else if (response?.error) {
      alert(`Submission failed: ${response.error}`);
    }
  } catch (err) {
    alert('Unexpected error during submission.');
    console.error(err);
  }
};

  return (
    <div className="container">
      <div className="contact-header">
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> Binli Han</p>
        <p><strong>Email:</strong> <a href="mailto:bhan19@my.centennialcollege.ca">bhan19@my.centennialcollege.ca</a></p>
        <p><strong>Phone:</strong> 1-647-546-2725</p>
      </div>

      <h2>Book Your Appointment</h2>
      <form id="contact-form" onSubmit={handleSubmit(submitForm)}>
        <fieldset>
          <legend>Personal Information</legend>
          <p>
            <label htmlFor="first-name">First Name:</label>
            <input
              type="text"
              id="first-name"
              className="form-input"
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && <span>{errors.firstName.message}</span>}
          </p>
          <p>
            <label htmlFor="last-name">Last Name:</label>
            <input
              type="text"
              id="last-name"
              className="form-input"
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && <span>{errors.lastName.message}</span>}
          </p>
          <p>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              className="form-input"
              placeholder="1-888-555-5555"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && <span>{errors.phone.message}</span>}
          </p>
          <p>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="someone@example.com"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </p>
        </fieldset>

        <fieldset>
          <legend>Services You Need</legend>
          <FormGroup row>
            {["Web Development", "Mobile App Development", "Data Analysis", "General Programming", "UI/UX Design"].map(service => (
              <FormControlLabel
                key={service}
                control={<Checkbox {...register("services")} value={service} />}
                label={service}
              />
            ))}
          </FormGroup>
        </fieldset>

        <fieldset>
          <legend>Your Message</legend>
          <p>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              className="form-input"
              rows="4"
              placeholder="Write a short description of your project"
              {...register("message")}
            ></textarea>
          </p>
        </fieldset>

        <p id="move-right">
          <button type="submit">Submit</button>
          <button type="reset" onClick={() => reset()}>Reset</button>
        </p>
      </form>
    </div>
  );
} 
