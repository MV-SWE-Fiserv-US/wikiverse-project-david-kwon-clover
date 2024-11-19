import React from 'react'

export const Page = ({ page, setSlug }) => {
  return <div className='page'>
    <h3 onClick={() => setSlug(page.slug)}>{page.title}</h3>
  </div>
}
