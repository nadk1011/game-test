import { browser, element, by, protractor, $$, $ } from 'protractor';
import { IdentificationType, BasePage } from "./BasePage";

const Locators = {
    motoGPLink:{
        type: IdentificationType[IdentificationType.Css],
        value: ".contentBlurb > a[href*='motogp-19']"
    }

}

export class XBoxPage extends BasePage{

    async ClickOnAGivenProductLink(keyWord : string){
        var cssString = ".contentBlurb > a[href*='"+keyWord+"']"
        await element(by.css(cssString)).click();
    }

}
