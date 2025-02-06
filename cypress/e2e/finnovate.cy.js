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

  //contact form test (don't submit, commented out)
  describe('Form Test', () => {
    it.only('should submit the contact form located at the bottom of the page', () => {
      //pointer-event: none prevents user mouse interaction
      cy.get('#first-name').type("Sean");
      cy.get('#last-name').type("Jin");
      cy.get('#email').type("seanhoyeonjin@gmail.com");
      cy.get('#phone').type("123-456-7891");
      cy.get('textarea').type("Hello, Testing");
      //cy.get('button[type="submit"]').click();
      //cy.contains('Thank you');
    });

    //check to see if form modal opens up when clicking on "Get in touch"
    it('should open up a form modal', () => {
      cy.contains('Get in touch').click();
    });
    //check if blog nav link opens up a new tab for their medium blog

    //submit button in contact form should not be clickable if no first name, last name, or email is provided

  });


});

