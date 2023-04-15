import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function ThanksPage() {
  return (
    <Layout>
      <div className="py-6 max-w-lg mx-auto">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-2">
          Thank You!
        </h1>
        <hr className="mb-2"></hr>
        <p className="text-lg lg:text-xl leading-relaxed pb-4">
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
