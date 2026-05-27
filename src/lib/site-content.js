export const gymInfo = {
  name: "Iron Pulse Gym",
  address: "18 El Nasr Road, New Maadi, Cairo",
  phone: "+20 100 555 7820",
  email: "hello@ironpulsegym.com",
  whatsappNumber: "201005557820",
  whatsappLink:
    "https://wa.me/201005557820?text=Hi%20Iron%20Pulse%20Gym%2C%20I%20want%20to%20book%20a%20free%20trial%20session.",
  instagramLink: "https://instagram.com/ironpulsegym.eg",
  mapsLink: "https://maps.google.com/?q=18+El+Nasr+Road,+New+Maadi,+Cairo",
  heroImage:
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1600&auto=format&fit=crop",
  equipmentImage:
    "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?q=80&w=600&auto=format&fit=crop",
  trainerImage:
    "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop",
};

export const packages = [
  {
    id: "starter",
    packageType: "1 Month",
    price: "EGP 900",
    accent: "from-[#FF4D00] to-[#b80000]",
    en: {
      name: "Starter",
      duration: "1 Month",
      description: "A clean start with full gym access and coach guidance.",
      perks: ["Full floor access", "Locker room access", "One InBody scan"],
    },
    ar: {
      name: "Starter",
      duration: "شهر",
      description: "بداية قوية بدخول كامل الجيم ومتابعة أساسية من الكوتش.",
      perks: [
        "دخول كامل للجيم",
        "استخدام غرف تغيير الملابس",
        "قياس InBody مرة",
      ],
    },
  },
  {
    id: "performance",
    packageType: "3 Months",
    price: "EGP 2,250",
    featured: true,
    accent: "from-[#ff6a33] via-[#FF4D00] to-[#b80000]",
    en: {
      name: "Performance",
      duration: "3 Months",
      description: "Best value for visible transformation and consistency.",
      perks: [
        "Everything in Starter",
        "Monthly coach follow-up",
        "Simple nutrition roadmap",
      ],
    },
    ar: {
      name: "Performance",
      duration: "3 شهور",
      description: "أفضل قيمة لنتيجة واضحة وثبات في التمرين.",
      perks: [
        "كل مميزات Starter",
        "متابعة شهرية مع الكوتش",
        "خطة تغذية عملية",
      ],
    },
  },
  {
    id: "elite",
    packageType: "1 Year",
    price: "EGP 7,900",
    accent: "from-[#FF4D00] to-[#ff1f1f]",
    en: {
      name: "Elite",
      duration: "1 Year",
      description: "A full-year transformation plan with premium support.",
      perks: [
        "Everything in Performance",
        "2 personal training sessions",
        "Priority coaching support",
      ],
    },
    ar: {
      name: "Elite",
      duration: "سنة",
      description: "برنامج تحويل كامل لمدة سنة بدعم تدريبي أعلى.",
      perks: [
        "كل مميزات Performance",
        "حصتين تدريب شخصي",
        "أولوية متابعة مع الكوتش",
      ],
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
      join: "Free Trial",
      language: "Arabic",
      theme: "Toggle theme",
      whatsapp: "WhatsApp",
    },
    hero: {
      eyebrow: "IRON PULSE GYM • NEW MAADI",
      title: "Train In A Space Built For Real Results.",
      subtitle:
        "A premium training floor with expert coaching, modern equipment, and flexible memberships that fit your weekly rhythm.",
      primary: "Book Free Trial",
      secondary: "See The Gym",
      stats: [
        { value: "24+", label: "Strength stations" },
        { value: "6", label: "Certified coaches" },
        { value: "06:00", label: "Daily opening" },
      ],
    },
    features: {
      eyebrow: "Everything under one roof",
      title: "Built for results, not just check-ins.",
      description:
        "From beginners to advanced lifters, our team helps you train with proper form, structured progress, and consistent follow-up.",
      addressLabel: "Location",
      hoursLabel: "Working hours",
      hours: [
        "Saturday - Thursday: 6:00 AM - 12:00 AM",
        "Friday: 2:00 PM - 10:00 PM",
      ],
      trainersLabel: "Coaching team",
      trainers:
        "Certified strength and body-recomposition coaches available across all peak hours.",
      equipmentTitle: "Modern equipment",
      equipmentText:
        "Commercial machines, free weights, cables, cardio, and recovery-ready layout.",
      trainerTitle: "Coached sessions",
      trainerText:
        "Practical form correction, personalized plans, and measurable progress tracking.",
    },
    pricing: {
      eyebrow: "Flexible memberships",
      title: "Choose your plan and start this week.",
      description:
        "Book your preferred membership now. Our team confirms your trial or package and helps you begin fast.",
      popular: "Most booked",
      book: "Reserve This Plan",
    },
    booking: {
      title: "Reserve your membership",
      packageLabel: "Selected package",
      nameLabel: "Full name",
      namePlaceholder: "Enter your full name",
      phoneLabel: "Phone number",
      phonePlaceholder: "01xxxxxxxxx",
      submit: "Confirm Booking",
      submitting: "Submitting...",
      close: "Close booking modal",
      success:
        "Booking received successfully.",
      successTitle: "We got your request",
      successDetails:
        "Our team will contact you shortly to confirm your first session and membership details.",
      whatsappFollowup: "Continue on WhatsApp",
      closeSuccess: "Done",
      missingConfig:
        "Supabase is not configured yet. Add your environment variables and try again.",
      required: "Please enter your name and phone number.",
      invalidPhone: "Phone number must start with 01 and be exactly 11 digits.",
      error: "We could not save your booking. Please try again.",
    },
    testimonials: {
      eyebrow: "Member feedback",
      title: "Real voices from our floor in Maadi.",
      reviews: [
        {
          name: "Mona Adel",
          role: "Member • 8 months",
          quote:
            "Coaches fixed my technique early, and I finally train with confidence.",
        },
        {
          name: "Karim Hassan",
          role: "Performance plan",
          quote:
            "Smooth booking, clean floor, and real follow-up every month.",
        },
        {
          name: "Nour Samir",
          role: "Elite member",
          quote:
            "The gym is organized, never chaotic, and the team is always present.",
        },
      ],
    },
    journey: {
      eyebrow: "Start now",
      title: "Your first week can change everything.",
      description:
        "Book a free trial, meet our coaches, and get a clear training direction based on your goal and current level.",
      points: [
        "Free trial session with coach support",
        "Quick body and goal assessment",
        "Recommended plan based on your schedule",
        "Simple nutrition and recovery guidance",
      ],
      primaryCta: "Book Free Trial",
      secondaryCta: "Chat on WhatsApp",
    },
    admin: {
      title: "Admin Dashboard",
      subtitle: "Track leads, cash confirmations, and follow-up status in one place.",
      passwordTitle: "Reception Access",
      passwordDescription: "Enter dashboard password to view all incoming leads.",
      passwordLabel: "Password",
      passwordPlaceholder: "Enter password",
      unlock: "Unlock Dashboard",
      wrongPassword: "Incorrect password. Try gym1234.",
      totalLeads: "Total Leads",
      totalPaid: "Paid Cash",
      totalPending: "Pending",
      leads: "Leads",
      refresh: "Refresh",
      refreshing: "Refreshing...",
      markPaid: "Mark as Paid",
      markPending: "Mark as Pending",
      deleteLead: "Delete Lead",
      deleteConfirm: "Are you sure you want to delete this lead?",
      rowActions: "Lead actions",
      paid: "Paid Cash",
      pending: "Pending",
      empty: "No leads yet.",
      missingConfig:
        "Supabase admin variables are missing. Add SUPABASE_SERVICE_ROLE_KEY to .env.local.",
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
      text: "Premium coaching, modern equipment, and flexible memberships in New Maadi.",
      ctaTitle: "Start your trial this week",
      ctaText: "Talk to our team and schedule your first session in minutes.",
      location: "Location",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      rights: "All rights reserved.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن الجيم",
      pricing: "الأسعار",
      reviews: "الآراء",
      admin: "الإدارة",
      join: "حصة مجانية",
      language: "English",
      theme: "تبديل المظهر",
      whatsapp: "واتساب",
    },
    hero: {
      eyebrow: "IRON PULSE GYM • المعادي الجديدة",
      title: "اتمرن في مكان معمول لنتيجتك.",
      subtitle:
        "مساحة تدريب بريميوم، كباتن فاهمة، وأجهزة حديثة تساعدك تبني جسم قوي بخطة واضحة تناسب يومك.",
      primary: "احجز حصة مجانية",
      secondary: "شوف الجيم",
      stats: [
        { value: "+24", label: "محطة قوة" },
        { value: "6", label: "كباتن معتمدين" },
        { value: "06:00", label: "الافتتاح يوميًا" },
      ],
    },
    features: {
      eyebrow: "كل اللي محتاجه في مكان واحد",
      title: "جيم معمول للنتيجة مش للمنظر.",
      description:
        "سواء لسه بتبدأ أو بقالك فترة، هنمشي معاك بخطة واضحة، تكنيك صح، ومتابعة مستمرة.",
      addressLabel: "العنوان",
      hoursLabel: "مواعيد العمل",
      hours: [
        "السبت - الخميس: 6:00 صباحًا - 12:00 منتصف الليل",
        "الجمعة: 2:00 مساءً - 10:00 مساءً",
      ],
      trainersLabel: "فريق الكوتشينج",
      trainers:
        "كباتن معتمدين في القوة وخسارة الدهون وبناء الجسم، متواجدين يوميًا في أوقات الزحمة.",
      equipmentTitle: "أجهزة حديثة",
      equipmentText:
        "أوزان حرة، أجهزة مقاومة، كابلات، كارديو، ومساحات مريحة للتمرين.",
      trainerTitle: "متابعة مع الكابتن",
      trainerText:
        "تصحيح تكنيك، خطط تدريب مناسبة، ومتابعة تقدمك بشكل عملي وواضح.",
    },
    pricing: {
      eyebrow: "باقات مرنة",
      title: "اختار الباقة المناسبة وابدأ من الأسبوع ده.",
      description:
        "احجز الباقة اللي تناسبك، وفريقنا بيتواصل معاك فورًا لتأكيد البداية أو الحصة التجريبية.",
      popular: "الأكثر اختيارًا",
      book: "احجز الباقة",
    },
    booking: {
      title: "احجز اشتراكك",
      packageLabel: "الباقة المختارة",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "اكتب اسمك بالكامل",
      phoneLabel: "رقم الموبايل",
      phonePlaceholder: "01xxxxxxxxx",
      submit: "تأكيد الحجز",
      submitting: "جاري الإرسال...",
      close: "إغلاق نافذة الحجز",
      success: "تم استلام الحجز بنجاح.",
      successTitle: "حجزك وصلنا",
      successDetails:
        "فريقنا هيتواصل معاك قريب لتأكيد أول حصة وتفاصيل الاشتراك المناسبة ليك.",
      whatsappFollowup: "كمّل على واتساب",
      closeSuccess: "تم",
      missingConfig:
        "إعدادات Supabase غير مكتملة. ضيف متغيرات البيئة وحاول مرة تانية.",
      required: "من فضلك اكتب الاسم ورقم الموبايل.",
      invalidPhone: "رقم الموبايل لازم يبدأ بـ 01 ويكون 11 رقم بالضبط.",
      error: "حصلت مشكلة أثناء الحفظ. حاول مرة تانية.",
    },
    testimonials: {
      eyebrow: "آراء الأعضاء",
      title: "تجارب حقيقية من أعضاء الجيم في المعادي.",
      reviews: [
        {
          name: "منى عادل",
          role: "عضوة • 8 شهور",
          quote:
            "عدلوا لي التكنيك من أول أسبوع، وبقيت بتمرن بثقة أكتر بكتير.",
        },
        {
          name: "كريم حسن",
          role: "باقة Performance",
          quote:
            "الحجز كان سريع، والجيم نضيف، والمتابعة كل شهر فرقت جدًا.",
        },
        {
          name: "نور سمير",
          role: "عضوة Elite",
          quote:
            "المكان منظم جدًا والكباتن موجودين دايمًا وقت التمرين.",
        },
      ],
    },
    journey: {
      eyebrow: "ابدأ دلوقتي",
      title: "أول أسبوع ممكن يفرق جدًا.",
      description:
        "احجز حصة تجريبية مجانية، قابل الكابتن، وخد اتجاه واضح يناسب هدفك ومستواك الحالي.",
      points: [
        "حصة تجريبية مجانية مع متابعة من الكابتن",
        "تقييم سريع للجسم والهدف",
        "اقتراح باقة مناسبة لوقتك",
        "نصايح عملية للتغذية والاستشفاء",
      ],
      primaryCta: "احجز الحصة المجانية",
      secondaryCta: "تواصل واتساب",
    },
    admin: {
      title: "لوحة الإدارة",
      subtitle: "تابع العملاء، حالات الدفع الكاش، وحالات المتابعة بسهولة.",
      passwordTitle: "دخول الاستقبال",
      passwordDescription: "اكتب كلمة المرور لعرض كل طلبات الحجز.",
      passwordLabel: "كلمة المرور",
      passwordPlaceholder: "اكتب كلمة المرور",
      unlock: "فتح اللوحة",
      wrongPassword: "كلمة المرور غير صحيحة. جرّب gym1234.",
      totalLeads: "إجمالي الطلبات",
      totalPaid: "مدفوع كاش",
      totalPending: "قيد المتابعة",
      leads: "الطلبات",
      refresh: "تحديث",
      refreshing: "جاري التحديث...",
      markPaid: "تسجيل مدفوع",
      markPending: "تحويل لقيد المتابعة",
      deleteLead: "حذف الطلب",
      deleteConfirm: "متأكد إنك عايز تحذف الطلب ده؟",
      rowActions: "إجراءات الطلب",
      paid: "مدفوع كاش",
      pending: "قيد المتابعة",
      empty: "مفيش طلبات حالياً.",
      missingConfig:
        "متغيرات إدارة Supabase ناقصة. ضيف SUPABASE_SERVICE_ROLE_KEY في .env.local.",
      loading: "جاري تحميل الطلبات...",
      fetchError: "تعذر تحميل الطلبات.",
      updateError: "تعذر تحديث الطلب.",
      columns: {
        name: "الاسم",
        phone: "الموبايل",
        package: "الباقة",
        date: "التاريخ",
        status: "الحالة",
        action: "الإجراء",
      },
    },
    footer: {
      text: "تدريب احترافي، أجهزة حديثة، وباقات مرنة في قلب المعادي الجديدة.",
      ctaTitle: "ابدأ حصتك التجريبية الأسبوع ده",
      ctaText: "كلّم فريقنا وحدد أول تمرينة في دقايق.",
      location: "الموقع",
      whatsapp: "واتساب",
      instagram: "إنستجرام",
      rights: "جميع الحقوق محفوظة.",
    },
  },
};
