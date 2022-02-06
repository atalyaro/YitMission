import React from 'react'
import { useState, useEffect } from 'react';

export default function Card({ links, color, categoryName, title, subTitle, authorName, slideIndex, setSlideIndex }) {

    useEffect(() => {
    }, [])

    const plusSlides = (n, e) => {
        let x = slideIndex + n
        if (links[x - 1].url == "") {
            e.prevent.event()
        } else {
            setSlideIndex(x)
        }
    }

    return (
        <div className="card">
            {links.length > 1 && links[1].url != '' ? <div className="arrows">
                <a className="prev" onClick={(e) => plusSlides(-1, e)}>&#10094;</a>
                <a className="next" onClick={(e) => plusSlides(1, e)}>&#10095;</a>
            </div> : ""}
            {links.map((link, index) => (
                <div key={link.id} className={slideIndex == index + 1 && link.url != "" ? 'activeSlide' : 'unActiveSlide'}>
                    <img className="imgGallery" src={link.url} />
                </div>
            ))}
            <div className="info">
                <p className={color}>{categoryName}</p>
                <p className="ptitle">{title}</p>
                <p className="psubtitle">{subTitle}</p>
                <p className="pauthorname">{authorName}</p>
            </div>
        </div >
    )
}
