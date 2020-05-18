import styled from "@emotion/styled"

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: space-between;
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`
