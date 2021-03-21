import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    it('user logs in with valid data', () => {
         LoginPage.setLogin('pimob39177@naymeo.com');
         LoginPage.setPassword('Murzilka21');
         LoginPage.clickSubmitButton();
         ProfilePage.isOpen();
    });

    it('submit button is disabled if login and password are absent', () => {
         LoginPage.submitButtonIsDisabled();
    });

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });

    it('should ', function () {
        
    });
});



