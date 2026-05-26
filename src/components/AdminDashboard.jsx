"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { CheckCircle2, Loader2, LockKeyhole, RefreshCw, ShieldCheck } from "lucide-react";
import { useApp } from "../context/AppContext";

const ADMIN_PASSWORD = "gym1234";

export function AdminDashboard() {
  const { content, language } = useApp();
  const isArabic = language === "ar";
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
      <main className="fitness-surface min-h-screen px-4 py-16 sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className={`text-left ${isArabic ? "lg:order-2" : ""}`}>
            <p className="text-sm font-black uppercase text-fitness-orange">
              {content.admin.title}
            </p>
            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.95] text-fitness-text sm:text-6xl">
              {content.admin.passwordTitle}
            </h1>
            <p className="mt-6 text-lg font-medium leading-8 text-fitness-muted">
              {content.admin.passwordDescription}
            </p>
          </div>

          <form
            onSubmit={handleLogin}
            className={`premium-card rounded-lg p-6 shadow-premium sm:p-8 ${isArabic ? "lg:order-1" : ""}`}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-fitness-orange/15 text-fitness-orange ring-1 ring-fitness-orange/35">
              <LockKeyhole className="h-6 w-6" aria-hidden="true" />
            </span>
            <label className="mt-6 block">
              <span className="block text-left text-sm font-black uppercase text-fitness-text">{content.admin.passwordLabel}</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder={content.admin.passwordPlaceholder}
                className="mt-2 w-full rounded-lg border border-fitness-border bg-fitness-input px-4 py-4 text-left text-fitness-text outline-none transition placeholder:text-fitness-subtle focus:border-fitness-orange"
              />
            </label>
            {message ? <p className="mt-4 text-left text-sm font-bold text-red-300">{message}</p> : null}
            <button
              type="submit"
              className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg bg-fitness-orange px-5 py-4 text-base font-black uppercase text-white shadow-orange-glow transition hover:-translate-y-0.5 hover:bg-fitness-orange-hover"
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
    { label: content.admin.totalLeads, value: metrics.total, className: "border-fitness-border bg-fitness-card text-fitness-text" },
    { label: content.admin.totalPaid, value: metrics.paid, className: "border-emerald-500/35 bg-emerald-500/10 text-fitness-text" },
    { label: content.admin.totalPending, value: metrics.pending, className: "border-fitness-orange/45 bg-fitness-orange/10 text-fitness-text" },
  ];

  return (
    <main className="fitness-surface min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="text-left">
            <p className="text-sm font-black uppercase text-fitness-orange">
              {content.admin.title}
            </p>
            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.95] text-fitness-text sm:text-6xl">
              {content.admin.leads}
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-fitness-muted">
              {content.admin.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={fetchLeads}
            disabled={loading}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-fitness-border bg-fitness-card px-5 py-3 text-sm font-black uppercase text-fitness-text transition hover:border-fitness-orange hover:bg-fitness-orange/10 disabled:opacity-70"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} aria-hidden="true" />
            {content.admin.refresh}
          </button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {metricCards.map((metric) => (
            <div key={metric.label} className={`rounded-lg border p-6 text-left shadow-premium ${metric.className}`}>
              <p className="text-sm font-black uppercase text-fitness-muted">{metric.label}</p>
              <p className="mt-4 text-5xl font-black">{metric.value}</p>
            </div>
          ))}
        </div>

        {message ? (
          <p className="mt-6 rounded-lg border border-red-500/35 bg-red-500/10 p-4 text-left text-sm font-bold text-red-700 dark:text-red-200">
            {message}
          </p>
        ) : null}

        <div className="premium-card mt-8 overflow-hidden rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-fitness-border text-sm">
              <thead className="bg-fitness-soft text-fitness-muted">
                <tr>
                  <th className="px-5 py-4 text-start font-black">{content.admin.columns.name}</th>
                  <th className="px-5 py-4 text-start font-black">{content.admin.columns.phone}</th>
                  <th className="px-5 py-4 text-start font-black">{content.admin.columns.package}</th>
                  <th className="px-5 py-4 text-start font-black">{content.admin.columns.date}</th>
                  <th className="px-5 py-4 text-start font-black">{content.admin.columns.status}</th>
                  <th className="px-5 py-4 text-start font-black">{content.admin.columns.action}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-fitness-border">
                {loading ? (
                  <tr>
                    <td colSpan="6" className="px-5 py-12 text-center font-bold text-fitness-muted">
                      <Loader2 className="mx-auto mb-3 h-6 w-6 animate-spin text-fitness-orange" aria-hidden="true" />
                      {content.admin.loading}
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-5 py-12 text-center font-bold text-fitness-muted">
                      {content.admin.empty}
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="text-fitness-muted transition hover:bg-fitness-soft">
                      <td className="whitespace-nowrap px-5 py-4 font-black text-fitness-text">{lead.name}</td>
                      <td className="whitespace-nowrap px-5 py-4">{lead.phone}</td>
                      <td className="whitespace-nowrap px-5 py-4">{lead.package_type}</td>
                      <td className="whitespace-nowrap px-5 py-4">{formatDate(lead.created_at)}</td>
                      <td className="whitespace-nowrap px-5 py-4">
                        <span
                          className={`inline-flex rounded-lg px-3 py-1 text-xs font-black ${
                            lead.status === "Paid Cash"
                              ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                              : "bg-fitness-orange/15 text-fitness-orange"
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
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-xs font-black uppercase text-white transition hover:-translate-y-0.5 hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-70"
                          >
                            {updatingId === lead.id ? (
                              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                            ) : (
                              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                            )}
                            {content.admin.markPaid}
                          </button>
                        ) : (
                          <span className="inline-flex items-center gap-2 text-xs font-black uppercase text-emerald-700 dark:text-emerald-300">
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
