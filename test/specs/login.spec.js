import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/portal/portal.page';

describe('Auth', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    // it('user logs in with valid data', () => {
    //      LoginPage.setLogin('pimob39177@naymeo.com');
    //      LoginPage.setPassword('Murzilka21');
    //      LoginPage.clickSubmitButton();
    //      ProfilePage.isOpen();
    // });

    it('submit button is disabled if login and password are absent', () => {
         LoginPage.submitButtonIsDisabled();
    });

    it('fails if invalid data provided', function () {
        LoginPage.setLogin('epimob39177@naymeo.com');
        LoginPage.setPassword('Murzilka21');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    });

    it('fails if invalid data provided', function () {
        LoginPage.setLogin('pimob39177@naymeo.com');
        LoginPage.setPassword('1234856');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    });

    it('error message appears by entering email and emptying the field', function () {
        LoginPage.setLogin('pimob39177@naymeo.com');
        LoginPage.clearActiveFieldByBackspace('pimob39177@naymeo.com');
        LoginPage.setPassword('123456');
        LoginPage.errorEmailRequiredAppeared();
    });


    it('error message appears by entering password and emptying the field', () => {
        LoginPage.setLogin('pimob39177@naymeo.com');
        LoginPage.setPassword('123456');
        LoginPage.clearActiveFieldByBackspace('123456');
        LoginPage.passwordRequiredAppeared();
    });

    it('submit button is disabled if email was deleted', () => {
        LoginPage.setLogin('pimob39177@naymeo.com');
        LoginPage.clearActiveFieldByBackspace('pimob39177@naymeo.com');
        LoginPage.setPassword('123456');
        LoginPage.submitButtonIsDisabled();
    });

    it('submit button is disabled if password was deleted', () => {
        LoginPage.setLogin('pimob39177@naymeo.com');
        LoginPage.setPassword('123456');
        LoginPage.clearActiveFieldByBackspace('123456');
        LoginPage.submitButtonIsDisabled();
    });

    // it('login input is required', function () {
    //     LoginPage.setLogin('example');
    //     LoginPage.emptyLoginInput();
    //     LoginPage.loginRequiredError();
    // });

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });
});



