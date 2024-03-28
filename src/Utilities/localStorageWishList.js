import { toast } from 'react-toastify';

const getClickedWishListBook = () => {
    const storedClickedBook = localStorage.getItem('wishList-clicked');

    if (storedClickedBook) {
        return JSON.parse(storedClickedBook);
    }
    return [];
}



const saveWishListBookClicked = clickedBook => {
    const storedClickedBooks = getClickedWishListBook();
    const exist = storedClickedBooks.find(book => book.bookId === clickedBook.bookId);

    if (!exist) {
        storedClickedBooks.push(clickedBook);
        localStorage.setItem('wishList-clicked', JSON.stringify(storedClickedBooks));
    } else {
        // alert("Book already added!");
        toast.error("Book is already added in the wish list!");
    }
}
export { getClickedWishListBook, saveWishListBookClicked };
