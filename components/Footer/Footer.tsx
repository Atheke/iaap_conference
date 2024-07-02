import * as React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-gray-800 text-white text-center">
      <p>© {new Date().getFullYear()} C2 Tech. All rights reserved</p>
      <p className=" font-mono text-sm">
        Made with ❤️ from Nagaland |{' '}
        <a href="mailto:ctwo.60two@gmail.com">ctwo.60two@gmail.com</a>
      </p>
    </footer>
  );
};

export default Footer;
