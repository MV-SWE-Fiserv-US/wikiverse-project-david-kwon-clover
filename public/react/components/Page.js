import React from 'react'

export const Page = ({ page, setSinglePage }) => {
  return <>
    <h3 onClick={() =>  setSinglePage(page)}>{page.title}</h3>
  </>
}
