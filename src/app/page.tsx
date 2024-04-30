"use client";
import Heizung from "./components/Heizung";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

export interface LeistungProps {
  id: string
}

export interface NavbarItem {
  text: string
  link: string
}

export const navbarItems: NavbarItem[] = [
  { text: 'Heizung', link: "#heizung" },
  { text: 'Bad', link: "#bad" },
  { text: 'Haustechnik', link: "#haustechnik" },
  { text: 'Dach', link: "#dach" }]

export default function Home() {
  return (
    <main>
      <Navbar items={navbarItems} />
      <Intro />
      <Heizung id="heizung" />
    </main>)
}
