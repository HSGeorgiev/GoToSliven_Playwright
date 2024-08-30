import { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } from '@playwright/test';
import { chromium } from 'playwright';
import { GoToSliven } from '../Globals/GlobalConstants.js';
import { BasePageProjectIdentification } from '../pages/BasePageProjectIdentification.js';


let browser;
let context;
let page;



describe("Project Visual Identification tests", () => {

    beforeAll(async () => {
        browser = await chromium.launch();
    });

    afterAll(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        context = await browser.newContext();
        page = await context.newPage();
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    describe("Check for Logos Visability", () => {

        test('Municipality Of Sliven Logo', async ({ page }) =>{
    
            const identification = new BasePageProjectIdentification(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl + identification.path);
            await identification.coatOfArmsSliven.scrollIntoViewIfNeeded();
            
            expect(identification.coatOfArmsSliven).toBeVisible();


        });


    });
});