import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-50">
            <h1 className="mt-40 text-4xl">404 <br /> Route/Page is not found. </h1>
            <h2 className="mt-20">Click Below To Return Home</h2>
            <Link to='/'>

                <h1 className="text-3xl mt-28 text-blue-500 ">Return Home</h1>
            </Link>
        </div>
    );
};

export default ErrorPage;