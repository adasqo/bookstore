import React, { useEffect, useState }  from 'react';
import '../styles/Book.css';
import BookForm from './BookForm';

const Book = (props) => {
    const {id, title, author, description, imageUrl, price, genre, year, adaptation, _handleDeleteButton, _handleSubmit} = props;
    const [state, setState] = useState({
        id: id,
        title: title, 
        author: author, 
        description: description, 
        imageUrl: imageUrl, 
        price: price,
        genre: genre,
        year: year,
        adaptation: adaptation
    });
    useEffect(() => {
        if (state.id != id){
            setState({
                id: id,
                title: title, 
                author: author, 
                description: description, 
                imageUrl: imageUrl, 
                price: price,
                genre: genre,
                year: year,
                adaptation: adaptation
            })
        }
    }, [id]);
    const [isEdited, setIsEdited] = useState(false);
    const handleEditButton = () => {
        setIsEdited(true);
    };
    const handleDeleteButton = () => {
        _handleDeleteButton(state.id);
    };
    const handleSubmit = (title, author, description, imageUrl, price, genre, year, adaptation) => {
        const newState = {
            id: id,
            title: title, 
            author: author, 
            description: description, 
            imageUrl: imageUrl, 
            price: price,
            genre: genre,
            year: year,
            adaptation: adaptation
        }
        setState(newState)
        setIsEdited(false);
        _handleSubmit(newState);
    };
    const handleCancleButton = () => {
        setIsEdited(false);
    };
    if(isEdited){
        return (
            <BookForm _handleCancleButton={handleCancleButton} _handleSubmit={handleSubmit} state={state}/>
        );
    } else {
        return (
            <div className="container" style={{maxWidth: 1000}}>
                <div className="row bg-light">
                    <div className="col-lg-2.5 col-md-3 col-sm-5" style={{padding: 20}}>
                        <img src={state.imageUrl} className="img-thumbnail rounded"/>
                    </div>
                    <div className="col-lg-6.5 col-md-6 col-sm-4" style={{padding: 20}}>
                        <h2>{state.title}</h2>
                        <h3>{state.author}</h3>
                        <p>{state.description}</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3" style={{padding: 20}}>
                        <h2>{state.price + "$"}</h2>
                        <h3>{state.genre}</h3>
                        <h3>{state.year}</h3>
                        <div className="film">
                            <a href={state.adaptation}>Film</a>
                        </div>
                        <div className="buttons">
                            <button type="button" className="btn" onClick={()=>{handleEditButton()}}>Edit</button>
                            <button type="button" className="btn" onClick={()=>{handleDeleteButton()}}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

export default Book;
