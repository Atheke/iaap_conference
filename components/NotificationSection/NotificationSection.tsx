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
    <div className="container mx-auto px-1 py-5">
      <div className="px-10 py-8 bg-gray-100 border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Latest Updates:</h2>
        <ul className="list-none p-0">
          {notifications.map((notification, index) => (
            <li className="mb-2" key={index}>
              {notification.text}
              {notification.link && (
                <a
                  className="text-blue-600 hover:underline"
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
