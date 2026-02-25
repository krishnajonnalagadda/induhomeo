const localBusiness = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "IH Clinic by Dr. Indu Rekha",
  description:
    "Women & child care in homeopathy. Tirupati-based clinic by Dr. Indu Rekha.",
  url: "https://www.drindushomeopathy.com",
  telephone: "+919491457407",
  email: "drindushomeopathy@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Yashoda Classics, Ground Floor, Air Bypass Rd, near Bashyam school, New Balaji Colony",
    addressLocality: "Tirupati",
    postalCode: "517502",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.6288,
    longitude: 79.4192,
  },
  sameAs: [],
  priceRange: "$$",
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}
