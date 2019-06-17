import {defineSupportCode} from 'cucumber'
import { expect, assert } from 'chai'
import { HomePage } from 'Tests/pages/HomePage';
import { XBoxPage } from 'Tests/pages/XBoxPage';
import { ProductPage } from 'Tests/pages/ProductPage';

defineSupportCode(({Given, When, Then}) => {

    var homePage = new HomePage();
    var xBoxPage = new XBoxPage();
    var productDescPage = new ProductPage();

    Given(/^I navigate to the Game Home page$/, async () => {
        await homePage.OpenBrowser("https://www.game.co.uk");
    });

    When(/^I click on the xbox menu link$/, async () => {
        await homePage.GoToXBoxPage();
    });

    When(/^I click on the '(.*?)' buy now link$/, async (productKeyword) => {
        await xBoxPage.ClickOnAGivenProductLink(productKeyword.toString());
    });

    Then(/^The title of the product description should be '(.*?)'$/, async (expected) => {
        var actual = productDescPage.GetPDPContainerTitle();
        expect(actual.toString().toLocaleLowerCase()).to.be(expected.toString().toLocaleLowerCase());
    });


});