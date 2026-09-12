# Hiro Takahashi — Interactive React Portfolio

高橋広大の採用応募用ポートフォリオです。JavaScript・PHPを使用したWeb制作・開発の実務経験をベースに、現在はReactを使用したWebアプリケーション開発にも領域を広げています。

## Purpose
実務で培った構成力・顧客調整力と、React/TypeScriptで拡張中のUI設計力を一つの画面で伝えるためのサイトです。Project Type / Technologyフィルタ、詳細モーダル、レスポンシブUIを実装しています。

## Tech stack
React / TypeScript / Vite / JavaScript / PHP / HTML / CSS / GitHub / Cloudflare Workers Static Assets / @cloudflare/vite-plugin / Figma

## Local development
pnpm install
pnpm dev

## Build
pnpm run build
pnpm run preview

## Deploy
Cloudflare現行のVite plugin + Workers Static Assetsを使用しています（旧Workers Sites APIは不使用）。wrangler.jsonc の assets.directory とSPA fallbackを設定し、pnpm run deployで公開できます。

公開URL: https://hiro-takahashi-portfolio.testestestes2211.workers.dev
GitHub: https://github.com/testestestes2211-arch/hiro-takahashi-portfolio

## Security
秘密情報・.env・ビルド成果物はコミットしません。.gitignoreで除外しています。
