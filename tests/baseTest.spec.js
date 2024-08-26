//const { test, expect } = require('@playwright/test');

import { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } from '@playwright/test';
import { chromium } from 'playwright';
import { GoToSliven } from '../pages/GlobalConstants.js';
import { BasePage } from '../pages/BasePage.js';


let browser;
let context;
let page;


describe("e2e tests", () => {
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

    
    describe("authentication", () => {

        test('Click About Button', async ({ page }) =>{

            const basePage = new BasePage(page);
            const goToSliven = new GoToSliven();

            await page.goto(goToSliven.baseUrl);
            await basePage.aboutMenuLink.click();
            const title = await page.title();
            expect(title).toBe("About us – gotosliven Touristic Info Site");
            expect(page.url()).toBe('https://gotosliven.com/about-us/');
        });

        test('Click Become Friend Of Sliven Button', async ({ page }) =>{

            const basePage = new BasePage(page);
            const goToSliven = new GoToSliven();
``
            await page.goto(goToSliven.baseUrl);
            await basePage.touristAttractionsMenuLink.hover();
            await basePage.friendOfSlivenMenuLink.click();
            const title = await page.title();
            expect(title).toBe("Become a friend of SLiven – gotosliven Touristic Info Site");
            expect(page.url()).toBe('https://gotosliven.com/become-a-friend-of-sliven/');
        });
    });
});