import React from 'react';

interface AchievementItem {
  text: string;
  linkText: string;
  link?: string;
}

interface AchievementSectionProps {
  achievements: AchievementItem[];
}

const AchievementSection: React.FC<AchievementSectionProps> = ({
  achievements,
}) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6">
          <ul className="list-disc pl-5 text-gray-700">
          {achievements.map((achievement, index) => (
            <li className="mb-3" key={index}>
              {achievement.text}
              {achievement.link && (
                <a
                  className="text-blue-500 hover:underline"
                  href={achievement.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {` ${achievement.linkText}`}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AchievementSection;
