import Image from "next/image";
import denver from "../../public/denver.jpg";

export default function Home() {
  return (
    <main>
      <section className="h-screen bg-slate-300">
        <Image
          className="z-0"
          src={denver}
          alt="insert credit"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="z-10 relative flex flex-col">
          <div className="shrink font-primary text-[calc(10vw+10vh)] leading-none tracking-tighter text-slate-200">
            code all day
          </div>
          <div className="shrink font-primary text-[calc(10vw+10vh)] leading-none tracking-tighter text-slate-200">
            break all night
          </div>
          <div className="shrink font-primary text-[calc(10vw+10vh)] leading-none tracking-tighter text-slate-200">
            87 'til infinity
          </div>
        </div>
      </section>
      <section className="h-screen bg-red-300">
        <h1 className="font-primary">section two</h1>
      </section>
    </main>
  );
}
