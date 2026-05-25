# nyt-apsdev

A small New York Times themed static site built with Parcel. The home page shows latest science headlines from local JSON data, and the book page shows the Hardcover Fiction list.

## Run Locally

Install the dependencies first:

```powershell
npm install
```

Start the local development server:

```powershell
npm run start
```

Open the URL printed by Parcel in your browser. It is usually:

```text
http://localhost:1234
```

## Build

Create a production build:

```powershell
npm run build
```

The build output is created in `dist/`.

## Deploy To GitHub Pages

Generate a fresh production build and copy it into `docs/`:

```powershell
npm run deploy
```

Commit and push the updated files:

```powershell
git add README.md package.json package-lock.json src docs
git commit -m "Deploy updated site"
git push origin main
```

In GitHub Pages settings, use the `main` branch and `/docs` folder.

## Project Files

- `src/index.html` - home page
- `src/science.html` - book list page
- `src/nyt.js` - loads local JSON data and handles the mobile navigation
- `src/science.css` - home page styles
- `src/books.css` - book page styles
- `src/science.json` - sample NYT science data
- `src/test.json` - sample NYT book data
