"use client";
import Bad from "./components/Bad";
import Dach from "./components/Dach";
import Footer from "./components/Footer";
import Haustechnik from "./components/Haustechnik";
import Heizung from "./components/Heizung";
import Intro from "./components/Intro";
import Kontakt from "./components/Kontakt";
import Navbar from "./components/Navbar";
import { navbarItems } from "./constants";
import de from "@/locales/de.json";

export default function Home() {
  return (
    <main>
      <Navbar items={navbarItems} />
      <Intro />
      <Heizung id={de.anchors.heizung} />
      <Bad id={de.anchors.bad} />
      <Haustechnik id={de.anchors.haustechnik} />
      <Dach id={de.anchors.dach} />
      <Kontakt id={de.anchors.kontakt} />
      <Footer links={navbarItems} />
    </main>)
}
