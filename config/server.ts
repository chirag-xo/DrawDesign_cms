import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Server => ({
  // ─────────────────────────────────────────────────────────────────────────
  // RAILWAY FIX: host must be 0.0.0.0 so Railway's router can reach the port.
  // PORT is injected automatically by Railway — never hardcode it.
  // ─────────────────────────────────────────────────────────────────────────
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  // PUBLIC_URL must be set as a Railway env var to your Railway service URL.
  // e.g. https://draw-design-cms.up.railway.app
  // Falling back to localhost causes admin panel asset URLs to break.
  url: env('PUBLIC_URL', 'http://localhost:1337'),

  // ─────────────────────────────────────────────────────────────────────────
  // RAILWAY FIX: Railway deploys behind a reverse proxy. IS_PROXIED must be
  // true (or set via env var) so Strapi trusts X-Forwarded-* headers.
  // Without this, healthchecks and CORS fail → Railway marks service unhealthy
  // and restarts the container.
  // ─────────────────────────────────────────────────────────────────────────
  proxy: env.bool('IS_PROXIED', true),

  app: {
    keys: env.array('APP_KEYS'),
  },
});

export default config;
