import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"

import { rhythm } from "../theme/typography"
import { useFetch } from "../hooks/useFetch"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"

const formStyle = {
  maxWidth: 400,
}

const labelStyle = {
  display: "block",
  marginBottom: rhythm(0.25),
}

const inputStyle = {
  display: "block",
  width: "100%",
  border: "1px solid #7F7F7F",
  background: "none",
  borderRadius: 10,
  padding: rhythm(0.5),
  marginBottom: rhythm(0.5),
}

const errorStyle = {
  display: "block",
  background: "#424242",
  color: "#fff",
  padding: rhythm(0.25),
  marginBottom: rhythm(0.5),
}

const Form = ({ submitFormData, pending, error }) => {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: "onChange",
  })

  const onSubmit = data => submitFormData(data)

  return (
    <form style={formStyle} method="post" onSubmit={handleSubmit(onSubmit)}>
      <label style={labelStyle} htmlFor="first_name">
        First Name:
      </label>
      <input
        style={inputStyle}
        id="first_name"
        name="first_name"
        ref={register({ required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors["first_name"] && (
        <span style={errorStyle}>Name field is required</span>
      )}

      <label style={labelStyle} htmlFor="email_address">
        Email:
      </label>
      <input
        style={inputStyle}
        id="email_address"
        name="email_address"
        type="email"
        ref={register({ required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors["email_address"] && (
        <span style={errorStyle}>Email field is required</span>
      )}
      <Button type="submit" disabled={pending}>
        {pending ? "Loading" : "Join today"}
      </Button>
      {!!error && <p>Something went wrong, please try again</p>}
    </form>
  )
}

const JoinWaitingList = () => {
  const [formData, setFormData] = useState()

  const { pending, response, error } = useFetch({
    url: `https://app.convertkit.com/forms/1373610/subscriptions`,
    body: formData,
  })

  const completed = response && response.status === "success"

  useEffect(() => {
    if (!completed) return

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [completed])

  return (
    <Layout>
      <SEO title="Join Waiting List" />
      {!completed && (
        <>
          <h1>We're not there yet.</h1>
          <p>
            Thanks for your interest in Unfilter. We’re working hard to launch
            the project, sign up to our newsletter to be notified when we
            launch!
          </p>
          <Form
            submitFormData={data => setFormData(data)}
            pending={pending}
            convertKitError={error}
          />
        </>
      )}

      {completed && (
        <>
          <h1>One more step</h1>
          <p>
            Great, we’ve just sent you a confirmation email. Please click the
            link in the email to confirm your subscription.
          </p>
        </>
      )}
    </Layout>
  )
}

export default JoinWaitingList
