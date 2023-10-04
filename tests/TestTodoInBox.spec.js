//Se importan las funciones correspondientes de Playwright
const { test } = require('@playwright/test');
//Se importa el módulo Login
const Login = require('../helpers/todoLoginPage.js');
const Inbox = require('../helpers/todoInboxPage.js');


//Se ejecutan acciones antes de realizar el test principal
test.beforeEach(async ({ page }) => {
    await Login.goToTodoPage(page);
});


test.describe('Tests sobre Todo Inbox Page', () => {
    test('Test Inbox', async ({ page }) => {
        //Se invocan varias funciones referente al módulo Login
       await Login.clickLogin(page)
       await Login.setEmail(page)
       await Login.setPassword(page)
       await Login.clickLoginButton(page)
       await Inbox.clickInBoxMenu(page)
       await Inbox.setNoteInbox(page)
       await Inbox.clickAddButton(page)
       await Inbox.clickItemMenu(page)
       await Inbox.clickItemEdit(page)
       await page.waitForTimeout(5000);
   });
    
 });  