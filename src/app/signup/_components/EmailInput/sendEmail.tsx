import { SignUpData } from '../../type';

export default async function sendEmail({
  email,
}: {
  email: SignUpData['email'];
}) {
  try {
    const rawResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/customer/emails/request`,
      {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      },
    );

    if (rawResponse.ok) {
      return { ok: true };
    }

    const response = await rawResponse.json();
    return { ok: false, code: response.code };
  } catch {
    return { ok: false, code: '' };
  }
}
