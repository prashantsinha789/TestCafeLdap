import { Selector } from 'testcafe';

export default class RemoveConf {

  constructor() {
    this.searchConfig     = Selector('.action > input');
    this.clickSearch      = Selector('.action > .ui');
    this.deleteConf       = Selector('.buttons > .ui');
    this.selectConfLocal  = Selector('.odd > :nth-child(2) > a');
    this.valueConf        = Selector('#value');
    this.submitBtn        = Selector('.primary');
  }
}
