import Image from "next/image";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  return (
    <div className="w-full container flex flex-col pt-20 lg:pt-10 items-start lg:px-24 relative">
      <Image
        src="/bg1.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className=" -z-10 opacity-90"
      />
      <div className="pb-10 md:pb-5">
        <h1 className="text-2xl sm:text-4xl md:text-7xl lg:text-9xl font-bold text-background">
          <span className="text-base sm:text-xl md:text-5xl lg:text-7cl">
            Welcome to
          </span>
          <br /> IAAP CONFERENCE
        </h1>
        <p className="mt-5 text-background">
          October 5th-7th 2024, Kohima, Nagaland
        </p>
      </div>
      <div className="inline-flex gap-5 w-full items-center justify-center">
        <Button>Register</Button>
        <Button variant="outline">Know More</Button>
      </div>
      <div className="inline-flex items-center w-full justify-center mt-20 pb-2">
        <CountdownTimer />
      </div>
    </div>
  );
}
