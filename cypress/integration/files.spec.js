/// <reference types="Cypress" />

context('Files', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('cy.readFile() - read a files contents', () => {
    cy.get("input[type='file']").then(subject => {
        const el = subject[0];
        const testFile = new File(['content'], 'sample1.txt');
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(testFile);
        el.files = dataTransfer.files;
        cy.log(el.files[0] instanceof File);
    });

     cy.get("input[type='file']").then(subject => {
        const el = subject[0];
        cy.log(el.files[0] instanceof File);
    });
  })
})
