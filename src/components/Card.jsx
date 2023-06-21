import PropTypes from 'prop-types'
import "../App.css"
import "./Card.scss"
import editIcon from "../assets/icons/edit-fill-svgrepo-com.svg";
import infoIcon from "../assets/icons/info-fill-svgrepo-com.svg";
import instagramSvg from "../assets/icons/instagram-svgrepo-com.svg";
import youtubeSvg from "../assets/icons/youtube-svgrepo-com.svg";
import twitterSvg from "../assets/icons/twitter-svgrepo-com.svg";
import { useNavigate } from 'react-router';

const Card = ({id, name, description, image_url, instagram_url, youtube_url, twitter_url}) => {
    const navigate = useNavigate();

    return (
        <article className="card">
            {image_url?.length > 0 && (
                <img className='profile-image' crossOrigin='anonymous' src={image_url} alt="fail to load the image" />
            )}
            <div className='mask'></div>
            <div className='creator-info'>
                <div className='name-bar'>
                    <h3 className='name'>{name}</h3>
                    <img className='icon' src={infoIcon} alt="" onClick={() => {
                        navigate(`/view/${id}`);
                    }} />
                    <img className='icon' src={editIcon} alt="" onClick={() => {
                        navigate(`/edit/${id}`);
                    }} />
                </div>
                <div className='link-container'>
                    {instagram_url?.length > 0 && (
                        <a href={instagram_url}>
                            <img src={instagramSvg} alt="" />
                        </a>
                    )}
                    {youtube_url?.length > 0 && (
                        <a href={youtube_url}>
                            <img src={youtubeSvg} alt="" />
                        </a>
                    )}
                    {twitter_url?.length && (
                        <a href={twitter_url}>
                            <img src={twitterSvg} alt="" />
                        </a>
                    )}
                </div>
                <p className='descr'>{description}</p>
            </div>
        </article>
    )
}

Card.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image_url: PropTypes.string,
    instagram_url: PropTypes.string,
    twitter_url: PropTypes.string,
    youtube_url: PropTypes.string,
}

export default Card;