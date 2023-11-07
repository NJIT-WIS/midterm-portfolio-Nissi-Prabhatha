// @ts-check
const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000'; // Replace with the URL of the student's resume page

test('Check Page Title', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe('Personal Portfolio Website - Nissi');
});

test('Check if Logo Image is Present', async ({ page }) => {
  const logoImage = await page.locator('.logo img');
  expect(await logoImage.count()).toBe(1);
});

test('Check if Navigation Menu is Present', async ({ page }) => {
  const menuItems = await page.locator('#sidemenu li');
  expect(await menuItems.count()).toBe(5);
});

test('Check if About Section is Present', async ({ page }) => {
  const aboutSection = await page.locator('#about');
  expect(await aboutSection.count()).toBe(1);
});

test('Check if Services Section is Present', async ({ page }) => {
  const servicesSection = await page.locator('#services');
  expect(await servicesSection.count()).toBe(1);
});

test('Check if Portfolio Section is Present', async ({ page }) => {
  const portfolioSection = await page.locator('#portfolio');
  expect(await portfolioSection.count()).toBe(1);
});

test('Check if Contact Section is Present', async ({ page }) => {
  const contactSection = await page.locator('#contact');
  expect(await contactSection.count()).toBe(1);
});

test('Check if "Python Developer" Text is Present in Header', async ({ page }) => {
  const pythonDeveloperText = await page.locator('.header-text p');
  expect(await pythonDeveloperText.innerText()).toBe('Python Developer');
});

test('Check if "HI, I\'m Nissi From New Jersey" Text is Present in Header', async ({ page }) => {
  const headerText = await page.locator('.header-text h1');
  expect(await headerText.innerText()).toBe('HI, I\'m Nissi\nFrom New Jersey');
});

test('Check if "About Me" Title is Present', async ({ page }) => {
  const aboutTitle = await page.locator('#about .sub-title');
  expect(await aboutTitle.innerText()).toBe('About Me');
});

test('Check if "Skills" Tab is Present in About Section', async ({ page }) => {
  const skillsTab = await page.locator('#skills');
  expect(await skillsTab.count()).toBe(1);
});

test('Check if "Services" Title is Present', async ({ page }) => {
  const servicesTitle = await page.locator('#services .sub-title');
  expect(await servicesTitle.innerText()).toBe('Services');
});

test('Check if "Web Design" Service is Present', async ({ page }) => {
  const webDesignService = await page.locator('.services-list h2:has-text("Web Design")');
  expect(await webDesignService.count()).toBe(1);
});

test('Check if "UI/UX Design" Service is Present', async ({ page }) => {
  const uiUxDesignService = await page.locator('.services-list h2:has-text("UI/UX Design")');
  expect(await uiUxDesignService.count()).toBe(1);
});

test('Check if "App Design" Service is Present', async ({ page }) => {
  const appDesignService = await page.locator('.services-list h2:has-text("App Design")');
  expect(await appDesignService.count()).toBe(1);
});

test('Check if "My Work" Title is Present in Portfolio Section', async ({ page }) => {
  const myWorkTitle = await page.locator('#portfolio .sub-title');
  expect(await myWorkTitle.innerText()).toBe('My Work');
});

test('Check if "Railway Reservation Website" Work is Present', async ({ page }) => {
  const railwayWork = await page.locator('.work h3:has-text("Railway Reservation Website")');
  expect(await railwayWork.count()).toBe(1);
});

test('Check if "Operating System Project" Work is Present', async ({ page }) => {
  const osProjectWork = await page.locator('.work h3:has-text("Operating System Project")');
  expect(await osProjectWork.count()).toBe(1);
});

test('Check if "Text Based Captcha" Work is Present', async ({ page }) => {
  const captchaWork = await page.locator('.work h3:has-text("Text Based Captcha")');
  expect(await captchaWork.count()).toBe(1);
});

test('Check if "Contact Me" Title is Present in Contact Section', async ({ page }) => {
  const contactTitle = await page.locator('#contact .sub-title');
  expect(await contactTitle.innerText()).toBe('Contact Me');
});
