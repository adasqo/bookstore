import React, { useState } from 'react';
import '../styles/BookList.css';
import { books } from './../data/data'
import Book from './Book'
import BookForm from './BookForm';
import SortingPanel from './SortingPanel';
import PriceFilter from './PriceFilter';

const BookList = () => {

    const [bookList, setBookList] = useState(books);
    const [addBook, setAddBook] = useState(false);

    const deleteBook = (id) => {
        let newBookList = bookList.filter((book) => book.id !== id);  
        setBookList(newBookList);
    };
    const handleSubmitAddButton = (title, author, description, imageUrl, price, genre, year, adaptation) => {
        let _id = Math.max.apply(Math, bookList.map(function(book) { return book.id; })) + 1;
        setBookList([...bookList, {
            id: _id,
            title: title, 
            author: author, 
            description: description, 
            imageUrl: imageUrl, 
            price: price,
            genre: genre,
            year: year,
            adaptation: adaptation
        }]);
        setAddBook(false);
    };
    const handleAddButton = () => {
        setAddBook(true);
    }
    const handleCancleButton = () => {
        setAddBook(false);
    };
    const handleSubmit = (book) => {
        const newBookList = bookList.map((_book) => {
            if(_book.id === book.id)
                return book
            else 
                return _book
        })
        setBookList(newBookList);
    }
    const handleSortButton = (key) => {
        const sorted = [...bookList].sort(function(book1, book2){
            if(book1[key] < book2[key]) { return -1; }
            if(book1[key] > book2[key]) { return 1; }
            return 0;
        })
        setBookList(sorted);
    }
    const handleFilterButton = (ranges) => {
        setBookList(books);
        const filtered = books.filter((book) => {
            if(book.price < ranges.from || book.price > ranges.to)
                return false;
            return true;
        }).map((book) => { return book; });

        setBookList(filtered);
    }
    return (
        <div className="main">
            <div>
                <div className="container" style={{paddingTop:30}}>
                    <div className="row justify-content-center">
                        <div className="col-12" style={{margin: 10, maxWidth:250}}>
                            <SortingPanel keys={Object.keys(books[0])} _handleSortButton={handleSortButton}/>
                        </div>
                        <div className="col-12" style={{margin: 10, maxWidth:350}}>
                            <PriceFilter _handleFilterButton={handleFilterButton}/>
                        </div>
                    </div>
                </div>
                <div className="bookList">
                {bookList.map((book) => {
                    return <Book
                        id={book.id}
                        title={book.title}
                        author={book.author}
                        description={book.description}
                        imageUrl={book.imageUrl}
                        price={book.price}
                        genre={book.genre}
                        year={book.year}
                        adaptation={book.adaptation}
                        _handleDeleteButton={deleteBook}
                        _handleSubmit={handleSubmit}
                        >
                    </Book>
                })}
                {addBook && <BookForm _handleCancleButton={handleCancleButton} _handleSubmit={handleSubmitAddButton} state={{}}/>}
                </div>
                <button disabled={addBook} className="btnAddBook" onClick={()=>{handleAddButton()}}>Add Book</button>
            </div>
        </div>
    )
};

export default BookList;
