import React, { useState, useEffect } from 'react'
import GistItem from './GistItem'
import Modal from './Modal'

function GistList({ data }) {
  const [clicked, setClicked] = useState(-1)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    let timeout
    if (clicked !== -1) {
      setIsModalOpen(true)
      timeout = setTimeout(() => {
        setIsModalOpen(false)
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [clicked])

  const handleClick = (index) => {
    setClicked(index)
  }
  return (
    <div>
      {data.map((item, index) => (
        <section key={index}>
          <GistItem
            isClicked={clicked === index ? 'clicked' : ''}
            onClick={() => handleClick(index)}
            image={item.owner.avatar_url}
            gistName={item.files[Object.keys(item.files)[0]].filename}
          />
        </section>
      ))}
      {clicked !== -1 && (
        <Modal isOpen={isModalOpen} avatar={data[clicked].owner.avatar_url} />
      )}
    </div>
  )
}

export default GistList
