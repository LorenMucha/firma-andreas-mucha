"use client";
import Bad from "./components/Bad";
import Dach from "./components/Dach";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Haustechnik from "./components/Haustechnik";
import Heizung from "./components/Heizung";
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
      <Heizung id={de.anchors.heizung} />
      <Bad id={de.anchors.bad} />
      <Haustechnik id={de.anchors.haustechnik} />
      <Dach id={de.anchors.dach} />
      <Process />
      <Gallery />
      <Kontakt id={de.anchors.kontakt} />
      <Footer links={navbarItems} />
    </main>
  );
}
