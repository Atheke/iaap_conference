import React from 'react';

interface NotificationItem {
  text: string;
  linkText: string;
  link?: string;
}

interface NotificationSectionProps {
  notifications: NotificationItem[];
}

const NotificationSection: React.FC<NotificationSectionProps> = ({
  notifications,
}) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Latest Updates:
        </h2>
        <ul className="list-disc pl-5 text-gray-700">
          {notifications.map((notification, index) => (
            <li className="mb-3" key={index}>
              {notification.text}
              {notification.link && (
                <a
                  className="text-blue-500 hover:underline"
                  href={notification.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {` ${notification.linkText}`}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationSection;
