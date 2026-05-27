"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  LockKeyhole,
  MoreVertical,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
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
  const [openMenuId, setOpenMenuId] = useState(null);

  const metrics = useMemo(() => {
    const paid = leads.filter((lead) => lead.status === "Paid Cash").length;

    return {
      total: leads.length,
      paid,
      pending: leads.length - paid,
    };
  }, [leads]);

  const formatDate = useCallback(
    (value) => {
      if (!value) return "-";

      return new Intl.DateTimeFormat(language === "ar" ? "ar-EG" : "en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date(value));
    },
    [language],
  );

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/leads", {
        method: "GET",
        headers: {
          "x-admin-password": ADMIN_PASSWORD,
        },
        cache: "no-store",
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        console.error("Fetch leads error:", result);
        setMessage(result.error || content.admin.fetchError);
        return;
      }

      setLeads(result.leads ?? []);
    } catch (error) {
      console.error("Fetch leads failed:", error);
      setMessage(error?.message || content.admin.fetchError);
    } finally {
      setLoading(false);
    }
  }, [content.admin.fetchError]);

  useEffect(() => {
    const savedPassword = window.sessionStorage.getItem("gym-admin-password");

    if (savedPassword === ADMIN_PASSWORD) {
      setPassword(savedPassword);
      setIsUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (isUnlocked) {
      fetchLeads();
    }
  }, [fetchLeads, isUnlocked]);

  useEffect(() => {
    if (openMenuId === null) {
      return undefined;
    }

    const closeMenuOnOutsideClick = (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      if (!event.target.closest("[data-lead-action-menu]")) {
        setOpenMenuId(null);
      }
    };

    const closeMenuOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("pointerdown", closeMenuOnOutsideClick);
    document.addEventListener("keydown", closeMenuOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeMenuOnOutsideClick);
      document.removeEventListener("keydown", closeMenuOnEscape);
    };
  }, [openMenuId]);

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

  async function updateLeadStatus(id, status) {
    setUpdatingId(id);
    setMessage("");
    setOpenMenuId(null);

    try {
      const response = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": ADMIN_PASSWORD,
        },
        body: JSON.stringify({ id, status }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        console.error("Update lead error:", result);
        setMessage(result.error || content.admin.updateError);
        return;
      }

      setLeads((current) =>
        current.map((lead) => (lead.id === id ? result.lead : lead)),
      );
    } catch (error) {
      console.error("Update lead failed:", error);
      setMessage(error?.message || content.admin.updateError);
    } finally {
      setUpdatingId("");
    }
  }

  async function deleteLead(id) {
    if (!window.confirm(content.admin.deleteConfirm)) {
      return;
    }

    setUpdatingId(id);
    setMessage("");
    setOpenMenuId(null);

    try {
      const response = await fetch("/api/admin/leads", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": ADMIN_PASSWORD,
        },
        body: JSON.stringify({ id }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        console.error("Delete lead error:", result);
        setMessage(result.error || content.admin.updateError);
        return;
      }

      setLeads((current) => current.filter((lead) => lead.id !== id));
    } catch (error) {
      console.error("Delete lead failed:", error);
      setMessage(error?.message || content.admin.updateError);
    } finally {
      setUpdatingId("");
    }
  }

  if (!isUnlocked) {
    return (
      <main className="fitness-surface min-h-screen px-4 py-16 sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className={`${isArabic ? "text-right lg:order-2" : "text-left"}`}>
            <p className="text-sm font-black uppercase text-fitness-orange">
              {content.admin.title}
            </p>

            <h1 className="mt-5 text-4xl font-black uppercase leading-[0.95] text-fitness-text sm:text-5xl">
              {content.admin.passwordTitle}
            </h1>

            <p className="mt-6 text-lg font-medium leading-8 text-fitness-muted">
              {content.admin.passwordDescription}
            </p>
          </div>

          <form
            onSubmit={handleLogin}
            className={`premium-card rounded-lg p-6 shadow-premium sm:p-8 ${
              isArabic ? "lg:order-1" : ""
            }`}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-fitness-orange/15 text-fitness-orange ring-1 ring-fitness-orange/35">
              <LockKeyhole className="h-6 w-6" aria-hidden="true" />
            </span>

            <label className="mt-6 block">
              <span
                className={`block text-sm font-black uppercase text-fitness-text ${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
                {content.admin.passwordLabel}
              </span>

              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder={content.admin.passwordPlaceholder}
                className={`mt-2 w-full rounded-lg border border-fitness-border bg-fitness-input px-4 py-4 text-fitness-text outline-none transition placeholder:text-fitness-subtle focus:border-fitness-orange ${
                  isArabic ? "text-right" : "text-left"
                }`}
              />
            </label>

            {message ? (
              <p
                className={`mt-4 text-sm font-bold text-red-300 ${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
                {message}
              </p>
            ) : null}

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
    {
      label: content.admin.totalLeads,
      value: metrics.total,
      className: "border-fitness-border bg-fitness-card text-fitness-text",
    },
    {
      label: content.admin.totalPaid,
      value: metrics.paid,
      className: "border-emerald-500/35 bg-emerald-500/10 text-fitness-text",
    },
    {
      label: content.admin.totalPending,
      value: metrics.pending,
      className:
        "border-fitness-orange/45 bg-fitness-orange/10 text-fitness-text",
    },
  ];

  return (
    <main className="fitness-surface min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className={isArabic ? "text-right" : "text-left"}>
            <p className="text-sm font-black uppercase text-fitness-orange">
              {content.admin.title}
            </p>

            <h1 className="mt-5 text-4xl font-black uppercase leading-[0.95] text-fitness-text sm:text-5xl">
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
            <RefreshCw
              className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
              aria-hidden="true"
            />
            {loading ? content.admin.refreshing : content.admin.refresh}
          </button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {loading && leads.length === 0
            ? Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={`metric-skeleton-${index}`}
                  className="rounded-lg border border-fitness-border bg-fitness-card p-6 text-left shadow-premium"
                >
                  <div className="h-3 w-32 animate-pulse rounded bg-fitness-soft" />
                  <div className="mt-4 h-10 w-20 animate-pulse rounded bg-fitness-soft" />
                </div>
              ))
            : metricCards.map((metric) => (
                <div
                  key={metric.label}
                  className={`rounded-lg border p-6 text-left shadow-premium ${metric.className}`}
                >
                  <p className="text-sm font-black uppercase text-fitness-muted">
                    {metric.label}
                  </p>

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
                  <th className="px-5 py-4 text-start font-black">
                    {content.admin.columns.name}
                  </th>
                  <th className="px-5 py-4 text-start font-black">
                    {content.admin.columns.phone}
                  </th>
                  <th className="px-5 py-4 text-start font-black">
                    {content.admin.columns.package}
                  </th>
                  <th className="px-5 py-4 text-start font-black">
                    {content.admin.columns.date}
                  </th>
                  <th className="px-5 py-4 text-start font-black">
                    {content.admin.columns.status}
                  </th>
                  <th className="px-5 py-4 text-start font-black">
                    {content.admin.columns.action}
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-fitness-border">
                {loading && leads.length === 0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-5 py-6"
                    >
                      <div className="space-y-3">
                        {Array.from({ length: 5 }).map((_, rowIndex) => (
                          <div
                            key={`row-skeleton-${rowIndex}`}
                            className="grid grid-cols-6 gap-3"
                          >
                            <div className="h-9 animate-pulse rounded bg-fitness-soft" />
                            <div className="h-9 animate-pulse rounded bg-fitness-soft" />
                            <div className="h-9 animate-pulse rounded bg-fitness-soft" />
                            <div className="h-9 animate-pulse rounded bg-fitness-soft" />
                            <div className="h-9 animate-pulse rounded bg-fitness-soft" />
                            <div className="h-9 animate-pulse rounded bg-fitness-soft" />
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-5 py-12 text-center font-bold text-fitness-muted"
                    >
                      {content.admin.empty}
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="text-fitness-muted transition hover:bg-fitness-soft"
                    >
                      <td className="whitespace-nowrap px-5 py-4 font-black text-fitness-text">
                        {lead.name}
                      </td>

                      <td className="whitespace-nowrap px-5 py-4">
                        {lead.phone}
                      </td>

                      <td className="whitespace-nowrap px-5 py-4">
                        {lead.package_type}
                      </td>

                      <td className="whitespace-nowrap px-5 py-4">
                        {formatDate(lead.created_at)}
                      </td>

                      <td className="whitespace-nowrap px-5 py-4">
                        <span
                          className={`inline-flex rounded-lg px-3 py-1 text-xs font-black ${
                            lead.status === "Paid Cash"
                              ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                              : "bg-fitness-orange/15 text-fitness-orange"
                          }`}
                        >
                          {lead.status === "Paid Cash"
                            ? content.admin.paid
                            : content.admin.pending}
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-5 py-4">
                        <div
                          data-lead-action-menu
                          className="relative inline-flex"
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setOpenMenuId((current) =>
                                current === lead.id ? null : lead.id,
                              )
                            }
                            className="icon-button h-9 w-9 p-0"
                            aria-label={content.admin.rowActions}
                          >
                            <MoreVertical className="h-4 w-4" aria-hidden="true" />
                          </button>

                          {openMenuId === lead.id ? (
                            <div className="absolute right-0 top-11 z-20 min-w-[11rem] overflow-hidden rounded-lg border border-fitness-border bg-fitness-card shadow-premium">
                              {lead.status === "Pending" ? (
                                <button
                                  type="button"
                                  onClick={() => updateLeadStatus(lead.id, "Paid Cash")}
                                  disabled={updatingId === lead.id}
                                  className="flex w-full items-center px-4 py-2.5 text-left text-xs font-black uppercase text-emerald-400 transition hover:bg-fitness-soft disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                  {content.admin.markPaid}
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => updateLeadStatus(lead.id, "Pending")}
                                  disabled={updatingId === lead.id}
                                  className="flex w-full items-center px-4 py-2.5 text-left text-xs font-black uppercase text-fitness-orange transition hover:bg-fitness-soft disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                  {content.admin.markPending}
                                </button>
                              )}
                              <button
                                type="button"
                                onClick={() => deleteLead(lead.id)}
                                disabled={updatingId === lead.id}
                                className="flex w-full items-center border-t border-fitness-border px-4 py-2.5 text-left text-xs font-black uppercase text-red-400 transition hover:bg-fitness-soft disabled:cursor-not-allowed disabled:opacity-70"
                              >
                                {content.admin.deleteLead}
                              </button>
                            </div>
                          ) : null}
                        </div>
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
