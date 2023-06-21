import { useNavigate } from "react-router";
import { supabase } from "../client";

/* 
{
    "name": "Sonia",
    "image_url": "https://images.squarespace-cdn.com/content/v1/5e46b1a9062f855176f5297e/1664447939504-70A9JSTXDSGBDSYSNZC7/DSCF9015.jpg",
    "instagram_url": "https://www.instagram.com/sonia_mod",
    "youtube_url": "",
    "description": "Landscape photographer based in Portugal whose work has been featured in Lonely Planet, CondeNast Traveler, Fujifilm, Fujilove Magazine, Ignant, Tiny Atlas Quarterly and more."
}
*/

function AddCreator() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        const { error } = await supabase
                        .from('creators')
                        .insert([{
                            name: formJson.name,
                            image_url: formJson.image_url || undefined,
                            instagram_url: formJson.instagram_url || undefined,
                            youtube_url: formJson.youtube_url || undefined,
                            twitter_url: formJson.twitter_url || undefined,
                            description: formJson.description || undefined,
                        }])
        if (error) {
            console.log("error", error);
        } else {
            navigate('/');
        }
    }
    return (
        <div className="add-creator">
            <header>
                <h1>Add New Creator</h1>
            </header>
            <article>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name<span style={{color: 'red'}}> *</span>
                        <input name="name" type="text" placeholder="Creator Name" autoComplete="off" required />
                    </label>
                    <label>
                        Image URL
                        <input name="image_url" type="text" placeholder="Image URL" autoComplete="off" />
                    </label>
                    <label>
                        Instagram URL
                        <input name="instagram_url" type="text" placeholder="https://www.instagram.com/username" autoComplete="off" />
                    </label>
                    <label>
                        Youtube URL
                        <input name="youtube_url" type="text" placeholder="https://www.youtube.com/xxx" autoComplete="off" />
                    </label>
                    <label>
                        Twitter URL
                        <input name="twitter_url" type="text" placeholder="https://twitter.com/username" autoComplete="off" />
                    </label>
                    <label>
                        Description<span style={{color: 'red'}}> *</span>
                        <textarea name="description" rows={5} placeholder="Description"required ></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </article>
        </div>
    )
}

export default AddCreator;