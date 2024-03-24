import { Inter } from "next/font/google";
import "./styles/global.css";
import "./styles/components/projects/ProjectComponent.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <meta charSet="utf-8" />
        {/*     <link rel="icon" type="image/svg+xml" href="/INDIRE_LOGO.png" /> */}
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />

        <meta
          name="Indire"
          content="PWA created to be Used by Indire Company"
        />
        <link rel="apple-touch-icon" href="/public/INDIRE_LOGO.png" />

        {/*      <link rel="manifest" href="/public/manifest.json" /> */}

        <title>Indire</title>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
