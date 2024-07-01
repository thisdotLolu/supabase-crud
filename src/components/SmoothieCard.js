import { Link, useParams } from "react-router-dom";

const SmoothieCard = ({smoothie}) =>{

    return (
        <div className="smoothie-card">
            <h3>{smoothie.title}</h3>
            <h3>{smoothie.method}</h3>
            <div className="rating">{smoothie.rating}</div>
            <div className='buttons'><Link
            to={'/'+ smoothie.id}
            >
                <i className='material-icons'>edit</i>
            </Link></div>
        </div>
    )
}

export default SmoothieCard;