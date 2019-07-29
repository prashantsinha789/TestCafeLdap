import { Selector } from 'testcafe';
import samplePage from "../PageObj/samplePage"

fixture `My first fixture`
    .page `https://devexpress.github.io/testcafe/example`;

const page = new samplePage();

const articleHeader = Selector('#article-header');

test('My first test', async prashant => {
	 await prashant
        .typeText(page.name, 'Peter Parker')
        .click(page.click1)
        .click(page.click2)
});
