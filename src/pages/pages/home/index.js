import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { StickyProvider } from '../../../@core/context/app/app.provider'
import { VideoProvider } from '../../../@core/context/video/video.provider'
import theme from '../../../theme'
import SEO from '../../../@core/components/seo'
import Layout from '../../../@core/components/layout'
import Modal from '../../../@core/components/modal'
import Banner from '../../sections/banner'
import CtaOne from '../../sections/cta-one'
import FAQ from '../../sections/faq'
import CtaTwo from '../../sections/cta-two'
import WorkFlow from '../../sections/workflow'
import Pricing from '../../sections/pricing'
import PopularCourse from '../../sections/popular-course'
import CtaThree from '../../sections/cta-three'
import FavoriteCourse from '../../sections/favorite-course'

function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <VideoProvider>
          <Layout>
            <SEO description='Website' title='Red Rose English Boarding School' />
            <Banner />
            <FavoriteCourse />
            <CtaThree />
            <PopularCourse />
            <WorkFlow />
            <Pricing />
            <CtaTwo />
            <FAQ />
            <CtaOne />
            <Modal />
          </Layout>
        </VideoProvider>
      </StickyProvider>
    </ThemeProvider>
  )
}
IndexPage.getLayout = page => page

export default IndexPage
