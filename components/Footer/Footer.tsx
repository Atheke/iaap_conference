import * as React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-primary text-primary-foreground text-center self-end mt-5 container">
      <p>© {new Date().getFullYear()} C2 Tech. All rights reserved</p>
      <p className=" font-mono text-xs md:text-sm">
        Made with ❤️ in Nagaland |{' '}
        <a href="mailto:ctwo.60two@gmail.com">ctwo.60two@gmail.com</a>
      </p>
    </footer>
  );
};

export default Footer;
