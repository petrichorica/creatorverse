import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { supabase } from "../client";
import { useNavigate } from 'react-router';

function EditCreator() {
    const params = useParams();
    const navigate = useNavigate();

    const [creator, setCreator] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        
        const { error } = await supabase
                        .from('creators')
                        .update([{
                            name: formJson.name,
                            image_url: formJson.image_url || undefined,
                            instagram_url: formJson.instagram_url || undefined,
                            youtube_url: formJson.youtube_url || undefined,
                            twitter_url: formJson.twitter_url || undefined,
                            description: formJson.description || undefined,
                        }])
                        .eq('id', params.creatorId);
        if (error) {
            console.log("error", error);
        } else {
            navigate("/");
        }
    }

    const handleDelete = async () => {
        const { error } = await supabase
                        .from('creators')
                        .delete()
                        .eq('id', params.creatorId);
        if (error) {
            console.log("error", error);
        } else {
            navigate("/");
        }
    }

    const confirmDelete = () => {
        const confirm = window.confirm("Do you want to delete this creator?");
        if (confirm) {
            handleDelete();
        }
    }

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
        <div className="edit-creator">
            <header>
                <h1>Edit</h1>
            </header>
            {creator != null && (
                <article>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name<span style={{color: 'red'}}> *</span>
                            <input 
                                name="name" 
                                type="text" 
                                placeholder="Creator Name" 
                                autoComplete="off" 
                                defaultValue={creator.name}
                                required />
                        </label>
                        <label>
                            Image URL
                            <input 
                                name="image_url" 
                                type="text" 
                                placeholder="Image URL" 
                                autoComplete="off"
                                defaultValue={creator.image_url}
                            />
                        </label>
                        <label>
                            Instagram URL
                            <input 
                                name="instagram_url" 
                                type="text" 
                                placeholder="https://www.instagram.com/username" 
                                autoComplete="off" 
                                defaultValue={creator.instagram_url}
                            />
                        </label>
                        <label>
                            Youtube URL
                            <input 
                                name="youtube_url" 
                                type="text" 
                                placeholder="https://www.youtube.com/xxx" 
                                autoComplete="off" 
                                defaultValue={creator.youtube_url}
                            />
                        </label>
                        <label>
                            Twitter URL
                            <input 
                                name="twitter_url"
                                type="text"
                                placeholder="https://twitter.com/username"
                                autoComplete="off"
                                defaultValue={creator.twitter_url}
                            />
                        </label>
                        <label>
                            Description<span style={{color: 'red'}}> *</span>
                            <textarea 
                                name="description" 
                                rows={5} 
                                placeholder="Description"
                                defaultValue={creator.description}
                                required
                            ></textarea>
                        </label>
                        <div className="grid">
                            <button type="submit">Edit</button>
                            <button className="delete-button" type="button" onClick={confirmDelete} >Delete</button>
                        </div>
                    </form>
                </article>
            )}
        </div>
    )
}

export default EditCreator;