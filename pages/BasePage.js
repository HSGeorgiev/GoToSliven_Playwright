import { test, expect } from '@playwright/test';

export class BasePage{
    
    constructor(page){
        this.page = page;
        this.aboutMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "about-us")]').first();
        this.touristAttractionsMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/tourist-attractions/")]').first();
        this.friendOfSlivenMenuLink = page.locator('//ul[@id="menu-primary-eng"]//a[contains(@href, "/become-a-friend-of-sliven/")]').first();
    }

}

