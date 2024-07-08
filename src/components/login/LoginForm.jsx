import {useForm} from "react-hook-form";
import React from "react";
import authService from "../../services/authService.js";
import {Link, useNavigate} from 'react-router-dom';
import "./Login.css"
const LoginForm = ({setShowLogin, setShowSignUp})=>{
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const [formValueLogin, setFormValueLogin] = React.useState({
        Username: '',
        Password: ''
    });
    const handleChange = (event) => {
        setFormValueLogin({
            ...formValueLogin,
            [event.target.name]: event.target.value
        });
    };
    const onSubmit = async() => {
        event.preventDefault();
        await authService.login(formValueLogin.Username, formValueLogin.Password)
        navigate("/budget")
        setShowLogin(false);
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="form-body">
            <div className="form-group">
                <label htmlFor="Username">Email</label>
                <input id="Username" type="email" name="Username"  placeholder="Email"
                       {...register("Username", {required: true, onChange:(e)=>{handleChange(e)}})}/>
                {errors.Username && <span className="input-required-error">This field is required</span>}
            </div>
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input id="Password" type="password" name="Password" onChange={handleChange} placeholder="Password"
                        {...register("Password", {required: true, onChange:(e)=>{handleChange(e)}})}/>
                {errors.Password && <span className="input-required-error">This field is required</span>}
            </div>
            <div className="form-group">
                <p>Don't have an account yet? <a onClick={()=>{
                    setShowLogin(false);
                    setShowSignUp(true);
                }}> Sign up</a></p>
            </div>
            <button type="submit"> Submit
            </button>
        </form>
    )
}
export default LoginForm