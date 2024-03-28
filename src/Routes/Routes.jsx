import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import Chart from "../components/Chart/Chart";
import Footer from "../Pages/Shared/Footer/Footer";
import BookList from "../components/BookList/BookList";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/books',
                element: <BookList></BookList>
            },
            {
                path: '/book-details/:id',
                element: <BookDetails></BookDetails>
            },
            {
                path: '/listedBooks',
                element: <ListedBooks></ListedBooks>
            },
            {
                path: '/chart',
                element: <Chart></Chart>
            },

            {
                path: '/footer',
                element: <Footer></Footer>
            }
           

        
        ]
    }
])

export default router;


