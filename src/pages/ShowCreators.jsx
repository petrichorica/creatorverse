import Card from "../components/Card";
import AddCard from "../components/AddCard";
import { supabase } from "../client";
import { useEffect, useState } from "react";
import "./style.scss"

function ShowCreators() {
    const [creators, setCreators] = useState([]);
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const {data, error} = await supabase
                                .from('creators')
                                .select('*')
                                .order('id');
            // console.log("data", data);
            // console.log("error", error);
            if (!error) {
                setCreators(data);
                setFetched(true);
            } else {
                console.log("error", error);
            }
        }

        fetchData();
    }, [])

    return (
        <div className="show-creators">
            <header>
                <h1>CREATORVERSE</h1>
            </header>
            <div className="creator-container">
                {!fetched && (
                    <h3 style={{margin: "50px 80px"}} aria-busy="true"> </h3>
                )}
                {creators.map(creator => {
                    return (
                        <Card
                        key={creator.id}
                        id={creator.id}
                        name={creator.name}
                        description={creator.description}
                        image_url={creator.image_url}
                        instagram_url={creator.instagram_url}
                        youtube_url={creator.youtube_url}
                        twitter_url={creator.twitter_url}
                        />
                    )
                })}
                <AddCard />
            </div>
        </div>
    )
}

export default ShowCreators;