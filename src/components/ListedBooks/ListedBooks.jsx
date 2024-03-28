import UseLocalStorageReadData from "../../Hooks/UseLocalStorageReadData";
import UseLocalStorageWishListData from "../../Hooks/UseLocalStorageWishListData";

import ListedReadBookCard from "./ListedReadBookCard";
import WishListBookCard from "../WishListBooks/WishListBookCard";

const ListedBooks = () => {
    // read book list data
    const { localReadData } = UseLocalStorageReadData();

    // wish list book list data
    const { localWishListData } = UseLocalStorageWishListData();

    return ( 
        
        <div className='mt-10 text-center max-w-screen-xl m-auto'>
            <div>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                       
                       
                    </div>
                    <div className="navbar-center  lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            
                            <li>
                                <details>
                                    <summary className="bg-green-300 text-2xl w-28">Sort</summary>
                                    <ul className=" w-52 bg-slate-400">
                                        <li><a>Rating</a></li>
                                        <li className=""><a>Number of Page</a></li>
                                        <li><a>Year of Publication</a></li>
                                    </ul>
                                </details>
                            </li>
                            
                        </ul>
                    </div>
                    
                </div>
            </div>
            

            {/* books received by the click */}
            <div role="tablist" className="tabs tabs-lifted tabs-lg w-[1180px] ">

                {/* Read tab */}
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <h1 className="text-xl font-bold pb-4">Your reading list is below: </h1>
                    <div>
                        {
                            localReadData && localReadData.map((readBookCard) => (
                                <ListedReadBookCard key={readBookCard.bookId} readBookCardData={readBookCard}></ListedReadBookCard>
                            ))
                        }
                    </div>
                    
                </div>
                
                {/* WishLish tab */}
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books"  />
                
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <h1 className="text-xl font-bold pb-4">Your wishlist books are below: </h1>
                    <div>
                        {
                            localWishListData && localWishListData.map((readWishListCard) => (
                                <WishListBookCard key={readWishListCard.bookId} wishListCardData={readWishListCard} />
                            ))
                        }
                    </div>
                </div>

                
            </div>

            
        </div>
    );
};

export default ListedBooks;

