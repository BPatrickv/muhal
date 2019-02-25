
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="sans-serif">
      <Head>
        <title>محال</title> 
        <meta lang="ar" />
        <meta charSet='utf-8' />
        <meta name='viewport' content='ini</meta>tial-scale=1.0, width=device-width' />
        <link href="https://fonts.googleapis.com/css?family=Tajawal" rel="stylesheet" /> 
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css" />
      </Head>

      <div className="flex-l flex-m" style={{"direction": "rtl", "fontFamily": "Tajawal, sans-serif"}}>
        <main className="vh-100-m vh-100-l w-100 overflow-y-auto">
          <header className="w-100 pa4 bg-washed-yellow">
            <nav className="db dt-l w-100 border-box">
              <a className="db dtc-l v-mid b black f3 link w-100 w-33-l tc tl-l mb2 mb0-l tracked-tight" href="/" title="Home">
                <img src="/static/logo.svg" height="h3" />
              </a>
              <div className="db dtc-l v-mid w-100 w-75-l tc tl-l">
                <Link href="/ar/cases"><a className="link dim black f5 ttu f4-l dib mr3 ml4-l" href="/ar/cases" title="Cases">قضايا</a></Link>
                <Link href="/ar/about"><a className="link dim black f5 ttu f4-l dib mr3 ml4-l" href="/ar/about" title="About">معلومات</a></Link>
                <Link href="/ar/report"><a className="link dim white bg-light-red br2 pa2 f5 f4-l dib b ttu" href="/ar/report" title="Report">أبلغ عن قضية </a></Link>
              </div>
            </nav>
          </header>
          <div className="pa4 bt b--black-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}