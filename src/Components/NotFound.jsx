import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-surface text-on-surface flex items-center justify-center px-6 py-12"
    >
      <div className="w-full max-w-3xl text-center">

        {/* 404 */}
        <div className="relative mb-8">
          <h1
            className="
              text-[clamp(120px,22vw,220px)]
              font-bold
              leading-none
              tracking-tight
              text-primary
              select-none
            "
          >
            404
          </h1>

          {/* Decorative circle */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-24
              h-24
              rounded-full
              bg-secondary
              opacity-10
              blur-2xl
              pointer-events-none
            "
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="inline-flex items-center rounded-full bg-secondary-fixed px-4 py-2 text-sm font-medium text-secondary">
            الصفحة غير موجودة
          </p>

          <h2 className="text-headline-lg font-bold text-primary">
            يبدو أنك وصلت إلى طريق مسدود
          </h2>

          <p className="mx-auto max-w-xl text-body-lg text-on-surface-variant">
            الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها إلى مكان آخر.
            لا تقلق، يمكنك العودة للصفحة الرئيسية ومتابعة التصفح.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            to="/"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-primary
              px-7
              py-3.5
              text-base
              font-semibold
              text-white
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:shadow-lg
            "
          >
            <span>العودة للرئيسية</span>
            <span className="text-lg">←</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="
              inline-flex
              items-center
              justify-center
              rounded-lg
              border
              border-outline-variant
              bg-surface-container-lowest
              px-7
              py-3.5
              text-base
              font-semibold
              text-on-surface
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-surface-container
            "
          >
            الرجوع للصفحة السابقة
          </button>

        </div>

        {/* Bottom decoration */}
        <div className="mt-16 flex items-center justify-center gap-2">
          <span className="h-px w-16 bg-outline-variant" />
          <span className="h-2 w-2 rounded-full bg-secondary" />
          <span className="h-px w-16 bg-outline-variant" />
        </div>

      </div>
    </main>
  );
};

export default NotFound;

