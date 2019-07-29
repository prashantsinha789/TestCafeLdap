import { Selector } from 'testcafe';

export default class testerToolPage {

  constructor() {
    this.selectTool    = Selector('tbody > :nth-child(2) > :nth-child(1) > a');
    this.addTntID      = Selector(':nth-child(1) > .field > .ui > input');
    this.clickPopulate = Selector('#populateButton');
    this.addID         = Selector(':nth-child(12) > .ui > input');
    this.addPassword   = Selector(':nth-child(13) > .ui > input');
    this.clickTestBtn  = Selector('#testButton');
  }
}
