import Image from "next/image";
import Intro from "./components/into";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro />
    </main>)
}
