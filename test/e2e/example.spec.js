import { test, expect } from '@playwright/test';

test.describe('Testes E2E com Site Público', () => {
  test('deve carregar exemplo.com', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });

  test('deve verificar cabeçalho', async ({ page }) => {
    await page.goto('https://example.com');
    const heading = await page.locator('h1').textContent();
    expect(heading).toBe('Example Domain');
  });

  test('deve verificar parágrafo', async ({ page }) => {
    await page.goto('https://example.com');
    const paragraph = await page.locator('p').first().textContent();
    expect(paragraph).toContain('documentation examples');
  });
});