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
    <div className="relative w-full h-[90vh] flex flex-col items-center justify-center gap-5 sm:gap-10 container">
      <Image
        alt="Hero Background"
        className=" -z-10 opacity-90"
        objectFit="cover"
        objectPosition="bottom"
        src="/hero-cover.jpg"
        fill
      />
      <div className="sm:pd-1 md:pb-10 sm:pt-0">
        <h1 className="text-3xl md:text-7xl lg:text-8xl font-extrabold sm:font-bold text-background">
          <span className="text-base sm:text-xl md:text-5xl lg:text-6xl">
            Welcome to
          </span>
          <br /> IAAP CONFERENCE
        </h1>
        <p className="mt-5 text-background">
          26<sup>th</sup> - 28<sup>th</sup> February 2025, Kohima, Nagaland
        </p>
      </div>
      <div className="inline-flex gap-5 w-full items-center justify-center mb-10">
        <Button size={'sm'} variant="outline" onClick={() => handleRegister()}>
          Register
        </Button>
        <Button
          className="shadow-lg"
          size={'sm'}
          variant="default"
          onClick={() => handleKnowMoreClick()}
        >
          Know More
        </Button>
      </div>
    </div>
  );
}
