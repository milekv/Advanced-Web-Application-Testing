const { test, expect } = require('@playwright/test');

test('should add a task', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('text=Add Task');
  await page.fill('[placeholder="Task Title"]', 'New Task');
  await page.click('text=Save');
  const task = await page.textContent('.task-list');
  expect(task).toContain('New Task');
});

test('should edit a task', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('.task-item >> text=Edit');
  await page.fill('[placeholder="Task Title"]', 'Updated Task');
  await page.click('text=Save');
  const task = await page.textContent('.task-list');
  expect(task).toContain('Updated Task');
});

test('should delete a task', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('.task-item >> text=Delete');
  const task = await page.isVisible('.task-item');
  expect(task).toBe(false);
});
