import puppeteer from 'puppeteer-core';
import path from 'path';

async function run() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  console.log('Iniciando navegador com Edge local:', edgePath);

  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    console.log('Navegando para a página de login...');
    await page.goto('https://organiza-dashboard-full.vercel.app/login', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    console.log('Localizando campos de e-mail e senha...');
    // Tenta encontrar o input de email
    const emailSelector = 'input[type="email"], input[name="email"], input[id="email"], input[placeholder*="email" i], input[placeholder*="e-mail" i]';
    await page.waitForSelector(emailSelector, { timeout: 10000 });
    await page.type(emailSelector, 'aquieeste234@gmail.com');

    // Tenta encontrar o input de senha
    const passwordSelector = 'input[type="password"], input[name="password"], input[id="password"], input[placeholder*="senha" i], input[placeholder*="password" i]';
    await page.waitForSelector(passwordSelector, { timeout: 10000 });
    await page.type(passwordSelector, 'alskjdnhabjnw24');

    console.log('Realizando login...');
    // Clica no botão de login
    const buttonSelector = 'button[type="submit"], button:not([type]), input[type="submit"]';
    await page.click(buttonSelector);

    console.log('Aguardando carregamento da dashboard logada...');
    // Aguarda a URL mudar ou o conteúdo da dashboard carregar (ex: 8 segundos de segurança para banco e animações)
    await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 15000 }).catch(() => {
      console.log('Aviso: Navegação pós-click não disparou evento padrão, aguardando timer...');
    });
    
    // Aguarda um tempo de segurança para carregamentos de dados internos do Firebase/Banco e layouts
    await new Promise(resolve => setTimeout(resolve, 8000));

    console.log('Capturando screenshot Desktop (1920x1080, DPR 3)...');
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 3
    });
    const desktopPath = path.resolve('public/organiza-dia-highres.png');
    await page.screenshot({ path: desktopPath });
    console.log('Screenshot Desktop salva em:', desktopPath);

    console.log('Capturando screenshot Mobile (390x844, DPR 3)...');
    await page.setViewport({
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true
    });
    // Aguarda mais um pouco para o layout responsivo se ajustar
    await new Promise(resolve => setTimeout(resolve, 3000));
    const mobilePath = path.resolve('public/organiza-mobile-highres.png');
    await page.screenshot({ path: mobilePath });
    console.log('Screenshot Mobile salva em:', mobilePath);

    console.log('Tudo concluído com total sucesso!');
  } catch (err) {
    console.error('Ocorreu um erro no processo de automação:', err);
  } finally {
    await browser.close();
  }
}

run();
