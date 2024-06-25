import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SectionTwo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="h-full w-full"
      ref={ref}
    >
      <div className="flex items-center justify-center flex-col h-full ">
        <div className="font-primary text-2xl md:text-5xl max-w-4xl text-center p-4 text-white">
          Im a full stack/snack developer with an appetite for highly
          collaborative teams. I enjoy all phases of the development life
          cycle... ideation, design, build, test, deploy, scale, some more
          testing. My satisfaction is user satisfaction.
        </div>
      </div>
    </motion.div>
  );
}
