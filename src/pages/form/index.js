import React, {useState} from "react";
import './style.css';

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
        alert('Olá')
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
                    value={values.imgUrl}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

const FormGroup = ({ value, name, onChange, label, type}) => {
    return (
        <div className="form_group">
            <label htmlFor={name}>{label}</label>
            <input name={name} value={value} onChange={onChange} type={type} />
        </div>
    )
}

export default Component;