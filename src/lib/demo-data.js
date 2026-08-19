// Seeded data for the /admin/demo showcase. No Supabase, no real customers.

export const demoMetrics = [
  { id: "trials", value: "4", label: "Today's Trial Bookings", delta: "+2 vs yesterday", trend: "up" },
  { id: "members", value: "182", label: "Active Members", delta: "+14 this month", trend: "up" },
  { id: "pipeline", value: "EGP 42,000", label: "WhatsApp Leads Pipeline", delta: "9 open leads", trend: "flat" },
];

export const demoLeads = [
  { id: 1, name: "Mostafa Kamal", phone: "01001234567", plan: "Performance - 3 Months", goal: "Muscle Gain", value: "EGP 2,250", status: "New", time: "12 min ago" },
  { id: 2, name: "Salma Fouad", phone: "01115557788", plan: "Free Trial Session", goal: "Fat Loss", value: "EGP 0", status: "New", time: "38 min ago" },
  { id: 3, name: "Youssef Adel", phone: "01223344556", plan: "Elite - 1 Year", goal: "General Fitness", value: "EGP 7,900", status: "Contacted", time: "2 hours ago" },
  { id: 4, name: "Habiba Nasser", phone: "01099887766", plan: "Boxing", goal: "Boxing / HIIT", value: "EGP 900", status: "Contacted", time: "4 hours ago" },
  { id: 5, name: "Omar Sherif", phone: "01277665544", plan: "Performance - 3 Months", goal: "Muscle Gain", value: "EGP 2,250", status: "Converted", time: "Yesterday" },
  { id: 6, name: "Nadia Ibrahim", phone: "01066554433", plan: "Starter - 1 Month", goal: "Fat Loss", value: "EGP 900", status: "Converted", time: "Yesterday" },
];

export const demoClasses = [
  { id: "crossfit-sat", name: "CrossFit", day: "Sat", time: "07:00 AM", coach: "Coach Ahmed", booked: 8, capacity: 10 },
  { id: "hiit-sat", name: "HIIT", day: "Sat", time: "06:00 PM", coach: "Coach Sarah", booked: 12, capacity: 12 },
  { id: "boxing-sat", name: "Boxing", day: "Sat", time: "08:00 PM", coach: "Coach Tarek", booked: 5, capacity: 14 },
  { id: "strength-sun", name: "Strength", day: "Sun", time: "08:00 AM", coach: "Coach Ahmed", booked: 6, capacity: 10 },
  { id: "yoga-sun", name: "Yoga", day: "Sun", time: "05:00 PM", coach: "Coach Sarah", booked: 9, capacity: 16 },
];

export const LEAD_STATUSES = ["New", "Contacted", "Converted"];
