import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-space-xl pb-space-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-gutter mb-space-xl">
          
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2 flex flex-col">
            <div className="flex items-center gap-space-sm mb-4">
              <span className="material-symbols-outlined text-secondary text-headline-md shrink-0">
                school
              </span>

              <span className="font-headline-md text-headline-md text-primary-container">
                معلم خصوصي
              </span>
            </div>

            <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-7">
              فريق متخصص في التعليم والتدريب، نقدم شرحًا مبسطًا وتأسيسًا قويًا
              ومتابعة مستمرة في القدرات والتحصيلي والكفايات اللغوية والمواد
              الدراسية لمختلف المراحل التعليمية.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary-container mb-4">
              روابط سريعة
            </span>

            <nav className="flex flex-col gap-3">
              <NavLink
                to="/"
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors"
              >
                الرئيسية
              </NavLink>

              <NavLink
                to="/about"
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors"
              >
                عن المدرسين
              </NavLink>

              <NavLink
                to="/subjects"
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors"
              >
                المواد
              </NavLink>

              <NavLink
                to="/reviews"
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors"
              >
                آراء الطلاب
              </NavLink>

              <NavLink
                to="/contact"
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors"
              >
                تواصل معنا
              </NavLink>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary-container mb-4">
              معلومات التواصل
            </span>

            <div className="flex flex-col gap-3">
              
              {/* Phone 1 */}
              <div className="flex items-center gap-3 text-on-surface-variant min-w-0">
                <span className="material-symbols-outlined text-secondary shrink-0">
                  call
                </span>

                <span
                  className="font-body-sm text-body-sm"
                  dir="ltr"
                >
                  0545784603
                </span>
              </div>

              {/* Phone 2 */}
              <div className="flex items-center gap-3 text-on-surface-variant min-w-0">
                <span className="material-symbols-outlined text-secondary shrink-0">
                  call
                </span>

                <span
                  className="font-body-sm text-body-sm"
                  dir="ltr"
                >
                  0581319891
                </span>
              </div>

              {/* Snapchat */}
              <div className="flex items-center gap-3 text-on-surface-variant min-w-0">
                <span className="material-symbols-outlined text-secondary shrink-0">
                  chat
                </span>

                <a
                  href="https://www.snapchat.com/add/h_hrby20235352?share_id=nZ65p6DsxQE&locale=ar-AE"
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                  className="font-body-sm text-body-sm hover:text-secondary transition-colors truncate"
                >
                  Snapchat
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary shrink-0">
                  location_on
                </span>

                <span className="font-body-sm text-body-sm">
                  جدة
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-surface-container-highest pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md text-on-surface-variant">
          
          <p className="font-body-sm text-body-sm text-center md:text-right leading-6">
            © 2026 معلم خصوصي للتعليم والتدريب. جميع الحقوق محفوظة.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-space-lg">
            
            <NavLink
              to="/contact"
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors"
            >
              سياسة الخصوصية
            </NavLink>

            <NavLink
              to="/contact"
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors"
            >
              الشروط والأحكام
            </NavLink>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;