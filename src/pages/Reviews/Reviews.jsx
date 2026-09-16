import React from 'react'
import Features from './Features'
import RCards from './RCards'
import { NavLink } from "react-router-dom";

const Reviews = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full py-space-xl overflow-hidden px-space-xl">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary-fixed/50 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-20 w-80 h-80 bg-tertiary-fixed/30 rounded-full blur-3xl"></div>
          <svg className="w-full h-full text-outline-variant/15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="40" id="math-grid" patternunits="userSpaceOnUse" width="40">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="0.75"></path>
              </pattern>
              </defs>
              <rect fill="url(#math-grid)" height="100%" width="100%"></rect>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-margin">
          {/* Header */}
          <div className="max-w-3xl mb-space-xl">
            <div className="inline-flex items-center gap-space-xs bg-surface-container text-secondary font-label-md text-label-md px-3.5 py-1.5 rounded-full mb-space-sm shadow-sm">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}> verified</span>
              <span>تجارب نفتخر بها</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary-container tracking-tight mb-space-sm"> آراء وتجارب طلابنا</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed"> نعتز بتجارب طلابنا وآرائهم، ونسعى دائمًا إلى تقديم تجربة تعليمية
               تساعدهم على الفهم والتطور وتحقيق أهدافهم في مختلف التخصصات والمراحل
                الدراسية.
            </p>
          </div>
          <Features/>
          <RCards/>
          <div className="mt-space-xl bg-primary-container text-on-primary rounded-3xl p-space-lg md:p-space-xl shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-space-lg">
  {/* Decorative shapes */}
  <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-secondary/30 rounded-full blur-2xl pointer-events-none"></div>

  <div className="absolute top-0 right-1/4 w-32 h-32 bg-tertiary-fixed/10 rounded-full blur-xl pointer-events-none"></div>

  {/* Content */}
  <div className="relative z-10 max-w-xl text-center md:text-right">
    <div className="inline-flex items-center gap-space-xs text-tertiary-fixed-dim font-label-sm text-label-sm mb-space-xs">
      <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-ping"></span>

      <span>ابدأ خطتك التعليمية مع فريق متخصص</span>
    </div>

    <h2 className="font-headline-md text-headline-md text-surface-container-lowest mb-space-xs">
      جاهز تحقق هدفك التعليمي؟
    </h2>

    <p className="font-body-md text-body-md text-on-primary-container">
      تواصل معنا لمعرفة التخصص المناسب لك، والاستفسار عن البرامج التعليمية
      والمواعيد المتاحة للقدرات والتحصيلي والكفايات اللغوية والمواد الدراسية.
    </p>
  </div>

  {/* CTA */}
  <div className="relative z-10 shrink-0">
    <NavLink
      to="/contact"
      className="bg-tertiary-fixed text-primary-container font-label-lg text-label-lg px-space-xl py-space-md py-4 rounded-xl shadow-lg hover:bg-tertiary-fixed-dim transition-all inline-flex items-center justify-center gap-space-sm hover:-translate-y-0.5"
    >
      <span className="material-symbols-outlined text-headline-sm">
        event_available
      </span>

      <span>احجز حصتك</span>

      <span className="material-symbols-outlined text-sm scale-x-[-1]">
        arrow_back
      </span>
    </NavLink>
  </div>
</div>
        </div>
      </section>
    </div>
  )
}

export default Reviews