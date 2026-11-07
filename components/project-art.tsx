import type { Project } from "@/content/site";

const waveform = [
  22, 40, 64, 31, 78, 52, 90, 44, 66, 34, 72, 96, 58, 38, 80, 48, 92, 62,
  28, 70, 88, 46, 60, 36, 82, 54, 98, 42, 74, 30, 68, 50, 86, 40, 76, 24,
];

function PressCover() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#161513] p-[6cqw] text-cream">
      <div className="flex items-start justify-between gap-[3cqw] pr-[24%]">
        <p className="font-mono text-[1.7cqw] uppercase leading-relaxed tracking-[0.18em] text-cream/55">
          Independent digital newsroom
        </p>
        <p className="whitespace-nowrap font-mono text-[1.7cqw] uppercase tracking-[0.14em] text-cream/55">
          Est. 2026
        </p>
      </div>

      <div className="mt-[4cqw]">
        <p className="font-serif text-[15.5cqw] leading-[0.78] tracking-[-0.055em]">NOT</p>
        <p className="font-serif text-[15.5cqw] italic leading-[0.78] tracking-[-0.045em]">
          Scripted<span className="text-[#d9503f]">.</span>
        </p>
      </div>

      <div className="absolute inset-y-0 right-0 w-[22%] border-l border-cream/15">
        <div className="flex h-full flex-col items-center justify-between py-[6cqw]">
          <span className="font-mono text-[1.5cqw] uppercase tracking-[0.32em] text-cream/50 [writing-mode:vertical-rl]">
            India · Business · Technology
          </span>
          <span className="h-[9cqw] w-px bg-[#d9503f]" aria-hidden="true" />
          <span className="font-mono text-[1.5cqw] uppercase tracking-[0.32em] text-cream/50 [writing-mode:vertical-rl]">
            Reporting / Sourced
          </span>
        </div>
      </div>

      <div className="mt-auto max-w-[72%] border-t border-cream/20 pt-[3cqw]">
        <p className="font-serif text-[3.3cqw] italic leading-[1.15] tracking-[-0.02em] text-cream/90">
          Reporting that shows its working.
        </p>
        <div className="mt-[2.6cqw] flex items-center gap-[1.2cqw]">
          <span className="h-[0.35cqw] w-[9cqw] bg-[#d9503f]" aria-hidden="true" />
          <span className="h-[0.35cqw] w-[3cqw] bg-cream/30" aria-hidden="true" />
          <span className="font-mono text-[1.4cqw] uppercase tracking-[0.2em] text-cream/45">
            Vol. 01
          </span>
        </div>
      </div>
    </div>
  );
}

function IndustrialCover() {
  return (
    <div className="relative h-full overflow-hidden bg-[#e7ddca] text-[#171614]">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(23,22,20,0.14) 1px, transparent 1px)",
          backgroundSize: "8.3333% 100%",
        }}
        aria-hidden="true"
      />
      <div className="relative flex h-full flex-col p-[6cqw] pr-[23%]">
        <div className="flex items-start justify-between gap-[3cqw]">
          <p className="font-mono text-[1.7cqw] uppercase leading-relaxed tracking-[0.18em] text-ink/60">
            Trading · Supply · Sourcing
          </p>
          <p className="whitespace-nowrap font-mono text-[1.7cqw] uppercase tracking-[0.12em] text-ink/60">
            2024—26
          </p>
        </div>

        <p className="mt-auto font-serif text-[31cqw] leading-[0.7] tracking-[-0.075em]">
          CIG
        </p>

        <div className="mt-[3cqw] border-t border-ink/30 pt-[3cqw]">
          <p className="font-serif text-[3.1cqw] leading-[1.1] tracking-[-0.02em]">
            CHAVAN INDUSTRIAL GROUP
          </p>
          <p className="mt-[1.4cqw] font-mono text-[1.45cqw] uppercase tracking-[0.16em] text-ink/55">
            Industrial · Textile · General goods
          </p>
        </div>
      </div>

      <div className="absolute inset-y-0 right-0 flex w-[17%] flex-col items-center justify-between bg-[#ad2118] py-[5cqw] text-paper">
        <span className="font-mono text-[1.4cqw] uppercase tracking-[0.28em] [writing-mode:vertical-rl]">
          Established 2024
        </span>
        <span
          className="h-[8cqw] w-px bg-paper/40"
          aria-hidden="true"
        />
        <span className="font-serif text-[3.4cqw] italic">CIG</span>
      </div>
    </div>
  );
}

function SecurityCover() {
  return (
    <div className="relative h-full overflow-hidden bg-[#141412] p-[5cqw] text-cream">
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(243,238,228,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(243,238,228,0.5) 1px, transparent 1px)",
          backgroundSize: "6cqw 6cqw",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-[3cqw] border border-cream/20" aria-hidden="true" />

      <div
        className="absolute right-[-4cqw] top-1/2 h-[44cqw] w-[44cqw] -translate-y-1/2 rounded-full border border-cream/25"
        aria-hidden="true"
      >
        <div className="absolute inset-[5cqw] rounded-full border border-cream/20" />
        <div className="absolute inset-[15cqw] rounded-full border border-[#d9503f]/60" />
        <span className="absolute left-1/2 top-1/2 h-[1.2cqw] w-[1.2cqw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9503f]" />
        <span className="absolute left-[-8%] right-[-8%] top-1/2 h-px bg-cream/20" />
        <span className="absolute bottom-[-8%] top-[-8%] left-1/2 w-px bg-cream/20" />
      </div>

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-[3cqw] pr-[30%]">
          <p className="font-mono text-[1.7cqw] uppercase leading-relaxed tracking-[0.18em] text-cream/55">
            Technical dossier
          </p>
          <p className="whitespace-nowrap font-mono text-[1.7cqw] uppercase tracking-[0.12em] text-cream/55">
            SEC—03
          </p>
        </div>

        <div className="mt-auto">
          <p className="font-serif text-[20cqw] leading-[0.75] tracking-[-0.06em]">
            SEC<span className="text-[#d9503f]">.</span>
          </p>
          <p className="mt-[2cqw] font-serif text-[4cqw] italic tracking-[-0.02em] text-cream/85">
            Systems, examined.
          </p>
        </div>

        <div className="mt-[4cqw] flex flex-wrap gap-x-[2.4cqw] gap-y-[1.2cqw] border-t border-cream/20 pt-[2.5cqw] font-mono text-[1.45cqw] uppercase tracking-[0.12em] text-cream/50">
          <span>Sentinel</span>
          <span>Defender</span>
          <span>Wireshark</span>
          <span>Nmap</span>
          <span>Burp</span>
          <span>Kali</span>
        </div>
      </div>
    </div>
  );
}

function WaveformCover() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#181613] p-[6cqw] text-cream">
      <div className="flex items-start justify-between gap-[3cqw]">
        <p className="font-mono text-[1.7cqw] uppercase leading-relaxed tracking-[0.18em] text-cream/55">
          Music / Personal branding
        </p>
        <p className="whitespace-nowrap font-mono text-[1.7cqw] uppercase tracking-[0.12em] text-cream/55">
          2020—23
        </p>
      </div>

      <div className="mt-[5cqw] flex items-start justify-between gap-[2cqw]">
        <p className="font-serif text-[22cqw] italic leading-[0.72] tracking-[-0.055em]">
          Phonk<span className="text-[#d9503f]">.</span>
        </p>
        <div className="mt-[1cqw] flex h-[14cqw] w-[14cqw] shrink-0 flex-col items-center justify-center rounded-full border border-cream/30 text-center">
          <span className="font-mono text-[1.3cqw] uppercase tracking-[0.18em] text-cream/55">
            Top 20
          </span>
          <span className="font-serif text-[3.8cqw] leading-none">Asia</span>
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex h-[15cqw] items-end gap-[0.7cqw] border-b border-cream/20 pb-[2cqw]">
          {waveform.map((height, index) => (
            <span
              key={index}
              className={`min-w-0 flex-1 ${index % 9 === 4 ? "bg-[#d9503f]" : "bg-cream/75"}`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between gap-[3cqw] pt-[2.4cqw] font-mono text-[1.45cqw] uppercase tracking-[0.14em] text-cream/50">
          <span>150+ online features</span>
          <span>India — Asia</span>
        </div>
      </div>
    </div>
  );
}

export function ProjectArt({ theme }: { theme: Project["theme"] }) {
  return (
    <div className="project-art aspect-[4/3]" aria-hidden="true">
      <div className="project-art-inner">
        {theme === "press" ? <PressCover /> : null}
        {theme === "industrial" ? <IndustrialCover /> : null}
        {theme === "security" ? <SecurityCover /> : null}
        {theme === "waveform" ? <WaveformCover /> : null}
      </div>
    </div>
  );
}
