import React, {useState} from "react";
import './style.css';

const DEFAULT_LIST = [
    {
        title: "Chill study music",
        imgUrl: 'https://i.pinimg.com/originals/5a/e5/a6/5ae5a6080c8461137b036a300533c0da.jpg',
        userAvatar: 'https://thumbs.dreamstime.com/b/raccoon-glasses-cap-headphones-vector-illustration-animal-hipster-music-fashion-style-print-clothes-104346236.jpg',
        description: 'Lofi beats',
        date: new Date(2021, 2, 9)
    },
    {
        title: "Chill study music",
        imgUrl: 'https://i.pinimg.com/originals/5a/e5/a6/5ae5a6080c8461137b036a300533c0da.jpg',
        userAvatar: 'https://thumbs.dreamstime.com/b/raccoon-glasses-cap-headphones-vector-illustration-animal-hipster-music-fashion-style-print-clothes-104346236.jpg',
        description: 'Lofi beats',
        date: new Date(2021, 2, 9)
    },
    {
        title: "Chill study music",
        imgUrl: 'https://i.pinimg.com/originals/5a/e5/a6/5ae5a6080c8461137b036a300533c0da.jpg',
        userAvatar: 'https://thumbs.dreamstime.com/b/raccoon-glasses-cap-headphones-vector-illustration-animal-hipster-music-fashion-style-print-clothes-104346236.jpg',
        description: 'Lofi beats',
        date: new Date(2021, 2, 9)
    },
    {
        title: "Chill study music",
        imgUrl: 'https://i.pinimg.com/originals/5a/e5/a6/5ae5a6080c8461137b036a300533c0da.jpg',
        userAvatar: 'https://thumbs.dreamstime.com/b/raccoon-glasses-cap-headphones-vector-illustration-animal-hipster-music-fashion-style-print-clothes-104346236.jpg',
        description: 'Lofi beats',
        date: new Date(2021, 2, 9)
    }
    
]

export default () => {
    const [list, setList] = useState(DEFAULT_LIST);
    return (
        <div className="home_container">
            {
                list.map(row=><Card {...row} />)
            }
        </div>
    )
}


const Card = ({ title, imgUrl, userAvatar, description, date}) => {
    return (
        <div className="home_card">
            <img src={imgUrl} alt="imagem" />
            <div className="title_container">
                <img className="avatar" src={userAvatar} alt="avatar" />
                <div className="title_box">
                    <h1>{title}</h1>
                    <h2>Publicado em {date.toLocaleDateString('pt-br')}</h2>
                </div>
            </div>
            <p>{description}</p>
        </div>
    )
}