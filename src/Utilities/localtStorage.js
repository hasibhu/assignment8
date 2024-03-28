import { toast } from 'react-toastify';

const getClickedBook = () => {
    const storedClickedBook = localStorage.getItem('book-clicked');
    
    if (storedClickedBook) {
        return JSON.parse(storedClickedBook);
    }
    return [];
}



const saveBookClicked = clickedBook => {
    const storedClickedBooks = getClickedBook();
    const exist = storedClickedBooks.find(book => book.bookId === clickedBook.bookId);

    if (!exist) {
        storedClickedBooks.push(clickedBook);
        localStorage.setItem('book-clicked', JSON.stringify(storedClickedBooks));
    } else {
        toast.error("Book is already added!");
    }
}

export { getClickedBook, saveBookClicked };


