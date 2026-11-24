---
title: Your post title
date: 2026-01-31
summary: One or two sentences shown on the blog index, the home page and in the RSS feed.
tags: [ai, iot]
draft: true
---

Files starting with an underscore (like this one) are never published.

To write a new post:

1. Copy this file to `src/posts/YYYY-MM-DD-your-slug.md`.
   The part after the date becomes the URL: `/blog/your-slug`.
2. Fill in the frontmatter above. Keep `draft: true` while writing; drafts show in
   `npm run dev` but are hidden on the live site.
3. Set `draft: false` (or delete the line), commit and push to `main`.
   GitHub Actions rebuilds and deploys the site.

## Markdown you can use

GitHub-flavoured Markdown works: **bold**, _italic_, `inline code`, [links](https://example.com),
tables, task lists and fenced code blocks with syntax highlighting.

```python
def hello(name: str) -> str:
    return f"Hello, {name}"
```

> Blockquotes for callouts.

| Column | Another |
| ------ | ------- |
| a      | b       |

Images: put the file in `public/blog/` and reference it as `/blog/your-image.png`.
