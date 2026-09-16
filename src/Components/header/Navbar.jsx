import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "عن المدرسين" },
  { to: "/subjects", label: "المواد" },
  { to: "/reviews", label: "آراء الطلاب" },
  { to: "/contact", label: "تواصل معنا" },
];

const Navbar = () => {
  return (
    <nav
      className="
        w-full
        overflow-x-auto
        md:w-auto
        md:overflow-visible
      "
    >
      <div
        className="
          flex items-center justify-center
          gap-5 px-4 py-3
          md:gap-8 md:p-0
        "
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `
              whitespace-nowrap
              transition-colors
              text-sm
              md:text-base
              font-medium
              md:font-semibold
              ${
                isActive
                  ? "text-secondary"
                  : "text-secondary/70 hover:text-secondary"
              }
              `
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;