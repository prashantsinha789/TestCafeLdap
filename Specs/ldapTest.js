import { Selector } from 'testcafe';
import loginPg from "../PageObj/loginPage"
import mockData from "../Mocks/testMock"
import addConfig from "../PageObj/addLdapConf"
import testerToolPage from "../PageObj/testerTool"
import RemoveConf from "../PageObj/removeLdapConfig"

const loginPage    = new loginPg();
const testMock     = new mockData();
const addConLdap   = new addConfig();
const tester       = new testerToolPage();
const removeLdap   = new RemoveConf();

fixture `LDAP Configuration should be added on SFAdmin`
.page `${testMock.sfAdminUrl}`;
test('Ldap Configuration on SFAdmin',async AddConf =>   {
    await AddConf
        .typeText(loginPage.userName,testMock.sf_username)
        .typeText(loginPage.passWd,testMock.password)
        .click(loginPage.adminLoginButton)
        .typeText(addConLdap.searchTenant,testMock.tenantID)
        .click(addConLdap.clickSearch)
        .click(addConLdap.clickOption)
        .click(addConLdap.clickConfig)

        //add LDAP URL
        .click(addConLdap.addTenantConf)
        // .click(addConLdap.enterTntConf)
        .typeText(addConLdap.addTntConf,'LDAP_URL')
        .click(addConLdap.addValueConf).typeText(addConLdap.addValueConf,testMock.ldapUrl)
        .click(addConLdap.saveConf)

        //add LDAP Service Username
        .click(addConLdap.addTenantConf)
        // .click(addConLdap.enterTntConf)
        .typeText(addConLdap.addTntConf,'LDAP_SERVICE_USERNAME')
        .click(addConLdap.addValueConf).typeText(addConLdap.addValueConf,testMock.ldapServiceUsername)
        .click(addConLdap.saveConf)

        //add LDAP Service Password
        .click(addConLdap.addTenantConf)
        // .click(addConLdap.enterTntConf)
        .typeText(addConLdap.addTntConf,'LDAP_SERVICE_PASSWORD')
        .click(addConLdap.addValueConf).typeText(addConLdap.addValueConf,testMock.ldapServicePassword)
        .click(addConLdap.saveConf)

        // //add LDAP BaseDN
        .click(addConLdap.addTenantConf)
        // .click(addConLdap.enterTntConf)
        .typeText(addConLdap.addTntConf,'LDAP_BASE_DN')
        .click(addConLdap.addValueConf).typeText(addConLdap.addValueConf,testMock.ldapbasedn)
        .click(addConLdap.saveConf)

        // //add LDAP Filter
        .click(addConLdap.addTenantConf)
        // .click(addConLdap.enterTntConf)
        .typeText(addConLdap.addTntConf,'LDAP_FILTER')
        .click(addConLdap.addValueConf).typeText(addConLdap.addValueConf,testMock.ldapFilter)
        .click(addConLdap.saveConf)

        //add LDAP Local Login Strategy
        .click(addConLdap.searchConf)
        .typeText(addConLdap.searchConf,'LOCAL_LOGIN_STRATEGY')
        .click(addConLdap.clickSearchConf)
        .click(addConLdap.selectLocalLogin)
        .click(addConLdap.addValueConf).pressKey('ctrl+a  delete delete delete delete').typeText(addConLdap.addValueConf,testMock.localLoginStrategy)
        .click(addConLdap.saveConf)
})

fixture `LDAP Testing on Tester Tools`
.page `${testMock.ldapTesterUrl}`;
test('Test LDAP on Tester Tool',async TesterTool =>   {
    await TesterTool
        .typeText(loginPage.userName,testMock.sf_username)
        .typeText(loginPage.passWd,testMock.password)
        .click(loginPage.adminLoginButton)
        .click(tester.selectTool)
        .click(tester.addTntID).typeText(tester.addTntID,testMock.tenantID)
        .click(tester.clickPopulate)
        .click(tester.addID).typeText(tester.addID,testMock.username)
        .click(tester.addPassword).typeText(tester.addPassword,testMock.ldapPassword)
        .click(tester.clickTestBtn)
})

fixture `Verify LDAP Login on StageRC`
.page `${testMock.stageRCuRL}`;
test('Test LDAP Configuration on StageRC',async StageRC =>   {
    await StageRC
        .typeText(loginPage.userName,testMock.username)
        .typeText(loginPage.passWd,testMock.password)
        .click(loginPage.stageRCLoginButton)
        .typeText(loginPage.userName,testMock.username)
        .typeText(loginPage.passWd,testMock.ldapPassword)
        .click(loginPage.stageRCLoginButton)
})

fixture `Remove All LDAP Configs from SFAdmin`
.page `${testMock.sfAdminUrl}`;
test('Remove Ldap Configuration on SFAdmin',async RemoveConfig =>   {
    await RemoveConfig

        .typeText(loginPage.userName,testMock.sf_username)
        .typeText(loginPage.passWd,testMock.password)
        .click(loginPage.adminLoginButton)
        .typeText(addConLdap.searchTenant,testMock.tenantID)
        .click(addConLdap.clickSearch)
        .click(addConLdap.clickOption)
        .click(addConLdap.clickConfig)

        // Remove LDAP_URL
        .click(removeLdap.searchConfig).typeText(removeLdap.searchConfig,'LDAP_URL')
        .click(removeLdap.clickSearch)
        .setNativeDialogHandler(() => true)
        .click(removeLdap.deleteConf)

        // Remove LDAP_SERVICE_USERNAME
        .click(removeLdap.searchConfig).typeText(removeLdap.searchConfig,'LDAP_SERVICE_USERNAME')
        .click(removeLdap.clickSearch)
        .setNativeDialogHandler(() => true)
        .click(removeLdap.deleteConf)

        // Remove LDAP_SERVICE_PASSWORD
        .click(removeLdap.searchConfig).typeText(removeLdap.searchConfig,'LDAP_SERVICE_PASSWORD')
        .click(removeLdap.clickSearch)
        .setNativeDialogHandler(() => true)
        .click(removeLdap.deleteConf)

        // Remove LDAP_FILTER
        .click(removeLdap.searchConfig).typeText(removeLdap.searchConfig,'LDAP_FILTER')
        .click(removeLdap.clickSearch)
        .setNativeDialogHandler(() => true)
        .click(removeLdap.deleteConf)


        // Remove LDAP_BASE_DN
        .click(removeLdap.searchConfig).typeText(removeLdap.searchConfig,'LDAP_BASE_DN')
        .click(removeLdap.clickSearch)
        .setNativeDialogHandler(() => true)
        .click(removeLdap.deleteConf)

        // Edit LDAP Local Login Strategy
        .click(removeLdap.searchConfig).typeText(removeLdap.searchConfig,'LOCAL_LOGIN_STRATEGY')
        .click(removeLdap.clickSearch)
        .click(addConLdap.selectLocalLogin)
        .click(addConLdap.addValueConf).pressKey('ctrl+a  delete delete delete delete').typeText(addConLdap.addValueConf,testMock.DefaultLoginStrategy)
        .click(addConLdap.saveConf)
        .wait(10000)
})

fixture `Starfish should be in Default State`
.page `${testMock.stageRCuRL}`;
test('Test Default Configuration on StageRC',async stageRC =>   {
    await stageRC
        .typeText(loginPage.userName,testMock.username)
        .typeText(loginPage.passWd,testMock.ldapPassword)
        .click(loginPage.stageRCLoginButton)
        .typeText(loginPage.userName,testMock.username)
        .typeText(loginPage.passWd,testMock.password)
        .click(loginPage.stageRCLoginButton)
})
