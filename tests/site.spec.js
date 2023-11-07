// @ts-check
const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000'; // Replace with the URL of the student's resume page

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});

test('Check Page Title', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe('Nissi Portfolio Website');
});

test('Check Logo Visibility', async ({ page }) => {
  const logo = await page.isVisible('.logo');
  expect(logo).toBe(true);
});

test('Check Navigation Menu', async ({ page }) => {
  const sidemenu = await page.isVisible('#sidemenu');
  expect(sidemenu).toBe(true);
});

test('Check Home Link in Navigation Menu', async ({ page }) => {
  const homeLink = await page.isVisible('#sidemenu li:nth-child(1) a');
  expect(homeLink).toBe(true);
});

test('Check About Link in Navigation Menu', async ({ page }) => {
  const aboutLink = await page.isVisible('#sidemenu li:nth-child(2) a');
  expect(aboutLink).toBe(true);
});

test('Check Services Link in Navigation Menu', async ({ page }) => {
  const servicesLink = await page.isVisible('#sidemenu li:nth-child(3) a');
  expect(servicesLink).toBe(true);
});

test('Check Portfolio Link in Navigation Menu', async ({ page }) => {
  const portfolioLink = await page.isVisible('#sidemenu li:nth-child(4) a');
  expect(portfolioLink).toBe(true);
});

test('Check Contact Link in Navigation Menu', async ({ page }) => {
  const contactLink = await page.isVisible('#sidemenu li:nth-child(5) a');
  expect(contactLink).toBe(true);
});

test('Check "HI, I\'m Nissi" Text', async ({ page }) => {
  const hiText = await page.textContent('.header-text h1');
  expect(hiText).toBe("HI, I'm Nissi From New Jersey");
});

test('Check "Python Developer" Text', async ({ page }) => {
  const pythonDeveloperText = await page.textContent('.header-text p');
  expect(pythonDeveloperText).toBe('Python Developer');
});

test('Check About Section Visibility', async ({ page }) => {
  const aboutSection = await page.isVisible('#about');
  expect(aboutSection).toBe(true);
});

test('Check "Skills" Tab Visibility in About Section', async ({ page }) => {
  const skillsTab = await page.isVisible('#skills');
  expect(skillsTab).toBe(true);
});

test('Check "Experience" Tab Absence in About Section', async ({ page }) => {
  const experienceTab = await page.waitForSelector('#experience', { state: 'hidden', timeout: 10000 });
  expect(experienceTab).toBeNull();
});

test('Check "Education" Tab Absence in About Section', async ({ page }) => {
  const educationTab = await page.waitForSelector('#education', { state: 'hidden', timeout: 10000 });
  expect(educationTab).toBeNull();
});

test('Check "Web Design" Service', async ({ page }) => {
  const webDesignService = await page.isVisible('#services div:nth-child(1)');
  expect(webDesignService).toBe(true);
});

test('Check "UI/UX Design" Service', async ({ page }) => {
  const uiuxDesignService = await page.isVisible('#services div:nth-child(2)');
  expect(uiuxDesignService).toBe(true);
});

test('Check "App Design" Service', async ({ page }) => {
  const appDesignService = await page.isVisible('#services div:nth-child(3)');
  expect(appDesignService).toBe(true);
});

test('Check "Railway Reservation Website" Work', async ({ page }) => {
  const railwayWork = await page.isVisible('#portfolio .work:nth-child(1)');
  expect(railwayWork).toBe(true);
});

test('Check "Operating System Project" Work', async ({ page }) => {
  const osProjectWork = await page.isVisible('#portfolio .work:nth-child(2)');
  expect(osProjectWork).toBe(true);
});

test('Check "Text Based Captcha" Work', async ({ page }) => {
  const captchaWork = await page.isVisible('#portfolio .work:nth-child(3)');
  expect(captchaWork).toBe(true);
});

test('Check "Contact Me" Section Visibility', async ({ page }) => {
  const contactSection = await page.isVisible('#contact');
  expect(contactSection).toBe(true);
});
