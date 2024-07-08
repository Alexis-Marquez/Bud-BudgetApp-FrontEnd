import {useForm} from "react-hook-form";
import React from "react";
import authService from "../../services/authService.js";
import {redirect, redirectDocument} from "react-router-dom";
import "./Login.css"
const SignUpForm = ({setShowLogin, setShowSignUp})=>{
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const [formValue, setFormValue] = React.useState({
        Name: '',
        Username: '',
        Password: '',
    });
    const onSubmit = async() => {
        event.preventDefault();
        await authService.register(formValue);
        redirect("/budget")
    }
    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="form-body">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" placeholder="Name"
                       {...register("Name", {required: true, onChange: (e)=>{handleChange(e)}})}/>
                {errors.Name && <span className="input-required-error">This field is required</span>}
            </div>
            <div className="form-group">
                <label htmlFor="username">Email</label>
                <input id="username" type="email" name="username" placeholder="Email"
                       {...register("Username", {required: true, onChange: (e)=>{handleChange(e)}})}/>
                {errors.Username && <span className="input-required-error">This field is required</span>}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" placeholder="Password"
                        {...register("Password", {required: true, onChange: (e)=>{handleChange(e)}})}/>
                {errors.Password && <span className="input-required-error">This field is required</span>}
            </div>
            <div className="form-group">
                <p>Already have an account? <a onClick={()=>{
                    setShowSignUp(false);
                    setShowLogin(true);
                }}> Log in </a> </p>
            </div>
            <button type="submit"> Submit
            </button>
        </form>
    )
}
export default SignUpForm