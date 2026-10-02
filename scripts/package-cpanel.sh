#!/usr/bin/env bash
# Package this Next.js app for cPanel / Phusion Passenger hosting.
#
# Why this script exists: `output: "standalone"` emits .next/standalone with a
# traced, minimal node_modules and its own server.js — but it deliberately
# omits .next/static and public/. Upload it as-is and the site serves raw
# unstyled HTML with no images. This script assembles the complete tree.
#
# Usage:  bash scripts/package-cpanel.sh
# Output: dist-cpanel.zip  (upload to cPanel, extract, set startup file server.js)

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT

if [ ! -d .next/standalone ]; then
  echo "error: .next/standalone not found — run 'npx next build' first." >&2
  echo "       (requires output:\"standalone\" in next.config.ts)" >&2
  exit 1
fi

echo "==> assembling deploy tree"
cp -r .next/standalone/. "$STAGE"/

# The two directories standalone leaves out.
echo "==> adding .next/static  (JS/CSS chunks — site is unstyled without this)"
cp -r .next/static "$STAGE"/.next/static

if [ -d public ]; then
  echo "==> adding public/     (images, fonts, favicon)"
  cp -r public "$STAGE"/public

  # public/images/Prof. Ndaula/ holds 29 unprocessed camera originals (~10.9 MB)
  # that nothing in src/ references — the processed copies already live in
  # images/services, images/portrait and images/hero. They are kept in the repo
  # as source material but excluded here: shipping them would add 10.9 MB to
  # every upload, and the space in the directory name needs percent-encoding
  # in any URL that reaches it.
  if [ -d "$STAGE/public/images/Prof. Ndaula" ]; then
    echo "==> excluding unreferenced camera originals ($(du -sh "$STAGE/public/images/Prof. Ndaula" | cut -f1))"
    rm -rf "$STAGE/public/images/Prof. Ndaula"
  fi
fi

# Passenger looks for app.js or a configured startup file. Next's generated
# server.js honours PORT/HOSTNAME, which is what Passenger provides, so it
# works unmodified — no wrapper needed.

echo "==> writing deploy README"
cat > "$STAGE/DEPLOY-README.txt" <<'INNER'
Merlin Spirit House — cPanel deployment

Startup file:      server.js
Application root:  the directory you extracted this into
Node version:      22.x  (20.x minimum; set in cPanel's Node selector)

Do NOT run `npm install` on the server. node_modules here is already
traced to only what the app needs at runtime. Running install may pull
devDependencies and exhaust shared-hosting memory limits.

Environment variables must be set in cPanel BEFORE first Restart.
See .env.example in the repository for the full annotated list.

Important: every NEXT_PUBLIC_* value was baked into the JavaScript at
build time. Changing one in cPanel alone will NOT take effect — the app
must be rebuilt and repackaged.
INNER

echo "==> zipping"
rm -f "$ROOT/dist-cpanel.zip"
( cd "$STAGE" && zip -qry "$ROOT/dist-cpanel.zip" . )

echo
echo "built: dist-cpanel.zip  ($(du -h "$ROOT/dist-cpanel.zip" | cut -f1))"
echo "contents: $(unzip -Z1 "$ROOT/dist-cpanel.zip" | wc -l) files"
