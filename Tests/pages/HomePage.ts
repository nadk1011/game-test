import { browser, element, by, protractor, $$, $ } from 'protractor';
import { IdentificationType, BasePage } from "./BasePage";

const Locators = {
    xBoxMenuLink:{
        type: IdentificationType[IdentificationType.Css],
        value: "#bs-example-navbar-collapse-1 > ul > li > a[href*='xbox']"
    }
   
}

export class HomePage extends BasePage {

    xBoxMenuLink = this.ElementLocator(Locators.xBoxMenuLink)

    async OpenBrowser(url: string) {
        await browser.get(url);
    }

    async GoToXBoxPage(){
        await this.xBoxMenuLink.click();
    }

    
}