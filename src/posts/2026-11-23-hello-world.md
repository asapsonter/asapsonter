---
title: Hello, world — why I'm writing about new tech
date: 2026-11-23
summary: Kicking off a small notebook on the technologies I'm building with — IoT, applied ML and the glue that holds systems together.
tags: [meta, iot, ai]
---

I spend most of my time where hardware meets software: alarm panels talking to cloud
backends, camera streams feeding computer-vision models, and dashboards that have to
stay up when the power doesn't.

Along the way I keep running into tools and techniques worth writing down. This blog is
where those notes will live.

## What to expect

- **Hands-on notes** on new tools and frameworks as I try them in real projects.
- **Field lessons** from deploying IoT and AI systems in Nigeria — where connectivity,
  power and budgets shape every design decision.
- **Short explainers** that turn something I had to dig for into something you can read
  in five minutes.

## A taste

Most of my integration work starts with a polling loop that has to be boringly reliable:

```python
import asyncio

async def poll(fetch, interval: float = 2.0):
    while True:
        try:
            yield await fetch()
        except Exception as exc:  # keep the loop alive, surface the error
            print(f"poll failed: {exc}")
        await asyncio.sleep(interval)
```

More soon. If something here is useful, share it — there are share links at the
bottom of every post.
