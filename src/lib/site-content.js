export const gymInfo = {
  name: "Iron Pulse Gym",
  address: "18 El Nasr Road, New Maadi, Cairo",
  phone: "+20 100 555 7820",
  email: "hello@ironpulsegym.com",
  heroImage:
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=85",
  equipmentImage:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85",
  trainerImage:
    "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&w=1200&q=85",
};

export const packages = [
  {
    id: "starter",
    packageType: "1 Month",
    price: "EGP 900",
    accent: "from-orange-500 to-red-600",
    en: {
      name: "Starter",
      duration: "1 Month",
      description: "Perfect for rebuilding momentum with full floor access.",
      perks: ["Gym floor access", "Locker room access", "One body scan"],
    },
    ar: {
      name: "البداية",
      duration: "شهر واحد",
      description: "اختيار مناسب للعودة للتدريب مع دخول كامل لصالة الجيم.",
      perks: ["دخول صالة الجيم", "استخدام غرف تبديل الملابس", "قياس جسم مرة واحدة"],
    },
  },
  {
    id: "performance",
    packageType: "3 Months",
    price: "EGP 2,250",
    featured: true,
    accent: "from-amber-400 to-orange-600",
    en: {
      name: "Performance",
      duration: "3 Months",
      description: "The best value for consistent training and visible progress.",
      perks: ["All Starter benefits", "Monthly trainer check-in", "Nutrition starter guide"],
    },
    ar: {
      name: "الأداء",
      duration: "3 أشهر",
      description: "أفضل قيمة للاستمرار في التدريب وتحقيق نتائج واضحة.",
      perks: ["كل مزايا البداية", "متابعة شهرية مع مدرب", "دليل تغذية مبدئي"],
    },
  },
  {
    id: "elite",
    packageType: "1 Year",
    price: "EGP 7,900",
    accent: "from-emerald-400 to-cyan-500",
    en: {
      name: "Elite",
      duration: "1 Year",
      description: "A full-year commitment with premium coaching support.",
      perks: ["All Performance benefits", "Two personal training sessions", "Priority class booking"],
    },
    ar: {
      name: "النخبة",
      duration: "سنة كاملة",
      description: "اشتراك سنوي مع دعم تدريبي مميز طوال العام.",
      perks: ["كل مزايا الأداء", "حصتان تدريب شخصي", "أولوية حجز الحصص"],
    },
  },
];

export const dictionary = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      pricing: "Pricing",
      reviews: "Reviews",
      admin: "Admin",
      join: "Join Now",
      language: "Arabic",
      theme: "Toggle theme",
    },
    hero: {
      eyebrow: "Premium strength and conditioning in Maadi",
      title: "Iron Pulse Gym",
      subtitle:
        "Build power, discipline, and a body that keeps up with serious equipment, expert coaches, and flexible cash activation.",
      primary: "Join Now",
      secondary: "Explore Gym",
      stats: [
        { value: "24+", label: "Strength stations" },
        { value: "6", label: "Certified trainers" },
        { value: "06:00", label: "Opening time" },
      ],
    },
    features: {
      eyebrow: "Everything you need under one roof",
      title: "A focused local gym with premium coaching energy.",
      description:
        "Train before work, after university, or late at night with a team that keeps the floor clean, organized, and ready for real progress.",
      addressLabel: "Address",
      hoursLabel: "Opening hours",
      hours: ["Saturday - Thursday: 6:00 AM - 12:00 AM", "Friday: 2:00 PM - 10:00 PM"],
      trainersLabel: "Trainers",
      trainers: "Certified strength, fat-loss, and transformation coaches on the floor every day.",
      equipmentTitle: "Modern equipment",
      equipmentText: "Free weights, selectorized machines, cables, cardio, and recovery zones.",
      trainerTitle: "Coached sessions",
      trainerText: "Personal training, form checks, body scans, and practical nutrition guidance.",
    },
    pricing: {
      eyebrow: "Membership packages",
      title: "Book online, pay cash at the gym.",
      description:
        "Reserve your preferred package now. Your membership activates after cash payment at reception within 48 hours.",
      popular: "Most booked",
      book: "Book Now",
    },
    booking: {
      title: "Reserve your membership",
      packageLabel: "Selected package",
      nameLabel: "Full name",
      namePlaceholder: "Enter your name",
      phoneLabel: "Phone number",
      phonePlaceholder: "Enter your phone number",
      submit: "Confirm Booking",
      submitting: "Saving...",
      close: "Close booking modal",
      success:
        "Your booking is confirmed! Visit the gym within 48 hours to pay cash and activate your membership.",
      missingConfig:
        "Supabase is not configured yet. Add your environment variables and try again.",
      required: "Please enter your name and phone number.",
      error: "We could not save your booking. Please try again.",
    },
    testimonials: {
      eyebrow: "Member results",
      title: "Trusted by people who train before the city wakes up.",
      reviews: [
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
      ],
    },
    admin: {
      title: "Admin Dashboard",
      subtitle: "Track bookings, cash payments, and pending follow-ups.",
      passwordTitle: "Reception access",
      passwordDescription: "Enter the dashboard password to view leads.",
      passwordLabel: "Password",
      passwordPlaceholder: "Enter password",
      unlock: "Unlock Dashboard",
      wrongPassword: "Incorrect password. Try gym1234.",
      totalLeads: "Total Leads",
      totalPaid: "Total Paid Cash",
      totalPending: "Total Pending",
      leads: "Leads",
      refresh: "Refresh",
      markPaid: "Mark as Paid Cash",
      paid: "Paid Cash",
      pending: "Pending",
      empty: "No leads yet.",
      missingConfig: "Supabase admin variables are missing. Add SUPABASE_SERVICE_ROLE_KEY to .env.local.",
      loading: "Loading leads...",
      fetchError: "Unable to load leads.",
      updateError: "Unable to update this lead.",
      columns: {
        name: "Name",
        phone: "Phone",
        package: "Package",
        date: "Date",
        status: "Status",
        action: "Action",
      },
    },
    footer: {
      text: "Premium local training, simple cash activation, and a team ready to help you start.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن الجيم",
      pricing: "الأسعار",
      reviews: "الآراء",
      admin: "الإدارة",
      join: "اشترك الآن",
      language: "English",
      theme: "تبديل المظهر",
    },
    hero: {
      eyebrow: "تدريب قوة ولياقة مميز في المعادي",
      title: "Iron Pulse Gym",
      subtitle:
        "ابن قوة وانضباط وجسم يواكب طموحك مع أجهزة احترافية ومدربين خبراء وتفعيل اشتراك نقدي مرن.",
      primary: "اشترك الآن",
      secondary: "تعرف على الجيم",
      stats: [
        { value: "+24", label: "محطة تدريب قوة" },
        { value: "6", label: "مدربين معتمدين" },
        { value: "06:00", label: "موعد الافتتاح" },
      ],
    },
    features: {
      eyebrow: "كل ما تحتاجه في مكان واحد",
      title: "جيم محلي منظم بطاقة تدريب احترافية.",
      description:
        "تدرب قبل العمل أو بعد الجامعة أو في وقت متأخر مع فريق يحافظ على نظافة الصالة وتجهيزها للتقدم الحقيقي.",
      addressLabel: "العنوان",
      hoursLabel: "مواعيد العمل",
      hours: ["السبت - الخميس: 6:00 صباحا - 12:00 منتصف الليل", "الجمعة: 2:00 مساء - 10:00 مساء"],
      trainersLabel: "المدربون",
      trainers: "مدربون معتمدون للقوة وخسارة الدهون والتحولات البدنية متواجدون يوميا.",
      equipmentTitle: "أجهزة حديثة",
      equipmentText: "أوزان حرة، أجهزة مقاومة، كابلات، كارديو، ومناطق استشفاء.",
      trainerTitle: "جلسات بإشراف مدربين",
      trainerText: "تدريب شخصي، تصحيح أداء، قياسات جسم، ونصائح تغذية عملية.",
    },
    pricing: {
      eyebrow: "باقات الاشتراك",
      title: "احجز أونلاين وادفع نقدا في الجيم.",
      description:
        "احجز الباقة المناسبة الآن. يتم تفعيل اشتراكك بعد الدفع النقدي في الاستقبال خلال 48 ساعة.",
      popular: "الأكثر حجزا",
      book: "احجز الآن",
    },
    booking: {
      title: "احجز اشتراكك",
      packageLabel: "الباقة المختارة",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "اكتب اسمك",
      phoneLabel: "رقم الهاتف",
      phonePlaceholder: "اكتب رقم الهاتف",
      submit: "تأكيد الحجز",
      submitting: "جاري الحفظ...",
      close: "إغلاق نافذة الحجز",
      success: "تم تأكيد حجزك! زر الجيم خلال 48 ساعة للدفع نقدا وتفعيل اشتراكك.",
      missingConfig: "لم يتم إعداد Supabase بعد. أضف متغيرات البيئة ثم حاول مرة أخرى.",
      required: "من فضلك اكتب الاسم ورقم الهاتف.",
      error: "تعذر حفظ الحجز. حاول مرة أخرى.",
    },
    testimonials: {
      eyebrow: "نتائج الأعضاء",
      title: "يثق بنا أشخاص يتدربون قبل أن تستيقظ المدينة.",
      reviews: [
        {
          name: "منى عادل",
          role: "عضوة منذ 8 أشهر",
          quote:
            "المدربون صححوا أدائي من أول أسبوع، والأجهزة دائما جاهزة. المكان جاد لكنه غير مخيف.",
        },
        {
          name: "كريم حسن",
          role: "عضو باقة الأداء",
          quote:
            "حجزت أونلاين ودفعت نقدا في اليوم التالي وبدأت فورا. باقة 3 أشهر ساعدتني على الالتزام.",
        },
        {
          name: "نور سمير",
          role: "عضوة النخبة",
          quote:
            "صالة نظيفة، مواعيد متأخرة، ومدربون يتابعون فعلا. هذا أسهل روتين جيم التزمت به.",
        },
      ],
    },
    admin: {
      title: "لوحة الإدارة",
      subtitle: "تابع الحجوزات والمدفوعات النقدية والحالات المنتظرة.",
      passwordTitle: "دخول الاستقبال",
      passwordDescription: "اكتب كلمة مرور اللوحة لعرض بيانات العملاء.",
      passwordLabel: "كلمة المرور",
      passwordPlaceholder: "اكتب كلمة المرور",
      unlock: "فتح اللوحة",
      wrongPassword: "كلمة المرور غير صحيحة. جرب gym1234.",
      totalLeads: "إجمالي العملاء",
      totalPaid: "مدفوع نقدا",
      totalPending: "قيد الانتظار",
      leads: "العملاء",
      refresh: "تحديث",
      markPaid: "تسجيل مدفوع نقدا",
      paid: "Paid Cash",
      pending: "Pending",
      empty: "لا توجد حجوزات بعد.",
      missingConfig: "متغيرات إدارة Supabase غير موجودة. أضف SUPABASE_SERVICE_ROLE_KEY إلى .env.local.",
      loading: "جاري تحميل العملاء...",
      fetchError: "تعذر تحميل العملاء.",
      updateError: "تعذر تحديث هذا العميل.",
      columns: {
        name: "الاسم",
        phone: "الهاتف",
        package: "الباقة",
        date: "التاريخ",
        status: "الحالة",
        action: "الإجراء",
      },
    },
    footer: {
      text: "تدريب محلي مميز، تفعيل نقدي بسيط، وفريق جاهز لمساعدتك على البداية.",
    },
  },
};
