import { Selector } from 'testcafe';

export default class mockData {
  constructor() {

    this.sf_username            = "";          //username for Stage & stageRC
    this.username               = "";                 //username for Starfish UI
    this.password               = "";               //Password for Starfish Stage & stageRC
    this.ldapPassword           = "";               //Password for Starfish LDAP

    this.ldapUrl                = "";
    this.ldapServiceUsername    = "";
    this.ldapbasedn             = "";
    this.ldapFilter             = "";
    this.localLoginStrategy     = "";
    this.DefaultLoginStrategy   = "";
    this.ldapServicePassword    = "";
    this.tenantID               = "";

    this.sfAdminUrl             = ``;
    this.ldapTesterUrl          = ``;
    this.stageRCuRL             = ``;
  }
}
