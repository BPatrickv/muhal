import Head from 'next/head'
import App, {Container} from 'next/app'
import React from 'react'
import { appWithTranslation, withNamespaces, Link, i18n } from '../i18n'


const Layout = withNamespaces('common')(({ children, t }) => (
  <div class="sans-serif">
    <Head>
      <title>Muhal</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css" />
    </Head>

    <div className="flex-l flex-m overflow-scroll">
      <segment className="vh-100-m vh-100-l avenir w-100 overflow-y-auto">
        <header className="w-100 pa4 bg-gold">
          <nav className="db dt-l w-100 border-box">
            <a className="db dtc-l v-mid b black f3 link w-100 w-33-l tc tl-l mb2 mb0-l tracked-tight" href="/" title="Home">{ t('title') }</a>
            <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
              <div className="b pointer link dim black f6 ttu f5-l dib mr3 mr4-l" onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}> {t('change-locale')}
              </div>
              <Link><a className="link dim black f6 ttu f5-l dib mr3 mr4-l" href="/" title="Cases">{ t('cases') }</a></Link>
              <Link><a className="link dim black f6 ttu f5-l dib mr3 mr4-l" href="/about" title="About">{ t('about') }</a></Link>
              <Link><a className="link dim white bg-light-red br2 pa2 f6 f5-l dib b ttu" href="/report" title="Report">{ t('report-issue') }</a></Link>

            </div>
          </nav>
        </header>
        <div className="pa4-ns bt b--black-10">
          {children}
        </div>
      </segment>
    </div>
  </div>
))

class Muhal extends App {
  render() {
    const { Component, pageProps } = this.props

    return <Container>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Container>
  }
}

export default appWithTranslation(Muhal)