import React, {useState, useEffect} from "react";
import './style.css';
import api from "../../services/api";

const Component = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        api.getVideoList()
        .then(l=>{
            setList(l);
        })
    }, [])

    const handlerDelete = (id) => {
        api.deleteVideo(id);
        setList(list.filter(l => l.id !== id))
    }

    return (
        <div className="home_container">
            {
                list.map(row=><Card {...row} handlerDelete={handlerDelete} />)
            }
        </div>
    )
}

const Card = ({ title, imgUrl, userAvatar, description, date, id, handlerDelete}) => {
    const [avatarUrl, setAvatarUrl] = useState('/images/avatar_placeholder.png');

    useEffect(() => {
        if (userAvatar) {
            let img = new Image();
            img.onload = evnt => {
                setAvatarUrl(userAvatar);
            }
            img.onerror = evnt => {
                setAvatarUrl('/images/avatar_placeholder.png');
            }
            img.src = userAvatar;
        }
        else
            setAvatarUrl('/images/avatar_placeholder.png');
}, [userAvatar]);

    return (
        <div className="home_card">
            <img src={"/images/edit_pencil.png"} className="topRightIcon" alt="Editar" />
            <img src={imgUrl} alt="imagem" />
            <div className="title_container">
                <img className="avatar" src={avatarUrl} alt="avatar" />
                <div className="title_box">
                    <h1>{title}</h1>
                    <h2>Publicado em {date.toLocaleDateString('pt-br')}</h2>
                </div>
                <img onClick={() => handlerDelete(id)} src="/images/trashbin.svg" className="trash_icon" alt="deletar video"/>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default Component;