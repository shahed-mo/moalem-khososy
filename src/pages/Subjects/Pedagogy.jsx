import React from 'react'

const Pedagogy = () => {
  return (
     <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm mb-space-xl">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-surface-container-low text-secondary flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-headline-sm">
          menu_book
        </span>
      </div>

      <div>
        <h3 className="font-headline-sm text-headline-sm text-primary-container mb-1">
          شرح مبسط وواضح
        </h3>

        <p className="font-body-sm text-body-sm text-on-surface-variant leading-6">
          تبسيط المعلومات وشرح المفاهيم بطريقة واضحة تساعد الطالب على الفهم
          واستيعاب الدرس بدلًا من الاعتماد على الحفظ فقط.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-surface-container-low text-secondary flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-headline-sm">
          edit_note
        </span>
      </div>

      <div>
        <h3 className="font-headline-sm text-headline-sm text-primary-container mb-1">
          تدريب وتطبيق مستمر
        </h3>

        <p className="font-body-sm text-body-sm text-on-surface-variant leading-6">
          الانتقال من الفهم إلى التطبيق من خلال التدريب على الأسئلة والنماذج
          المتنوعة بما يناسب مستوى الطالب وهدفه.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-surface-container-low text-secondary flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-headline-sm">
          person_check
        </span>
      </div>

      <div>
        <h3 className="font-headline-sm text-headline-sm text-primary-container mb-1">
          متابعة تناسب كل طالب
        </h3>

        <p className="font-body-sm text-body-sm text-on-surface-variant leading-6">
          متابعة مستوى الطالب بشكل مستمر، ومعرفة نقاط القوة والجوانب التي
          تحتاج إلى تطوير للوصول إلى أفضل تقدم ممكن.
        </p>
      </div>
    </div>

  </div>
</div>
  )
}

export default Pedagogy