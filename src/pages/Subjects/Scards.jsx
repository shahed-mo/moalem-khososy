import React from 'react'

const Scards = () => {
    const teachers = [
  {
    name: "مدرب القدرات والمواد العلمية",
    badge: "التخصصات التعليمية",
    icon: "school",
    description:
      "تدريب وتعليم متخصص يساعد الطلاب على بناء أساس قوي، وفهم المواد بطريقة مبسطة، والاستعداد للاختبارات والمراحل الدراسية المختلفة.",
    services: [
      {
        icon: "calculate",
        title: "قدرات كمي وتحصيلي",
        description:
          "تدريب على مهارات القدرات الكمية والتحصيلي، مع التركيز على فهم الأفكار، استراتيجيات الحل، والتدرب على أنماط الأسئلة المختلفة.",
      },
      {
        icon: "science",
        title: "المواد العلمية",
        description:
          "تدريس الكيمياء والفيزياء والرياضيات والأحياء للمرحلة الثانوية والجامعة، مع شرح مبسط وتدريب على حل الأسئلة.",
      },
      {
        icon: "menu_book",
        title: "جميع المواد",
        description:
          "شرح ومتابعة جميع المواد للمرحلتين الابتدائية والمتوسطة، مع التركيز على التأسيس وتقوية المهارات الأساسية.",
      },
    ],
  },

  {
    name: "مدرب القدرات اللفظية واللغة",
    badge: "التخصصات التعليمية",
    icon: "language",
    description:
      "تدريب ومتابعة تساعد الطالب على تطوير مهاراته اللغوية والاستعداد لاختبارات القدرات، مع شرح واضح وتطبيق مستمر.",
    services: [
      {
        icon: "translate",
        title: "قدرات لفظي",
        description:
          "تدريب على مهارات القسم اللفظي وفهم أنماط الأسئلة، مع تطوير مهارات القراءة والاستيعاب والتحليل.",
      },
      {
        icon: "menu_book",
        title: "كفايات لغوية",
        description:
          "شرح مبسط لمهارات الكفايات اللغوية والقواعد، مع تطبيق عملي على الأسئلة ومراجعة مستمرة.",
      },
      {
        icon: "person_check",
        title: "تأسيس ومتابعة",
        description:
          "تأسيس الطالب ومتابعة مستواه بشكل مستمر، مع التركيز على نقاط القوة والجوانب التي تحتاج إلى تطوير.",
      },
    ],
  },
];
  return (
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-space-xl">
  {teachers.map((teacher) => (
    <div
      key={teacher.name}
      className="bg-surface-container-lowest rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md transition-all"
    >
      {/* Teacher Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-surface-container-low text-secondary flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-headline-lg">
            {teacher.icon}
          </span>
        </div>

        <div className="min-w-0">
          <span className="inline-flex bg-surface-container-high text-primary-container font-label-sm text-label-sm px-4 py-1 rounded-full font-semibold mb-2">
            {teacher.badge}
          </span>

          <h2 className="font-headline-md text-headline-md text-primary-container">
            {teacher.name}
          </h2>
        </div>
      </div>

      {/* Teacher Description */}
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
        {teacher.description}
      </p>

      {/* Services */}
      <div className="space-y-4">
        {teacher.services.map((service) => (
          <div
            key={service.title}
            className="bg-surface-container-low rounded-xl p-4"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container-lowest text-secondary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">
                  {service.icon}
                </span>
              </div>

              <div className="min-w-0">
                <h3 className="font-headline-sm text-headline-sm text-primary-container mb-1">
                  {service.title}
                </h3>

                <p className="font-body-sm text-body-sm text-on-surface-variant leading-6">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-6 pt-4 border-t border-surface-container">
        <button
          type="button"
          className="w-full bg-surface-container-low hover:bg-secondary hover:text-on-secondary text-primary-container font-label-lg text-label-lg py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5"
        >
          <span>اعرف المزيد</span>

          <span className="material-symbols-outlined text-headline-sm scale-x-[-1]">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  ))}
</div>
  )
}

export default Scards