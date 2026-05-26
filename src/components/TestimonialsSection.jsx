import { Quote, Star } from "lucide-react";
import { motion } from "../lib/motion";

const englishReviews = [
  {
    name: "Mona Adel",
    role: "Member for 8 months",
    quote:
      "The trainers corrected my form in the first week, and the equipment is always ready. It feels serious without being intimidating.",
  },
  {
    name: "Karim Hassan",
    role: "Performance member",
    quote:
      "I booked online, paid cash the next day, and started immediately. The 3-month package kept me consistent.",
  },
  {
    name: "Nour Samir",
    role: "Elite member",
    quote:
      "Clean floor, late hours, and coaches who actually follow up. It is the easiest gym routine I have stuck with.",
  },
];

const arabicReviews = [
  {
    name: "منى عادل",
    role: "عضوة منذ 8 أشهر",
    quote:
      "الكباتن هنا عدلولي التكنيك وبيركزوا معايا من أول أسبوع، والأجهزة دايماً جاهزة وصيانتها ممتازة. المكان بجد مريح جداً للبنات ومش زحمة وقت التمرين.",
  },
  {
    name: "كريم حسن",
    role: "عضو باقة الأداء",
    quote:
      "حجزت أونلاين ودفعت كاش في الفرع تاني يوم وبدأت علطول. نظام الـ 3 شهور موفر جداً والكباتن بيتابعوا الـ InBody بانتظام.",
  },
  {
    name: "نور سمير",
    role: "عضو النخبة",
    quote:
      "الجيم نضيف جداً ومواعيدهم مظبوطة، وفيه تكييف قوي شغال طول الوقت. أحسن حاجة إن الكباتن هنا بتفهم ومبتسيبكش واقف لوحدك.",
  },
];

export function TestimonialsSection({ content, isArabic }) {
  const reviews = isArabic ? arabicReviews : englishReviews;

  const initialsForName = (name) =>
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("");

  return (
    <section id="reviews" className="section-contrast scroll-rise border-t border-fitness-border py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className={`max-w-xl space-y-4 text-left ${isArabic ? "lg:order-2" : ""}`}>
            <p className="section-kicker">{content.testimonials.eyebrow}</p>
            <h2 className="section-title max-w-2xl">{content.testimonials.title}</h2>
          </div>

          <div className={`grid gap-5 sm:grid-cols-2 ${isArabic ? "lg:order-1" : ""}`}>
            {reviews.map((review, index) => (
              <motion.article
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                key={review.name}
                className={`premium-card premium-card-hover rounded-lg p-6 sm:p-7 ${
                  index === 0 ? "sm:col-span-2" : ""
                } text-left`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-fitness-soft text-sm font-extrabold text-fitness-text ring-1 ring-fitness-border">
                      {initialsForName(review.name)}
                    </span>
                    <div>
                      <p className="text-base font-bold text-fitness-text">{review.name}</p>
                      <p className="mt-1 text-sm font-medium text-fitness-subtle">{review.role}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-fitness-orange/18 bg-fitness-orange/10 p-2 text-fitness-orange">
                    <Quote className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <div className="mt-5 flex gap-1 text-fitness-orange" aria-label="Five star review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>

                <p
                  className={`mt-5 text-fitness-muted ${
                    index === 0 ? "max-w-3xl text-lg leading-normal" : "text-base leading-normal"
                  }`}
                >
                  {review.quote}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
