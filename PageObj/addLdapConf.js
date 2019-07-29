import { Selector } from 'testcafe';

export default class addConfig{

  constructor() {

      this.searchTenant     =  Selector('input');
      this.clickSearch      =  Selector('#search-tenants-submit-button');
      this.clickOption      =  Selector('.options');
      this.clickConfig      =  Selector('[href="/starfish-admin-stageRC/admin/manageConfigs.html?id=4"]');
      this.addTenantConf    =  Selector('.secondary > :nth-child(1) > .ui');
      this.enterTntConf     =  Selector('#tenant-config-form > :nth-child(1) > .ui > .dropdown');
      this.addTntConf       =  Selector('.ui > .search');
      this.addValueConf     =  Selector('#value');
      this.saveConf         =  Selector('.primary');
      this.searchConf       =  Selector('.action > input');
      this.clickSearchConf  =  Selector('.action > .ui');
      this.selectLocalLogin =  Selector('.odd > :nth-child(2) > a');


  }
}
