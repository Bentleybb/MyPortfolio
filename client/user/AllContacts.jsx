import React, { useEffect, useState } from "react";
import { Paper, Typography, Divider, Box, Chip } from "@mui/material";
import { list } from "../contact/api-contact";
import auth from "../lib/auth-helper.js"; // ✅ Add this

export default function AllContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchContacts = async () => {
      try {
        const jwt = auth.isAuthenticated(); // ✅ Add this
        const data = await list(signal, jwt); // ✅ Pass token to list()

        if (data && !data.error) {
          setContacts(data);
        } else {
          console.error("Failed to fetch contacts:", data?.error);
        }
      } catch (err) {
        console.error("Error fetching contacts:", err);
      }
    };

    fetchContacts();

    return () => controller.abort();
  }, []);

  return (
    <Paper elevation={3} sx={{ padding: 3, maxWidth: 800, mx: "auto", mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Submitted Contacts
      </Typography>

      {contacts.map((contact, index) => (
        <Box key={contact._id || index} mb={3}>
          <Typography variant="subtitle1">
            <strong>Name:</strong> {contact.firstName} {contact.lastName}
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> {contact.email}
          </Typography>
          <Typography variant="body1">
            <strong>Phone:</strong> {contact.phone}
          </Typography>
          <Typography variant="body1" component="div">
            <strong>Services:</strong>{" "}
            {contact.services?.map((service, i) => (
              <Chip key={i} label={service} sx={{ mr: 1, mb: 0.5 }} />
            ))}
          </Typography>

          <Typography variant="body1">
            <strong>Message:</strong> {contact.message}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Submitted on: {new Date(contact.created).toLocaleString()}
          </Typography>
          <Divider sx={{ my: 2 }} />
        </Box>
      ))}
    </Paper>
  );
}
