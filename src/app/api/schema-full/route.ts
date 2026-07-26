import { NextRequest, NextResponse } from 'next/server';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://hussaini-co.com',
        },
      ],
    },
    {
      '@type': 'Organization',
      name: 'Hussaini & Co.',
      url: 'https://hussaini-co.com',
      logo: 'https://hussaini-co.com/logo.png',
      description: 'Trusted Chartered Accountants providing audit, taxation, and advisory services.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bazar Ward',
        addressLocality: 'Chandrapur',
        addressRegion: 'Maharashtra',
        postalCode: '442402',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Business',
        telephone: '+91-7104-250250',
        email: 'info@hussaini-co.com',
      },
      sameAs: [
        'https://linkedin.com/company/hussaini-co',
        'https://twitter.com/hussaini-co',
      ],
    },
  ],
};

export async function GET(request: NextRequest) {
  return NextResponse.json(schema, {
    headers: {
      'Content-Type': 'application/ld+json',
      'Cache-Control': 'public, max-age=604800',
    },
  });
}
