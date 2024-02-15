import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-lg">Your Website</h1>
        <div>
          <Link href="/login">
            <a className="text-white mx-4">Login</a>
          </Link>
          <Link href="/signup">
            <a className="text-white">Signup</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
