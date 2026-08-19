"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  MessageCircle,
  Minus,
  Sparkles,
  Users,
} from "lucide-react";
import { LEAD_STATUSES, demoClasses, demoLeads, demoMetrics } from "../lib/demo-data";
import { gymInfo } from "../lib/site-content";

const STATUS_STYLES = {
  New: "badge-new",
  Contacted: "badge-contacted",
  Converted: "badge-converted",
};

export function AdminDemoDashboard() {
  const [leads, setLeads] = useState(demoLeads);
  const [filter, setFilter] = useState("All");

  const visibleLeads =
    filter === "All" ? leads : leads.filter((lead) => lead.status === filter);

  // Cycles New -> Contacted -> Converted so the pipeline feels alive in a demo.
  function advanceStatus(id) {
    setLeads((current) =>
      current.map((lead) => {
        if (lead.id !== id) return lead;

        const next = LEAD_STATUSES[(LEAD_STATUSES.indexOf(lead.status) + 1) % LEAD_STATUSES.length];
        return { ...lead, status: next };
      }),
    );
  }

  function whatsappReply(lead) {
    const message = `Hi ${lead.name}, this is ${gymInfo.name}. Following up on your ${lead.plan} booking - when would you like to come in?`;
    return `https://wa.me/2${lead.phone}?text=${encodeURIComponent(message)}`;
  }

  return (
    <main className="min-h-screen bg-fitness-black px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Demo notice */}
        <div className="mb-8 flex flex-wrap items-center gap-3 rounded-xl border border-fitness-orange/30 bg-fitness-orange/10 px-5 py-4">
          <Sparkles className="h-4 w-4 shrink-0 text-fitness-orange" aria-hidden="true" />
          <p className="text-sm font-semibold text-fitness-text">
            Demo Mode - sample data only. Your live dashboard connects to real bookings.
          </p>
        </div>

        <header className="mb-10">
          <p className="section-kicker">Gym Owner Dashboard</p>
          <h1 className="editorial-title mt-3">{gymInfo.name} CRM</h1>
        </header>

        {/* Metric cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {demoMetrics.map((metric) => (
            <article key={metric.id} className="plan-card rounded-2xl p-6">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-fitness-subtle">
                {metric.label}
              </p>
              <p className="mt-4 text-[2.25rem] font-extrabold leading-none tracking-tight text-fitness-text">
                {metric.value}
              </p>
              <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-fitness-orange">
                {metric.trend === "up" ? (
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                ) : (
                  <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                {metric.delta}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Leads pipeline */}
          <section className="plan-card rounded-2xl p-6">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-lg font-extrabold uppercase tracking-tight text-fitness-text">
                Leads Pipeline
              </h2>
              <div className="ms-auto flex flex-wrap gap-1.5">
                {["All", ...LEAD_STATUSES].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFilter(option)}
                    className={`rounded-md px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] transition ${
                      filter === option
                        ? "bg-fitness-orange text-white"
                        : "border border-fitness-border text-fitness-muted hover:text-fitness-text"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[640px] text-start text-sm">
                <thead>
                  <tr className="border-b border-fitness-border text-[0.68rem] uppercase tracking-[0.14em] text-fitness-subtle">
                    <th className="pb-3 text-start font-bold">Member</th>
                    <th className="pb-3 text-start font-bold">Plan</th>
                    <th className="pb-3 text-start font-bold">Value</th>
                    <th className="pb-3 text-start font-bold">Status</th>
                    <th className="pb-3 text-end font-bold">Reply</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-fitness-border">
                  {visibleLeads.map((lead) => (
                    <tr key={lead.id} className="transition hover:bg-fitness-soft">
                      <td className="py-4">
                        <p className="font-bold text-fitness-text">{lead.name}</p>
                        <p className="mt-0.5 text-xs text-fitness-subtle" dir="ltr">
                          {lead.phone} · {lead.time}
                        </p>
                      </td>
                      <td className="py-4">
                        <p className="text-fitness-text">{lead.plan}</p>
                        <p className="mt-0.5 text-xs text-fitness-subtle">{lead.goal}</p>
                      </td>
                      <td className="py-4 font-bold text-fitness-text">{lead.value}</td>
                      <td className="py-4">
                        <button
                          type="button"
                          onClick={() => advanceStatus(lead.id)}
                          title="Click to advance status"
                          className={`status-badge ${STATUS_STYLES[lead.status]}`}
                        >
                          {lead.status}
                        </button>
                      </td>
                      <td className="py-4 text-end">
                        <a
                          href={whatsappReply(lead)}
                          target="_blank"
                          rel="noreferrer"
                          className="button-whatsapp inline-flex min-h-[36px] rounded-md px-3 text-[0.7rem] font-bold uppercase tracking-[0.08em]"
                        >
                          <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                          WhatsApp
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {visibleLeads.length === 0 && (
                <p className="py-10 text-center text-sm text-fitness-muted">
                  No leads with this status.
                </p>
              )}
            </div>
          </section>

          {/* Class capacity */}
          <section className="plan-card rounded-2xl p-6">
            <h2 className="flex items-center gap-2 text-lg font-extrabold uppercase tracking-tight text-fitness-text">
              <Users className="h-4 w-4 text-fitness-orange" aria-hidden="true" />
              Class Capacity
            </h2>

            <div className="mt-6 space-y-5">
              {demoClasses.map((item) => {
                const percent = Math.round((item.booked / item.capacity) * 100);
                const isFull = item.booked >= item.capacity;

                return (
                  <div key={item.id}>
                    <div className="flex items-baseline gap-3">
                      <p className="text-sm font-bold text-fitness-text">
                        {item.name} <span className="text-fitness-subtle">· {item.day} {item.time}</span>
                      </p>
                      <span
                        className={`ms-auto text-xs font-bold ${isFull ? "text-red-400" : "text-fitness-orange"}`}
                      >
                        {item.booked}/{item.capacity}
                      </span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-fitness-soft">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${isFull ? "bg-red-500" : "bg-fitness-orange"}`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-fitness-subtle">
                      {isFull ? "Fully booked - waitlist open" : `${item.capacity - item.booked} spots left · ${item.coach}`}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
