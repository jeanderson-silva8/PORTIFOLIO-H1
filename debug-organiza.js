import puppeteer from 'puppeteer-core';

async function run() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const browser = await puppeteer.launch({ executablePath: edgePath, headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://organiza-dashboard-full.vercel.app/login', { waitUntil: 'networkidle2' });
  
  // Imprime o HTML completo do body para sabermos quais inputs existem!
  const html = await page.evaluate(() => document.body.innerHTML);
  console.log('HTML DO BODY:');
  console.log(html);

  await page.screenshot({ path: 'C:\\Users\\pedro\\.gemini\antigravity-ide\\brain\\bc8a5b63-fe51-45af-a609-160a5540ca4f\\debug_login.png' });
  await browser.close();
}
run();
