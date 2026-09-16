import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header
      className="
        fixed top-0 inset-x-0 z-50
        bg-surface-container-lowest/95
        backdrop-blur-xl
        shadow-[0_1px_8px_rgba(0,0,0,0.04)]
      "
    >
      <div
        className="
          h-[72px] md:h-20
          max-w-7xl mx-auto
          px-4 md:px-margin
          flex items-center justify-between
          gap-3
        "
      >
        {/* Logo + Name */}
        <div className="flex items-center gap-2 md:gap-space-md min-w-0">
          <img
            src={logo}
            alt="Profile"
            className="
              w-9 h-9 md:w-10 md:h-10
              rounded-full object-cover shrink-0
            "
          />

          <div className="flex flex-col min-w-0">
            <span
              className="
                text-[14px] sm:text-[15px] md:text-headline-sm
                font-semibold
                text-primary-container
                tracking-tight truncate
              "
            >
             معلم خصوصي
            </span>

            <span
              className="
                hidden sm:block
                text-[11px] md:text-label-sm
                text-secondary truncate
              "
            >
             فريق متخصص للتدريب والتعليم
            </span>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* Booking Button */}
        <NavLink
          to="/contact"
          className="
            bg-tertiary-fixed
            text-primary-container
            w-10 h-10
            md:w-auto md:h-auto
            md:px-6 md:py-3
            rounded-xl
            shadow-[0_10px_25px_-5px_rgba(15,23,42,0.05)]
            hover:bg-tertiary-fixed-dim
            transition-all
            flex items-center justify-center
            md:gap-2 shrink-0
          "
        >
          <span className="material-symbols-outlined text-[20px] md:text-headline-sm">
            calendar_month
          </span>

          <span className="hidden md:inline font-label-lg">
            احجز حصة
          </span>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;