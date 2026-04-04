import type { ReactNode } from "react";

interface Props {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
}

export default function PageHero({ title, subtitle, description, children }: Props) {
  return (
    <section className="page-hero pt-12 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
      <div className="section-container">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-ocean-200 text-lg sm:text-xl leading-relaxed">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-ocean-300 text-base sm:text-lg leading-relaxed mt-3 max-w-2xl">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
