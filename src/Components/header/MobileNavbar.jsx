import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "الرئيسية", icon: "home" },
  { to: "/about", label: "عن المدرس", icon: "person" },
  { to: "/subjects", label: "المواد", icon: "menu_book" },
  { to: "/reviews", label: "الآراء", icon: "reviews" },
  { to: "/contact", label: "تواصل", icon: "call" },
];

const MobileNavbar = () => {
  return (
    <nav
      className="
        md:hidden
        fixed bottom-0 inset-x-0
        z-50
        bg-surface-container-lowest/95
        backdrop-blur-xl
        border-t border-black/5
        shadow-[0_-4px_15px_rgba(0,0,0,0.05)]
      "
    >
      <div className="flex items-center justify-around px-2 py-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `
              flex flex-col items-center justify-center
              gap-1
              min-w-[60px]
              py-1
              transition-colors
              ${
                isActive
                  ? "text-secondary font-semibold"
                  : "text-secondary/60"
              }
              `
            }
          >
            <span className="material-symbols-outlined text-[21px]">
              {link.icon}
            </span>

            <span className="text-[10px] sm:text-[11px]">
              {link.label}
            </span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavbar;