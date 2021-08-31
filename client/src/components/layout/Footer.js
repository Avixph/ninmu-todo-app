const Footer = () => {
  return (
    <footer className="bg-white max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="mt-12 -mb-11 border-t border-mainGrey pt-8 ">
        <p className="text-base sm:text-center ">
          © {new Date().getFullYear()} ninmu. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
