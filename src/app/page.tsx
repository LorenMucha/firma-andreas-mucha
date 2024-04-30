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

export default function Home() {
  return (
    <main>
      <Navbar items={navbarItems} />
      <Intro />
      <Heizung id="heizung" />
      <Bad id="bad" />
      <Haustechnik id="haustechnik" />
      <Dach id="dach" />
      <Kontakt id="kontakt" />
      <Footer links={navbarItems} />
    </main>)
}
