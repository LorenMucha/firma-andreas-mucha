export interface LeistungProps {
  id: string;
}
export interface NavbarItem {
  text: string;
  link: string;
}
export const basePath = "/firma-andreas-mucha";
export const siteUrl = "https://lorenmucha.github.io/firma-andreas-mucha";
export const company = {
  name: "Firma Andreas Mucha",
  phone: "0176 39735624",
  tel: "tel:+4917639735624",
  email: "fa.mucha@web.de",
  street: "Seitenstraße 8",
  city: "01896 Lichtenberg",
};
export const navbarItems: NavbarItem[] = [
  { text: "Leistungen", link: "#leistungen" },
  { text: "Kesselwartung", link: "#kesselwartung" },
  { text: "Kontakt", link: "#kontakt" },
];
