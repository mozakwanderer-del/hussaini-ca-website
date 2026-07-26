import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Hussaini & Co. Chartered Accountants',
    image: 'https://hussaini-co.com/og-image.jpg',
    description: 'Trusted advisors helping businesses navigate audit, taxation and financial excellence.',
    areaServed: 'IN',
    priceRange: 'Variable',
    serviceType: ['Audit', 'Taxation', 'Financial Advisory'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bazar Ward',
      addressLocality: 'Chandrapur',
      addressRegion: 'Maharashtra',
      postalCode: '442402',
      addressCountry: 'IN',
    },
    telephone: '+91-7104-250250',
    email: 'info@hussaini-co.com',
    url: 'https://hussaini-co.com',
    sameAs: [
      'https://linkedin.com/company/hussaini-co',
      'https://twitter.com/hussaini-co',
    ],
  };

  return NextResponse.json(schema, {
    headers: {
      'Content-Type': 'application/ld+json',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
