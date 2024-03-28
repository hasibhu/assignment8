import  { useEffect } from 'react';
import { getClickedWishListBook } from "../Utilities/localStorageWishList"
import { useState } from 'react';
    
    
const UseLocalStorageWishListData = () => {
    const [localWishListData, setLocalWishListData] = useState();

    // console.log(localWishListData);

    useEffect(() => {
        setLocalWishListData(getClickedWishListBook())
    }, [])


    return { localWishListData }
};

export default UseLocalStorageWishListData;