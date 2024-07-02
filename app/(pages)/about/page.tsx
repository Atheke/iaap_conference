import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="w-full sm:my-10 container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="text-sm sm:text-base lg:text-lg ">
          <h2 className="text-3xl font-bold mb-4">Nagaland</h2>
          <p className="">
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
            part of the musical landscape.
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li>Area: 16,579 square kilometers (6,401 sq mi)</li>
            <li>State Capital: Kohima (1,444.12 m above sea level)</li>
            <li>Population: 1,978,502 persons (2011 Census of India)</li>
            <li>Largest Village: Kohima Village</li>
            <li>Official Language: English</li>
            <li>Average Rainfall: 1800-2500 mm</li>
            <li>Highest Peak: Saramati peak, Kiphire District (3,840 m)</li>
            <li>Commercial Centre: Dimapur</li>
            <li>
              Tribes: Angami, Ao, Chakhesang, Chang, Kachari, Khiamniungan,
              Konyak, Kuki, Lotha, Phom, Pochury, Rengma, Sangtam, Sumi, Tikhir,
              Yimkhiung, Zeliang
            </li>
            <li>
              Districts: Chumoukedima, Dimapur, Kiphire, Kohima, Longleng,
              Mokokchung, Mon, Niuland, Noklak, Peren, Phek, Shamator, Tseminyu,
              Tuensang, Wokha, Zunheboto
            </li>
          </ul>
        </section>
        <div className="hidden lg:block rounded-md overflow-hidden relative shadow-lg">
          <Image
            alt="naga woman image"
            className="transition-all hover:scale-105"
            layout="fill"
            objectFit="cover"
            src={'/bg3.jpg'}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
