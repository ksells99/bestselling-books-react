import React from 'react';
import style from './book.module.css'

const Book = ({title, author, image, description}) => {              // get title, author, image, description from App.js
    return(
        <div className={style.book}>
            <h1>{title}</h1>
            <p className={style.p}>By {author}</p>
            <img className={style.image} src={image} alt=""/>
            <p>{description}</p>
        </div>
    )
}


export default Book; 