import { AdminDemoDashboard } from "../../../components/AdminDemoDashboard";
import { Header } from "../../../components/Header";

export const metadata = {
  title: "Gym Owner Dashboard Demo | Iron Pulse Gym",
  description: "Interactive demo of the gym CRM: leads pipeline, capacity and WhatsApp replies.",
};

export default function AdminDemoPage() {
  return (
    <>
      <Header />
      <AdminDemoDashboard />
    </>
  );
}
