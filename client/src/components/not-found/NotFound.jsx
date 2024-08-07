import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="full_bg">
            <div className="slider_main text-align-center">
                <div className="not_found text-align-center">
                    <h2>404</h2>
                    <h1>OOPS! Not Found</h1>
                    <div>
                    <Link
                   
                   className="read_more"
                   to='/'
               >
                   Home
               </Link>
                    </div>
                
                </div>
            </div>
        </div>
    )
}