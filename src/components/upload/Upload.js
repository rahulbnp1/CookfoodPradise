import './Upload.css'; // Link to CSS


export default function Upload() {
    return (
        <>           
            <div className="upload-container">
                <h1>Upload Your Recipe</h1>
                <p className="upload-description">Share your favorite dish with the community</p>
                <form className="upload-form">
                    <label>Picture:</label>
                    <input type="file" name="file" accept="image/*" />

                    <label>Title:</label>
                    <input type="text" name="title" placeholder="Enter recipe title" />

                    <label>Cooking Time:</label>
                    <input type="text" name="cookingTime" placeholder="e.g. 45 minutes" />

                    <label>Recipe:</label>
                    <textarea name="recipe" placeholder="Write the recipe..." rows="4"></textarea>

                    <button type="submit">Upload</button>
                </form>
            </div>
           
        </>
    );
}
