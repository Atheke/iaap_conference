import * as React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-gray-800 text-white text-center">
      <p>
        © {new Date().getFullYear()} C2 Tech. All rights reserved. Love from
        Nagaland
      </p>
    </footer>
  );
};

export default Footer;
