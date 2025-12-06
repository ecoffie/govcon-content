const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
  console.log('Starting PDF generation...');

  // Read the HTML file
  const htmlPath = path.join(__dirname, '../public/downloads/cage-code-checklist.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');

  // Launch browser
  const browser = await puppeteer.launch({
    headless: 'new'
  });

  const page = await browser.newPage();

  // Set the HTML content
  await page.setContent(htmlContent, {
    waitUntil: 'networkidle0'
  });

  // Generate PDF
  const pdfPath = path.join(__dirname, '../public/downloads/cage-code-checklist.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'Letter',
    printBackground: true,
    margin: {
      top: '0.5in',
      right: '0.5in',
      bottom: '0.5in',
      left: '0.5in'
    }
  });

  await browser.close();

  console.log('PDF generated successfully at: ' + pdfPath);
}

generatePDF().catch(console.error);
