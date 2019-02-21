import Head from 'next/head';

const Layout = ({ children }) => (
  <main>
    <Head>
      <title>Spindle - coming soon</title>
      <meta
        name="description"
        content="Coming soon: New opportunities require original technology. Give IT a spin."
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c:700"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i"
        rel="stylesheet"
      />
      <meta
        name="google-site-verification"
        content="5LPKWSArcETkOWy_LPr-4TNbzVqIdyKU-k-EkoC0vTU"
      />
    </Head>

    {children}

    <style jsx global>{`
      /* global vars */
      :root {
        --theme-color-primary: #44d62c;
        --theme-color-secondary: #202337;
        --theme-scale-section-l: 80px;
        --theme-scale-section-m: 40px;
        --theme-scale-section-s: 20px;
      }

      /* reset */
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }

      html {
        box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      /* Global styles */

      body {
        background-color: var(--theme-color-secondary);
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        font-size: 16px;
      }

      .title {
        font-family: 'M PLUS Rounded 1c', 'Roboto', 'Segoe UI', Helvetica, Arial,
          sans-serif;
        font-weight: bold;
      }

      p {
        font-size: 1.2rem;
        line-height: 2rem;
        max-width: 740px;
        font-family: 'Merriweather', Georgia, Times, serif;
      }

      .type--inverted {
        color: white;
      }

      @media (max-width: 768px) {
        .title {
          font-size: 1.5rem;
        }
        section {
          padding: var(--theme-scale-section-m) var(--theme-scale-section-m)
            var(--theme-scale-section-s);
        }
      }

      @media (min-width: 768px) {
        .title {
          font-size: 2rem;
        }
        section {
          padding: var(--theme-scale-section-l) var(--theme-scale-section-l)
            var(--theme-scale-section-s);
        }
      }
    `}</style>
  </main>
);

export default Layout;
