import { Selector } from 'testcafe';

export default class samplePage {

    constructor()   {

            this.name = Selector('#developer-name');
            this.click1 = Selector('#macos');
            this.click2 = Selector('#submit-button'); 
    }

}