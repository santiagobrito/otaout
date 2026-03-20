import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const toEmail = process.env.RESEND_TO_EMAIL;

    if (!apiKey || !fromEmail || !toEmail) {
      // Silently fail if not configured — don't block the UX
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(apiKey);

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; color: #1a1a1a;">
        <h2 style="margin: 0 0 8px; font-size: 22px; color: #0a0a0a;">Alguien usó la calculadora</h2>
        <p style="margin: 0 0 24px; color: #64748B; font-size: 14px;">${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #555; width: 180px;">Modo</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.mode === 'quick' ? 'Rápido' : 'Detallado'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #555;">Facturación anual</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 700;">${Number(data.revenue).toLocaleString('es-ES')} €</td>
          </tr>
          ${data.mode === 'detailed' ? `<tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #555;">Propiedades</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.properties}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #555;">Booking / Airbnb / Directo</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.bookingShare}% / ${data.airbnbShare}% / ${data.directShare}%</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #555;">Objetivo directo (año 1)</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.directGoal}%</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #E8440A;">Comisiones OTAs actuales</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 700; color: #E8440A;">${Number(data.totalOtaCost).toLocaleString('es-ES')} €/año</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #059669;">Ahorro 3 años</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 700; color: #059669;">${Number(data.totalSavings3y).toLocaleString('es-ES')} €</td>
          </tr>
        </table>
      </div>
    `;

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Calculadora OTAout: ${Number(data.revenue).toLocaleString('es-ES')}€ facturación`,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch {
    // Never block the calculator UX
    return NextResponse.json({ success: true });
  }
}
