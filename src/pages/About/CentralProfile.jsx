
import React from "react";
import mr from "../../assets/images/mr.png";
import mr2 from "../../assets/images/mrs.jpeg"

const CentralProfile = () => {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-10 shadow-xl shadow-slate-900/5 mb-space-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

        {/* Teacher 1 */}
        <div className="group relative overflow-visible rounded-2xl">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={mr}
              alt="أحمد سيد رمضان"
              className="w-full h-[380px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/10 to-transparent" />

            <div className="absolute bottom-5 right-5 left-5 text-on-primary">
              <h2 className="font-headline-md text-headline-md mb-1">
                أحمد سيد رمضان
              </h2>

              <p className="font-body-sm text-body-sm opacity-90 leading-6">
                مدرب قدرات كمي وتحصيلي ومعلم للمواد العلمية
              </p>

              <div className="flex items-center gap-2 mt-3">
                <span className="material-symbols-outlined text-tertiary-fixed text-xl">
                  school
                </span>

                <span className="font-label-sm text-label-sm">
                  قدرات وتحصيلي ومواد علمية
                </span>
              </div>
            </div>
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-5 -right-3 md:-right-6 bg-surface-container-lowest px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold text-headline-sm">
              +10
            </div>

            <div className="flex flex-col text-right">
              <span className="font-label-lg text-label-lg text-primary-container leading-none">
                سنوات خبرة
              </span>

              <span className="font-body-sm text-body-sm text-outline mt-1">
                تعليم اكاديمي 
              </span>
            </div>
          </div>
        </div>

        {/* Teacher 2 */}
        <div className="group relative overflow-hidden rounded-2xl">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={mr2}
              alt="أحمد علي أحمد "
              className="w-full h-[380px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/10 to-transparent" />

          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/10 to-transparent" />

          <div className="absolute bottom-5 right-5 left-5 text-on-primary">
            <h2 className="font-headline-md text-headline-md mb-1">
             أحمد علي أحمد
            </h2>

            <p className="font-body-sm text-body-sm opacity-90 leading-6">
              مدرب قدرات لفظي ومعلم كفايات لغوية
            </p>

            <div className="flex items-center gap-2 mt-3">
              <span className="material-symbols-outlined text-tertiary-fixed text-xl">
                translate
              </span>

              <span className="font-label-sm text-label-sm">
                قدرات لفظي وكفايات لغوية
              </span>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default CentralProfile;

