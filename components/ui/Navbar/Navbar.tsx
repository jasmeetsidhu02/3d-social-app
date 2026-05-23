import Link from "next/link";

export default function Navbar() {
  const CUSTOM_LINKS = {
    HOME: "/",
    ABOUT: "/about",
    TEST: "/test",
  };
  return (
    <nav>
      <div className="p-4 flex justify-between">
        <div className="flex gap-4 items-center">
          {/* Logo */}
          <Link
            href={CUSTOM_LINKS.HOME}
            className="text-primary font-bold text-xl border-2 rounded-full px-2"
          >
            Sidhu world
          </Link>
          {/* links */}
          <div className="flex gap-4 font-bold text-white text-xl items-center">
            {Object.keys(CUSTOM_LINKS).map((linkKey) => {
              const key = linkKey as keyof typeof CUSTOM_LINKS;
              return (
                <Link
                  key={key}
                  href={CUSTOM_LINKS[key]}
                  className="hover:text-primary-hover hover:transition-colors duration-300"
                >
                  {key}
                </Link>
              );
            })}
          </div>
        </div>
        {/* Authentication */}
        <div>
          <button className="btn-primary">Login </button>
        </div>
      </div>
    </nav>
  );
}
