import React from 'react'

const RCards = () => {
const reviews = [
  {
    id: 1,
    category: "القدرات الكمية والتحصيلي",
    rating: 5,
    quote:
      "شرح الأستاذ أحمد سيد للقدرات الكمية والتحصيلي واضح جدًا، وكان يهتم بشرح طريقة التفكير في السؤال وليس مجرد إعطاء الإجابة. استفدت كثيرًا من التدريب على النماذج والأسئلة المتنوعة.",
    name: "عبدالله الحربي",
    info: "طالب ثانوي - السعودية",
    avatar: "ع",
    avatarBg: "bg-secondary-fixed",
    avatarColor: "text-secondary",
    badgeBg: "bg-secondary-fixed",
    badgeColor: "text-on-secondary-fixed",
  },
  {
    id: 2,
    category: "الرياضيات والمواد العلمية",
    rating: 5,
    quote:
      "كنت أواجه صعوبة في الرياضيات والفيزياء، لكن طريقة شرح الأستاذ أحمد سيد جعلت المفاهيم أسهل بكثير. أكثر شيء أعجبني هو الصبر في الشرح ومراجعة النقاط التي لم أفهمها.",
    name: "نورة العتيبي",
    info: "طالبة ثانوية - السعودية",
    avatar: "ن",
    avatarBg: "bg-amber-100",
    avatarColor: "text-amber-600",
    badgeBg: "bg-amber-100",
    badgeColor: "text-amber-700",
  },
  {
    id: 3,
    category: "القدرات اللفظية",
    rating: 5,
    quote:
      "استفدت جدًا من شرح الأستاذ أحمد علي في القدرات اللفظية، خصوصًا في استيعاب المقروء والتناظر وإكمال الجمل. التدريب المستمر على الأسئلة ساعدني على فهم طريقة الاختبار بشكل أفضل.",
    name: "محمد القحطاني",
    info: "طالب قدرات - السعودية",
    avatar: "م",
    avatarBg: "bg-slate-100",
    avatarColor: "text-slate-700",
    badgeBg: "bg-slate-100",
    badgeColor: "text-slate-700",
  },
  {
    id: 4,
    category: "الكفايات اللغوية",
    rating: 5,
    quote:
      "شرح الأستاذ أحمد علي للكفايات اللغوية كان مرتبًا وسهل الفهم، وكان يوضح القاعدة ثم يطبق عليها بأسئلة مختلفة. أسلوبه في الشرح والمتابعة فرق معي كثيرًا.",
    name: "ريم الغامدي",
    info: "طالبة - السعودية",
    avatar: "ر",
    avatarBg: "bg-blue-100",
    avatarColor: "text-blue-600",
    badgeBg: "bg-blue-100",
    badgeColor: "text-blue-700",
  },
  {
    id: 5,
    category: "الكيمياء والفيزياء",
    rating: 5,
    quote:
      "أشكر الأستاذ أحمد سيد على أسلوبه في شرح الكيمياء والفيزياء، فقد أصبحت أفهم الأفكار وأعرف كيف أبدأ حل السؤال بدلًا من حفظ الحلول. المتابعة والتدريب بعد كل درس كانت مفيدة جدًا.",
    name: "سلمان المطيري",
    info: "طالب ثانوي - السعودية",
    avatar: "س",
    avatarBg: "bg-emerald-100",
    avatarColor: "text-emerald-600",
    badgeBg: "bg-emerald-100",
    badgeColor: "text-emerald-700",
  },
  {
    id: 6,
    category: "التأسيس والمتابعة",
    rating: 5,
    quote:
      "أشكر الأستاذ أحمد سيد والأستاذ أحمد علي على الاهتمام والمتابعة المستمرة. بدأنا من الأساسيات حسب مستواي، ومع الوقت أصبحت أكثر ثقة في حل الواجبات والأسئلة. أسلوب محترم واهتمام واضح بالطالب.",
    name: "فيصل الزهراني",
    info: "طالب - السعودية",
    avatar: "ف",
    avatarBg: "bg-tertiary-fixed",
    avatarColor: "text-primary-container",
    badgeBg: "bg-tertiary-fixed",
    badgeColor: "text-primary-container",
  },
];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
  {reviews.map((review) => (
    <article
      key={review.id}
      className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.04),0_4px_10px_-2px_rgba(15,23,42,0.02)] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_20px_35px_-5px_rgba(15,23,42,0.08)] transition-all duration-300"
    >
      <div>
        {/* Category + Rating */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <span
            className={`${review.badgeBg} ${review.badgeColor} font-label-sm text-label-sm px-3 py-1 rounded-full`}
          >
            {review.category}
          </span>

          {/* Stars */}
          <div
            aria-label={`تقييم ${review.rating} من 5 نجوم`}
            className="flex items-center gap-0.5 text-amber-500 shrink-0"
          >
            {Array.from({ length: review.rating }).map((_, index) => (
              <span
                key={index}
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="pe-3 mb-5">
          <span className="material-symbols-outlined text-3xl text-secondary opacity-30 select-none">
            format_quote
          </span>

          <p className="font-body-md text-body-md text-on-surface leading-relaxed mt-1">
            "{review.quote}"
          </p>
        </div>
      </div>

      {/* Student */}
      <div className="pt-4 mt-2 flex items-center gap-3 border-t border-surface-container">
        <div
          className={`w-10 h-10 rounded-full ${review.avatarBg} ${review.avatarColor} font-headline-sm flex items-center justify-center shrink-0`}
        >
          {review.avatarIcon ? (
            <span className="material-symbols-outlined text-xl">
              {review.avatarIcon}
            </span>
          ) : (
            review.avatar
          )}
        </div>

        <div className="flex flex-col min-w-0">
          <span className="font-headline-sm text-label-lg text-primary-container truncate">
            {review.name}
          </span>

          <span className="font-label-sm text-label-sm text-on-surface-variant">
            {review.info}
          </span>
        </div>
      </div>
    </article>
  ))}
</div>
  )
}

export default RCards