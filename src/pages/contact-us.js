import React, { useState } from "react"
import Input from "../components/form-input"
import Layout from "../components/layout"

export default function ContactUSPage() {
  const [formData, setFormData] = useState({
    fullName: "",
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
    fullName: "",
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
    console.log({ formData })
  }

  return (
    <Layout>
      <div className="py-6 max-w-lg mx-auto">
        <h1 className="font-bold text-3xl leading-[1.3] lg:leading-[1.5] mb-2">
          Contact Us
        </h1>
        <hr className="mb-2"></hr>
        <form onSubmit={handleSubmit} className="m-4 max-w-lg mx-auto">
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
            name="retreatMonth"
            label="Do you know when what month or months you are considering having your leadership retreat?"
            placeholder="Enter the month(s) you are considering"
            type="text"
            onBlur={handleBlur}
            value={formData.retreatMonth}
            onChange={handleChange}
            error={errors.retreatMonth}
            required={true}
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
            required={true}
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
            required={true}
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
            required={true}
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
            required={true}
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
            required={true}
          />
          <Input
            name="contactPref"
            label="Preferred Days and Times to Contact You"
            placeholder="Enter your preferred contact times"
            type="text"
            onBlur={handleBlur}
            value={formData.contactPref}
            onChange={handleChange}
            error={errors.contactPref}
          />
          <Input
            name="contactAvoid"
            label="Do Not Contact during these days and times"
            placeholder="Enter your do not contact times"
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
