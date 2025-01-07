import { SignUpData } from '../../type';

export default async function confirmEmail({
  email,
  verificationCode,
}: {
  email: SignUpData['email'];
  verificationCode: string;
}) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/customer/emails/verify`,
      {
        method: 'POST',
        body: JSON.stringify({ email, verificationCode }),
        headers: { 'Content-Type': 'application/json' },
      },
    );

    if (!response.ok) throw Error();
  } catch {
    return false;
  }

  return true;
}
