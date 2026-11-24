# Development guide

How to run, write for, and deploy the portfolio + blog.

**Live:** https://sonteraarga.com · https://asapsonter.github.io/asapsonter/ · **Blog:** https://asapsonter.github.io/asapsonter/blog · **RSS:** https://asapsonter.github.io/asapsonter/rss.xml

Built with React 19, Vite, Tailwind CSS v4 and Framer Motion. Deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

## Development

```bash
npm install
npm run dev       # http://localhost:5173/asapsonter/
npm run build     # type-check + production build to dist/ (also emits rss.xml and 404.html)
npm run preview   # serve the production build locally
npm run lint
```

## Deploying to Truehost (cPanel)

The same code builds for two targets:

| Command                  | Target         | Config          | Output                                     |
| ------------------------ | -------------- | --------------- | ------------------------------------------ |
| `npm run build`          | GitHub Pages   | `.env`          | `dist/`                                    |
| `npm run build:truehost` | Truehost       | `.env.truehost` | `dist-truehost/` + `portfolio-truehost.zip` |

1. In cPanel, add the domain under **Domains** (as a new domain or a subdomain). Note its
   **document root**, e.g. `/home/USER/sonteraarga.com`. Don't use `public_html` if another site already lives there.
2. Put that domain in `.env.truehost`: `VITE_SITE_URL=https://sonteraarga.com` (already set)
3. Run `npm run build:truehost`.
4. In cPanel **File Manager**, open the domain's document root, upload `portfolio-truehost.zip`, then **Extract** it.
   Enable *Settings → Show Hidden Files* to confirm that `.htaccess` is there.
5. Run **SSL/TLS Status → Run AutoSSL**. Once HTTPS works, uncomment the HTTPS redirect in `.htaccess`
   (the source is the `HTACCESS` constant in `vite.config.ts`).

To publish a new post, run `npm run build:truehost` again and re-upload the zip.

## Writing a blog post

Posts are Markdown files in [`src/posts/`](src/posts). No CMS, no database.

1. Copy `src/posts/_template.md` to `src/posts/YYYY-MM-DD-your-slug.md`.
   The URL becomes `/blog/your-slug`.
2. Edit the frontmatter:

   ```yaml
   ---
   title: What I learned running YOLOv8 on a Raspberry Pi
   date: 2026-12-01
   summary: Shown on the blog index, home page, and RSS feed.
   tags: [ai, edge, iot]
   draft: true      # visible in `npm run dev`, hidden on the live site
   cover: /blog/yolo-pi.png   # optional
   ---
   ```

3. Write GitHub-flavoured Markdown: tables, task lists, and fenced code blocks with syntax highlighting.
   Images go in `public/blog/` and are referenced as `/blog/file.png`.
4. Remove `draft: true`, commit, and push to `main`. The site rebuilds automatically.

Files starting with `_` are never published.

Every post has share buttons (X, LinkedIn, WhatsApp, copy link, plus the native share sheet on mobile).
Posts are also added to the RSS feed.

## Project layout

```
src/
  pages/        Home, Blog (index + search/tag filter), PostPage, NotFound
  components/   Hero, About, Skills, Projects, LatestPosts, Contact, Navbar, Footer, PostCard, ShareBar
  lib/          posts.ts (loads Markdown), frontmatter.ts (parser shared with the RSS build), site.ts (name, URLs, socials)
  posts/        your Markdown posts
vite.config.ts  base path + build plugin that writes rss.xml and the SPA 404.html fallback
```
