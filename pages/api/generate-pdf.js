import pdf from 'html-pdf';
import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  const { html } = req.body;

  if (!html) {
    return res.status(400).json({ error: 'HTML content is required.' });
  }

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(html);

    const pdfBuffer = await page.pdf({
      format: 'A4',
    });

    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="generated.pdf"');
    res.status(200).send(pdfBuffer);
  } catch (error) {
    console.error('Error generating PDF:', error);
    return res.status(500).json({ error: 'Something went wrong.' });
  }
}
