Cypress.Commands.add("loginViaAPI", () => {
  let user;
  function fetchUser() {
    const loginUrl = `${Cypress.env("apiUrl") + "/login"}`;
    cy.request("POST", loginUrl, {
      email: Cypress.env("superAdminEmail"),
      password: Cypress.env("superAdminPass"),
    })
      .its("body")
      .then((res) => {
        user = res;
      });
  }
  function setUser() {
    cy.visit(`${Cypress.env("baseUrl") + "/"}`, {
      onBeforeLoad(win) {
        win.localStorage.setItem("user", JSON.stringify(user));
      },
    });
  } 
  fetchUser();
  setUser();
});
