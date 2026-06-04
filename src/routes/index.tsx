import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/toolkit/Nav";
import { Hero } from "@/components/toolkit/Hero";
import { Identity } from "@/components/toolkit/Identity";
import { Typography } from "@/components/toolkit/Typography";
import { ColorSection } from "@/components/toolkit/Color";
import { Imagery } from "@/components/toolkit/Imagery";
import { Textures } from "@/components/toolkit/Textures";
import { Assets } from "@/components/toolkit/Assets";
import { Footer } from "@/components/toolkit/Footer";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EXPOSURE by 29029 — Brand Toolkit" },
      { name: "description", content: "The working brand reference for EXPOSURE by 29029: intent, voice, identity, typography, color, and approved downloadable assets." },
      { property: "og:title", content: "EXPOSURE by 29029 — Brand Toolkit" },
      { property: "og:description", content: "Your team won't be the same. The field guide and asset library for EXPOSURE." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-ex-white text-ex-black">
      <Nav />
      <Hero />
      <Identity />
      <ColorSection />
      <Typography />
      <Imagery />
      <Textures />
      <Assets />
      <Footer />
    </main>
  );
}

