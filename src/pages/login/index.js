import React, {useState} from "react";
import './style.css';
import Modal from "../components/modal";
import api from "../../services/api";


const DEFAULT_VALUES = {
    username: '',
    password: '',
    avatarUrl: '/images/avatar_placeholder.png'
}

const Component = (userAvatar) => {
    const [values, setValues] = useState(DEFAULT_VALUES);
    const [isOpened, setIsOpened] = useState(false);

    const handlerChange = evnt => {
        setValues(values=> ({
            ...values,
            [evnt.target.name]: evnt.target.value
        }))
    }

    const handlerSubmit = evnt => {
        evnt.preventDefault();
        api.addUser(values);
    }

    const handleClose = () => {
        setIsOpened(false);
    }

    const handleOpen = (values) => {
        setIsOpened(true);
    }

    return (
        <>
            <div className="form_container_login">
                <h1>Login</h1>
                <form>
                    <InputLine
                        required
                        name="username"
                        label="Username"
                        onChange={handlerChange}
                        value={values.username}
                    />
                    <InputLine
                        required
                        name="password"
                        label="Password"
                        onChange={handlerChange}
                        value={values.password}
                        type="password"
                    />
                    <div className="but_container">
                        <button type="button" onClick={handleOpen} className="left_button">Registrar</button>
                        <button>Login</button>
                    </div>

                </form>
            </div>
            {
                isOpened &&
                <Modal onClose={handleClose}>
                    <InputLine
                        required
                        name="username"
                        label="Username"
                        onChange={handlerChange}
                        value={values.username}
                    />
                    <InputLine
                        required
                        name="password"
                        label="Password"
                        onChange={handlerChange}
                        value={values.password}
                        type="password"
                    />
                    <InputLine
                        required
                        name="avatarUrl"
                        label="AvatarUrl"
                        onChange={handlerChange}
                        value={values.avatarUrl}
                    />
                    <div className="form_group_login">
                        <label>Avatar Preview: </label>
                        <img className="avatar" alt="Avatar" src={values.avatarUrl}/>
                    </div>
                    <div className="alt_but_container">
                        <button onClick={handlerSubmit}>Registrar</button>
                    </div>
                </Modal>
            }
        </>
    )
}

const InputLine = ({ value, name, onChange, label, type, ...others}) => {
    return (
        <div className="form_group_login">
            <label htmlFor={name}>{label}</label>
            <input name={name} value={value} onChange={onChange} type={type} {...others} />
        </div>
    )
}


export default Component;