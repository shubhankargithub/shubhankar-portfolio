import type { ReactNode } from "react";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  className?: string;
};

export function SectionHeader({
  index,
  label,
  title,
  description,
  id,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`section-head ${className}`}>
      <div data-reveal>
        <span className="section-number">{index}</span>
        <p className="eyebrow mt-3">{label}</p>
      </div>
      <div data-reveal style={{ "--reveal-delay": "90ms" } as React.CSSProperties}>
        <h2 id={id} className="section-title">
          {title}
        </h2>
        {description ? <p className="dek mt-5 max-w-2xl">{description}</p> : null}
      </div>
    </div>
  );
}
