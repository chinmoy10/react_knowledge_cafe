import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 ml-5">
            <div className="bg-violet-300 p-4 rounded-xl">
                <h1 className="font-bold text-violet-700 text-center text-xl">Spent time on read : {readingTime}</h1>
            </div>
            <div className="bg-stone-100 my-5 py-5 rounded-lg">
                <h1 className="text-2xl text-center">Bookmarks: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;