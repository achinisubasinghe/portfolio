import { personal } from "@/data/personal";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
        <div className="flex flex-col items-center justify-between gap-5 py-8 md:flex-row md:py-10">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium tracking-[-0.01em] text-ice">
              {personal.shortName}
            </p>
            <p className="mt-0.5 text-xs text-muted">{personal.role}</p>
          </div>
          <p className="font-script text-xl text-ice/80">Made with coffee and care</p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
