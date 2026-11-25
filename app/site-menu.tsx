"use client";

import { type KeyboardEvent, useRef } from "react";

type MenuLink = Readonly<{ href: string; label: string }>;

export default function SiteMenu({ links }: Readonly<{ links: readonly MenuLink[] }>) {
  const menu = useRef<HTMLDetailsElement>(null);
  const trigger = useRef<HTMLElement>(null);

  function handleEscape(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape" && menu.current?.open) {
      menu.current.open = false;
      trigger.current?.focus();
    }
  }

  return (
    <details className="site-menu" ref={menu}>
      <summary ref={trigger} onKeyDown={handleEscape}>Meny <span className="menu-icon" aria-hidden="true" /></summary>
      <nav aria-label="Hovedmeny">
        {links.map(({ href, label }) => (
          <a key={href} href={href} onKeyDown={handleEscape} onClick={() => {
            menu.current?.removeAttribute("open");
            document.getElementById(href.slice(1))?.focus({ preventScroll: true });
          }}>{label}</a>
        ))}
      </nav>
    </details>
  );
}
