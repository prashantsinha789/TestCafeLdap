import { Selector } from 'testcafe';

export default class loginPg {

constructor() {
  this.userName               = Selector('#username');
  this.passWd                 = Selector('#password');
  this.adminLoginButton       = Selector('.btn');
  this.stageRCLoginButton     = Selector('#ext-gen30');
  }
}
