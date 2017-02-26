// import two helpers from the test helpers 
import { renderComponent, expect } from '../test_helper'; 
// import the app  the unit under test
import App from '../../src/components/app'; 

//testing keywoards 
// use decribe to group together similar tests 
describe('App', () => {
    let component; 
    beforeEach(() => {
        component = renderComponent(App);
    });
    // use 'it' to test a signle attribute of a target 
    //  here is exactly what we're testing using 'it' 
    //  make sure this is very easy to understand. 
    it('shows a comment box', () => {
        // making sure that there is a child 
        // exists 
        expect(component.find('.comment-box')).to.exist;
    });
});




