import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleAddReadingTime = (time, id) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // remove bookmark

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);

  }

  return (
    <>
      <Header></Header>
      <main className='md:flex justify-around max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleAddReadingTime={handleAddReadingTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App