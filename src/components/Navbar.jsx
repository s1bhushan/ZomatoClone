import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const navItems = [
  {
    label: "Home",
    to: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6 text-slate-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 9.75L12 3l9 6.75M4.5 10.5V19.5a1.5 1.5 0 001.5 1.5h3.75v-6.75H14.25V21h3.75a1.5 1.5 0 001.5-1.5V10.5"
        />
      </svg>
    ),
  },
  {
    label: "Contact Us",
    to: "/contact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6 text-slate-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15a.75.75 0 0 0 .75-.75v-3.472a.75.75 0 0 0-.517-.714l-3.013-.945a.75.75 0 0 0-.877.273l-.917 1.278a11.25 11.25 0 0 1-5.377-5.377l1.278-.917a.75.75 0 0 0 .273-.877l-.945-3.013a.75.75 0 0 0-.714-.517H3a.75.75 0 0 0-.75.75z"
        />
      </svg>
    ),
  },
  {
    label: "Offers",
    to: "/offer",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6 text-slate-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5h.01M21 13.255V7.5a2.25 2.25 0 00-2.25-2.25H14.25a.75.75 0 00-.53.22l-9 9a2.121 2.121 0 003 3l9-9a.75.75 0 00.22-.53V7.5"
        />
      </svg>
    ),
  },
];

export default function Navbar() {
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  // Add Dashboard button if logged in
  const dynamicNavItems = [...navItems];
  if (isAuthenticated) {
    dynamicNavItems.push({
      label: "Dashboard",
      to: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6 text-slate-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h4v11H3v-11zm7 5h4v6h-4v-6zm7-7h4v13h-4V8z"
          />
        </svg>
      ),
      isDashboard: true,
    });
  }

  // Redirect based on email or username
  const handleDashboardClick = (e) => {
    e.preventDefault();

    // Check email or username for admin
    if (user?.sub?.toLowerCase() === "admin@gmail.com") {
      navigate("/admin");
      return;
    }

    navigate("/user");
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-red-400 z-50 shadow-md">
      <nav className="block w-full max-w-screen-lg px-4 py-2 mx-auto bg-white shadow-md rounded-md lg:px-8 lg:py-3 mt-10">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
          <Link to="/" className="text-lg font-semibold text-slate-800">
            Zomato
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-x-6">
            <ul className="flex items-center gap-x-6">
              {dynamicNavItems.map((item) => (
                <li key={item.label} className="flex items-center gap-x-2 text-sm text-slate-600">
                  {item.icon}
                  {item.isDashboard ? (
                    <button onClick={handleDashboardClick} className="text-slate-600">
                      {item.label}
                    </button>
                  ) : (
                    <Link to={item.to}>{item.label}</Link>
                  )}
                </li>
              ))}
              <li className="flex items-center gap-x-2 text-sm text-slate-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-slate-500"
                >
                  <path d="M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975" />
                </svg>
                {isAuthenticated ? (
                  <button onClick={handleLogout} className="text-red-600">
                    Logout
                  </button>
                ) : (
                  <Link to="/login" className="text-green-600">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>

          {/* Search bar */}
          <div className="hidden lg:flex items-center gap-x-2">
            <div className="relative">
              <svg
                className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-3 py-2 border border-slate-200 rounded-md text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 shadow-sm"
                placeholder="Type here..."
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-slate-800 text-white text-sm py-2 px-4 rounded-md shadow hover:bg-slate-700 transition-all"
            >
              Search
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="mt-4 lg:hidden">
            <ul className="flex flex-col gap-4">
              {dynamicNavItems.map((item) => (
                <li key={item.label} className="flex items-center gap-x-2 text-sm text-slate-600">
                  {item.icon}
                  {item.isDashboard ? (
                    <button onClick={handleDashboardClick} className="text-slate-600">
                      {item.label}
                    </button>
                  ) : (
                    <Link to={item.to}>{item.label}</Link>
                  )}
                </li>
              ))}
              <li className="flex items-center gap-x-2 text-sm text-slate-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-slate-500"
                >
                  <path d="M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975" />
                </svg>
                {isAuthenticated ? (
                  <button onClick={handleLogout} className="text-red-600">
                    Logout
                  </button>
                ) : (
                  <Link to="/login" className="text-green-600">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
