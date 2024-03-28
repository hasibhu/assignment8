
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className=" mt-20 flex justify-between items-center m-auto">

            <div className="card  bg-base-100 shadow-xl border-red-500 m-auto max-w-screen-xl flex flex-row justify-around items-center">
                
                <div className="m-4">
                    <h2 className="card-title text-3xl ">Books to freshen up your bookshelf</h2>
                    

                    <div className="card-actions justify-start mt-5">
                        <Link to='/'>
                            <button className="btn btn-primary ">View The List</button>
                        </Link>
                    </div>
                </div>


                <img src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;