import Link from 'next/link'
import Page from '@/components/page'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Head from '@/components/head'
import { format, parseISO } from 'date-fns'
import { frontMatter } from './**/*.mdx'
import { formatPath } from 'utils'
import Tag from '@/components/tag'

import Github from '@/icons/github.svg'
import Twitter from '@/icons/twitter.svg'
import LinkedIn from '@/icons/linkedin.svg'

const Home = () => {
  const articles = [...frontMatter]
    .filter((page) => !page.draft)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .slice(0, 3)

  return (
    <Page>
      <Head></Head>

      <Header />

      <main className="container max-w-screen-md mx-auto mb-16">
        <div className="mt-24">
          <h1 className="text-5xl font-semibold">Hi, I'm Harris</h1>
          <div className="text-xl md:text-2xl md:mt-3 max-w-screen-sm">
            I’m a software engineer working at{' '}
            <a
              className="text-special"
              href="https://facilio.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby="Open company website in a new tab"
            >
              @FacilioInc
            </a>{' '}
            where I help build fast and responsive web experiences.
          </div>
          <div className="flex mt-8">
            <a
              href="https://github.com/harrisjose"
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby="Open twitter profile in a new tab"
            >
              <Github className="h-6 w-6 mr-6"></Github>
            </a>
            <a
              href="https://twitter.com/harrispjose"
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby="Open twitter profile in a new tab"
            >
              <Twitter className="h-6 w-6 mr-6"></Twitter>
            </a>
            <a
              href="https://www.linkedin.com/in/harrisjose"
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby="Open twitter profile in a new tab"
            >
              <LinkedIn className="h-6 w-6 mr-6"></LinkedIn>
            </a>
          </div>
        </div>
        <div className="mt-24 flex flex-col">
          <div className="text-sm font-bold text-light mb-8 uppercase">
            Recent Articles
          </div>
          {articles.map((page) => (
            <div key={page.__resourcePath}>
              <Link href={formatPath(page.__resourcePath)}>
                <div className="mb-10 cursor-pointer">
                  <a className="text-xl md:text-2xl font-medium">
                    {page.title}
                  </a>
                  <div
                    className="text-base md:text-lg mt-1 text-light"
                    dangerouslySetInnerHTML={{ __html: page.excerpt }}
                  ></div>
                  <div className="mt-2">
                    {page.tags.map((tag) => (
                      <Tag key={page.__resourcePath + tag}>{tag}</Tag>
                    ))}
                  </div>
                  <div className="mt-5 text-sm text-light">
                    {format(parseISO(page.date), 'MMMM dd, yyyy')}
                    {` • `}
                    {page.readingTime}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </Page>
  )
}

export default Home
