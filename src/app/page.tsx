import Image from "next/image";
import Link from "next/link";
import { personal } from "@/data/personal";
import SpecularButton from "@/components/bits/SpecularButton";

export default function Home() {
  return (
    <div className="grid min-h-[calc(100dvh-13rem)] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
      <div className="order-2 flex flex-col items-start gap-6 lg:order-1 lg:col-span-7">
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-balance text-ice sm:text-5xl lg:text-[3.5rem]">
            {personal.name}
          </h1>
          <p className="text-lg font-medium tracking-[-0.01em] text-accent sm:text-xl">
            {personal.role}
          </p>
        </div>

        <p className="max-w-[56ch] text-[15px] leading-[1.75] text-pretty text-ice/80 sm:text-base">
          {personal.intro}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <SpecularButton
            href={personal.cvUrl}
            size="md"
            radius={12}
            tint="#6ec6d9"
            tintOpacity={0.16}
            blur={14}
            textColor="#eef3f8"
            lineColor="#d9f4fa"
            baseColor="#5b9eae"
            autoAnimate
            intensity={1.05}
            className="min-w-[168px] border border-accent/35 text-sm"
          >
            Download CV
          </SpecularButton>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/14 bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-ice transition-all duration-200 hover:border-accent/40 hover:bg-white/[0.09] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span>View projects</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
        <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[390px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-4 top-8 bottom-4 -z-10 rounded-full bg-[radial-gradient(circle,rgba(110,198,217,0.2)_0%,rgba(8,11,16,0)_70%)] blur-2xl"
          />
          <div className="glass overflow-hidden rounded-2xl p-2">
            <div className="overflow-hidden rounded-xl bg-[#0b1018]">
              <Image
                src="/images/achini.jpg"
                alt={personal.shortName}
                width={747}
                height={1024}
                priority
                className="h-auto w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
