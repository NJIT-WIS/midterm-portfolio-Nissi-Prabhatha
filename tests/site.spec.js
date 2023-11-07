const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000'; // Update with your website URL

// Test case 1: Check Page Title
test('Check Page Title', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe('Nissi Portfolio Website');
});

// Test case 2: Check Logo in Header
test('Check Logo in Header', async ({ page }) => {
  const logoImage = await page.locator('.logo img');
  const logoImageCount = await logoImage.count();
  expect(logoImageCount).toBe(1); // Check if there's exactly one image inside the logo container
});

// Test case 3: Check Navigation Menu
test('Check Navigation Menu', async ({ page }) => {
  const menuItems = await page.locator('#sidemenu li a').count();
  expect(menuItems).toBe(5); // Five menu items
});

// Test case 4: Check Hero Section
test('Check Hero Section', async ({ page }) => {
  const heroTitle = await page.locator('.header-text h1').textContent();
  expect(heroTitle).toContain("HI, I'm Nissi From New Jersey");
});

// Test case 5: Check About Section
test('Check About Section', async ({ page }) => {
  const aboutTitle = await page.locator('#about h1').textContent();
  expect(aboutTitle).toBe('About Me');
});

// Test case 6: Check Services Section
test('Check Services Section', async ({ page }) => {
  const servicesTitle = await page.locator('#services h1').textContent();
  expect(servicesTitle).toBe('Services');
});

// Test case 7: Check Portfolio Section
test('Check Portfolio Section', async ({ page }) => {
  const portfolioTitle = await page.locator('#portfolio h1').textContent();
  expect(portfolioTitle).toBe('My Work');
});

// Test case 8: Check Contact Section
test('Check Contact Section', async ({ page }) => {
  const contactTitle = await page.locator('#contact h1').textContent();
  expect(contactTitle).toBe('Contact Me');
});

// Test case 9: Check Meta Description
test('Check Meta Description', async ({ page }) => {
  const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
  expect(metaDescription).toBe('Personal Portfolio Website - Nissi');
});

// Test case 10: Check Meta Keywords
test('Check Meta Keywords', async ({ page }) => {
  const metaKeywords = await page.locator('meta[name="keywords"]').getAttribute('content');
  expect(metaKeywords).toBe('portfolio, website, Nissi');
});

// Test case 11: Check If Images Are Loaded in Portfolio Section
test('Check Images in Portfolio Section', async ({ page }) => {
  const images = await page.locator('#portfolio .work-list img').count();
  expect(images).toBe(3); // Assuming there are 3 images in the portfolio
});

// Test case 12: Check if Social Media Icons Exist in Contact Section
test('Check Social Media Icons in Contact Section', async ({ page }) => {
  const socialMediaIcons = await page.locator('.social-icons i').count();
  expect(socialMediaIcons).toBe(4); // Assuming there are 4 social media icons
});

// Test case 13: Check if Tab Contents Exist
test('Check Tab Contents in About Section', async ({ page }) => {
  const tabContents = await page.locator('.tab-contents').count();
  expect(tabContents).toBe(3); // Assuming there are 3 tab contents
});

// Test case 14: Check if Tab Links Exist
test('Check Tab Links in About Section', async ({ page }) => {
  const tabLinks = await page.locator('.tab-links').count();
  expect(tabLinks).toBe(3); // Assuming there are 3 tab links
});

// Test case 15: Check if Contact Form Elements Exist
test('Check Contact Form Elements', async ({ page }) => {
  const contactFormInputs = await page.locator('#contact input').count();
  expect(contactFormInputs).toBe(3); // Assuming there are 3 input fields
});

// Test case 16: Check if Testimonial Cards Exist
test('Check Testimonial Cards', async ({ page }) => {
  const testimonialCards = await page.locator('.testimonial-cards .work').count();
  expect(testimonialCards).toBe(3); // Assuming there are 3 testimonials
});

// Test case 17: Check if Footer Links Exist
test('Check Footer Links', async ({ page }) => {
  const footerLinks = await page.locator('.footer a').count();
  expect(footerLinks).toBe(10); // Assuming there are 10 footer links
});

// Test case 18: Check if Header Bars Icons Exist
test('Check Header Bars Icons', async ({ page }) => {
  const headerIcons = await page.locator('.fa-solid.fa-bars').count();
  expect(headerIcons).toBe(1); // Assuming there is one bars icon
});

// Test case 19: Check if Header Logo Icon Exists
test('Check Header Logo Icon', async ({ page }) => {
  const logoIcon = await page.locator('.fa-solid.fa-circle-xmark').count();
  expect(logoIcon).toBe(1); // Assuming there is one X-mark icon
});

// Test case 20: Check if Download CV Button Exists
test('Check Download CV Button', async ({ page }) => {
  const downloadButton = await page.locator('.btn.btn2').count();
  expect(downloadButton).toBe(1); // Assuming there is one download button
});
