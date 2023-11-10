import Link from 'next/link'; 
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// pages/register.js
import { useAuth } from '../../hooks/use-auth';

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
}).required();

const RegisterForm = () => {
  const { signup } = useAuth(); // Assuming your useAuth hook provides a signup method
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Assuming signup is an async function
    signup(data.email, data.password, data.name)
      .then(() => {
        toast.success("Registration successful!");
        // Handle further success logic, like redirecting the user
      })
      .catch(error => {
        console.error(error);
        toast.error("Registration failed. Please try again.");
      });

    reset(); // Consider whether you want to reset the form on successful registration
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ToastContainer position="top-center" />
        <label htmlFor="name">User Name <span>**</span></label>
        <input {...register("name")} id="name" type="text" placeholder="Your Name" />
        <p className="form_error">{errors.name?.message}</p>

        <label htmlFor="email-id">Email Address <span>**</span></label>
        <input {...register("email")} id="email-id" type="text" placeholder="Your Email" />
        <p className="form_error">{errors.email?.message}</p>

        <label htmlFor="pass">Password <span>**</span></label>
        <input {...register("password")} id="pass" type="password" placeholder="Password" />
        <p className="form_error">{errors.password?.message}</p>

        <div className="mt-10"></div>

        <button type='submit' className="login-btn w-100">Register Now</button>
        <div className="sign-up text-center mt-30">
          <span>Already have account?</span>

          <Link href="/login"> 
                        <button className="login-text-btn">login Now</button>                    
                    </Link>                 

        </div>
      </form>
    </>
  );
};

export default RegisterForm;