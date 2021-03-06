import Head from 'next/head'
const isDev = process.env.NEXT_PUBLIC_IS_DEV === 'true'

const HeadWrapper = ({ children }) => (
  <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

    <script
      dangerouslySetInnerHTML={{
        __html: `
          var pref1 = localStorage.getItem('hpj-theme')
          var pref2 = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
          if (pref1) {
            document.documentElement.setAttribute('data-theme', pref1)
          } else {
            document.documentElement.setAttribute('data-theme', pref2)
          }
        `,
      }}
    ></script>
    {children}
  </Head>
)

export default HeadWrapper
