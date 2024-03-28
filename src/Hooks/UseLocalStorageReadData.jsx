import React, { useEffect, useState } from 'react';

import { getClickedBook } from '../Utilities/localtStorage'

const UseLocalStorageReadData = () => {
    const [localReadData, setLocalReadData] = useState();

    // console.log(localReadData);

    useEffect(() => {
        setLocalReadData(getClickedBook())
    }, [])


    return { localReadData }
};

export default UseLocalStorageReadData;

