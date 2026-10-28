import React from 'react';
import { Star, Quote, MessageSquareHeart } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
            <MessageSquareHeart className="w-3.5 h-3.5 text-amber-700" />
            <span>La Confiance de Nos Clients</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif tracking-tight">
            Ce Que Disent Nos Amateurs de Saveurs
          </h2>

          <p className="text-stone-600 text-sm sm:text-base">
            Particuliers, familles et professionnels de la restauration partagent leur expérience avec SENAM AGRO à Dakar.
          </p>
        </div>

        {/* Testimonials 3-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed mb-6">
                  « {test.comment} »
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-700 to-amber-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                  {test.avatarText}
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">{test.name}</div>
                  <div className="text-[11px] text-stone-500">{test.role} • {test.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
