import Image from "next/image";
import denver from "../../public/denver.jpg";
import me from "../../public/profile-me.jpg";

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
            87 til infinity
          </div>
        </div>
      </section>
      <section className="h-screen bg-slate-200">
        <div className="flex items-center justify-center flex-col h-full">
          <div className="font-primary text-5xl max-w-4xl">
            Im a full stack/snack developer with an appetite for highly
            collaborative teams. I enjoy all phases of the development life
            cycle... ideation, design, build, test, deploy, scale, some more
            testing. My satisfaction is user satisfaction.
          </div>
        </div>
      </section>
      <section className="h-screen bg-red-300">
        {/* <h1 className="font-primary">section two</h1> */}
        <div>
          <Image
            // className="z-0"
            src={me}
            alt="andy nguyen"
            layout=""
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </section>
    </main>
  );
}
