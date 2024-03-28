import { Link } from "react-router-dom";
import ratingStart from '../../assets/star.png'

const Book = ({ book }) => {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisherName, yearOfPublishing} = book;
    return (

        <Link to={`/book-details/${bookId}`}>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl h-[480px]">
                    <div className="bg-slate-400 w-[250px] h-[280px] flex justify-center items-center m-auto mt-5">
                        <figure><img className="w-[140px] h-[190px]" src={image} alt="Book image " /></figure>
                    </div>
                    <div className="flex flex-row justify-around mt-4">
                        <p className="text-[#23BE0A]">Young Adult</p>
                        <p className="text-[#23BE0A]">Identity</p>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{bookName}</h2>
                        <p className=" border-dashed border-b-2 pb-4">By: {author}</p>
                       
                    </div>
                    <div className="flex flex-row justify-between pl-7 pr-7 pb-4">
                        <p>{category}</p>
                        <div className="flex flex-row gap-1 justify-center items-center">
                            <p>{rating} </p>
                            <img src={ratingStart} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>

        // for button click details, this code is possible to 
        // <div>
        //     <div className="card w-96 bg-base-100 shadow-xl h-[480px]">
        //         <div className="bg-slate-400 w-[250px] h-[280px] flex justify-center items-center m-auto mt-5">
        //             <figure><img className="w-[140px] h-[190px]" src={image} alt="Book image " /></figure>
        //        </div>
        //         <div className="flex flex-row justify-around mt-4">
        //             <p className="text-[#23BE0A]">Young Adult</p>
        //             <p className="text-[#23BE0A]">Identity</p>
        //         </div>
        //         <div className="card-body">
        //             <h2 className="card-title">{bookName}</h2>
        //             <p className=" border-dashed border-b-2 pb-4">By: {author}</p>
        //             <div className="card-actions justify-center">
        //                 {/* <button className="btn bg-amber-500">Show Details</button> */}
        //                 <Link to={`/book-details/${bookId}`}><button className="btn bg-amber-500">Show Details</button></Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>

     
    );
};

export default Book;



// book details var
// const { bookName, author, image, review, totalPages, rating, category, tags, publisherName, yearOfPublishing } = singleBookData || {};