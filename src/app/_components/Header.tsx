import Link from "next/link";

export function Header() {
  return (
    <header className="flex-none flex md:justify-between justify-center items-center md:h-16 h-10 md:px-24 px-6 w-screen">
      <div className="flex items-center gap-2 flex-none">
        <div
          className="bg-cover md:h-8 md:w-8 w-6 h-6 bg-green-800 rounded-full flex-none border-gray-700 border"
          style={{ backgroundImage: "url('/avatar.png')" }}
        />
        <Link href="/">
          <div className="md:text-md">
            <span className="font-medium">YAHYA</span>{" "}
            <span className="font-bold">EDDHISSA</span>{" "}
            <span className="font-bold text-xl text-green-500">.</span>
          </div>
        </Link>
      </div>
      <nav className="md:flex items-center gap-8 hidden text-sm font-medium">
        <Link href="/">About</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Blog</Link>
        <div className="flex items-center bg-white/10 rounded-full h-8 px-3 text-sm font-medium">
          <i className="ti ti-search mr-2" />
          <input
            type="text"
            placeholder="Search blog..."
            className="bg-transparent outline-none"
          />
        </div>
      </nav>
    </header>
  );
}
