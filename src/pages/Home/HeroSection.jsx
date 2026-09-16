
import { Link } from 'react-router-dom';
import mr from '../../assets/images/mr.png';
import mr2 from '../../assets/images/mrs.jpeg';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-surface py-20 lg:py-24 ">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Math Grid */}
        <div
          className="
            absolute inset-0
            opacity-40
            bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]
            bg-[size:48px_48px]
          "
        />

        {/* Glow */}
        <div
          className="
            absolute -top-24 start-1/4
            w-96 h-96
            rounded-full
            bg-secondary-fixed
            opacity-40
            blur-3xl
          "
        />

        <div
          className="
            absolute top-1/2 end-10
            w-80 h-80
            rounded-full
            bg-tertiary-fixed
            opacity-30
            blur-3xl
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-gutter items-center">

          {/* ================= TEXT CONTENT ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">

            {/* Registration Badge */}
            <div
              className="
                inline-flex items-center gap-2
                bg-surface-container-lowest
                px-4 py-1.5
                rounded-full
                shadow-sm
                mb-6
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="
                    animate-ping
                    absolute
                    inline-flex
                    h-full w-full
                    rounded-full
                    bg-tertiary-fixed-dim
                    opacity-75
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    rounded-full
                    h-2.5 w-2.5
                    bg-tertiary-container
                  "
                />
              </span>

              <span className="text-sm text-secondary font-semibold">
                التسجيل متاح للفصل الدراسي الحالي
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-bold
                text-primary-container
                leading-tight
                tracking-tight
              "
            >
              طريقك للفهم والتميز يبدأ{" "}
              <span className="relative inline-block text-secondary">
                من هنا
                <span className="absolute -bottom-2 inset-x-0 h-2 border-b-4 border-tertiary-fixed-dim rounded-[50%]" />
              </span>
            </h1>

            <p
              className="
                font-body-lg
                pt-4
                text-body-lg
                text-on-surface-variant
                max-w-xl
                mb-space-lg
                leading-relaxed
              "
            >
              تدريب وتعليم متخصص في القدرات والتحصيلي والكفايات اللغوية
              والمواد العلمية، مع تأسيس ومتابعة للطلاب في مختلف المراحل
              الدراسية.
            </p>

            {/* Action Buttons */}
            <div
              className="
                pt-4
                flex flex-col sm:flex-row
                items-stretch sm:items-center
                gap-3 md:gap-space-md
                w-full sm:w-auto
              "
            >
              <Link
                to="/contact"
                className="
                  inline-flex items-center justify-center gap-2
                  bg-tertiary-fixed
                  text-primary-container
                  text-sm md:text-label-lg
                  font-semibold
                  px-6 md:px-space-xl
                  py-3.5
                  rounded-xl
                  shadow-md
                  hover:bg-tertiary-fixed-dim
                  transition-all duration-200
                  hover:-translate-y-0.5
                  active:scale-[0.98]
                  w-full sm:w-auto
                "
              >
                <span className="material-symbols-outlined text-[20px] md:text-headline-sm">
                  event_available
                </span>

                <span>احجز حصتك</span>
              </Link>

              <Link
                to="/about"
                className="
                  inline-flex items-center justify-center gap-2
                  bg-surface-container-lowest
                  text-primary-container
                  text-sm md:text-label-lg
                  font-semibold
                  px-6 md:px-space-lg
                  py-3.5
                  rounded-xl
                  shadow-sm
                  hover:bg-surface-container
                  transition-all duration-200
                  w-full sm:w-auto
                "
              >
                <span>اعرف المزيد</span>

                <span className="material-symbols-outlined text-[18px] rotate-180">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* Features */}
            <div
              className="
                mt-6 md:mt-space-lg
                pt-4 md:pt-space-md
                flex flex-wrap items-center
                gap-x-4 gap-y-3
                text-on-surface-variant
                text-sm md:text-label-md
              "
            >
              <div className="flex items-center gap-1.5 text-secondary">
                <span
                  className="material-symbols-outlined text-[20px] md:text-headline-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>

                <span>شرح مبسط ومتابعة مستمرة</span>
              </div>

              <span className="text-outline-variant hidden sm:inline">
                •
              </span>

              <div className="flex items-center gap-1.5 text-secondary">
                <span
                  className="material-symbols-outlined text-[20px] md:text-headline-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  bolt
                </span>

                <span>تدريب عملي ونماذج متنوعة</span>
              </div>
            </div>
          </div>

          {/* ================= TEACHERS SECTION ================= */}
          <div className="lg:col-span-5 relative flex justify-center mt-12 lg:mt-0">

            <div className="relative w-full max-w-md">

              {/* Decorative Background */}
              <div
                className="
                  absolute
                  -inset-6
                  rounded-[3rem]
                  bg-gradient-to-tr
                  from-secondary-fixed
                  via-surface-container
                  to-tertiary-fixed
                  opacity-70
                  rotate-3
                "
              />

              {/* Dashed Border */}
              <div
                className="
                  absolute
                  -inset-4
                  rounded-[3rem]
                  border border-dashed
                  border-secondary/30
                  pointer-events-none
                "
              />

              {/* Teachers Grid */}
              <div
                className="
                  relative
                  grid grid-cols-2
                  gap-4
                  p-3
                  bg-surface-container-lowest
                  rounded-[2.5rem]
                  shadow-2xl
                "
              >

                {/* ================= TEACHER 1 ================= */}
                <div className="relative group">

                  <div
                    className="
                      aspect-[3/4]
                      overflow-hidden
                      rounded-[2rem]
                      bg-surface-container
                    "
                  >
                    <img
                      src={mr}
                      alt="الأستاذ أحمد سيد"
                      className="
                        w-full
                        h-full
                        object-cover
                        object-top
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* Teacher 1 Info */}
                  <div
                    className="
                      absolute
                      -top-3
                      -end-3
                      bg-surface-container-lowest
                      px-3
                      py-2
                      rounded-2xl
                      shadow-xl
                      flex items-center gap-2
                      z-20
                    "
                  >
                    <div
                      className="
                        w-8 h-8
                        rounded-xl
                        bg-tertiary-fixed
                        flex items-center justify-center
                        text-primary-container
                      "
                    >
                      <span
                        className="material-symbols-outlined text-[19px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        calculate
                      </span>
                    </div>

                    <div className="flex flex-col text-right">
                      <span
                        className="
                          text-primary-container
                          text-sm
                          leading-none
                          font-bold
                          whitespace-nowrap
                        "
                      >
                        أحمد سيد
                      </span>

                      <span
                        className="
                          text-on-surface-variant
                          text-[11px]
                          mt-1
                          whitespace-nowrap
                        "
                      >
                        قدرات علمية
                      </span>
                    </div>
                  </div>
                </div>

                {/* ================= TEACHER 2 ================= */}
                <div className="relative group">

                  <div
                    className="
                      aspect-[3/4]
                      overflow-hidden
                      rounded-[2rem]
                      bg-surface-container
                    "
                  >
                    <img
                      src={mr2}
                      alt="الأستاذ أحمد علي"
                      className="
                        w-full
                        h-full
                        object-cover
                        object-top
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* Teacher 2 Info */}
                  <div
                    className="
                      absolute
                      -bottom-10
                      -end-20
                      bg-primary-container
                      text-on-primary
                      px-3
                      py-2.5
                      rounded-2xl
                      shadow-xl
                      flex items-center gap-2
                      z-20
                    "
                  >
                    <div
                      className="
                        w-8 h-8
                        rounded-lg
                        bg-secondary
                        flex items-center justify-center
                        text-on-secondary
                        shrink-0
                      "
                    >
                      <span className="material-symbols-outlined text-[19px]">
                        language
                      </span>
                    </div>

                    <div className="flex flex-col text-right">
                      <span
                        className="
                          text-surface-container-lowest
                          text-sm
                          font-semibold
                          whitespace-nowrap
                        "
                      >
                        أحمد علي
                      </span>

                      <span
                        className="
                          text-on-primary-container
                          text-[10px]
                          whitespace-nowrap
                        "
                      >
                        قدرات لفظي وكفايات
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;


