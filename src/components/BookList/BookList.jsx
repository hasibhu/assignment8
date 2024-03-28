import { useState } from "react";
import BookData from "../../Hooks/BookData";
// import Book from "../Book/Book";
import Book from "../Book/Book";



// for home page books
const BookList = () => {

    const { data, loading } = BookData();
    console.log(data);

    const [dataLength, setDataLength] = useState([6])

    return (
        <div className="mt-20 border-t border-blue-400 rounded-xl p-8 pb-10">
            <h1 className="text-center text-4xl font-bold">Books</h1>
            <div className="grid xl:grid-cols-3 gap-5 max-w-screen-xl m-auto">
                {
                    data.slice(0, dataLength).map((item) => <Book key={item.bookId} book={item}></Book>)
                }
            </div>
           
            <div className="text-center m-4 mt-10}">
                <div className={dataLength === data.length && 'hidden'}>
                    <button onClick={() => setDataLength(data.length) && 'hidden'}
                        className="btn btn-accent">See All Books</button>
                </div>
            </div>
           

        </div>
    );
};

export default BookList;



