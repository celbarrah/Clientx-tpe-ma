"use client";
import { useEffect, useRef } from "react";

export default function LeadConnectorWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Clear any stale content (e.g. on hot-reload)
    el.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://services.leadconnectorhq.com/prospecting/client/widget-embed.js";
    script.setAttribute("data-widget-id", "69c55f439fb3285a903733e5");
    script.async = true;

    // ← Append INSIDE the container so the widget renders here, not at <body> bottom
    el.appendChild(script);

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[500px] overflow-y-auto"
    />
  );
}
