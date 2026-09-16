import CentralProfile from "./CentralProfile";
import DistinctCard from "./DistinctCard";
import Steps from "./Steps";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden px-4">
        {/* Background decorations */}
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-secondary-fixed/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="absolute top-10 left-10 w-72 h-72 bg-tertiary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-margin-mobile md:px-margin py-space-xl">
          
          {/* Section Header */}
          <div className="flex flex-col items-center md:items-start mb-space-xl">
            
            <div
              className="inline-flex items-center gap-space-xs px-3.5 py-1 rounded-full
              bg-secondary-fixed text-on-secondary-fixed text-label-sm
              font-label-sm shadow-sm mb-space-sm mb-3"
            >
              <span className="material-symbols-outlined text-base">
                verified
              </span>

              <span>فريق متخصص في التعليم والتدريب</span>
            </div>

            <h1
              className="font-headline-lg text-headline-lg text-primary-container
              tracking-tight text-center md:text-right mb-2"
            >
              خبرة تعليمية هدفها بناء الفهم والثقة
            </h1>

            <p
              className="font-body-lg text-body-lg text-on-surface-variant
              max-w-2xl text-center md:text-right mt-space-xs leading-8"
            >
              نعمل على تقديم تجربة تعليمية واضحة ومتكاملة تجمع بين الشرح
              المبسط، والتأسيس القوي، والتدريب المستمر، لمساعدة الطلاب على
              تطوير مستواهم وتحقيق أهدافهم الدراسية.
            </p>

          </div>
          <CentralProfile/>
          <Steps/>
          <DistinctCard/>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md gap-4 pt-space-xs pb-space-lg">
            <NavLink to="/contact" className="w-full sm:w-auto px-8 py-4 bg-tertiary-fixed
            text-primary-container font-label-lg text-label-lg rounded-xl shadow-lg shadow-amber-500/10 hover:bg-tertiary-fixed-dim hover:-translate-y-0.5 active:scale-98 transition-all flex items-center justify-center gap-space-xs"
            >
                <span className="material-symbols-outlined text-headline-sm">event_available</span>
                <span>احجز حصتك الأن</span>
            </NavLink>
            <NavLink to="/subjects" className="w-full sm:w-auto px-8 py-4 
            bg-surface-container-lowest text-primary-container hover:bg-surface-container 
            font-label-lg text-label-lg rounded-xl shadow-sm hover:shadow-md transition-all flex
             items-center justify-center gap-space-xs"
             >
                <span className="material-symbols-outlined text-secondary text-headline-sm">menu_book</span>
                <span>استعرض المواد</span>
            </NavLink>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;