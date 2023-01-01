import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="min-h-[80vh] flex flex-col justify-center items-center max-w-2xl mx-auto">
      <h1 className="text-2xl mb-4">A Virtual New Mexico Trip</h1>
      <p className="text-xl mb-2">
        Uh oh! It looks like you've stumbled upon a page that doesn't exist.
        Don't worry, it's not the end of the world (just yet). While you're
        here, why not take a virtual vacation to sunny New Mexico?
      </p>
      <p className="text-xl mb-2">
        Imagine yourself lounging by the mountains at our beautiful short term
        vacation rental, sipping on a refreshing cold beer and soaking up the
        warm desert sun.
      </p>
      <p className="text-xl mb-2">
        Unfortunately, we can't transport you to our rental in person (yet), but
        we hope this little distraction helps transport you to a happier place.
        And hey, who knows – maybe one day you'll actually be able to visit us
        in person and enjoy all that our beautiful state has to offer. Until
        then, keep dreaming and don't be afraid to explore the rest of our site.
      </p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
