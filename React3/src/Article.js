import React from 'react';
import './Article.css';

const Article = ({ title, author, text, publicationDate, image, titleAlignment, imagePosition, font, backgroundColor }) => {
    const titleStyle = {
        fontFamily: font.family,
        fontSize: font.size,
        color: font.color,
        textAlign: titleAlignment,
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: imagePosition === 'left' ? 'row' : 'row-reverse',
        backgroundColor: backgroundColor || 'white',
        padding: '1rem',
        alignItems: 'flex-start', // Вирівнювання по верху
    };

    const textStyle = {
        flex: 1,
    };

    const imageStyle = {
        width: '200px',
        height: '200px',
        marginLeft: imagePosition === 'left' ? '1rem' : '0',
        marginRight: imagePosition === 'right' ? '1rem' : '0',
    };

    return (
        <div style={containerStyle} className="article-container">
            {image && <img src={image} alt="Article visual" style={imageStyle} />}
            <div style={textStyle}>
                <h1 style={titleStyle}>{title}</h1>
                <p><strong>Author:</strong> {author}</p>
                <p><strong>Date:</strong> {publicationDate}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Article;