import MainPage from '../pageobjects/portal/main.portal.page';
import CoursesPage from '../pageobjects/portal/courses.portal.page';


describe('Navigation', function(){
    before(() => {
       browser.login('pimob39177@naymeo.com', 'Murzilka21')
    });
    beforeEach(()  => {
        MainPage.open();
    });
    it('courses page opens',() => {
        MainPage.goToCourses();
        CoursesPage.isOpen();
    });
})