///<reference types='cypress'/>
const cred=require('../fixtures/cred.json');
import faker, { Faker } from '@faker-js/faker';
import { Fake } from '@faker-js/faker/modules/fake';

describe('Sign Up Module Test Cases',()=>{

    it('Validate navigate to the Sign Up page',()=>{
      //Launch URL.
      cy.visit(cred.URL);

      //verify URL
      cy.url().should('contain',cred.URL);

      //Click on "Get Started for free" button.
      cy.xpath('//header/div[1]/nav[1]/ul[1]/li[6]/a[1]/a[1]').should('be.visible').should('have.text','Get Started For Free').click();
      cy.wait(4000);

      //Verify URL
      cy.url().should('contain','auth/signup');

     })

     it('At Sign Up page each label and field should have proper label and validations',()=>{
        
      //verifying label of "First Name" input feld.
      cy.xpath('//label[contains(text(),"F")]').should('be.visible').should('have.text','First Name');
      //Verifying the "First Name" input field is present.
      cy.xpath('//input[@name="firstName"]').should('be.visible');

      //verifying label of "Last Name" input feld.
      cy.xpath('//label[contains(text(),"L")]').should('be.visible').should('have.text','Last Name');
      //Verifying the "First Name" input field is present.
      cy.xpath('//input[@name="lastName"]').should('be.visible');

      //verifying label of "Profile ID" input feld.
      cy.xpath('//label[contains(text(),"Pr")]').should('be.visible').should('have.text','Choose your Profile ID');
      //verifying the "QucikLook.me/" Text in "profile ID" input field.
      cy.xpath('//span[contains(text(),"quicklook.me/")]').should('be.visible').should('have.text','quicklook.me/');
      //Verifying the "Profile" input field is present.
      cy.xpath('//input[@name="profileId"]').should('be.visible');

      //verifying label of "Email address" input feld.
      cy.xpath('//label[contains(text(),"E")]').should('be.visible').should('have.text','Email address');
      //Verifying the "Email address" input field is present.
      cy.xpath('//input[@name="email"]').should('be.visible');

      //verifying label of "Password" input feld.
      cy.xpath('//div[4]/label[1]').should('be.visible').should('have.text','Password');
      //Verifying the "Password" input field is present.
      cy.xpath('//input[@name="password"]').should('be.visible');

      //verifying label of "Confirm Password" input feld.
      cy.xpath('//label[contains(text(),"Co")]').should('be.visible').should('have.text','Confirm Password');
      //Verifying the "Confirm Password" input field is present.
      cy.xpath('//input[@name="confirmPassword"]').should('be.visible');

      //verifying label of "Create An Account" Button.
      cy.xpath('//button[contains(text(),"Cr")]').should('be.visible').should('have.text','Create New Account');


     })

     it('Validate "Sign Up" page with blank data.',()=>{
       
      //Click on "Create An Account" button with blank data.
      cy.xpath('//button[contains(text(),"C")]').should('be.visible').should('have.text','Create New Account').click();

      //verifying the validation for "First Name" input field.
      cy.xpath('//div[contains(text(),"F")]').should('be.visible').should('have.text','First Name is required.');
      
      //verifying the validation for "Last Name" input field.
      cy.xpath('//div[contains(text(),"L")]').should('be.visible').should('have.text','Last Name is required.');
  
      //verifying the validation for "Profile ID" input field.
      cy.xpath('//div[contains(text(),"Pro")]').should('be.visible').should('have.text','Profile Id is required.');

      //verifying the validation for "Email address" input field.
      cy.xpath('//div[contains(text(),"E")]').should('be.visible').should('have.text','Email is required.');

      //verifying the validation for "Password" input field.
      cy.xpath('//div[contains(text(),"Pa")]').should('be.visible').should('have.text','Password is required.');

      //verifying the validation for "Confirm Password" input field.
      cy.xpath('//div[contains(text(),"C")]').scrollIntoView().should('be.visible').should('have.text','Confirm password is required.');


     })

     it('validate "Sign Up" page with invalid data.',()=>{
      
      //Validating "First Name" input field with invalid data
      cy.xpath('//input[@name="firstName"]').should('be.visible').type('123&*()@#$%');
      cy.xpath('//button[contains(text(),"Cr")]').should('be.visible').should('have.text','Create New Account').click();
      cy.xpath('//div[contains(text(),"O")]').should('be.visible').should('have.text','Only alphabets allowed.');

      //Validating "First Name" input field for max and min characters.
      cy.xpath('//input[@name="firstName"]').should('be.visible').clear().type('a');
      cy.xpath('//button[contains(text(),"Cr")]').should('be.visible').should('have.text','Create New Account').click();
      cy.xpath('//div[contains(text(),"F")]').should('be.visible').should('have.text','First Name must be at least 3 characters long.');

      cy.xpath('//input[@name="firstName"]').should('be.visible').clear().type('pavankumarrrrrr');
      cy.xpath('//button[contains(text(),"Cr")]').should('be.visible').should('have.text','Create New Account').click();
      cy.xpath('//div[contains(text(),"F")]').should('be.visible').should('have.text','First Name must be less than 12 characters.');

      //Validating "Last Name" input field with invalid data
      cy.xpath('//input[@name="lastName"]').should('be.visible').type('1236&*()@#$%');
      cy.xpath('//button[contains(text(),"Cr")]').should('be.visible').should('have.text','Create New Account').click();
      cy.xpath('//div[contains(text(),"O")]').should('be.visible').should('have.text','Only alphabets allowed.');

      //Validating "Last Name" input field for max and min characters.
      cy.xpath('//input[@name="lastName"]').should('be.visible').clear().type('a');
      cy.xpath('//button[contains(text(),"Cr")]').should('be.visible').should('have.text','Create New Account').click();
      cy.xpath('//div[contains(text(),"L")]').should('be.visible').should('have.text','Last Name must be at least 3 characters long.');

      cy.xpath('//input[@name="lastName"]').should('be.visible').clear().type('pavankumarrrrrr');
      cy.xpath('//button[contains(text(),"Cr")]').should('be.visible').should('have.text','Create New Account').click();
      cy.xpath('//div[contains(text(),"L")]').should('be.visible').should('have.text','Last Name must be less than 12 characters.');

      //Validating "Profile ID" input field with invalid data
      cy.xpath('//input[@name="profileId"]').should('be.visible').type('pavankumar@#$%^');
      cy.xpath('//button[contains(text(),"Cr")]').should('be.visible').should('have.text','Create New Account').click();
      cy.xpath('//div[contains(text(),"O")]').should('be.visible').should('have.text','Only alphabets, number and - sign is allowed.');

      cy.xpath('//input[@name="profileId"]').should('be.visible').clear().type('pavankumar ');
      cy.xpath('//button[contains(text(),"Cr")]').should('be.visible').should('have.text','Create New Account').click();
      cy.xpath('//div[contains(text(),"W")]').should('be.visible').should('have.text','Whitespaces are not allowed.');

      //Validating "Profile ID" input field for max and min characters.
      cy.xpath('//input[@name="profileId"]').should('be.visible').clear().type('a');
      cy.xpath('//button[contains(text(),"Cr")]').should('be.visible').should('have.text','Create New Account').click();
      cy.xpath('//div[contains(text(),"Pr")]').should('be.visible').should('have.text','Profile Id should be atleast 6 charcaters long.');

      cy.xpath('//input[@name="profileId"]').should('be.visible').clear().type('pavankumarrrrrrrrrrrrr');
      cy.xpath('//button[contains(text(),"Cr")]').should('be.visible').should('have.text','Create New Account').click();
      cy.xpath('//div[contains(text(),"Pr")]').should('be.visible').should('have.text','Profile Id can not be bigger than 20 characters.');

      //Validating "Email Address" input field with invalid data
      cy.xpath('//input[@name="email"]').should('be.visible').type('pavankumar80@gmail@com.');
      cy.xpath('//button[contains(text(),"Cr")]').should('be.visible').should('have.text','Create New Account').click();
      cy.xpath('//div[contains(text(),"In")]').should('be.visible').should('have.text','Invalid email address.');

      //Validating "password" input field for max and min characters.
      cy.xpath('//input[@name="password"]').should('be.visible').clear().type('a');
      cy.xpath('//button[contains(text(),"Cr")]').should('be.visible').should('have.text','Create New Account').click();
      cy.xpath('//div[contains(text(),"Passwords m")]').should('be.visible').should('have.text','Passwords must be at least 5 characters long.');

      cy.xpath('//input[@name="password"]').should('be.visible').clear().type('pavankumarrrrrrrrrrrrr');
      cy.xpath('//button[contains(text(),"Cr")]').should('be.visible').should('have.text','Create New Account').click();
      cy.xpath('//div[contains(text(),"Password m")]').should('be.visible').should('have.text','Password must not be more than 18 characters.');

      //Verifying the validation error if both password and confirm password are not matching.
      cy.xpath('//input[@name="password"]').should('be.visible').clear().type('password');
      cy.xpath('//input[@name="confirmPassword"]').should('be.visible').clear().type('Password');
      cy.xpath('//button[contains(text(),"Cr")]').should('be.visible').should('have.text','Create New Account').click();
      cy.xpath('//div[contains(text(),"Pa")]').should('be.visible').should('have.text','Password does not match.');

     })

     it('Validate "Sign Up" page with Valid data',()=>{

      const email=Faker.name.firstname()+'yopmail.com';
      const fname=Faker.name.firstname();
      const lname=Faker.name.firstname();
      const profile=Faker.name.firstname('######');
       
       //Entering valid data into "First Name" input field.
       cy.xpath('//input[@name="firstName"]').should('be.visible').clear().type(fname);


     })








      })