import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { supabase } from "../client";
import profileSvg from "../assets/icons/profile-svgrepo-com.svg";
import instagramSvg from "../assets/icons/instagram-color-svgrepo-com.svg";
import youtubeSvg from "../assets/icons/youtube-color-svgrepo-com.svg";
import twitterSvg from "../assets/icons/twitter-color-svgrepo-com.svg";

function ViewCreator() {
    const params = useParams();
    // console.log(params.creatorId);

    const [creator, setCreator] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const {data, error} = await supabase.from('creators').select('*').eq('id', params.creatorId);
            if (!error) {
                if (data.length > 0) {
                    setCreator(data[0]);
                }
            } else {
                console.log("error", error);
            }
        }

        fetchData();
    }, [])

    return (
        <div>
            <header>
                <h1>View Creator</h1>
            </header>
            {creator !== null && (
                <div className="creator-content">
                    { creator.image_url?.length > 0 ? (
                        <img className="image" src={creator.image_url} alt="" />
                    ) : (
                        <img className="image" src={profileSvg} alt="" />
                    )}
                    {/* <img className="image" src={creator.image_url} alt="" /> */}
                    <div className="info">
                        <h3>{creator.name}</h3>
                        { creator.instagram_url?.length > 0 && ( 
                            <a className="social-media" href={creator.instagram_url}>
                                <img className="icon" src={instagramSvg} alt="" />
                                <h4>{creator.instagram_url}</h4>
                            </a> 
                        )}
                        { creator.youtube_url?.length > 0 && (
                            <a className="social-media" href={creator.youtube_url}>
                                <img className="icon" src={youtubeSvg} alt="" />
                                <h4>{creator.youtube_url}</h4>
                            </a>
                        )}
                        { creator.twitter_url?.length > 0 && (
                            <a className="social-media" href={creator.twitter_url}>
                                <img className="icon" src={twitterSvg} alt="" />
                                <h4>{creator.twitter_url}</h4>
                            </a>
                        )}
                        <p style={{textAlign: "left", marginTop: "20px"}}>{creator.description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ViewCreator;