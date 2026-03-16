import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendLeadNotification } from '@/lib/resend/client';

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  properties: z.string().min(1),
  pms: z.string().min(1),
  message: z.string().optional(),
  website: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Honeypot check — if filled, silently return success
    if (data.website && data.website.length > 0) {
      return NextResponse.json({ success: true });
    }

    await sendLeadNotification({
      name: data.name,
      email: data.email,
      properties: data.properties,
      pms: data.pms,
      message: data.message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
