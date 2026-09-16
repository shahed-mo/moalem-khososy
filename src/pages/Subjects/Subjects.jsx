import React from 'react'
import Scards from './Scards'
import Pedagogy from './Pedagogy'
import Abstract from './Abstract'


const Subjects = () => {
  return (
    <div className="flex flex-col w-full">
        <div className="relative w-full overflow-hidden px-space-xl">
            <div className="absolute -top-40 right-1/4 w-96 h-96 bg-secondary-fixed/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute top-60 left-10 w-80 h-80 bg-tertiary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="max-w-7xl mx-auto px-margin py-space-xl">
                {/* <!-- Section Header --> */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
                    <div className="inline-flex items-center gap-space-xs bg-surface-container-high px-space-md py-space-xs px-3 py-2 rounded-full mb-space-sm text-secondary shadow-sm">
                        <span className="material-symbols-outlined text-headline-sm" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
                        <span className="font-label-md text-label-md font-semibold text-primary-container"> المواد والتخصصات التعليمية</span>
                    </div>
                    <h1 className="font-display-hero text-display-hero text-primary-container tracking-tight mb-space-sm"> المواد الدراسية</h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl"> نقدم مجموعة متنوعة من المواد والتخصصات التعليمية، تشمل القدرات
                         والتحصيلي والكفايات اللغوية والمواد العلمية، مع برامج للتأسيس
                          والمتابعة تناسب مختلف المراحل واحتياجات الطلاب.
                    </p>
                </div>
                {/* <!-- Quick Metrics Ribbon --> */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-space-xl">
                    <div className="bg-surface-container-lowest rounded-xl p-4 md:p-6 shadow-sm flex items-center gap-4">
    <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary shrink-0">
      <span className="material-symbols-outlined text-headline-md">
        menu_book
      </span>
    </div>

    <div>
      <span className="block font-headline-sm text-headline-sm text-primary-container">
        تخصصات متنوعة
      </span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">
        تغطي احتياجات الطلاب
      </span>
    </div>
  </div>

  <div className="bg-surface-container-lowest rounded-xl p-4 md:p-6 shadow-sm flex items-center gap-4">
    <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary shrink-0">
      <span className="material-symbols-outlined text-headline-md">
        school
      </span>
    </div>

    <div>
      <span className="block font-headline-sm text-headline-sm text-primary-container">
        مختلف المراحل
      </span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">
        من التأسيس إلى الجامعة
      </span>
    </div>
  </div>

  <div className="bg-surface-container-lowest rounded-xl p-4 md:p-6 shadow-sm flex items-center gap-4">
    <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary shrink-0">
      <span className="material-symbols-outlined text-headline-md">
        person_check
      </span>
    </div>

    <div>
      <span className="block font-headline-sm text-headline-sm text-primary-container">
        متابعة مستمرة
      </span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">
        متابعة تناسب مستوى الطالب
      </span>
    </div>
  </div>

  <div className="bg-surface-container-lowest rounded-xl p-4 md:p-6 shadow-sm flex items-center gap-4">
    <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary shrink-0">
      <span className="material-symbols-outlined text-headline-md">
        verified
      </span>
    </div>

    <div>
      <span className="block font-headline-sm text-headline-sm text-primary-container">
        تعليم متخصص
      </span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">
        شرح وتدريب بطريقة واضحة
      </span>
    </div>
    </div>
               </div>
               <Scards/>
              <Pedagogy/>
              <Abstract/>
            </div>
        </div>
    </div>
  )
}

export default Subjects