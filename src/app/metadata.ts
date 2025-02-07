import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const ogImageUrl = `${siteUrl}/images/thumbnail.webp`;
const title = 'Photo Ground';
const description = 'Snap Your Day, Cherish Your Life';

const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: ogImageUrl,
  },
  twitter: {
    title,
    description,
    images: ogImageUrl,
    card: 'summary_large_image',
    siteId: 'photoground',
    creator: '@photoground',
    creatorId: 'photoground',
  },
};

export default metadata;
