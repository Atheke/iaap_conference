import Script from 'next/script';

export default function EventStructuredData() {
  return (
    <Script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: 'IAAP Conference 2025',
          startDate: '2025-01-01T09:00',
          endDate: '2025-01-03T18:00',
          eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
          eventStatus: 'https://schema.org/EventScheduled',
          location: {
            '@type': 'Place',
            name: 'Nagaland University',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Nagaland',
              addressCountry: 'IN',
            },
          },
          description: 'IAAP Conference 2025 at Nagaland University',
          organizer: {
            '@type': 'Organization',
            name: 'Nagaland University',
            url: 'https://www.iaapconference.com',
          },
        }),
      }}
      id="event-schema"
      type="application/ld+json"
    />
  );
}
