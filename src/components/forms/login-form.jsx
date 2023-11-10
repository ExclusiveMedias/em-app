import Link from 'next/link'; 
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../hooks/use-auth'; 

const schema = yup.object({
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
}).required();

const LoginForm = () => {
    const { signin, signInWithGoogle } = useAuth(); 

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const handleGoogleLogin = async () => {
        try {
          await signInWithGoogle();
          toast.success("Logged in successfully");
          // Redirect or perform additional actions after successful login
        } catch (error) {
          toast.error("Login failed. Please check your credentials.");
          console.error(error);
        }
        reset(); // Reset the form
      };

    const onSubmit = async (data) => {          
        try {
            const userData = await signin(data.email, data.password);
            toast.success("Logged in successfully");
            // Redirect or perform additional actions after successful login
        } catch (error) {
            toast.error("Login failed. Please check your credentials.");
            console.error(error);
        }
        reset(); // You may or may not want to reset the form depending on your UX preference
    }; 

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ToastContainer position="top-center" />
                <label htmlFor="email">Email Address <span>**</span></label>
                <input {...register("email")} id="email" type="text" placeholder="Your Email" />
                <p className="form_error">{errors.email?.message}</p>

                <label htmlFor="pass">Password <span>**</span></label>
                <input {...register("password")} id="pass" type="password" placeholder="Password" />
                <p className="form_error">{errors.password?.message}</p>

                <div className="login-action mb-20 fix">
                    <span className="log-rem f-left">
                        <input id="remember" type="checkbox" />
                        <label htmlFor="remember">Remember me!</label>
                    </span>
                    <span className="forgot-login f-right">
                        <Link href="/forgot-password">Lost your password?</Link>
                    </span>
                </div>
                <button type="submit" className="login-btn w-100">Login Now</button>
                <div className="sign-up text-center mt-30">
                    <span>New User? </span>
                    <button type='submit'  className="login-text-btn">
                        <Link href="/register">Register Now</Link>
                    </button>
                    <span>or </span>
                    <button
          type="button"
          className="login-with-google-btn"
          onClick={handleGoogleLogin}
        >
          Login with Google
        </button>
                </div>
            </form> 
        </>
    );
};

export default LoginForm;
