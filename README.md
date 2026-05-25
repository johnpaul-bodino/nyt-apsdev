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

## Project Files

- `src/index.html` - home page
- `src/science.html` - book list page
- `src/nyt.js` - loads local JSON data and handles the mobile navigation
- `src/science.css` - home page styles
- `src/books.css` - book page styles
- `src/science.json` - sample NYT science data
- `src/test.json` - sample NYT book data
