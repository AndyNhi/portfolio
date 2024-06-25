import Image from "next/image";
import denver from "../../../public/denver.jpg";

export default function Landing() {
  return (
    <div className="h-full w-full">
      <Image
        className="z-0"
        src={denver}
        alt="insert credit"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        loading="lazy"
      />
      <div className="z-10 relative flex flex-col">
        <div className="shrink font-primary text-[calc(10vw+10vh)] leading-none tracking-tighter text-white">
          code all day
        </div>
        <div className="shrink font-primary text-[calc(10vw+10vh)] leading-none tracking-tighter text-white">
          break all night
        </div>
        <div className="shrink font-primary text-[calc(10vw+10vh)] leading-none tracking-tighter text-white">
          87 til infinity
        </div>
      </div>
    </div>
  );
}
