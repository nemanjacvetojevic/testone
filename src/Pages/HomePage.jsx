import { useState } from 'react'
import Loading from '../components/Loading'
import GistList from '../components/GistList'
import FooterPagination from '../components/FooterPagination'
import useFetch from '../services/useFetch'

const mainStyle = {
  padding: '0 16px',
}

function HomePage() {
  const [page, setPage] = useState(1)
  const { data, loading, error, setLoading } = useFetch(
    `?per_page=30&page=${page.toString()}`
  )

  if (error) throw error
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main style={mainStyle}>
          <GistList data={data} />
        </main>
      )}
      <FooterPagination
        currentPage={page}
        setLoading={setLoading}
        setPage={setPage}
      />
    </>
  )
}

export default HomePage
