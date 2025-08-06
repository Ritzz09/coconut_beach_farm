import React from "react";
import { Helmet } from "react-helmet";

const LandingPageSEO = () => {
  return (
    <Helmet>
      {/* Meta Title & Description */}
      <title>Resorts in Alibaug, Maharashtra | Alibaug Beach Resort</title>
      <meta
        name="description"
        content="Coconut Beach Farm is a peaceful beachfront resort in Alibaug, just a short walk from Nagaon Beach, offering a swimming pool, garden views, and family-friendly stays."
      />

      {/* Canonical URL */}
      <link rel="canonical" href="https://www.coconutbeachfarm.com/" />

      {/* Open Graph Tags */}
      <meta property="og:title" content="Coconut Beach Farm – Top Rated Resort in Alibaug Near Nagaon Beach" />
      <meta
        property="og:description"
        content="Experience beachfront bliss at Coconut Beach Farm, a top-rated resort in Alibaug near Nagaon Beach. Enjoy a private pool, lush gardens, cozy stays, and family-friendly amenities — perfect for your next coastal escape."
      />
      <meta property="og:url" content="https://www.coconutbeachfarm.com/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://www.coconutbeachfarm.com/assets/treeHouse-DffWmVlp.jpeg"
      />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Coconut Beach Farm – Top Rated Resort in Alibaug Near Nagaon Beach" />
      <meta
        name="twitter:description"
        content="Experience beachfront bliss at Coconut Beach Farm, a top-rated resort in Alibaug near Nagaon Beach. Enjoy a private pool, lush gardens, cozy stays, and family-friendly amenities — perfect for your next coastal escape."
      />
      <meta
        name="twitter:image"
        content="https://www.coconutbeachfarm.com/assets/treeHouse-DffWmVlp.jpeg"
      />
      <meta name="twitter:site" content="@homesweekend" />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Coconut Beach Farm",
          "image": "https://www.coconutbeachfarm.com/assets/treeHouse-DffWmVlp.jpeg",
          "@id": "",
          "url": "https://www.coconutbeachfarm.com/",
          "telephone": "7276862000",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Grampanchayat Office, Thakur Ali, Shivaji Chowk, near Annapurna Hotel, Nagaon",
            "addressLocality": "Alibag",
            "postalCode": "402201",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.6130756,
            "longitude": 72.9017083
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          },
          "sameAs": [
            "https://www.facebook.com/weekendhomes05",
            "https://x.com/homesweekend",
            "https://www.instagram.com/weekendhomes.in/",
            "https://www.youtube.com/@weekendhomespune/",
            "https://www.makemytrip.com/hotels/coconut_beach_farm_rooms_wi_fi-details-alibaug.html",
            "https://www.booking.com/hotel/in/coconut-beach-farm.html",
            "https://www.agoda.com/en-in/coconut-beach-farm/hotel/alibaug-in.html",
            "https://www.tripadvisor.in/Hotel_Review-g2334959-d8459385-Reviews-Coconut_Beach_Farm_Resort-Nagaon_Raigad_District_Maharashtra.html",
            "https://www.goibibo.com/hotels/coconut-beach-farm-rooms-wi-fi-hotel-in-alibag-1682898730937260275/",
            "https://www.trivago.in/en-IN/oar/resort-coconut-beach-farm-alibaug?search=100-5093992",
            "https://www.adanione.com/india-hotels/coconut-beach-farm-thakur-ali-alibaug-3928462",
            "https://www.airbnb.co.in/rooms/39282896",
            "https://www.airbnb.co.in/rooms/1241169386441422036",
            "https://www.airbnb.co.in/rooms/1241181328319332005",
            "https://www.airbnb.co.in/rooms/1241103549728517304",
            "https://www.coconutbeachfarm.com/"
          ] 
        }
      `}
      </script>
    </Helmet>
  );
};

export default LandingPageSEO;
