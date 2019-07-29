import { Selector } from 'testcafe';
export default class mockData {
  constructor() {
    this.sf_username="sfadmindev";          //username for Stage & stageRC
    this.username="ygold";                 //username for Starfish UI
    this.password="hawa11";               //Password for Starfish Stage & stageRC
    this.ldapPassword="8DJDgQPyBHZpmQRFv3Tg";               //Password for Starfish LDAP

    this.ldapUrl="ldaps://ldap-stagerc.starfishsolutions.com:10202";
    this.ldapServiceUsername="cn=admin,dc=example,dc=org";
    this.ldapbasedn="ou=Users,dc=example,dc=org";
    this.ldapFilter="(&(objectClass=person)(uid=STARFISH_USERNAME))";
    this.localLoginStrategy="com.starfish.officehours.controller.security.LdapLocalLoginStrategy";
    this.ldapServicePassword="FQwicCcC7}GL7mKUezBW";

    this.sfAdminUrl = `https://admin-stage-rc.starfishsolutions.com/starfish-admin-stageRC/login.jsp`;


  }
}
