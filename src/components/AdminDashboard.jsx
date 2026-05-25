"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { CheckCircle2, Loader2, LockKeyhole, RefreshCw, ShieldCheck } from "lucide-react";
import { useApp } from "../context/AppContext";

const ADMIN_PASSWORD = "gym1234";

export function AdminDashboard() {
  const { content, language } = useApp();
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [updatingId, setUpdatingId] = useState("");

  const metrics = useMemo(() => {
    const paid = leads.filter((lead) => lead.status === "Paid Cash").length;

    return {
      total: leads.length,
      paid,
      pending: leads.length - paid,
    };
  }, [leads]);

  const formatDate = useCallback(
    (value) =>
      new Intl.DateTimeFormat(language === "ar" ? "ar-EG" : "en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date(value)),
    [language],
  );

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/leads", {
        headers: {
          "x-admin-password": password,
        },
        cache: "no-store",
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setMessage(result.error || content.admin.fetchError);
        return;
      }

      setLeads(result.leads ?? []);
    } catch {
      setMessage(content.admin.fetchError);
    } finally {
      setLoading(false);
    }
  }, [password, content.admin.fetchError]);

  useEffect(() => {
    const savedPassword = window.sessionStorage.getItem("gym-admin-password");

    if (savedPassword === ADMIN_PASSWORD) {
      setPassword(savedPassword);
      setIsUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (isUnlocked && password) {
      fetchLeads();
    }
  }, [fetchLeads, isUnlocked, password]);

  function handleLogin(event) {
    event.preventDefault();

    if (password.trim() !== ADMIN_PASSWORD) {
      setMessage(content.admin.wrongPassword);
      return;
    }

    window.sessionStorage.setItem("gym-admin-password", ADMIN_PASSWORD);
    setMessage("");
    setIsUnlocked(true);
  }

  async function markPaid(id) {
    setUpdatingId(id);
    setMessage("");

    try {
      const response = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
        body: JSON.stringify({ id }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setMessage(result.error || content.admin.updateError);
        return;
      }

      setLeads((current) => current.map((lead) => (lead.id === id ? result.lead : lead)));
    } catch {
      setMessage(content.admin.updateError);
    } finally {
      setUpdatingId("");
    }
  }

  if (!isUnlocked) {
    return (
      <main className="min-h-screen bg-[#f6f3ed] px-4 pt-28 dark:bg-[#11100e] sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-700 dark:text-orange-300">
              {content.admin.title}
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-[#171412] dark:text-white sm:text-5xl">
              {content.admin.passwordTitle}
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#5b514a] dark:text-stone-300">
              {content.admin.passwordDescription}
            </p>
          </div>

          <form
            onSubmit={handleLogin}
            className="rounded-lg border border-black/10 bg-white p-6 shadow-premium dark:border-white/10 dark:bg-white/[0.06] sm:p-8"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300">
              <LockKeyhole className="h-6 w-6" aria-hidden="true" />
            </span>
            <label className="mt-6 block">
              <span className="text-sm font-black text-[#171412] dark:text-white">{content.admin.passwordLabel}</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder={content.admin.passwordPlaceholder}
                className="mt-2 w-full rounded-lg border border-black/10 bg-[#f6f3ed] px-4 py-3 text-[#171412] outline-none transition focus:border-orange-500 dark:border-white/10 dark:bg-black/20 dark:text-white"
              />
            </label>
            {message ? <p className="mt-4 text-sm font-bold text-red-700 dark:text-red-300">{message}</p> : null}
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 px-5 py-4 text-base font-black text-white transition hover:bg-orange-500"
            >
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              {content.admin.unlock}
            </button>
          </form>
        </section>
      </main>
    );
  }

  const metricCards = [
    { label: content.admin.totalLeads, value: metrics.total, className: "bg-[#171412] text-white dark:bg-white dark:text-[#171412]" },
    { label: content.admin.totalPaid, value: metrics.paid, className: "bg-emerald-600 text-white" },
    { label: content.admin.totalPending, value: metrics.pending, className: "bg-orange-600 text-white" },
  ];

  return (
    <main className="min-h-screen bg-[#f6f3ed] px-4 pb-16 pt-28 dark:bg-[#11100e] sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-700 dark:text-orange-300">
              {content.admin.title}
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-[#171412] dark:text-white sm:text-5xl">
              {content.admin.leads}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#5b514a] dark:text-stone-300">
              {content.admin.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={fetchLeads}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-5 py-3 text-sm font-black text-[#171412] transition hover:border-orange-500 hover:text-orange-700 disabled:opacity-70 dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} aria-hidden="true" />
            {content.admin.refresh}
          </button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {metricCards.map((metric) => (
            <div key={metric.label} className={`rounded-lg p-5 shadow-sm ${metric.className}`}>
              <p className="text-sm font-black uppercase tracking-[0.14em] opacity-80">{metric.label}</p>
              <p className="mt-3 text-4xl font-black">{metric.value}</p>
            </div>
          ))}
        </div>

        {message ? (
          <p className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm font-bold text-red-800 dark:text-red-200">
            {message}
          </p>
        ) : null}

        <div className="mt-8 overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-black/10 text-sm dark:divide-white/10">
              <thead className="bg-[#ebe4d8] text-[#5b514a] dark:bg-black/20 dark:text-stone-300">
                <tr>
                  <th className="px-5 py-4 text-start font-black">{content.admin.columns.name}</th>
                  <th className="px-5 py-4 text-start font-black">{content.admin.columns.phone}</th>
                  <th className="px-5 py-4 text-start font-black">{content.admin.columns.package}</th>
                  <th className="px-5 py-4 text-start font-black">{content.admin.columns.date}</th>
                  <th className="px-5 py-4 text-start font-black">{content.admin.columns.status}</th>
                  <th className="px-5 py-4 text-start font-black">{content.admin.columns.action}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 dark:divide-white/10">
                {loading ? (
                  <tr>
                    <td colSpan="6" className="px-5 py-12 text-center font-bold text-[#5b514a] dark:text-stone-300">
                      <Loader2 className="mx-auto mb-3 h-6 w-6 animate-spin text-orange-600" aria-hidden="true" />
                      {content.admin.loading}
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-5 py-12 text-center font-bold text-[#5b514a] dark:text-stone-300">
                      {content.admin.empty}
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="text-[#332d28] dark:text-stone-200">
                      <td className="whitespace-nowrap px-5 py-4 font-black text-[#171412] dark:text-white">{lead.name}</td>
                      <td className="whitespace-nowrap px-5 py-4">{lead.phone}</td>
                      <td className="whitespace-nowrap px-5 py-4">{lead.package_type}</td>
                      <td className="whitespace-nowrap px-5 py-4">{formatDate(lead.created_at)}</td>
                      <td className="whitespace-nowrap px-5 py-4">
                        <span
                          className={`inline-flex rounded-lg px-3 py-1 text-xs font-black ${
                            lead.status === "Paid Cash"
                              ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                              : "bg-orange-500/15 text-orange-700 dark:text-orange-300"
                          }`}
                        >
                          {lead.status === "Paid Cash" ? content.admin.paid : content.admin.pending}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-5 py-4">
                        {lead.status === "Pending" ? (
                          <button
                            type="button"
                            onClick={() => markPaid(lead.id)}
                            disabled={updatingId === lead.id}
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-black text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-70"
                          >
                            {updatingId === lead.id ? (
                              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                            ) : (
                              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                            )}
                            {content.admin.markPaid}
                          </button>
                        ) : (
                          <span className="inline-flex items-center gap-2 text-xs font-black text-emerald-700 dark:text-emerald-300">
                            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                            {content.admin.paid}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
