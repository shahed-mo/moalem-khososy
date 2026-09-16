import React from 'react'

const DistinctCard = () => {
  return (
    <div className="relative overflow-hidden bg-surface-container-low rounded-3xl p-8 md:p-12 mb-space-xl shadow-md">
        <div className="absolute -left-12 -bottom-12 opacity-5 text-primary pointer-events-none select-none">
            <span className="material-symbols-outlined text-[280px]">school</span>
        </div>
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center relative z-10">
            <div className="mb-2 w-14 h-14 rounded-2xl bg-tertiary-fixed text-primary-container flex items-center justify-center mb-space-sm shadow-md">
                <span className="material-symbols-outlined text-3xl">flag</span>
            </div>
            <span className="font-label-md text-label-md text-secondary font-semibold uppercase tracking-wider mb-2">
            الرسالة والرؤية التربوية
          </span>
          <h2 className="mb-3 py-2 font-bold font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg
           text-primary-container mb-space-sm">
            هدفنا الأسمى مع كل طالب
          </h2>
        <div className="bg-surface-container-lowest/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm w-full my-space-sm">
        <p className="font-headline-sm text-headline-sm md:text-headline-md text-primary-container leading-relaxed">
            "مساعدة كل طالب على فهم ما يتعلمه بطريقة بسيطة تناسب مستواه، وبناء أساس قوي وثقة أكبر في قدراته، مع المتابعة والتدريب المستمر لتحقيق أفضل مستوى ممكن."
            </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-on-surface-variant font-label-md text-label-md">
  <div className="flex items-center gap-1.5">
    <span className="material-symbols-outlined text-secondary text-sm">
      check_circle
    </span>
    <span>شرح مبسط وواضح</span>
  </div>

  <div className="flex items-center gap-1.5">
    <span className="material-symbols-outlined text-secondary text-sm">
      check_circle
    </span>
    <span>تأسيس قوي ومتابعة مستمرة</span>
  </div>

  <div className="flex items-center gap-1.5">
    <span className="material-symbols-outlined text-secondary text-sm">
      check_circle
    </span>
    <span>تدريب وتطبيق عملي</span>
  </div>
</div>
        </div>
    </div>
  )
}

export default DistinctCard