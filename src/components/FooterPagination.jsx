import React from 'react'
import { ReactComponent as ArrowBack } from '../assets/arrowbackWhite.svg'
import { ReactComponent as ArrowNext } from '../assets/nextArrow.svg'
import { ReactComponent as ArrowBackDisabled } from '../assets/disabledArrowBack.svg'
import { ReactComponent as ArrowNextDisabled } from '../assets/disabledArrowNext.svg'
const footerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'fixed',
  width: '100%',
  backgroundColor: '#fff',
  bottom: 0,
  padding: '12px 0',
  arrows: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    width: '55px',
    marginLeft: '10px',
    marginRight: '20px',
  },
  numbers: {
    color: '#06A9F6',
  },
  number: {
    marginRight: '3px',
    cursor: 'pointer',
  },
}

function FooterPagination({ setPage, setLoading, currentPage }) {
  //this should be last page of results, I've hardcoded to 37 to match Figma design
  const lastPage = 37
  const isCurrentPageLast = currentPage === lastPage
  const isCurrentSecondToLast = currentPage === lastPage - 1

  const paginationArray = [
    isCurrentPageLast || isCurrentSecondToLast ? 1 : currentPage,
    isCurrentPageLast || isCurrentSecondToLast ? 2 : currentPage + 1,
    '...',
    lastPage - 1,
    lastPage,
  ]

  const nextStep =
    currentPage === lastPage ? (
      <ArrowNextDisabled />
    ) : (
      <ArrowNext onClick={() => handleClick('next')} />
    )
  const prevStep =
    currentPage === 1 ? (
      <ArrowBackDisabled />
    ) : (
      <ArrowBack onClick={() => handleClick('prev')} />
    )

  const handleClick = (state) => {
    setLoading(true)
    state === 'prev'
      ? setPage((prevState) => (prevState !== 1 ? prevState - 1 : 1))
      : setPage((prevState) => prevState + 1)
  }

  return (
    <footer style={footerStyle}>
      <div style={footerStyle.numbers}>
        {paginationArray.map((item, index) => {
          return (
            <span
              style={{
                ...footerStyle.number,
                color: currentPage === item ? 'black' : '',
              }}
              key={index}
              onClick={() => setPage(item)}
            >
              {item}
            </span>
          )
        })}
      </div>
      <div style={footerStyle.arrows}>
        {prevStep}
        {nextStep}
      </div>
    </footer>
  )
}

export default FooterPagination
