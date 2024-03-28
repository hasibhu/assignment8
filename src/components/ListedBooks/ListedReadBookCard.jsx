import { Link } from "react-router-dom";


const ListedReadBookCard = ({ readBookCardData }) => {
    // console.log(readBookCardData);
    const { bookId, author, bookName, category, image, publisherName, totalPages, rating, yearOfPublishing, tags} = readBookCardData;
   
    return (
        <div className="flex xl:flex-row flex-col justify-center items-center xl:pl-10  xl:pr-24 pt-4 bg-base-100 border mb-10 xl:w-[1150px] w-[350px]">
            
            <div className="w-[190px] h-[280px] bg-slate-400 flex justify-center items-center xl:mr-6">
                <img className="w-[130px] text-center " src={image} alt="" />
            </div>
            <div className="card-body">
                <div className=" xl:flex xl:flex-col justify-start">
                    <h2 className=" text-2xl pb-4">{bookName}</h2>
                    <p className="text-sm pb-7">By: {author} </p>
                </div>
                <div className="xl:border-t xl:border-b mb-2">
                    <p className="text-sm pb-4 pt-4" >
                        <span className=" font-bold">Tags:</span>
                        <span className="ml-16 text-[#23BE0A]">#{tags[0]}</span>   <span className="ml-20 mr-16 text-[#23BE0A]">#{tags[1]}</span> <span>Year of Publishing:  {yearOfPublishing}</span></p>
                </div>

                <div className="xl:flex pb-6 ">
                    <p className="">Publisher: {publisherName}</p>
                    <br />
                    <p className="xl:mr-60">Page: {totalPages }</p>
                </div>

                <div className="xl:flex justify-between items-center ">

                    <div className="bg-[#328EFF26] p-2 rounded-3xl ">
                        <p className="text-[#328EFF]">Category: {category}</p>
                    </div>

                    <div className="bg-yellow-400 p-2 m-6 rounded-3xl">
                        <p>Rating: {rating}</p>
                    </div>
                    
                    <Link to={`/book-details/${bookId}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default ListedReadBookCard;



