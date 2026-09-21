import Image from "next/image";
import { personal } from "@/data/personal";
import { Section } from "@/components/Section";
import SpecularButton from "@/components/bits/SpecularButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-14">
      <div className="flex w-full justify-center md:w-2/5">
        <div className="overflow-hidden rounded-3xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.45),0_0_0_1px_rgba(94,231,255,0.12)]">
          <Image
            src="/images/achini.jpeg"
            alt={personal.name}
            width={425}
            height={588}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-5 md:w-3/5">
        <h1 className="font-display text-4xl leading-[1.15] text-balance text-ice md:text-5xl lg:text-6xl">
          {personal.name}
        </h1>
        <p className="text-lg text-muted md:text-xl">{personal.role}</p>
        <Section>
          <p className="max-w-prose text-base leading-relaxed text-ice/90 md:text-lg">
            {personal.intro}
          </p>
        </Section>
        <div>
          <SpecularButton
            href={personal.cvPath}
            download="Achini-CV.pdf"
            size="lg"
            radius={999}
            tint="#5ee7ff"
            tintOpacity={0.16}
            blur={16}
            textColor="#f4f8fb"
            lineColor="#e8feff"
            baseColor="#7dd3e8"
            autoAnimate
            intensity={1.25}
            className="min-w-[200px] border border-white/20"
          >
            Download CV
          </SpecularButton>
        </div>
      </div>
    </div>
  );
}
