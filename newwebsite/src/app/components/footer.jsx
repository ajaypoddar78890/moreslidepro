const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto text-center text-white">
        <p>
          &copy; {new Date().getFullYear()} Your Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
