"use client";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Highlights from "./components/Highlights";
import Intro from "./components/Intro";
import Kontakt from "./components/Kontakt";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import ServicesOverview from "./components/ServicesOverview";
import { navbarItems } from "./constants";
import de from "@/locales/de.json";

export default function Home() {
  return (
    <main className="bg-sand-50">
      <Navbar items={navbarItems} />
      <Intro />
      <Highlights />
      <ServicesOverview />
      <Process />
      <Gallery />
      <Kontakt id={de.anchors.kontakt} />
      <Footer links={navbarItems} />
    </main>
  );
}
