import React from "react"

function fetchReducer(state, { type, response, error }) {
  switch (type) {
    case "fetching": {
      return { error: null, response: null, pending: true }
    }
    case "success": {
      return { error: null, response, pending: false }
    }
    case "error": {
      return { error, response: null, pending: false }
    }
    default:
      throw new Error(`Unsupported type: ${type}`)
  }
}

export function useFetch({ url, body }) {
  const [state, dispatch] = React.useReducer(fetchReducer, {
    error: null,
    response: null,
    pending: false,
  })
  const bodyString = JSON.stringify(body)

  React.useEffect(() => {
    if (url && bodyString) {
      dispatch({ type: "fetching" })
      fetch(url, {
        method: "post",
        body: bodyString,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then(r => r.json())
        .then(
          response => dispatch({ type: "success", response }),
          error => dispatch({ type: "error", error })
        )
    }
  }, [url, bodyString])

  return state
}
