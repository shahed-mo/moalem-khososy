import React from 'react'
import { NavLink } from 'react-router-dom'
const Abstract = () => {
  return (
  <div className="bg-primary-container text-on-primary rounded-3xl p-space-xl shadow-xl relative overflow-hidden">
{/* <!-- Abstract Geometry Accents in BG --> */}
<div className="absolute -left-12 -bottom-12 w-64 h-64 bg-secondary/20 rounded-full blur-2xl pointer-events-none"></div>
<div className="absolute right-0 top-0 w-80 h-80 bg-tertiary-fixed/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-space-lg text-center md:text-right">
<div className="max-w-xl">
<div className="inline-flex items-center gap-space-xs text-tertiary-fixed font-label-md text-label-md mb-space-xs">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
<span>المقاعد محدودة للمجموعات التأسيسية والمتقدمة</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-on-primary mb-space-xs">جاهز تبدأ طريقك نحو مستوى أفضل؟</h3>
<p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
              احجز حصتك التجريبية الآن أو تواصل معنا للاستفسار عن الخطة الدراسية الأنسب لمستواك والمواعيد المتاحة أونلاين أو حضورياً.
            </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full md:w-auto">
  {/* احجز حصتك */}
  <NavLink
    to="/contact"
    className="w-full sm:w-auto text-center bg-tertiary-fixed text-primary-container font-label-lg text-label-lg px-10 py-4 rounded-xl hover:bg-tertiary-fixed-dim transition-all shadow-md font-bold flex items-center justify-center gap-space-xs"
  >
    <span className="material-symbols-outlined text-headline-sm">
      event_available
    </span>

    <span>احجز حصتك</span>
  </NavLink>

  {/* واتساب */}
  <a
    href="https://wa.me/966545784603"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto text-center bg-surface-container-highest/10 hover:bg-surface-container-highest/20 text-on-primary font-label-lg text-label-lg px-space-lg py-space-md rounded-xl transition-all flex items-center px-10 py-4 justify-center gap-space-xs"
  >
    <span className="material-symbols-outlined text-headline-sm">
      chat
    </span>

    <span>تواصل عبر واتساب</span>
  </a>
</div>
</div>
</div>
  )
}

export default Abstract