'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleKnowMoreClick = () => {
    router.push('/about');
  };

  const handleRegister = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSfBw4IY9EV2Vip0pdF_BNoHv85SRYfKN1E8YqIOur3IftQF9Q/viewform'
    );
  };
  return (
    <div className="relative w-full flex flex-col items-center justify-center gap-10">
      <Image
        alt="Hero Background"
        className=" -z-10 opacity-90"
        objectFit="cover"
        objectPosition="center"
        src="/bg1.jpg"
        fill
      />
      <div className="pb-10 md:pb-5">
        <h1 className="text-2xl sm:text-4xl md:text-7xl lg:text-8xl font-bold text-background">
          <span className="text-base sm:text-xl md:text-5xl lg:text-6xl">
            Welcome to
          </span>
          <br /> IAAP CONFERENCE
        </h1>
        <p className="mt-5 text-background">
          January 3rd - 5th 2025, Kohima, Nagaland
        </p>
      </div>
      <div className="inline-flex gap-5 w-full items-center justify-center mb-5">
        <Button className="shadow-lg" onClick={() => handleRegister()}>
          Register
        </Button>
        <Button variant="outline" onClick={() => handleKnowMoreClick()}>
          Know More
        </Button>
      </div>
    </div>
  );
}
