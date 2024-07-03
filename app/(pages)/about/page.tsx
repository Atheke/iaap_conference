import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="w-full sm:my-10 container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="text-sm sm:text-base lg:text-lg">
          <h2 className="text-3xl font-bold mb-4">Nagaland</h2>
          <p className="text-justify">
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
            src="/bg3.jpg"
          />
        </div>
      </div>
      <div className="mt-20">
        <section className="text-sm sm:text-base lg:text-lg">
          <h2 className="text-3xl font-bold mb-4">Nagaland University</h2>
          <p className="text-justify">
            Nagaland University, the 13th Central University and the only
            Central University in Nagaland, was established based on the Act of
            Parliament of India and received the assent of the President of
            India on October 20, 1989, as THE NAGALAND UNIVERSITY ACT 1989 (No.
            35 of 1989) and came into force as notified in THE GAZETTE OF INDIA
            EXTRAORDINARY PART-II SECTION-1 in October 1989, published by the
            Ministry of Law and Justice (Legislative Department), New Delhi. The
            University came into being on September 6, 1994, having jurisdiction
            over the entire state of Nagaland. Prior to this, Nagaland had been
            in the catchment area of North Eastern Hill University (NEHU), with
            Kohima designated as one of the campuses of NEHU along with
            SASRD-Medziphema. Hence, for nearly a decade and a half, Nagaland
            University had been functioning from Kohima as the interim
            Headquarters of the University. Meanwhile, the establishment of the
            academic departments was sanctioned by the Government in 1997. All
            the new departments had to be located at Lumami and started
            functioning with Kohima still as the interim Headquarters.
            Constructional activities started earnestly, making it fit for
            academic pursuits at the Headquarters in the best possible way. Upon
            the completion of new constructions to a reasonable stage, the
            shifting of interim arrangement at Kohima to Lumami took place in
            the mid-year of 2010.
          </p>
          <p className="text-justify mt-4">
            <strong>Kohima Campus:</strong> The Kohima campus is spread over 240
            acres and is located at Meriema, which is around 10 kms from the
            city centre. Kohima campus houses 11 departments and 2 centres, and
            caters to around 1000 Postgraduate and Doctoral students, and
            Research Scholars.
          </p>
          <h3 className="text-2xl font-semibold mt-4">
            Department of Psychology
          </h3>
          <p className="text-justify mt-2">
            The Department of Psychology was established in 2012, and the first
            batch of Post Graduate students was admitted in 2013. The course
            structure for the Masters Degree in Psychology has been designed to
            provide students with strong theoretical as well as practical
            orientations in the various domains of psychological science. Over
            the four-semester course, students go for a Clinical Posting Program
            at the LGB Regional Institute of Mental Health (LGBRIMH), Tezpur,
            and to various Special Schools, Rehabilitation Centers, Orphanages,
            and Old Age Homes. The department also introduced a PhD program in
            2017. The students and faculty of the department conduct Mental
            Health Talks as part of community outreach to spread awareness about
            mental health and mental illness.
          </p>
          <p className="mt-4">
            <strong>Head:</strong> Dr. Thiyam Kiran Singh,
            <br />
            <strong>Department E-Mail:</strong>
            psychology@nagalanduniversity.ac.in
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
