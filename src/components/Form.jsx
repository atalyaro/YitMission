import React from 'react';
import { useState } from 'react';

export default function Form({ links, setLinks, setColor, setCategoryName,
    setTitle, setSubTitle, setAuthorName, setSlideIndex }) {
    let [counter, setCounter] = useState(1)

    const AddImage = () => {
        let data = counter + 1
        setCounter(data)
        let tmp_links = [...links, { id: data, url: "" }]
        setLinks(tmp_links)
    }

    const RemoveLink = id => {
        let tmp_links = links.filter(link => link.id !== id)
        setLinks(tmp_links)
        setSlideIndex(1)
    }

    const AddLink = (id, url) => {
        let tmp_links = [...links]
        let tmp_link = tmp_links.find(l => l.id === id)
        tmp_link.url = url
        setLinks(tmp_links)
    }
    return (
        <div className="form">
            <label>תמונות</label>
            <div className="images">
                {links.map(link => (
                    <div key={link.id} className="imageurl">
                        <input className="inputurl" type="text" value={link.url}
                            onChange={(e) => AddLink(link.id, e.target.value)} />
                        <button className="buttonurl" onClick={() => RemoveLink(link.id)}
                            disabled={links.length === 1}>מחק</button>
                    </div>
                ))}
            </div>
            <button className="buttonadd" onClick={() => AddImage()}>הוסף תמונה</button>
            <label>צבע רקע - שם קטגוריה</label>
            <select onChange={e => setColor(e.target.value)}>
                <option value="red" defaultValue>אדום</option>
                <option value="yellow">צהוב</option>
                <option value="green">ירוק</option>
                <option value="blue">כחול</option>
            </select>
            <label htmlFor="catagory_name">שם קטגוריה</label>
            <input type="text" name="catagory_name" onChange={e => setCategoryName(e.target.value)} />
            <label htmlFor="title">כותרת</label>
            <textarea name="title" onChange={e => setTitle(e.target.value)} />
            <label htmlFor="sub_title">כותרת משנה</label>
            <textarea name="sub_title" onChange={e => setSubTitle(e.target.value)} />
            <label htmlFor="author_name">שם מחבר</label>
            <input type="text" name="author_name" onChange={e => setAuthorName(e.target.value)} />
        </div>
    )
}

