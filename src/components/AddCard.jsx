import { useNavigate } from "react-router";
import addSquare from "../assets/icons/add-square-svgrepo-com.svg";

const AddCard = () => {
    const navigate = useNavigate();

    return (
        <article className="card">
            <img className="add-icon" src={addSquare} alt="" onClick={() => {navigate('/add');}} />
            <h4>Add New Creator</h4>
        </article>
    )
}

export default AddCard;