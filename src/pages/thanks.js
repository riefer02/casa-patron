import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function ThanksPage() {
  return (
    <Layout>
      <div className="py-6 max-w-lg mx-auto">
        <h1 className="font-bold text-3xl leading-[1.3] lg:leading-[1.5] mb-2">
          Thank You!
        </h1>
        <p className="text-base mb-2">
          We will get back to you as soon as possible! Have a great day and
          cheers!
        </p>
      </div>
    </Layout>
  )
}

export const Head = () => {
  return (
    <Seo
      keywords={[
        "vacation rental",
        "new mexico",
        "alto",
        "ski apache",
        "ruidoso",
        "retreat",
        "casa patron",
      ]}
      title="Thank You for Contacting Us"
      description={
        "We appreciate you taking the time to reach out to us. Your message has been received and we'll get back to you soon. Thank you for choosing Casa Patron, in Alto, NM near Ski Apache and Ruidoso Downs."
      }
    />
  )
}
