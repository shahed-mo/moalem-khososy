
import React from "react";

const steps = [
  {
    number: "١",
    title: "تحديد المستوى",
    description:
      "نبدأ بفهم مستوى الطالب وتحديد نقاط القوة والجوانب التي تحتاج إلى تطوير، للوصول إلى خطة تعليمية مناسبة لاحتياجاته.",
    footer: "خطة مناسبة لمستوى الطالب",
    icon: "analytics",
    color: "secondary",
    bgShape: "bg-secondary-fixed/20",
  },
  {
    number: "٢",
    title: "الشرح والتأسيس",
    description:
      "تقديم المعلومة بطريقة مبسطة وواضحة، مع التركيز على بناء أساس قوي يساعد الطالب على فهم المفاهيم بدلًا من الاعتماد على الحفظ فقط.",
    footer: "فهم واضح وتأسيس قوي",
    icon: "menu_book",
    color: "tertiary",
    bgShape: "bg-tertiary-fixed/30",
  },
  {
    number: "٣",
    title: "التدريب والتطبيق",
    description:
      "الانتقال من الفهم إلى التطبيق من خلال التدريب على أسئلة ونماذج متنوعة، مع تطوير مهارات الحل والتعامل مع أنماط الأسئلة المختلفة.",
    footer: "تدريب عملي مستمر",
    icon: "edit_note",
    color: "secondary",
    bgShape: "bg-secondary-fixed/20",
  },
  {
    number: "٤",
    title: "المتابعة والتقييم",
    description:
      "متابعة تطور مستوى الطالب بشكل مستمر، وتقييم مدى تقدمه، مع تحديد النقاط التي تحتاج إلى مزيد من التدريب والمراجعة.",
    footer: "متابعة وقياس مستمر للتقدم",
    icon: "fact_check",
    color: "tertiary",
    bgShape: "bg-tertiary-fixed/30",
  },
];

const Steps = () => {
  return (
    <div className="mb-space-xl">

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-space-lg">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-secondary text-label-sm font-label-sm mb-2">
          <span className="material-symbols-outlined text-sm">
            route
          </span>

          <span>منهجية التعليم والتدريب</span>
        </div>

        <h2 className="font-headline-md text-headline-md text-primary-container">
          طريقة التدريس المتبعة
        </h2>

        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-7">
          نعتمد على منهجية واضحة تبدأ بفهم مستوى الطالب واحتياجاته،
          ثم الانتقال تدريجيًا من الشرح والتأسيس إلى التدريب والتقييم،
          مع متابعة مستمرة تساعد على تحقيق أفضل تقدم ممكن.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className="group bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden border border-outline-variant/20"
          >
            {/* Background Shape */}
            <div
              className={`absolute top-0 right-0 w-24 h-24 ${step.bgShape} rounded-bl-full`}
            />

            <div className="relative z-10">

              {/* Number + Icon */}
              <div className="flex items-center justify-between mb-space-md">
                <span
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-headline-sm text-headline-sm ${
                    step.color === "secondary"
                      ? "bg-secondary text-on-secondary"
                      : "bg-tertiary-fixed text-on-tertiary-fixed"
                  }`}
                >
                  {step.number}
                </span>

                <span
                  className={`material-symbols-outlined text-2xl ${
                    step.color === "secondary"
                      ? "text-secondary"
                      : "text-on-tertiary-container"
                  }`}
                >
                  {step.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-headline-sm text-headline-sm text-primary-container mb-2">
                {step.title}
              </h3>

              <p className="font-body-sm text-body-sm text-on-surface-variant leading-7">
                {step.description}
              </p>
            </div>

            {/* Footer */}
            <div
              className={`mt-6 pt-4 border-t border-surface-container flex items-center gap-1 font-label-sm text-label-sm text-[#b87500]`}
            >
              <span>{step.footer}</span>

              <span className="material-symbols-outlined text-xs">
                arrow_back
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;

