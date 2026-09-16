import React from "react";

const StudentTestimonials = () => {
const testimonials = [

  {
    name: "سارة العتيبي",
    role: "تدريب قدرات",
    initial: "س",
    text: "التدريب على الأسئلة والنماذج ساعدني كثير في الاستعداد للاختبار، وطريقة الشرح كانت واضحة ومرتبة، والمتابعة كانت ممتازة.",
  },
  {
    name: "يوسف محمد",
    role: "طالب بالمرحلة المتوسطة",
    initial: "ي",
    text: "أكتر حاجة عجبتني هي المتابعة، لأن المدرس كان مهتم يعرف مستوايا ويحدد الحاجات اللي محتاجة تركيز بدل ما يكون الشرح واحد لكل الطلاب.",
  },
  {
    name: "عبدالله القحطاني",
    role: "الصف الثاني الثانوي",
    initial: "ع",
    text: "الشرح ساعدني أفهم طريقة حل الأسئلة بشكل أفضل، والتدريب المستمر على النماذج خلاني أكون أكثر ثقة وأنا أستعد للاختبار.",
  },
];
  return (
    <section className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-space-xl">
          <div className="flex flex-col text-right">
            <span className="text-secondary font-label-md text-label-md font-semibold mb-2">
              تجارب نفتخر بها
            </span>

            <h2 className="font-headline-lg text-headline-lg text-primary-container tracking-tight">
              آراء وتقييمات الطلاب
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-3 max-w-2xl">
              نعتز بتجارب طلابنا وآرائهم، ونسعى دائمًا إلى تقديم تجربة تعليمية
              تساعدهم على الفهم والتطور وتحقيق أهدافهم.
            </p>
          </div>

          <div className="flex items-center gap-2 text-on-surface-variant font-label-lg text-label-lg">
            <div className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="material-symbols-outlined text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>

            <span className="font-semibold text-primary-container">
              تقييمات طلابنا
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {testimonials.map((testimonial) => (
    <div
      key={testimonial.name}
      className="bg-surface-container-lowest p-6 lg:p-7 rounded-2xl shadow-sm border border-outline-variant/20 flex flex-col justify-between hover:shadow-md transition-shadow"
    >
      {/* Stars */}
      <div className="flex items-center justify-between mb-space-md" style={{alignItems:"center"}}>
        <div className="flex gap-1 text-amber-500  ">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className="material-symbols-outlined text-xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
        ))}
      </div>
     <span className="material-symbols-outlined !text-[60px] !leading-none text-surface-container-highest">
  format_quote
</span>
      </div>
      {/* Review */}
      <div className="flex-1">

        <p className="text-on-surface-variant leading-7 mt-2">
          {testimonial.text}
        </p>
      </div>

      {/* Student */}
      <div className="flex items-center gap-3 mt-6 pt-5 border-t border-outline-variant/20">
        <div className="w-11 h-11 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold shrink-0">
          {testimonial.initial}
        </div>

        <div>
          <h3 className="font-headline-sm text-on-surface">
            {testimonial.name}
          </h3>

          <p className="text-sm text-on-surface-variant">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default StudentTestimonials;