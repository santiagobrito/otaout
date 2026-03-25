import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

type LeadData = {
  name: string;
  email: string;
  site?: string;
  properties: string;
  pms: string;
  message?: string;
};

export async function sendLeadNotification(data: LeadData) {
  const fromEmail = process.env.SMTP_USER;
  const toEmail = process.env.SMTP_TO_EMAIL || fromEmail;

  if (!fromEmail || !process.env.SMTP_PASS) {
    throw new Error("Missing SMTP_USER or SMTP_PASS env vars");
  }

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; color: #1a1a1a;">
      <h2 style="margin: 0 0 24px; font-size: 22px; color: #0a0a0a;">Nuevo lead OTAout</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #555; width: 140px;">Nombre</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #555;">Email</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${data.email}" style="color: #E8440A;">${data.email}</a></td>
        </tr>
        ${
          data.site
            ? `<tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #555;">Sitio web</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="${data.site}" style="color: #E8440A;">${data.site}</a></td>
        </tr>`
            : ""
        }
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #555;">Propiedades</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.properties}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #555;">PMS</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.pms}</td>
        </tr>
        ${
          data.message
            ? `<tr>
          <td style="padding: 10px 0; font-weight: 600; color: #555; vertical-align: top;">Mensaje</td>
          <td style="padding: 10px 0; white-space: pre-wrap;">${data.message}</td>
        </tr>`
            : ""
        }
      </table>
    </div>
  `;

  await transporter.sendMail({
    from: `OTAout <${fromEmail}>`,
    to: toEmail,
    subject: `Nuevo lead OTAout: ${data.name}`,
    html: htmlBody,
  });

  return { success: true };
}
