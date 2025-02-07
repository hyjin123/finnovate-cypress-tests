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

  //hovering over Services in navbar should 
  //check if blog nav link opens up a new exeternal link for their medium blog
  it('should open a new link to Medium blog page', () => {
    // check if the Blog element has href that includes medium.com
    cy.contains('Blog').should('have.attr', 'href').and('contain', 'medium.com');

    // this will open the new link in the same tab instead of new tab
    cy.contains('Blog').invoke('removeAttr', 'target').click();
    cy.origin('https://medium.com', () => {
      cy.url().should('include', '/finnovate-io');
    });
  });

  //hovering the first case study card and "View Case" button should come into view
  it('View Case button should come into view when hovering a case study', () => {
    cy.get('[class*="caseStudyCard"]').first().trigger('mouseover');
    cy.contains('a', 'View case').should('be.visible');
  });

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

    // check to see if form modal opens up when clicking on "Get in touch"
    // it('should open up a form modal', () => {
    //   cy.contains('Get in touch').click();
    // });

    // submit button should be disabled if no email is provided
    it('submit button should be disabled if no email', () => {
      cy.fillForm({
        firstName: 'Sean',
        lastName: 'Jin',
        phone: '905-888-8888',
        message: 'Hello, this is Sean'
      });
      cy.contains('button', 'Submit').should('be.disabled');

      // now, input the email and check if it's enabled
      cy.get('#email').type('seanhoyeonjin@gmail.com');
      cy.contains('button', 'Submit').should('not.be.disabled');
    });
  });
});

// Potential test cases

// Edge cases for form input:
// excessive input length to see what happens
// SQL injection in the form

// Further UI/UX Testing:
// responsiveness across different screen sizes
// testing for missing images

