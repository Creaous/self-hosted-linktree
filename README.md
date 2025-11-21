# Self Hosted Linktree

This project aims to implement a basic single page website to display a list of
user links.

## Customisation

You should change your values in `src/values.ts` and update the image in
`static/favicon.png`.

_Note 1: Provide a circular 96x96 image for best performance since higher res is
useless._

_Note 2: If you upgrade the project, ensure that these files are skipped!_

## Testing

We use pnpm but you should be able to use any package manager.

1. Install dependencies: `pnpm i`
2. Start a development server: `pnpm dev`

## Deployment

Once you're ready to deploy, you can follow these steps.

1. Install dependencies: `pnpm i`
2. Start a development server: `pnpm build`
3. Ensure everything looks good: `pnpm preview`
