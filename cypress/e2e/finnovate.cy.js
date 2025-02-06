describe('Finnovate Website Test', () => {
  beforeEach(function () {
    cy.visit('https://finnovate.io/');
  });

  //checking to see if the homepage loads
  it('should load the homepage without issues', () => {
    cy.contains('We build engaging technology');
    cy.contains('Platforms used by millions');
  });

  //checking to see if navigation link to team works
  it('should navigate to the Teams page', () => {
    cy.contains('Team').click();
    cy.url().should('include', '/team');
    cy.contains('h1', 'Meet the team').should('be.visible');
  });

  //check if blog nav link opens up a new exeternal link for their medium blog

  //contact form test (don't submit, commented out)
  describe('Form Test', () => {
    it('should submit the contact form located at the bottom of the page', () => {
      cy.fillForm({
        firstName: 'Sean',
        lastName: 'Jin',
        email: 'sean@gmail.com',
        phone: '905-888-8888',
        message: 'Hello, this is Sean'
      });
      //cy.contain('button','Submit').click();
      //cy.contains('Thank you');
    });

    //check to see if form modal opens up when clicking on "Get in touch"
    it('should open up a form modal', () => {
      cy.contains('Get in touch').click();
    });

    //submit button in contact form should not be clickable if no first name, last name, or email is provided
    it.only('submit button should be disabled if no email', () => {
      cy.fillForm({
        firstName: 'Sean',
        lastName: 'Jin',
        phone: '905-888-8888',
        message: 'Hello, this is Sean'
      });
      cy.contains('button', 'Submit').should('be.disabled');

      //now, input the email and check if it's enabled
      cy.get('#email').type('seanhoyeonjin@gmail.com');
      cy.contains('button', 'Submit').should('not.be.disabled');
    });

    //excessive input length to see what happens?

    //special characters in the form, XSS?
  });


});

