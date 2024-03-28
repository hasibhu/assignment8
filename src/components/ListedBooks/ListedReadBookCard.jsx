

const ListedReadBookCard = ({ readBookCardData }) => {
    // console.log(readBookCardData);
    const { bookId, author, bookName, category, image, publisherName, totalPages, rating, yearOfPublishing, tags} = readBookCardData;
   
    return (
        <div className="flex flex-row justify-center items-center pl-10 pr-24 bg-base-100 border mb-10">
            <div className="w-[190px] h-[280px] bg-slate-400 flex justify-center items-center mr-6">
                <img className="w-[130px]" src={image} alt="" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{bookName }</h2>
                <p className="text-sm pb-7">By: {author} </p>
                <div className="border-t border-b mb-2">
                    <p className="text-sm pb-4 pt-4" > <span className=" font-bold">Tags:</span> <span className="ml-16 text-[#23BE0A]">#{tags[0]}</span>   <span className="ml-20 mr-16 text-[#23BE0A]">#{tags[1]}</span> <span>Year of Publishing:  {yearOfPublishing}</span></p>
                </div>
                <div className="flex pb-6 ">
                    <p className="">Publisher: {publisherName}</p>
                    <p className="mr-60">Page: {totalPages }</p>
                </div>
                <div className="card-actions justify-between items-center">
                    <div className="bg-[#328EFF26] p-2 rounded-3xl"><p className="text-[#328EFF]">Category: {category}</p></div>
                    <div className="bg-yellow-400 p-2 rounded-3xl"> <p>Rating: {rating}</p></div>
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ListedReadBookCard;



