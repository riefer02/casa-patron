import React, { useState, useEffect } from "react"
import { navigate } from "gatsby-link"
import Input from "../components/form-input"
import Layout from "../components/layout"
import Seo from "../components/seo"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const isAllFalsy = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      return false
    }
  }
  return true
}

function validateForm(formData) {
  const requiredFields = [
    "fullName",
    "email",
    "startDate",
    "endDate",
    "phone",
    "participants",
  ]
  for (const [field, value] of Object.entries(formData)) {
    if (requiredFields.includes(field) && !value) {
      return false
    }
  }
  return true
}

export default function ContactUsPage() {
  const today = new Date()
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000)
  
  const [formData, setFormData] = useState({
    fullName: "",
    startDate: today.toISOString().substring(0, 10),
    endDate: tomorrow.toISOString().substring(0, 10),
    facilitator: "",
    participants: "",
    organization: "",
    email: "",
    phone: "",
  })

  const [errors, setErrors] = useState({
    fullName: "",
    startDate: "",
    endDate: "",
    facilitator: "",
    participants: "",
    organization: "",
    email: "",
    phone: "",
  })

  const [submitDisabled, setSubmitDisabled] = useState(true)

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleBlur = event => {
    if (formData[event.target.name] === "") {
      return setErrors({
        ...errors,
        [event.target.name]: `${event.target.name} is a required field.`,
      })
    }

    return setErrors({
      ...errors,
      [event.target.name]: "",
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!validateForm(formData)) return
    const form = event.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formData,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  useEffect(() => {
    validateForm(formData) && isAllFalsy(Object.values(errors))
      ? setSubmitDisabled(false)
      : setSubmitDisabled(true)
  }, [formData, errors])

  return (
    <Layout>
      <div className="py-6 max-w-lg mx-auto">
        <h1 className="font-bold text-3xl leading-[1.3] lg:leading-[1.5] mb-2">
          Contact Us
        </h1>
        <p className="text-base mb-2">
          Interested in booking Casa Patron or facilitating a Leadership Retreat
          there? Answer the questions below and we will get back to as soon as
          possible.
        </p>
        <hr className="mb-2"></hr>
        <form
          name="contact"
          onSubmit={handleSubmit}
          className="m-4 max-w-lg mx-auto"
          action="/thanks/"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Input
            name="fullName"
            label="Full Name"
            placeholder="Enter your full name"
            type="text"
            onBlur={handleBlur}
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            required={true}
          />
          <Input
            name="email"
            label="Email"
            placeholder="Enter your email address"
            type="email"
            onBlur={handleBlur}
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required={true}
          />
          <Input
            name="startDate"
            label="Start Date"
            placeholder="Enter any definite days or dates"
            type="date"
            onBlur={handleBlur}
            value={formData.startDate}
            onChange={handleChange}
            error={errors.startDate}
            required={true}
          />
          <Input
            name="endDate"
            label="End Date"
            placeholder="Enter any definite days or dates"
            type="date"
            onBlur={handleBlur}
            value={formData.endDate}
            onChange={handleChange}
            error={errors.endDate}
            required={true}
          />
          <Input
            name="phone"
            label="Phone Number"
            placeholder="Enter your phone number"
            type="tel"
            onBlur={handleBlur}
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required={true}
          />
          <Input
            name="organization"
            label="Organization Name"
            placeholder="Enter your organization's name"
            type="text"
            onBlur={handleBlur}
            value={formData.organization}
            onChange={handleChange}
            error={errors.organization}
          />
          <Input
            name="participants"
            label="How many people will be attending?"
            placeholder="Enter the number of participants"
            type="text"
            onBlur={handleBlur}
            value={formData.participants}
            onChange={handleChange}
            error={errors.participants}
            required={true}
          />
          <Input
            name="facilitator"
            label="Are you self-facilitating or need an external facilitator?"
            placeholder="Enter your choice"
            type="text"
            onBlur={handleBlur}
            value={formData.facilitator}
            onChange={handleChange}
            error={errors.facilitator}
          />
          <button
            type="submit"
            className={`bg-secondary text-primary shadow-md p-2 rounded-lg w-full mt-7 ${
              submitDisabled ? "pointer-events-none opacity-50" : ""
            }`}
          >
            Submit
          </button>
        </form>
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
      title="Contact Us"
      description={
        "Get in touch with us for a hassle-free and enjoyable short-term vacation rental experience at Casa Patron, Alto, NM near Ski Apache and Ruidoso Downs. Contact us now for any questions or booking inquiries."
      }
    />
  )
}
