import React from "react";

const QuickStatistics = () => {
 const statistics = [
  {
    id: 1,
    num: "+10",
    text: "سنوات خبرة متواصلة",
    icon: "history_edu",
    bgColor: "bg-blue-100",
  },
   {
    id: 2,
    num: "+500",
    text: "طالب متفوق ومتميز",
    icon: "group",
    bgColor: "bg-tertiary-fixed",
  },
  {
    id: 3,
    num: "95%",
    text: "نسبة النجاح وتحصيل عالي",
    icon: "trending_up",
    bgColor: "bg-blue-100",
  },
 
];

  return (
    <section className="w-full bg-surface-container-low py-10 md:py-space-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-margin">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-gutter  mx-auto">
          {statistics.map((statistic) => (
            <div
              key={statistic.id}
              className="
                bg-surface-container-lowest
                rounded-2xl
                p-5 md:p-space-lg
                shadow-sm
                flex items-center
                gap-4 md:gap-space-md
              "
            >
            <div
           className={`
            w-12 h-12 md:w-14 md:h-14
            rounded-2xl
            ${statistic.bgColor}
            flex items-center justify-center
            text-secondary shrink-0
            `}>
            <span className="material-symbols-outlined text-[24px] md:text-headline-md">{statistic.icon}</span>
            
            </div>

              <div className="flex flex-col text-right min-w-0">
                <span
                  className="
                    text-2xl md:text-headline-lg
                    text-primary-container
                    tracking-tight
                    leading-none
                    font-bold
                  "
                >
                  {statistic.num}
                </span>

                <span
                  className="
                    text-sm md:text-label-lg
                    text-on-surface-variant
                    mt-1
                    font-medium
                  "
                >
                  {statistic.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStatistics;