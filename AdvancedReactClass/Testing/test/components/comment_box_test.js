import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';



describe ('CommentBox', () => {
    let component; 
    beforeEach(() => {
        component = renderComponent(CommentBox);
    });
    
    it( 'has the class name comment-box', () => {
        expect(component).to.have.class("comment-box");
    });
    it ('has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });
    it ('has a button', () => {
        expect(component.find('button')).to.exist;
    });
    //nested some tests that are very similar / closely related
    describe('entering some text', () => { 
        // can get more before each's for addtional test set up 
        //      stack beforeEach's to customize components 
        beforeEach(() => {
            // you can pre populate the text area to run an actual test 
            //  here we're just simulating some text to be pupulated 
            //      in the text area before actually running the tests 
            //  other fake events can be simualated with this "simlate" tool 
            component.find('textarea').simulate('change', 'new comment'); 
        });
        it ('shows text that is in the textarea', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });
        it ('when submitted, clears the input', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value(''); 
        });
    });
});