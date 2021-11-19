import React, { useEffect, useState }  from 'react';
import '../styles/BookForm.css';

const BookForm = (props) => {
    const {id, state, _handleCancleButton, _handleSubmit} = props;
    const [title, setTitle] = useState(state.title);
    const [author, setAuthor] = useState(state.author);
    const [description, setDescription] = useState(state.description);
    const [imageUrl, setImageUrl] = useState(state.imageUrl);
    const [price, setPrice] = useState(state.price);
    const [genre, setGenre] = useState(state.genre);
    const [year, setYear] = useState(state.year);
    const [adaptation, setAdaptation] = useState(state.adaptation);
    const [submitEnabled, setSubmitEnabled] = useState(false);
    
    
    useEffect(() => {
        setSubmitEnabled(title && author && description && imageUrl && price && genre && year && adaptation);
    }, [title, author, description, imageUrl, price, genre, year, adaptation]);

    const handleSubmit = (e) => {
        e.preventDefault();
        _handleSubmit(title, author, description, imageUrl, price, genre, year, adaptation)
    };
    const handleCancleButton = () => {
        _handleCancleButton();
    };
    return (
        <article>
            <form className="container bg-light" style={{padding: 30}} onSubmit={handleSubmit}>
                <div className="form-control" >
                    <label> Title </label>
                    <input 
                        type="text"
                        value={title}
                        onChange={(e)=>{setTitle(e.target.value)}}
                    />
                </div>
                <div className="form-control">
                    <label> Author </label>
                    <input 
                        type="text"
                        value={author}
                        onChange={(e)=>{setAuthor(e.target.value)}}
                    />
                </div>
                <div className="form-control">
                    <label> Description </label>
                    <input 
                        type="text"
                        value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}
                    />
                </div>
                <div className="form-control">
                    <label> Image Url </label>
                    <input 
                        type="text"
                        value={imageUrl}
                        onChange={(e)=>{setImageUrl(e.target.value)}}
                    />
                </div>
                <div className="form-control">
                    <label> Price </label>
                    <input 
                        type="text"
                        value={price}
                        onChange={(e)=>{setPrice(e.target.value)}}
                    />
                </div>
                <div className="form-control">
                    <label> Genre </label>
                    <input 
                        type="text"
                        value={genre}
                        onChange={(e)=>{setGenre(e.target.value)}}
                    />
                </div>
                <div className="form-control">
                    <label> Year </label>
                    <input 
                        type="text"
                        value={year}
                        onChange={(e)=>{setYear(e.target.value)}}
                    />
                </div>
                <div className="form-control">
                    <label> Adaptation </label>
                    <input 
                        type="text"
                        value={adaptation}
                        onChange={(e)=>{setAdaptation(e.target.value)}}
                    />
                </div>
                <div className="formButtons">
                    <button disabled={!submitEnabled} type="submit" className="btnSubmit">Sumbit</button>
                    <button type="button" className="btn" onClick={() => {handleCancleButton()}}>Cancel</button>
                </div>
            </form>
        </article>
    );
};

export default BookForm;
