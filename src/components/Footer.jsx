const Footer = () => {
  return (
    <footer className="bg-blue-50 text-center py-6 border-t border-blue-100 mt-12">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} JobMatch. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
