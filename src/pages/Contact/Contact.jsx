import { NavLink } from "react-router-dom";

const teachers = [
  {
    name: "أحمد سيد",
    role: "مدرب قدرات كمي وتحصيلي ومعلم للمواد العلمية",
    phone: "0545784603",
    whatsapp: "966545784603",
    icon: "calculate",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    name: "أحمد علي",
    role: "مدرب قدرات لفظي ومعلم كفايات لغوية",
    phone: "0581319891",
    whatsapp: "966581319891",
    icon: "language",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
];

function Contact() {
  return (
    <main className="bg-surface min-h-screen">
      <section className="py-space-xl">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">

          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-space-xl">
            <div className="inline-flex items-center gap-space-xs bg-surface-container text-secondary font-label-md text-label-md px-4 py-1.5 rounded-full mb-space-sm shadow-sm">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                chat
              </span>

              <span>يسعدنا تواصلك معنا</span>
            </div>

            <h1 className="font-display-hero text-display-hero text-primary-container tracking-tight mb-space-sm">
              تواصل معنا
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              للاستفسار عن التخصصات التعليمية أو معرفة التفاصيل المناسبة لك،
              يمكنك التواصل مباشرة مع أحد المدرسين عبر الجوال أو Snapchat.
            </p>
          </div>

          {/* Teachers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-space-xl">
            {teachers.map((teacher) => (
              <article
                key={teacher.name}
                className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all"
              >
                {/* Teacher Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${teacher.iconBg} ${teacher.iconColor} flex items-center justify-center shrink-0`}
                  >
                    <span className="material-symbols-outlined text-2xl">
                      {teacher.icon}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-headline-md text-headline-md text-primary-container mb-1">
                      {teacher.name}
                    </h2>

                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-6">
                      {teacher.role}
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">

                  {/* Phone */}
                  <a
                    href={`tel:${teacher.phone}`}
                    dir="ltr"
                    className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined">
                        call
                      </span>
                    </div>

                    <div className="min-w-0">
                      <span className="block font-label-sm text-label-sm text-on-surface-variant mb-0.5">
                        رقم الجوال
                      </span>

                      <span className="font-body-md text-body-md text-primary-container font-semibold">
                        {teacher.phone}
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${teacher.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined">
                        chat
                      </span>
                    </div>

                    <div>
                      <span className="block font-label-sm text-label-sm text-on-surface-variant mb-0.5">
                        التواصل عبر واتساب
                      </span>

                      <span className="font-body-md text-body-md text-primary-container font-semibold">
                        تواصل مباشرة
                      </span>
                    </div>
                  </a>

                </div>
              </article>
            ))}
          </div>

          {/* Location + Snapchat */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Location */}
            <div className="bg-primary-container text-on-primary rounded-2xl p-6 lg:p-8 relative overflow-hidden">
              <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-secondary/30 rounded-full blur-2xl pointer-events-none"></div>

              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-tertiary-fixed-dim flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">
                    location_on
                  </span>
                </div>

                <div>
                  <h2 className="font-headline-sm text-headline-sm text-surface-container-lowest mb-2">
                    موقعنا
                  </h2>

                  <p className="font-body-md text-body-md text-on-primary-container leading-7">
                    المدرسان متواجدان في
                    <span className="text-tertiary-fixed-dim font-semibold">
                      {" "}جدة
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Snapchat */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">
                    camera_alt
                  </span>
                </div>

                <div className="min-w-0">
                  <h2 className="font-headline-sm text-headline-sm text-primary-container mb-2">
                    Snapchat
                  </h2>

                  <a
                    href="https://www.snapchat.com/add/h_hrby20235352?share_id=nZ65p6DsxQE&locale=ar-AE"
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="font-body-md text-body-md text-secondary hover:underline break-all"
                  >
                    h_hrby20235352
                  </a>

                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                    تابعنا وتواصل معنا عبر Snapchat
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="mt-space-xl bg-surface-container-low rounded-2xl p-6 md:p-8 text-center">
            <span className="material-symbols-outlined text-secondary text-3xl mb-3">
              support_agent
            </span>

            <h2 className="font-headline-md text-headline-md text-primary-container mb-2">
              لديك استفسار؟
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant mb-5">
              تواصل مع المدرس المناسب لك مباشرة لمعرفة التفاصيل والاستفسار عن
              التخصصات التعليمية.
            </p>

            <NavLink
              to="/subjects"
              className="inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary px-6 py-3 rounded-xl font-label-lg text-label-lg hover:opacity-90 transition-all"
            >
              <span>تعرف على التخصصات</span>

              <span className="material-symbols-outlined text-sm scale-x-[-1]">
                arrow_back
              </span>
            </NavLink>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Contact;