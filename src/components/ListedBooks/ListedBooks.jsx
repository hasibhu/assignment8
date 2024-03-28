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
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                               
                                <li>
                                    <button>Sort</button>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                
                            </ul>
                        </div>
                       
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            
                            <li>
                                <details>
                                    <summary className="bg-green-300 text-2xl w-28">Sort</summary>
                                    <ul className=" w-52 bg-slate-400">
                                        <li className="border-b"><a>Number of Page</a></li>
                                        <li><a>Category</a></li>
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
                    <h1>My wishlist books are here.</h1>
                    {
                        localWishListData && localWishListData.map((readWishListCard) => (
                            <WishListBookCard key={readWishListCard.bookId} wishListCardData={readWishListCard} />
                        ))
                    }
                </div>

                
            </div>

            
        </div>
    );
};

export default ListedBooks;




