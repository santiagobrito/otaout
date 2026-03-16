import { Resend } from 'resend';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

type LeadData = {
  name: string;
  email: string;
  properties: string;
  pms: string;
  message?: string;
};

export async function sendLeadNotification(data: LeadData) {
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.RESEND_TO_EMAIL;

  if (!fromEmail || !toEmail) {
    throw new Error('Missing RESEND_FROM_EMAIL or RESEND_TO_EMAIL env vars');
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
            : ''
        }
      </table>
    </div>
  `;

  const { error } = await getResend().emails.send({
    from: fromEmail,
    to: toEmail,
    subject: `Nuevo lead OTAout: ${data.name}`,
    html: htmlBody,
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }

  return { success: true };
}
