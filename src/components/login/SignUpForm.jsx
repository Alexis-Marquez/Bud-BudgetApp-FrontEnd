import {useForm} from "react-hook-form";
import React from "react";
import authService from "../../services/authService.js";
import {redirect, redirectDocument, useNavigate} from "react-router-dom";
import "./Login.css"
const SignUpForm = ({setShowLogin, setShowSignUp})=>{
    const navigate = useNavigate();
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
        console.log(formValue)
        await authService.register(formValue.Username, formValue.Name, formValue.Password);
        navigate("/budget")
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
                <label htmlFor="Name">Name</label>
                <input id="Name" type="text" name="Name" placeholder="Name"
                       {...register("Name", {required: true, onChange: (e)=>{handleChange(e)}})}/>
                {errors.Name && <span className="input-required-error">This field is required</span>}
            </div>
            <div className="form-group">
                <label htmlFor="Username">Email</label>
                <input id="Username" type="email" name="Username" placeholder="Email"
                       {...register("Username", {required: true, onChange: (e)=>{handleChange(e)}})}/>
                {errors.Username && <span className="input-required-error">This field is required</span>}
            </div>
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input id="Password" type="password" name="Password" placeholder="Password"
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