"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Landing from "./_components/Landing";
import Intro from "./_components/Intro";
import Timeline from "./_components/Timeline";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="bg-black">
      <section className="h-screen">
        <Landing />
      </section>
      <section className="h-screen">
        <Intro />
      </section>
      <section className="h-screen">
        <Timeline />
      </section>
      <motion.div
        className="fixed left-0 right-0 h-1 bg-white bottom-28"
        style={{ scaleX }}
      />
    </main>
  );
}
