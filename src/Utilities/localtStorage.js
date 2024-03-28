import { toast } from 'react-toastify';

const getClickedBook = () => {
    const storedClickedBook = localStorage.getItem('book-clicked');
    
    if (storedClickedBook) {
        return JSON.parse(storedClickedBook);
    }
    return [];
}
// import { toast, ToastContainer } from 'react-toastify';
// const showToast = (message) => {
//     toast.success(message);
// };
// <div>
//     <ToastContainer />
// </div>


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


