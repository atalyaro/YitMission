import React, { useEffect, useState } from 'react'
import Form from './components/Form';
import Card from './components/Card';


export default function App() {
  let [links, setLinks] = useState([{ id: 1, url: "" }])
  let [color, setColor] = useState("red")
  let [categoryName, setCategoryName] = useState("")
  let [title, setTitle] = useState("")
  let [subTitle, setSubTitle] = useState("")
  let [authorName, setAuthorName] = useState("")
  let [slideIndex, setSlideIndex] = useState(1)

  return (
    <section>
      <main className="main">
        <Form setLinks={setLinks} links={links} setColor={setColor}
          setCategoryName={setCategoryName} setTitle={setTitle} setSubTitle={setSubTitle}
          setAuthorName={setAuthorName} setSlideIndex={setSlideIndex} />
        <Card links={links} color={color} categoryName={categoryName} title={title}
          subTitle={subTitle} authorName={authorName} slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
      </main>
    </section >
  )
}