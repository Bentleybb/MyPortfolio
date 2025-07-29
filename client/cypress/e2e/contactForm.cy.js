describe('Contact Form Submission', () => {
    it('should submit the contact form successfully', () => {
      cy.visit('http://localhost:5173/contact');
  
      // Fill form
      cy.get('#firstName').type('Charlene');
      cy.get('#lastName').type('Ge');
      cy.get('#phone').type('1233454567');
      cy.get('#email').type('charlene@yahoo.com');
  
      // Select services (if checkboxes)
      cy.get('input[name="services"][value="Facial"]').check(); // example
      cy.get('input[name="services"][value="Massage"]').check(); // example
  
      // Fill message
      cy.get('#message').type('contact me');
  
      // Submit form
      cy.get('form').submit();
  
      // Check for success alert or toast (adjust depending on implementation)
      cy.on('window:alert', (str) => {
        expect(str).to.contain('Successfully');
      });
    });
  });
  