import React, {useState, useEffect} from "react";
import './style.css';
import api from "../../services/api";

const DEFAULT_VALUES = {
        title: '',
        imgUrl: '',
        userAvatar: '',
        description: '',
        date: (new Date().toISOString()).substr(0, 10)
}

const Component = () => {
    const [values, setValues] = useState(DEFAULT_VALUES);

    const handlerChange = evnt => {
        setValues(values=> ({
            ...values,
            [evnt.target.name]: evnt.target.value
        }))
    }

    const handlerSubmit = evnt => {
        evnt.preventDefault();
        console.log('submitting', values);
        api.addVideo({...values, date: new Date(`${values.date}`) });
        alert('Cadastro realizado com sucesso!');
    }

    const HandlerImage = (img) => {

        useEffect(() => {
            if (img) {
                let image = new Image();
                image.onload = evnt => {
                    setValues(values=> ({
                        ...values,
                        imgUrl: img
                    }))
                }
                image.onerror = evnt => {
                    setValues(values=> ({
                        ...values,
                        imgUrl: '/images/no_image_available.png'
                    }))
                }
                image.src = img;
            }
            else
                setValues(values=> ({
                    ...values,
                    imgUrl: '/images/no_image_available.png'
                }))
    }, [img]);
}
    
    return (
        <div className="form_container">
            <h1>Cadastro de Video</h1>
            <form onSubmit={handlerSubmit}>
                <FormGroup
                    required
                    name="title"
                    label="Titulo"
                    onChange={handlerChange}
                    value={values.title}
                />
                <FormGroup
                    required
                    name="description"
                    label="Descrição"
                    onChange={handlerChange}
                    value={values.description}
                />
                <FormGroup
                    required
                    name="date"
                    label="Data"
                    onChange={handlerChange}
                    value={values.date}
                    type="date"
                />
                <FormGroup
                    required
                    name="imgUrl"
                    label="Imagem"
                    onChange={handlerChange}
                    value={HandlerImage(values.imgUrl)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

const FormGroup = ({ value, name, onChange, label, type, ...others}) => {
    return (
        <div className="form_group">
            <label htmlFor={name}>{label}</label>
            <input name={name} value={value} onChange={onChange} type={type} {...others} />
        </div>
    )
}

export default Component;