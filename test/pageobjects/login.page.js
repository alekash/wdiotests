import Page from './page';


class LoginPage extends Page {
    get inputUsername() {
        return $('#normal_login_email');
    }

    get inputPassword() {
        return $('#normal_login_password');
    }

    get buttonSubmit() {
        return $('.login-form-button');
    }

    get errorToast() {
        return $('.ant-notification-notice-message');
    }

    get emailErrorRequired() {
        return $('//*[@id="normal_login"]/div[1]/div/div[2]/div');
    }

    get passwordErrorRequired() {
        return $('//*[@id="normal_login"]/div[2]/div/div[2]/div');
    }

    get loginValidationError(){
        return $('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_email"]]//div[@role="alert"]');
    }

    setLogin(email) {
        this.inputUsername.setValue(email);
    };

    setPassword(password) {
        this.inputPassword.setValue(password);
    };

    clickSubmitButton() {
        this.buttonSubmit.click();
    };

    open() {
        return super.open('/');
    };

    submitButtonIsDisabled() {
        expect(this.buttonSubmit).toBeDisabled();
    };

    errorToastAppeared() {
        expect(this.errorToast).toBeDisplayed();
    };

    errorEmailRequiredAppeared(){
        expect(this.emailErrorRequired).toBeDisplayed();
    };


    passwordRequiredAppeared() {
        expect(this.passwordErrorRequired).toBeDisplayed();
    };

    clearActiveFieldByBackspace(str) {
            let bs = Array(Math.ceil(str.length)).fill('Backspace');
            browser.keys(bs);
    }

    emptyLoginInput(){
        this.clearInput(this.inputUsername);
    }

    loginRequiredError(){
        expect(this.loginValidationError).toBeDisplayed();
        expect(this.loginValidationError.getText()).toEqual('Required');
    }

};
export default new LoginPage();

