import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 container mt-20">
      <div className="flex justify-between gap-5">
        <section className="w-1/2 flex-shrink-0">
          <h3>Nagaland</h3>
          <p>
            The state of Nagaland was formally inaugurated on December 1st,
            1963, as the 16th state of the Indian Union. It is bordered by Assam
            in the west, Myanmar (Burma) on the east, Arunachal Pradesh and part
            of Assam in the north, and Manipur in the south. The state comprises
            16 administrative districts, inhabited by 17 major tribes along with
            other sub-tribes. Each tribe is unique in customs, language, and
            dress. Nagaland is a land of folklore inherited through generations
            via oral tradition. Music is an integral part of life here, with
            folk songs honoring ancestors, warriors, traditional heroes, and
            ancient tragic love stories. Gospel songs and modern tunes are also
            part of the musical landscape. - Area: 16,579 square kilometers
            (6,401 sq mi) - State Capital: Kohima (1,444.12 m above sea level) -
            Population: 1,978,502 persons (2011 Census of India) - Largest
            Village: Kohima Village - Official Language: English - Average
            Rainfall: 1800-2500 mm - Highest Peak: Saramati peak, Kiphire
            District (3,840 m) - Commercial Centre: Dimapur - Tribes: Angami,
            Ao, Chakhesang, Chang, Kachari, Khiamniungan, Konyak, Kuki, Lotha,
            Phom, Pochury, Rengma, Sangtam, Sumi, Tikhir, Yimkhiung, Zeliang -
            Districts: Chumoukedima, Dimapur, Kiphire, Kohima, Longleng,
            Mokokchung, Mon, Niuland, Noklak, Peren, Phek, Shamator, Tseminyu,
            Tuensang, Wokha, Zunheboto
          </p>
        </section>
        <div className="flex-grow overflow-hidden rounded-md relative w-full">
          <Image
            alt="naga woman image"
            className={
              'h-auto w-full object-cover transition-all hover:scale-105 aspect-square'
            }
            objectFit="cover"
            objectPosition="left"
            src="/bg3.jpg"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
