import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
         LoginPage.setLogin('pimob39177@naymeo.com');
         LoginPage.setPassword('Murzilka21');
         LoginPage.clickSubmitButton();
         ProfilePage.isOpen();

    });
});


