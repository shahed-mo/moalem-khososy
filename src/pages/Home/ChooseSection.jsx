import React from "react";

const ChooseSection = () => {
  return (
    <section
      className="w-full py-space-xl lg:py-24 bg-surface"
      id="features-section"
    >
      <div className="max-w-7xl mx-auto px-margin">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-space-xxl lg:mb-16">
          <span className="bg-surface-container-high text-secondary font-label-md text-label-md px-space-md py-1 px-1 rounded-full mb-space-xs font-semibold">
            منهجية تعليم واضحة
          </span>

          <h2 className="font-headline-lg text-headline-lg text-primary-container mb-space-xs tracking-tight">
            لماذا تختارنا؟
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            نحرص على تقديم تجربة تعليمية متكاملة تجمع بين الشرح المبسط،
            والتأسيس القوي، والمتابعة المستمرة لمساعدة كل طالب على تحقيق أفضل
            مستوى ممكن.
          </p>
        </div>

        {/* Features */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
  {/* Card 1 */}
  <div className="group bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 min-w-0">
    <div className="w-12 h-12 rounded-xl bg-blue-100 text-secondary flex items-center justify-center mb-5">
      <span className="material-symbols-outlined text-2xl">
        menu_book
      </span>
    </div>

    <span className="inline-block bg-surface-container text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-3">
      الخطوة 01
    </span>

    <h3 className="font-headline-sm text-headline-sm text-primary-container mb-3">
      شرح مبسط
    </h3>

    <p className="font-body-sm text-body-sm text-on-surface-variant leading-7">
      شرح المعلومة بطريقة واضحة وبسيطة تساعد الطالب على الفهم وربط
      المفاهيم بدلًا من الاعتماد على الحفظ فقط.
    </p>

    <div className="mt-6 pt-4 border-t border-outline-variant/30 flex items-center gap-2 text-secondary font-label-sm text-label-sm">
      <span>فهم أوضح للمعلومة</span>

      <span className="material-symbols-outlined text-base rotate-180 shrink-0">
        arrow_forward
      </span>
    </div>
  </div>

  {/* Card 2 */}
  <div className="group bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 min-w-0">
    <div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-primary-container flex items-center justify-center mb-5">
      <span className="material-symbols-outlined text-2xl">
        person_check
      </span>
    </div>

    <span className="inline-block bg-surface-container text-primary-container text-xs font-semibold px-3 py-1 rounded-full mb-3">
      الخطوة 02
    </span>

    <h3 className="font-headline-sm text-headline-sm text-primary-container mb-3">
      متابعة فردية
    </h3>

    <p className="font-body-sm text-body-sm text-on-surface-variant leading-7">
      متابعة مستوى الطالب بشكل مستمر ومعرفة نقاط القوة والجوانب التي
      تحتاج إلى تطوير، بما يناسب احتياجاته.
    </p>

    <div className="mt-6 pt-4 border-t border-outline-variant/30 flex items-center gap-2 text-secondary font-label-sm text-label-sm">
      <span>متابعة مستمرة للطالب</span>

      <span className="material-symbols-outlined text-base rotate-180 shrink-0">
        arrow_forward
      </span>
    </div>
  </div>

  {/* Card 3 */}
  <div className="group bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 min-w-0">
    <div className="w-12 h-12 rounded-xl bg-surface-container text-primary-container flex items-center justify-center mb-5">
      <span className="material-symbols-outlined text-2xl">
        edit_note
      </span>
    </div>

    <span className="inline-block bg-surface-container text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-3">
      الخطوة 03
    </span>

    <h3 className="font-headline-sm text-headline-sm text-primary-container mb-3">
      تدريب وتطبيق
    </h3>

    <p className="font-body-sm text-body-sm text-on-surface-variant leading-7">
      تدريب عملي على الأسئلة والنماذج المتنوعة لمساعدة الطالب على
      تطبيق ما تعلمه واكتساب مهارة الحل.
    </p>

    <div className="mt-6 pt-4 border-t border-outline-variant/30 flex items-center gap-2 text-secondary font-label-sm text-label-sm">
      <span>تطبيق عملي مستمر</span>

      <span className="material-symbols-outlined text-base rotate-180 shrink-0">
        arrow_forward
      </span>
    </div>
  </div>

  {/* Card 4 */}
  <div className="group bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 min-w-0">
    <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-fixed flex items-center justify-center mb-5">
      <span className="material-symbols-outlined text-2xl">
        task_alt
      </span>
    </div>

    <span className="inline-block bg-surface-container text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-3">
      الخطوة 04
    </span>

    <h3 className="font-headline-sm text-headline-sm text-primary-container mb-3">
      الاستعداد للاختبارات
    </h3>

    <p className="font-body-sm text-body-sm text-on-surface-variant leading-7">
      تجهيز الطالب للاختبارات من خلال التدريب على نماذج وأسئلة متنوعة
      وتطوير مهارات إدارة الوقت وسرعة الحل.
    </p>

    <div className="mt-6 pt-4 border-t border-outline-variant/30 flex items-center gap-2 text-secondary font-label-sm text-label-sm">
      <span>استعداد أفضل للاختبار</span>

      <span className="material-symbols-outlined text-base rotate-180 shrink-0">
        arrow_forward
      </span>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default ChooseSection;