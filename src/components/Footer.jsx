import React from "react";

const Footer = () => {
  return (
    <footer className='footer p-10 bg-gray-900 container mx-auto rounded-b-lg border-t border-teal-900 border-dashed lg:max-w-4xl'>
      <p className='text-center text-teal-600 text-sm'>
        &copy; {new Date().getFullYear()} TODO APP. All rights
        reserved.
      </p>
      <p className="text-sm text-center">
        Designed and Developed By <a href="https://shubhamjhaportfolio.netlify.app/"><b>Shubham Jha</b></a>
        </p>
    </footer>
  );
};

export default Footer;
