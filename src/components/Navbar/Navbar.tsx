import { MenuLink } from "./MenuLink";

export const Navbar = () => {
  const links = [
    { to: "/", text: "Home" },
    { to: "/workout", text: "Workout" },
    { to: "/profile", text: "Profile" },
  ];

  return (
    <nav className="w-5/6 h-16 mx-auto bg-slate-900 border border-blue-500 flex items-center justify-center px-4 mt-4 mb-8 rounded-xl font-medium">
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.to}>
            <MenuLink to={link.to}>{link.text}</MenuLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
