import { AdminDashboard } from "../../components/AdminDashboard";
import { Header } from "../../components/Header";

export const metadata = {
  title: "Admin Dashboard | Iron Pulse Gym",
};

export default function AdminPage() {
  return (
    <>
      <Header />
      <AdminDashboard />
    </>
  );
}
