import React from 'react';

interface AwardItem {
  text: string;
  linkText: string;
  link?: string;
}

interface AwardSectionProps {
  awards: AwardItem[];
}

const AwardSection: React.FC<AwardSectionProps> = ({ awards }) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">
          IAAP Award Guidelines:
        </h2>
        <ul className="list-disc pl-5 text-gray-300">
          {awards.map((award, index) => (
            <li className="mb-3" key={index}>
              {award.text}
              {award.link && (
                <a
                  className="text-white hover:underline"
                  href={award.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {` ${award.linkText}`}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AwardSection;
