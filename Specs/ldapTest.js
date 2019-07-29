import loginPg from "../PageObj/loginPage"
import mockData from "../Mocks/testMock"
import { Selector } from 'testcafe';

const loginPage = new loginPg();
const testMock = new mockData();


fixture `Starfish LDAP Login Check on StageRC`
    .page `${testMock.sfAdminUrl}`;


test('Ldap Configuration on SFAdmin',async AddConf =>   {

    await AddConf
        .typeText(loginPage.userName,testMock.sf_username)
        .typeText(loginPage.passWd,testMock.password)
        .click(loginPage.adminLoginButton)
})
