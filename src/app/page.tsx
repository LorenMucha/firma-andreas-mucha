"use client";
import Heizung from "./components/Heizung";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Intro />
      <Heizung />
    </main>)
}
