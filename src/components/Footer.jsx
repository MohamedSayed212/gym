import { Dumbbell, Mail, MapPin, Phone } from "lucide-react";
import { gymInfo } from "../lib/site-content";

export function Footer({ content }) {
  return (
    <footer className="border-t border-black/10 bg-[#171412] py-10 text-white dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600 text-white">
              <Dumbbell className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-lg font-black uppercase tracking-[0.12em]">{gymInfo.name}</p>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-stone-300">{content.footer.text}</p>
        </div>

        <div className="grid gap-3 text-sm font-semibold text-stone-200 sm:grid-cols-3 lg:min-w-[560px]">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-orange-300" aria-hidden="true" />
            {gymInfo.address}
          </span>
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-orange-300" aria-hidden="true" />
            {gymInfo.phone}
          </span>
          <span className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-orange-300" aria-hidden="true" />
            {gymInfo.email}
          </span>
        </div>
      </div>
    </footer>
  );
}
