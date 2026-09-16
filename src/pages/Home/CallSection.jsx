import React from 'react'
import { Link } from 'react-router-dom'

const CallSection = () => {
  return (
    <section className="w-full py-space-xl lg:py-24 bg-surface" id="cta-section">
        <div className="max-w-7xl mx-auto px-margin">
            <div className="relative overflow-hidden rounded-3xl bg-primary-container text-on-primary p-8 md:p-14 shadow-2xl">
                <div className="absolute -end-20 -top-20 w-80 h-80 rounded-full bg-secondary opacity-20 blur-3xl pointer-events-none"></div>
                <div className="absolute -start-20 -bottom-20 w-80 h-80 rounded-full bg-tertiary-fixed-dim opacity-10 blur-3xl pointer-events-none"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-space-xl">
                    <div className="flex flex-col text-right max-w-2xl">
                        <div className="mb-3 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full w-fit mb-space-sm text-secondary-fixed">
                        <span className="material-symbols-outlined text-body-sm">rocket_launch</span>
                        <span className="font-label-md text-label-md font-semibold">المقاعد محدودة لضمان التركيز الفردي</span>
                       </div>
                       <h2 className="mb-2 font-headline-lg text-headline-lg text-on-primary mb-space-xs font-bold tracking-tight">
                         جاهز تبدأ؟
                      </h2>
                      <p className="font-body-lg text-body-lg text-surface-container-high leading-relaxed">
                         احجز حصتك الأولى الآن وابدأ رحلة التفوق في الرياضيات بثقة ووضوح. جلسة تعريفية لتحديد المستوى مجاناً.
                     </p>
                    </div>
                    <div className="flex flex-col items-center sm:items-end w-full md:w-auto shrink-0">
                        <Link to='/contact' class="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm bg-tertiary-fixed text-primary-container font-label-lg text-label-lg px-space-xl py-4 rounded-xl font-bold shadow-lg hover:bg-tertiary-fixed-dim transition-all duration-200 transform hover:-translate-y-0.5 active:scale-[0.98]" >
                            <span className="material-symbols-outlined text-headline-sm">calendar_month</span>
                            <span>احجز حصتك الأولى الآن</span>
                        </Link>
                        <span className="font-label-sm text-label-sm text-on-primary-container mt-2">متاح حصص حضورية وأونلاين مباشرة</span>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CallSection