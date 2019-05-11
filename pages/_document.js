import Document, { Html, Head, Main, NextScript } from 'next/document'

const preloadCss = `h1 { color: #fff; }
  .prouxLogo path { fill: #fff; }
  #__next { height: 100%; width: 100%; }
  svg { overflow: hidden; }
  svg:root { overflow: visible; }`

export default class MyDocument extends Document {
  render () {
    return (
      <Html lang='de' style={{ height: '100%', width: '100%' }}>
        <Head>
          <meta name='msapplication-TileColor' content='#2b5797' />
          <meta name='msapplication-config' content='/static/assets/browserconfig.xml' />
          <meta name='theme-color' content='#ffffff' />
          <meta name='description' content='Web Consulting.  Web Solutions.' />
          <meta name='keywords' content='web, consulting, javascript, hosting' />
          <meta name='author' content='proux UG (haftungsbeschränkt)' />
          <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
          <link rel='apple-touch-icon' sizes='180x180' href='/static/assets/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/assets/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/assets/favicon-16x16.png' />
          <link rel='manifest' href='/static/assets/site.webmanifest' />
          <link rel='mask-icon' href='/static/assets/safari-pinned-tab.svg' color='#366fa5' />
          <link rel='shortcut icon' href='/static/assets/favicon.ico' />
        </Head>
        <body style={{ height: '100%', width: '100%', margin: '0' }}>
          <style>{preloadCss}</style>
          <Main style={{ height: '100%', width: '100%' }} />
          <NextScript />
        </body>
      </Html>
    )
  }
}
