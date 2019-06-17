import { browser, element, by, protractor, $$, $ } from 'protractor';
import { IdentificationType, BasePage } from "./BasePage";

const Locators = {
    pdpTitleElement:{
        type: IdentificationType[IdentificationType.Css],
        value: "#pdp > h1"
    }
   
}

export class ProductPage extends BasePage {

    pdpTitleElement = this.ElementLocator(Locators.pdpTitleElement)

    

    async GetPDPContainerTitle(){
        return this.pdpTitleElement.getText();
    }

    
}