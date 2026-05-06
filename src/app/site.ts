export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lorenmucha.github.io/firma-andreas-mucha",
  phoneDisplay: "0176 / 39735624",
  phoneHref: "+4917639735624",
  email: "fa.mucha@web.de",
  mapLink: "https://www.openstreetmap.org/?mlat=51.17506&mlon=13.96436#map=18/51.17506/13.96436",
  coordinates: {
    lat: 51.17506,
    lon: 13.96436,
  },
} as const;
