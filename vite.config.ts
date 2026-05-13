import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self' https://api.github.com",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join('; ')

// GitHub Pages can't set HTTP headers, so we inject security meta tags at build time.
// `apply: 'build'` skips the plugin in dev so Vite's HMR (inline scripts, ws://) keeps working.
function securityMetaPlugin(): Plugin {
  return {
    name: 'security-meta',
    apply: 'build',
    transformIndexHtml(html) {
      const tags = [
        `<meta http-equiv="Content-Security-Policy" content="${CSP}" />`,
        `<meta name="referrer" content="strict-origin-when-cross-origin" />`,
      ].join('\n    ')
      return html.replace('<meta charset="UTF-8" />', `<meta charset="UTF-8" />\n    ${tags}`)
    },
  }
}

export default defineConfig({
  plugins: [react(), securityMetaPlugin()],
})
