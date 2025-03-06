import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleAddReadingTime }) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20 pb-5'>
            <img className='rounded-2xl shadow-lg w-full' src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between my-7'>
                <div className='flex items-center space-x-6'>
                    <img className='w-16' src={author_img} alt={author} />
                    <div>
                        <h4 className='text-2xl font-bold'>{author}</h4>
                        <p className='text-slate-400 font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center font-bold text-xl space-x-2'>
                    <span className='text-slate-400'>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='text-red-500' ><FaBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl mb-3'>{title}</h2>
            <p className='mb-3'>
                {
                    hashtags.map((hash, idx)=> <span className='mr-2 text-slate-400 font-semibold' key={idx}><a href='#'>{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleAddReadingTime(reading_time)} className='text-violet-500 underline font-semibold'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleAddReadingTime: PropTypes.func
}

export default Blog;