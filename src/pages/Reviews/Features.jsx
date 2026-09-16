import React from "react";

const features = [
  {
    id: 1,
    icon: "grade",
    value: "4.9 / 5",
    description: "متوسط تقييم الطلاب",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: 2,
    icon: "workspace_premium",
    value: "+850",
    description: "طالب بالدرجة النهائية",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 3,
    icon: "groups",
    value: "+12",
    description: "سنة خبرة وتدريس",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-700",
  },
  {
    id: 4,
    icon: "trending_up",
    value: "98.4%",
    description: "نسبة التحسن الأكاديمي",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

const Features = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-space-xl">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="bg-surface-container-lowest p-5 rounded-2xl shadow-[0_10px_25px_-5px_rgba(15,23,42,0.03)] flex items-center gap-4 min-w-0"
        >
          {/* Icon */}
          <div
            className={`w-12 h-12 rounded-xl ${feature.iconBg} ${feature.iconColor} flex items-center justify-center shrink-0`}
          >
            <span className="material-symbols-outlined text-2xl">
              {feature.icon}
            </span>
          </div>

          {/* Content */}
          <div className="min-w-0">
            <div className="font-headline-md text-headline-md text-primary-container font-bold leading-tight mb-1.5">
              {feature.value}
            </div>

            <span className="font-label-sm text-label-sm text-on-surface-variant leading-5 block">
              {feature.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;