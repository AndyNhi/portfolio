import me from "../../../public/me.jpg";
import led2 from "../../../public/led2.jpg";
import led3 from "../../../public/led3.jpg";
import led4 from "../../../public/led4.jpg";
import fss from "../../../public/fss.jpg";
import travel from "../../../public/travel.jpg";
import Image from "next/image";

export default function Timeline() {
  return (
    <div className="h-full w-full text-white ">
      <div className="grid grid-cols-4 gap-0  h-full">
        <div className="bg-red-400 opacity-40">dev ops logos</div>
        <div className="bg-red-400 opacity-30">front end logos</div>
        <div className="bg-red-400 opacity-20">back end logos</div>
        <div className="bg-red-400 opacity-10">tools logos</div>
      </div>
    </div>
  );
}
