
import { useState } from "react";
import { useParams } from "react-router-dom";
import BookData from "../../Hooks/BookData";
import { useEffect } from "react";
import { saveBookClicked } from "../../Utilities/localtStorage";
import { saveWishListBookClicked } from "../../Utilities/localStorageWishList"
// import ListedBooks from "../../components/ListedBooks/ListedBooks";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const BookDetails = () => {
    const [singleBookData, setSingleBookData] = useState({});
   
    const { id } = useParams();
    const { data, loading } = BookData();

    const handleRead = () => {
       console.log('clicked');
        saveBookClicked(singleBookData);
            
    }

    const handleWishLish = () => {
        console.log('clicked from handleWishLish');
        saveWishListBookClicked(singleBookData);
    }

    useEffect(() => {
        if (data) {
            const singleBookData = data.find(item => item.bookId === +id);
            setSingleBookData(singleBookData);
        }
    }, [data, id]);



    const { bookName, author, image, review, totalPages, rating, category, tags, publisherName, yearOfPublishing } = singleBookData || {};
    return (
        <div className="flex xl:flex-row flex-col max-w-screen-xl m-auto gap-20 mt-20 border p-12">

            <div className="xl:w-[650px] xl:h-[550px] bg-blue-300 flex justify-center items-center rounded-xl">
                <img className="xl:w-[350px] xl:h-[450px]" src={image} alt="" />
            </div>

            {/* Book description  */}
            <div className="xl:w-[650px] mt-9">
                <h2 className="text-4xl mb-2">{bookName}</h2>
                <p>Author: {author}</p>
                <h4 className="border-t border-b mt-3 mb-3 text-center font-bold">{category}</h4>
                <p><span className="font-bold">Review:</span> {review}</p>
                <p className="text-[#23BE0A] border-b mb-6 pb-4 mt-6"> <span>#{tags?.[0]}</span>
                    <span className="ml-20">#{tags?.[1]}</span></p>
                <p>Number of Pages: <span className="ml-10">{totalPages}</span></p>
                <p>Publisher: <span className="ml-24">{publisherName}</span></p>
                <p>Year of Publishing: <span className="ml-9">{yearOfPublishing}</span></p>
                <p><span className="mr-2">Rating:</span> <span className="ml-28">  {rating}</span></p>

                <div className=" flex  pt-6 justify-center items-center mr-28 ">
                    <button onClick={handleRead} className="btn btn-primary ml-12 mr-28">Read</button>
                    <button onClick={handleWishLish} className="btn btn-secondary">Wish List</button>
                </div>
                <ToastContainer />
            </div>
          
        </div>
    );
};

export default BookDetails;

