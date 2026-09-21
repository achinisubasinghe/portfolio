import { personal } from "@/data/personal";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto max-w-[1120px] px-4 md:px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
        <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row md:py-10">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium tracking-wide text-ice">{personal.name}</p>
            <p className="mt-1 text-sm text-muted">{personal.role}</p>
          </div>
          <p className="font-display text-xl text-ice/90 md:text-2xl">
            made lots of coffee and love
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
