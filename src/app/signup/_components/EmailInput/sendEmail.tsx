import { SignUpData } from '../../type';

export default async function sendEmail({
  email,
}: {
  email: SignUpData['email'];
}) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/customer/emails/request`,
      {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      },
    );

    if (!response.ok) throw Error();
  } catch {
    return false;
  }

  return true;
}
