import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { absoluteUrl, buildJsonLd, getPageMeta } from '@/content/seo';

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

// Keeps <head> in sync on client-side navigation. The initial head of every page is
// prerendered at build time (scripts/prerender.ts), so this renders nothing.
export function HeadManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getPageMeta(pathname);
    const url = absoluteUrl(meta.path);
    document.title = meta.title;
    setMeta('meta[name="description"]', 'name', 'description', meta.description);
    setMeta(
      'meta[name="robots"]',
      'name',
      'robots',
      meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    );
    setMeta('meta[property="og:title"]', 'property', 'og:title', meta.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', meta.description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (meta.noindex) {
      canonical?.remove();
    } else {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = url;
    }

    const jsonLd = buildJsonLd(meta);
    let script = document.getElementById('ld-json');
    if (!jsonLd) {
      script?.remove();
    } else {
      if (!script) {
        script = document.createElement('script');
        script.id = 'ld-json';
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }
  }, [pathname]);

  return null;
}
