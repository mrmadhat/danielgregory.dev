import React, { useState } from "react"
import { useForm } from "react-hook-form"

import styled from "@emotion/styled"
import { rhythm } from "../../site/typography"
import { useFetch } from "../hooks/useFetch"

import Button from "./button"

const formStyle = {
  maxWidth: 600,
}

const InputContainer = styled.div`
  display: flex;
`

const InputWrap = styled.div`
  display: block;
  margin-right: ${rhythm(0.5)};
`

const Label = styled.label`
  display: block;
  margin-bottom: ${rhythm(0.25)};
`

const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #7f7f7f;
  background: none;
  border-radius: 10;
  padding: ${rhythm(0.25)};
  margin-bottom: ${rhythm(0.5)};
`

const ErrorEl = styled.span`
  display: block;
  background: #424242;
  color: #fff;
  padding: ${rhythm(0.25)};
  margin-bottom: ${rhythm(0.5)};
`

const Form = ({ submitFormData, pending, error }) => {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: "onChange",
  })

  const onSubmit = data => submitFormData(data)

  return (
    <form style={formStyle} method="post" onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputWrap>
          <Label htmlFor="first_name">First Name:</Label>
          <Input
            id="first_name"
            name="first_name"
            ref={register({ required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors["first_name"] && <ErrorEl>Name field is required</ErrorEl>}
        </InputWrap>
        <InputWrap>
          <Label htmlFor="email_address">Email:</Label>
          <Input
            id="email_address"
            name="email_address"
            type="email"
            ref={register({ required: true })}
          />
          {errors["email_address"] && (
            <ErrorEl>Email field is required</ErrorEl>
          )}
        </InputWrap>
      </InputContainer>

      <Button type="submit" disabled={pending}>
        {pending ? "Loading" : "Subscribe"}
      </Button>
      {!!error && <ErrorEl>Something went wrong, please try again</ErrorEl>}
    </form>
  )
}

const NewsletterSignup = () => {
  const [formData, setFormData] = useState()

  const { pending, response, error } = useFetch({
    url: `https://app.convertkit.com/forms/1400351/subscriptions`,
    body: formData,
  })

  const completed = response && response.status === "success"

  return (
    <aside>
      {!completed && (
        <>
          <h3>Join my newsletter</h3>
          <Form
            submitFormData={data => setFormData(data)}
            pending={pending}
            convertKitError={error}
          />
        </>
      )}

      {completed && (
        <>
          <h3>One more step</h3>
          <p>
            Great, we’ve just sent you a confirmation email. Please click the
            link in the email to confirm your subscription.
          </p>
        </>
      )}
    </aside>
  )
}

export default NewsletterSignup
