# jsonbarba

Personal website for Jason Barba, built with Next.js.  
It includes:

- a home/about page
- a writing section powered by MDX + Contentlayer
- a pictorial page for travel/life photography

## Stack

- Next.js (Pages Router) + React + TypeScript
- Contentlayer (`contentlayer2` + `next-contentlayer2`) for MDX content
- Tailwind CSS
- `next-seo`, Vercel Analytics, and Vercel Speed Insights

## Prerequisites

- Node.js `22.12.0` (see `volta` in `package.json`)
- Yarn `1.22.19` (recommended for consistency with lockfile)

## Local Development

Install dependencies:

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `yarn dev` - Start Next.js dev server
- `yarn build` - Build Contentlayer content, then build the app
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript checks
- `yarn analyze` - Build with bundle analyzer enabled

## Content Authoring (Writing)

Writing entries live in `content/*.mdx` and are indexed by Contentlayer.

Each MDX file should include frontmatter like:

```md
---
title: My Post Title
date: 2026-03-11
bodyPreview: Short summary text
wordCount: 500
tags: ["Tag A", "Tag B"]
---
```

Key behavior:

- Writing list page: `/writing`
- Writing detail pages: `/writing/[slug]`
- Tag filtering page: `/writing/topic/[slug]`

## Route Overview

- `/` - Home / about
- `/writing` - Articles and notes
- `/pictorial` - Photo gallery

## Project Structure

- `src/pages` - Next.js routes
- `src/components` - UI components and page sections
- `content` - MDX writing content
- `public/pictorial` - Photo assets used in the pictorial page
- `contentlayer.config.ts` - Content schema and source config

## Deployment

The app is configured for Vercel (includes analytics and speed insights), but can be deployed to any platform that supports Next.js.
