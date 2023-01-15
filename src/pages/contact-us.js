import React, { useState } from "react"
import Input from "../components/form-input"
import Layout from "../components/layout"

export default function ContactUSPage() {
  const [formData, setFormData] = useState({
    name: "",
    retreatMonth: "",
    retreatDays: "",
    retreatDates: "",
    facilitator: "",
    participants: "",
    organization: "",
    email: "",
    phone: "",
    contactPref: "",
    contactAvoid: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    retreatMonth: "",
    retreatDays: "",
    retreatDates: "",
    facilitator: "",
    participants: "",
    organization: "",
    email: "",
    phone: "",
    contactPref: "",
    contactAvoid: "",
  })

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleBlur = event => {
    console.log(event)
    return
    if (formData[event.target.name] === "") {
      setErrors({
        ...errors,
        [event.target.name]: `${event.target.name} cannot be empty`,
      })
    } else {
      setErrors({
        ...errors,
        [event.target.name]: "",
      })
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log({ formData })
  }

  return (
    <Layout>
      <div className="py-6 m-4 max-w-lg mx-auto">
        <h1 className="font-bold text-3xl leading-[1.3] lg:leading-[1.5] mb-2">Contact Us</h1>
        <hr className="mb-2"></hr>
        <form onSubmit={handleSubmit} className="m-4 max-w-lg mx-auto">
          <Input
            name="name"
            label="Name"
            placeholder="Enter your name"
            type="text"
            onBlur={handleBlur}
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <Input
            name="retreatMonth"
            label="Do you know when what month or months you are considering having your leadership retreat?"
            placeholder="Enter the month(s) you are considering"
            type="text"
            onBlur={handleBlur}
            value={formData.retreatMonth}
            onChange={handleChange}
            error={errors.retreatMonth}
          />
          <Input
            name="retreatDays"
            label="Do you know how many days you are considering for your leadership retreat?"
            placeholder="Enter the number of days you are considering"
            type="text"
            onBlur={handleBlur}
            value={formData.retreatDays}
            onChange={handleChange}
            error={errors.retreatDays}
          />
          <Input
            name="retreatDates"
            label="If you already have definite days or dates in a particular month, please provide here"
            placeholder="Enter any definite days or dates"
            type="text"
            onBlur={handleBlur}
            value={formData.retreatDates}
            onChange={handleChange}
            error={errors.retreatDates}
          />
          <Input
            name="facilitator"
            label="Are you planning on self-facilitating or using an external facilitator with whom you have already decided to use?"
            placeholder="Enter your choice"
            type="text"
            onBlur={handleBlur}
            value={formData.facilitator}
            onChange={handleChange}
            error={errors.facilitator}
          />
          <Input
            name="participants"
            label="Do you know how many individuals will participate in your leadership retreat?"
            placeholder="Enter the number of participants"
            type="text"
            onBlur={handleBlur}
            value={formData.participants}
            onChange={handleChange}
            error={errors.participants}
          />
          <Input
            name="organization"
            label="Name of Your Organization"
            placeholder="Enter your organization's name"
            type="text"
            onBlur={handleBlur}
            value={formData.organization}
            onChange={handleChange}
            error={errors.organization}
          />
          <Input
            name="email"
            label="Your Preferred Email to reach you"
            placeholder="Enter your email address"
            type="email"
            onBlur={handleBlur}
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            name="phone"
            label="Your Primary Phone Number to reach you"
            placeholder="Enter your phone number"
            type="tel"
            onBlur={handleBlur}
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />
          <Input
            name="contactPref"
            label="Preferred Days and Times to Contact You"
            type="text"
            onBlur={handleBlur}
            value={formData.contactPref}
            onChange={handleChange}
            error={errors.contactPref}
          />
          <Input
            name="contactAvoid"
            label="Do Not Contact during these days and times"
            type="text"
            onBlur={handleBlur}
            value={formData.contactAvoid}
            onChange={handleChange}
            error={errors.contactAvoid}
          />
          <button className="bg-secondary text-primary shadow-md p-2 rounded-lg w-full mt-7">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}
