import { expect, test } from '@playwright/test'

test('records a round, updates the score and resets', async ({ page }) => {
  await page.addInitScript(() => { Math.random = () => 0 })
  await page.goto('/rock-paper-scissors-game/')
  await expect(page.getByRole('heading', { name: '가위 바위 보!' })).toBeVisible()
  await page.getByRole('spinbutton').fill('3')
  await page.getByRole('button', { name: 'paper' }).click()
  await expect(page.locator('.app-history p')).toHaveText('승리')
  await expect(page.locator('.score-num')).toHaveText(['3', '0'])
  await expect(page.locator('.winner img')).toHaveAttribute('src', /paper|^data:image\//)
  await page.getByRole('img', { name: '초기화' }).click()
  await expect(page.locator('.score-num')).toHaveText(['0', '0'])
  await expect(page.locator('.app-history p')).toBeEmpty()
  await expect(page.getByRole('spinbutton')).toHaveValue('1')
})
