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
    "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?q=80&w=1200&auto=format&fit=crop",
  trainerImage:
    "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1200&auto=format&fit=crop",
};

export const packages = [
  {
    id: "starter",
    packageType: "1 Month",
    price: "EGP 900",
    accent: "from-[#E85D04] to-[#9A3412]",
    accentLine: "bg-fitness-border",
    en: {
      name: "Starter",
      duration: "1 Month",
      description: "A clean start with full gym access and coach guidance.",
      perks: ["Full floor access", "Locker room access", "One InBody scan"],
    },
    ar: {
      name: "Starter",
      duration: "شهر واحد",
      description: "بداية مثالية بدخول كامل لصالة التدريب وإشراف من المدربين.",
      perks: [
        "دخول كامل لصالة التدريب والمرافق",
        "استخدام غرف تبديل الملابس والخزائن",
        "فحص مجاني لنسبة الدهون InBody",
      ],
    },
  },
  {
    id: "performance",
    packageType: "3 Months",
    price: "EGP 2,250",
    featured: true,
    accent: "from-[#F97316] via-[#E85D04] to-[#9A3412]",
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
      description: "الخيار الأفضل لتحقيق نتائج ملموسة واستمرارية في التمرين.",
      perks: [
        "كل مميزات باقة Starter",
        "متابعة شهرية وتحديث للبرنامج التدريبي",
        "خطة تغذية عملية متوازنة",
      ],
    },
  },
  {
    id: "elite",
    packageType: "1 Year",
    price: "EGP 7,900",
    accent: "from-[#E85D04] to-[#9A3412]",
    accentLine: "bg-gradient-to-r from-fitness-border via-fitness-subtle/30 to-fitness-border",
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
      duration: "سنة كاملة",
      description: "برنامج تحول بدني شامل مع أعلى درجات التوجيه والدعم.",
      perks: [
        "كل مميزات باقة Performance",
        "جلستان تدريب خاص (Personal Training)",
        "أولوية المتابعة الفردية مع المدربين",
      ],
    },
  },
];

export const dictionary = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      schedule: "Classes",
      coaches: "Coaches",
      pricing: "Pricing",
      reviews: "Reviews",
      admin: "Admin",
      join: "Book Free Pass",
      language: "Arabic",
      theme: "Toggle theme",
      whatsapp: "WhatsApp",
    },
    hero: {
      eyebrow: "IRON PULSE GYM • NEW MAADI",
      title: "Train In A Space Built For Real Results.",
      subtitle:
        "A premium training floor with expert coaching, modern equipment, and flexible memberships that fit your weekly rhythm.",
      primary: "Claim Free Pass",
      secondary: "Explore Floor",
      stats: [
        { value: "24+", label: "Strength Stations" },
        { value: "6", label: "Elite Coaches" },
        { value: "06:00 AM", label: "Daily Opening" },
      ],
    },
    features: {
      eyebrow: "The Facility",
      title: "BUILT FOR PERFORMANCE",
      description:
        "This is not a room full of machines. It is a training floor engineered around how strong bodies are actually built - heavy compound workouts, precise coaching, and enough space to move without waiting.",
      specs: [
        { label: "Training Floor", value: "740 sqm of open, column-free strength space" },
        { label: "Equipment", value: "Eleiko platforms, calibrated plates, full cable systems" },
        { label: "Coaching", value: "Certified coaches on the floor every peak hour" },
        { label: "Hours", value: "Sat-Thu 6:00 AM - 12:00 AM  |  Fri 2:00 PM - 10:00 PM" },
        { label: "Location", value: "18 El Nasr Road, New Maadi, Cairo" },
      ],
      hoursLabel: "Working hours",
      hours: [
        "Saturday - Thursday: 6:00 AM - 12:00 AM",
        "Friday: 2:00 PM - 10:00 PM",
      ],
      equipmentTitle: "The Floor",
      equipmentText:
        "Commercial-grade racks, free weights, and conditioning zones built for real training volume.",
      trainerTitle: "The Coaching",
      trainerText:
        "Form corrected in real time, programming that progresses, and follow-up that keeps you honest.",
    },
    schedule: {
      eyebrow: "Weekly timetable",
      title: "Class Schedule",
      description:
        "Pick your day, find the class that fits your routine, and reserve your spot in seconds.",
      minutes: "min",
      coachLabel: "with",
      book: "Book Spot",
      empty: "No classes scheduled for this day.",
    },
    coaches: {
      eyebrow: "Coaching team",
      title: "Meet Our Coaches",
      description:
        "Certified coaches on the floor every day to correct your form and keep your plan on track.",
    },
    pricing: {
      eyebrow: "Flexible memberships",
      title: "Choose your plan and start this week.",
      description:
        "Book your preferred membership now. Our team confirms your trial or package and helps you begin fast.",
      popular: "Most Popular",
      book: "Select Plan",
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
      searchPlaceholder: "Search name, phone, package, or status",
      clearSearch: "Clear",
      filterAll: "All",
      noMatches: "No leads match your current search/filter.",
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
      mapTitle: "Find Us On Map",
      mapHint: "18 El Nasr Road, New Maadi, Cairo",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      rights: "All rights reserved.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن الجيم",
      schedule: "الكلاسات",
      coaches: "المدربين",
      pricing: "الاشتراكات",
      reviews: "آراء المشتركين",
      admin: "الإدارة",
      join: "احجز تجربتك المجانية",
      language: "English",
      theme: "تبديل المظهر",
      whatsapp: "واتساب",
    },
    hero: {
      eyebrow: "IRON PULSE GYM • المعادي الجديدة",
      title: "المكان المصمم لتحقيق نتائج حقيقية",
      subtitle:
        "صالة تدريب متكاملة بأحدث الأجهزة العالمية، وإشراف نخبة من المدربين المعتمدين لمساعدتك في الوصول لهدفك.",
      primary: "احجز جلستك التجريبية",
      secondary: "استكشف الصالة",
      stats: [
        { value: "24+", label: "جهاز ومنطقة تدريب" },
        { value: "6", label: "مدربين معتمدين دولياً" },
        { value: "06:00 ص", label: "نفتح يومياً من" },
      ],
    },
    features: {
      eyebrow: "المرافق والتجهيزات",
      title: "صالة مجهزة للأداء العالي",
      description:
        "ليس مجرد مكان يمتلئ بالأجهزة، بل مساحة تدريب مصممة وفق أسس البناء العضلي الصحيح — تمارين القوة الحرة، والتوجيه الفني الدقيق، ومساحة واسعة تتحرك فيها بحرية تامة.",
      specs: [
        { label: "مساحة الصالة", value: "740 متر مربع بدون أي أعمدة عائقة" },
        { label: "التجهيزات", value: "منصات Eleiko لرفع الأثقال، أوزان معايرة، وأنظمة كابلات حديثة" },
        { label: "طاقم التدريب", value: "مدربون معتمدون متواجدون طوال ساعات الذروة" },
        { label: "المواعيد", value: "السبت - الخميس: 6:00 ص - 12:00 منتصف الليل | الجمعة: 2:00 م - 10:00 م" },
        { label: "العنوان", value: "18 طريق النصر، المعادي الجديدة، القاهرة" },
      ],
      hoursLabel: "مواعيد العمل",
      hours: [
        "السبت - الخميس: 6:00 صباحاً - 12:00 منتصف الليل",
        "الجمعة: 2:00 ظهراً - 10:00 مساءً",
      ],
      equipmentTitle: "صالة الأوزان والأجهزة",
      equipmentText:
        "راكات تدريب احترافية، أوزان حرة متنوعة، ومساحات لياقة بدنية مصممة لحجم تمارين حقيقي.",
      trainerTitle: "التدريب والإشراف",
      trainerText:
        "تصحيح فوري للتكنيك الحركي، وبرامج تدريبية تتطور معك لتضمن استمرارك وسلامتك.",
    },
    schedule: {
      eyebrow: "الجدول الأسبوعي",
      title: "جدول الكلاسات والتمارين",
      description:
        "اختر اليوم المناسب، وتعرف على مواعيد الحصص، واحجز مكانك بضغطة زر.",
      minutes: "دقيقة",
      coachLabel: "مع كابتن",
      book: "احجز مكانك",
      empty: "لا توجد كلاسات مجدولة في هذا اليوم.",
    },
    coaches: {
      eyebrow: "طاقم التدريب",
      title: "نخبة من أفضل المدربين",
      description:
        "مدربون معتمدون دولياً لمتابعة أدائك الرياضي وتصحيح التكنيك خطوة بخطوة.",
    },
    pricing: {
      eyebrow: "باقات مرنة",
      title: "اختر باقتك المناسبة وابدأ هذا الأسبوع",
      description:
        "احجز باقتك المفضلة الآن، وسيتواصل معك فريقنا لتأكيد موعد جلستك الأولى وبدء اشتراكك.",
      popular: "الأكثر طلباً",
      book: "اختر هذه الباقة",
    },
    booking: {
      title: "تأكيد اشتراكك",
      packageLabel: "الباقة المختارة",
      nameLabel: "الاسم بالكامل",
      namePlaceholder: "اكتب اسمك ثلاثي",
      phoneLabel: "رقم الموبايل",
      phonePlaceholder: "01xxxxxxxxx",
      submit: "تأكيد الحجز",
      submitting: "جاري تأكيد الحجز...",
      close: "إغلاق",
      success: "تم استلام طلب حجزك بنجاح.",
      successTitle: "تم استلام طلبك بنجاح!",
      successDetails:
        "سيتواصل معك فريق الاستقبال قريباً لتأكيد موعد جلستك الأولى وتفاصيل اشتراكك.",
      whatsappFollowup: "المتابعة عبر واتساب",
      closeSuccess: "تم",
      missingConfig:
        "إعدادات Supabase غير مكتملة. يرجى مراجعة متغيرات البيئة.",
      required: "يرجى كتابة الاسم ورقم الموبايل.",
      invalidPhone: "يجب أن يبدأ رقم الموبايل بـ 01 ويتكون من 11 رقماً.",
      error: "حدث خطأ أثناء حفظ الحجز. يرجى المحاولة مرة أخرى.",
    },
    testimonials: {
      eyebrow: "تجارب مشتركينا",
      title: "قصص نجاح من صالتنا في المعادي",
      reviews: [
        {
          name: "منى عادل",
          role: "مشتركة • منذ 8 شهور",
          quote:
            "المدربون ساعدوني في تصحيح التكنيك من أول أسبوع، وأصبحت أتدرب بأمان وثقة عالية.",
        },
        {
          name: "كريم حسن",
          role: "باقة Performance",
          quote:
            "نظام الحجز سهل وسريع، والصالة نظيفة جداً، والمتابعة الشهرية أحدثت فارقاً كبيراً في نتائجي.",
        },
        {
          name: "نور سمير",
          role: "مشتركة باقة Elite",
          quote:
            "المكان منظم ومريح للغاية، وفريق التدريب متواجد دائماً لتقديم الدعم.",
        },
      ],
    },
    journey: {
      eyebrow: "ابدأ الآن",
      title: "أسبوعك الأول معنا سيغير الكثير",
      description:
        "احجز جلستك التجريبية المجانية، وتعرف على مدربينا، واحصل على توجيه بدني واضح يناسب أهدافك ومستواك الحالي.",
      points: [
        "جلسة تجريبية مجانية بإشراف مدرب متخصص",
        "تقييم سريع للكتلة العضلية والهدف الرياضي",
        "اقتراح الخطة التدريبية الأنسب لجدولك اليومي",
        "إرشادات عملية للتغذية الصحية والاستشفاء العضلي",
      ],
      primaryCta: "احجز جلستك التجريبية",
      secondaryCta: "تواصل عبر واتساب",
    },
    admin: {
      title: "لوحة الإدارة",
      subtitle: "متابعة طلبات المشتركين، الدفع النقدي، وحالات المتابعة من مكان واحد.",
      passwordTitle: "دخول الاستقبال",
      passwordDescription: "اكتب كلمة المرور لعرض جميع طلبات الحجز.",
      passwordLabel: "كلمة المرور",
      passwordPlaceholder: "اكتب كلمة المرور",
      unlock: "فتح لوحة التحكم",
      wrongPassword: "كلمة المرور غير صحيحة. جرب gym1234.",
      totalLeads: "إجمالي الطلبات",
      totalPaid: "تم الدفع",
      totalPending: "قيد المتابعة",
      leads: "قائمة الطلبات",
      refresh: "تحديث البيانات",
      refreshing: "جاري التحديث...",
      markPaid: "تحديد كمدفوع",
      markPending: "تحديد كقيد المتابعة",
      deleteLead: "حذف الطلب",
      deleteConfirm: "هل أنت متأكد من حذف هذا الطلب؟",
      rowActions: "الإجراءات",
      paid: "مدفوع",
      pending: "قيد المتابعة",
      empty: "لا توجد طلبات جديدة حالياً.",
      missingConfig:
        "متغيرات إدارة Supabase غير متوفرة. يرجى إضافة SUPABASE_SERVICE_ROLE_KEY.",
      loading: "جاري تحميل الطلبات...",
      fetchError: "تعذر تحميل الطلبات.",
      updateError: "تعذر تحديث هذا الطلب.",
      searchPlaceholder: "ابحث بالاسم، الموبايل، الباقة، أو الحالة",
      clearSearch: "مسح",
      filterAll: "الكل",
      noMatches: "لا توجد نتائج مطابقة للبحث أو الفلتر الحالي.",
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
      text: "تدريب احترافي، أجهزة رياضية متطورة، وباقات مرنة في قلب المعادي الجديدة.",
      ctaTitle: "ابدأ جلستك التجريبية هذا الأسبوع",
      ctaText: "تحدث مع فريقنا وحدد موعد تمرينتك الأولى خلال دقائق.",
      location: "الموقع",
      mapTitle: "موقعنا على الخريطة",
      mapHint: "18 طريق النصر، المعادي الجديدة، القاهرة",
      whatsapp: "واتساب",
      instagram: "إنستجرام",
      rights: "جميع الحقوق محفوظة.",
    },
  },
};

export const trialWhatsappLink = `https://wa.me/${gymInfo.whatsappNumber}?text=${encodeURIComponent(
  "Hi Iron Pulse Gym, I want to claim my Free Trial",
)}`;

export const classWhatsappLink = (className, day, time) =>
  `https://wa.me/${gymInfo.whatsappNumber}?text=${encodeURIComponent(
    `Hi Iron Pulse Gym, I want to book a spot in ${className} on ${day} at ${time}.`,
  )}`;

export const scheduleDays = [
  { id: "saturday", en: "Saturday", ar: "السبت" },
  { id: "sunday", en: "Sunday", ar: "الأحد" },
  { id: "monday", en: "Monday", ar: "الاثنين" },
  { id: "tuesday", en: "Tuesday", ar: "الثلاثاء" },
  { id: "wednesday", en: "Wednesday", ar: "الأربعاء" },
  { id: "thursday", en: "Thursday", ar: "الخميس" },
];

export const classSchedule = {
  saturday: [
    { name: "CrossFit", time: "07:00 AM", duration: 60, coach: { en: "Coach Ahmed", ar: "كابتن أحمد" } },
    { name: "HIIT", time: "06:00 PM", duration: 45, coach: { en: "Coach Sarah", ar: "كابتن سارة" } },
    { name: "Boxing", time: "08:00 PM", duration: 60, coach: { en: "Coach Tarek", ar: "كابتن طارق" } },
  ],
  sunday: [
    { name: "Strength", time: "08:00 AM", duration: 60, coach: { en: "Coach Ahmed", ar: "كابتن أحمد" } },
    { name: "Yoga", time: "05:00 PM", duration: 50, coach: { en: "Coach Sarah", ar: "كابتن سارة" } },
    { name: "CrossFit", time: "07:00 PM", duration: 60, coach: { en: "Coach Tarek", ar: "كابتن طارق" } },
  ],
  monday: [
    { name: "HIIT", time: "07:00 AM", duration: 45, coach: { en: "Coach Sarah", ar: "كابتن سارة" } },
    { name: "Strength", time: "06:00 PM", duration: 60, coach: { en: "Coach Ahmed", ar: "كابتن أحمد" } },
    { name: "Boxing", time: "09:00 PM", duration: 60, coach: { en: "Coach Tarek", ar: "كابتن طارق" } },
  ],
  tuesday: [
    { name: "CrossFit", time: "07:00 AM", duration: 60, coach: { en: "Coach Tarek", ar: "كابتن طارق" } },
    { name: "Yoga", time: "05:30 PM", duration: 50, coach: { en: "Coach Sarah", ar: "كابتن سارة" } },
    { name: "Strength", time: "07:30 PM", duration: 60, coach: { en: "Coach Ahmed", ar: "كابتن أحمد" } },
  ],
  wednesday: [
    { name: "Strength", time: "08:00 AM", duration: 60, coach: { en: "Coach Ahmed", ar: "كابتن أحمد" } },
    { name: "HIIT", time: "06:00 PM", duration: 45, coach: { en: "Coach Sarah", ar: "كابتن سارة" } },
    { name: "Boxing", time: "08:00 PM", duration: 60, coach: { en: "Coach Tarek", ar: "كابتن طارق" } },
  ],
  thursday: [
    { name: "CrossFit", time: "07:00 AM", duration: 60, coach: { en: "Coach Tarek", ar: "كابتن طارق" } },
    { name: "Strength", time: "06:00 PM", duration: 60, coach: { en: "Coach Ahmed", ar: "كابتن أحمد" } },
    { name: "Yoga", time: "08:00 PM", duration: 50, coach: { en: "Coach Sarah", ar: "كابتن سارة" } },
  ],
};

export const coaches = [
  {
    id: "ahmed",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
    en: {
      name: "Coach Ahmed",
      role: "Head Strength Coach",
      bio: "Builds heavy, safe strength programs that keep members progressing week after week.",
      badge: "ISSA Certified • 7+ Years Exp",
    },
    ar: {
      name: "كابتن أحمد",
      role: "مدرب القوة والأداء البدني",
      bio: "يصمم برامج تدريبية آمنة تركز على رفع الأوزان وتطوير الكتلة العضلية بشكل تدريجي ومستمر.",
      badge: "شهادة معتمدة ISSA • خبرة +7 سنوات",
    },
  },
  {
    id: "sarah",
    image:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
    en: {
      name: "Coach Sarah",
      role: "Functional & HIIT",
      bio: "Turns short, focused sessions into real fat loss and everyday conditioning.",
      badge: "NASM Certified • 5+ Years Exp",
    },
    ar: {
      name: "كابتن سارة",
      role: "مدربة اللياقة والتدريب الوظيفي (HIIT)",
      bio: "تحول الحصص التدريبية المركزة إلى نتائج حقيقية في حرق الدهون ورفع اللياقة والتحمل البدني.",
      badge: "شهادة معتمدة NASM • خبرة +5 سنوات",
    },
  },
  {
    id: "tarek",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
    en: {
      name: "Coach Tarek",
      role: "Boxing & Conditioning",
      bio: "Coaches technique-first boxing rounds that build speed, power, and stamina.",
      badge: "IBA Licensed • 9+ Years Exp",
    },
    ar: {
      name: "كابتن طارق",
      role: "مدرب الملاكمة واللياقة البدنية",
      bio: "يركز على إتقان حركات الملاكمة الأساسية لبناء السرعة والقوة البدنية والنفس الطويل.",
      badge: "رخصة معتمدة IBA • خبرة +9 سنوات",
    },
  },
];