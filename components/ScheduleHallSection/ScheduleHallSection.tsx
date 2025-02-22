import React from 'react';

interface InformationItem {
  text: string;
  linkText: string;
  link?: string;
}

interface ScheduleHallSectionInfo {
  informations: InformationItem[];
}

const ScheduleHallSection: React.FC<ScheduleHallSectionInfo> = ({
  informations,
}) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Schedule and Hall Coordinators:
        </h2>
        <ul className="list-disc pl-5 text-gray-700">
          {informations.map((information, index) => (
            <li className="mb-3" key={index}>
              {information.text}
              {information.link && (
                <a
                  className="text-blue-500 hover:underline"
                  href={information.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {` ${information.linkText}`}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScheduleHallSection;
