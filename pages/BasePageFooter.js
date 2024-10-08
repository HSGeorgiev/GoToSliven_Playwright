import { test, expect } from '@playwright/test';

export class BasePageFooter{
    // BasePageFooter classs represent the footer of the website
    constructor(page){
        this.page = page;
        this.path = '/';
        // Mapping h5 headings in the footer
        this.h5Headings = page.locator('//footer//h5');
        this.h5Expected = [
            'Quick Link',
            'Information',
            'Get In Touch'
        ]
        // Mapping Links in Footer Element
        this.aboutLinkFooter = page.locator('//footer//a[contains(@href, "about-us")]');
        this.touristAttractionLinkFooter = page.locator('//footer//a[contains(@href, "tourist-attraction")]');
        this.interactiveMapLinkFooter = page.locator('//footer//a[contains(@href, "interactive-map-of-sliven")]');
        this.eventsLinkFooter = page.locator('//footer//a[contains(@href, "event-directory")]');
        this.accomodationLinkFooter = page.locator('//footer//a[contains(@href, "accommodation")]');
        this.restaurantsLinkFooter = page.locator('//footer//a[contains(@href, "restaurants")]');
        this.contactusLinkFooter = page.locator('//footer//a[contains(@href, "contact-us")]');
        // Footer Text Containers Elements
        this.textContainersFooter = page.locator('//footer//div[@class="elementor-widget-container"]//p');
        this.containersExpected = [
            'Touristic Info Site of Sliven. Sites, Places, Hotels, Restaurants, attraction in Sliven City.',
            'Social media :',
        ]
        // Footer Get In Touch //ul//li elements
        this.getInTouchLiFooter = page.locator('//footer//ul//li[@class="elementor-icon-list-item elementor-inline-item"]');
        this.getInTouchFooterExpected = [
            'Tsar Osvoboditel Blvd. 1',
            '+359 44 611 123',
            'tourism.sliven@gmail.com',
        ]

        // Social Networks Icons in Footer 
        this.youtubeIconFooter = page.locator('//a[@class="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-d9896f5"]');
        this.facebookIconFooter = page.locator('//a[@class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-d46edd1"]');

    }

}

