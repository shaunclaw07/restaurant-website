"use client";

import { ChevronLeft, ChevronRight, Expand, FileText, Shrink } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

export function MenuSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const viewerRef = useRef<HTMLDivElement>(null);

  const leftPageSrc = useMemo(
    () => `menu.pdf#page=${currentPage}&view=FitH`,
    [currentPage],
  );
  const rightPageSrc = useMemo(
    () => `menu.pdf#page=${currentPage + 1}&view=FitH`,
    [currentPage],
  );

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const goToPreviousSpread = () => {
    setCurrentPage((page) => Math.max(1, page - 2));
  };

  const goToNextSpread = () => {
    setCurrentPage((page) => page + 2);
  };

  const toggleFullscreen = async () => {
    const container = viewerRef.current;
    if (!container) {
      return;
    }

    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await container.requestFullscreen();
  };

  return (
    <section id="speisekarte" className="section-shell py-16 sm:py-24">
      <div className="laurel-divider mb-6 text-sm uppercase tracking-[0.18em]">Speisekarte</div>
      <div className="grid gap-8 rounded-2xl bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="mb-4 text-2xl font-semibold uppercase tracking-daphne text-brand-charcoal">
            Unsere Küche
          </h2>
          <p className="text-sm leading-7 text-brand-charcoal/80">
            Unsere Speisen werden mit viel Liebe und Sorgfalt täglich frisch zubereitet. Wir legen großen
            Wert auf Frische und haben einen hohen Qualitätsanspruch an die verwendeten Produkte.
          </p>
          <a
            href="menu.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-gold px-5 py-2 text-sm font-medium text-brand-gold transition hover:bg-brand-gold hover:text-white"
          >
            <FileText size={16} />
            Speisekarte als PDF öffnen
          </a>
        </div>

        <div
          ref={viewerRef}
          className="overflow-hidden rounded-xl border border-brand-gold/20 bg-brand-light p-3 sm:p-4"
        >
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-brand-charcoal/70">
              Seiten {currentPage} / {currentPage + 1}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goToPreviousSpread}
                className="rounded-full border border-brand-gold/40 p-2 text-brand-charcoal transition hover:border-brand-gold hover:text-brand-gold"
                aria-label="Vorherige Seiten"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={goToNextSpread}
                className="rounded-full border border-brand-gold/40 p-2 text-brand-charcoal transition hover:border-brand-gold hover:text-brand-gold"
                aria-label="Nächste Seiten"
              >
                <ChevronRight size={16} />
              </button>
              <button
                type="button"
                onClick={toggleFullscreen}
                className="rounded-full border border-brand-gold/40 p-2 text-brand-charcoal transition hover:border-brand-gold hover:text-brand-gold"
                aria-label={isFullscreen ? "Vollbild verlassen" : "Vollbild aktivieren"}
              >
                {isFullscreen ? <Shrink size={16} /> : <Expand size={16} />}
              </button>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <iframe title="Speisekarte Seite links" src={leftPageSrc} className="h-[440px] w-full rounded-lg bg-white" />
            <iframe
              title="Speisekarte Seite rechts"
              src={rightPageSrc}
              className="hidden h-[440px] w-full rounded-lg bg-white md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
