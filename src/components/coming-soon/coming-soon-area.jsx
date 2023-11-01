import Time from '@/src/utils/time';
import  { CopyRight, SocialLinksTwo } from '../common/social-links';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const schema = yup .object({
    first_name: yup.string().required().label("First Name"),
    last_name: yup.string().required().label("Last Name"),
    email: yup.string().required().label("Email"),
    
}).required();
// const sendDataToSendGrid = async (first_name, last_name, email) => {
//   console.log(listSecrets);
//     const data = {
//       "list_ids": ["cd5ffe1d-548c-4d25-9eac-7d2951f0b647"],
//       "contacts": [
//         {
//           "first_name": first_name,
//           "last_name": last_name,
//           "email": email,
//         }
//       ]
//     };
  
//     try {
//       const response = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
//         method: 'PUT',
//         headers: {
//           'Authorization': `Bearer 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`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error('Error:', errorData);
//         return;
//       }
  
//       console.log('Success:', await response.json());
  
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };
  
 
const ComingSoonArea = () => {
    const { register, handleSubmit,  reset, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
      });
      const onSubmit = async (data) => {
        notify();
      
        try {
          const response = await fetch('/api/mail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              first_name: data.first_name,
              last_name: data.last_name,
              email: data.email,
            }),
          });
      
          if (!response.ok) {
            const errorData = await response.json();
            console.error('Error:', errorData);
            // Handle the error as needed, e.g., show an error message
            return;
          }
      
          console.log('Success:', await response.json());
          // Handle success as needed, e.g., show a success message
      
          reset(); // Reset the form
        } catch (error) {
          console.error('Error:', error.message);
          // Handle the error as needed, e.g., show an error message
        }
      };
      const notify = () => toast("You are in the now.");
 

    return (
        <>
            
            <div className="coming-soon-time-mobile">
                <div className="time-count-box" >
                <ul className='time-count-box'>
                    <li className="time-count">
                            {Time("2024-01-01 00:00:00").days}<span>Days</span> 
                    </li>
                    <li className="time-count">
                            {Time("2024-01-01 00:00:00").hours} <span>Hours</span> 
                    </li>
                    <li className="time-count">
                             {Time("2024-01-01 00:00:00").minutes}<span>Minutes</span> 
                    </li>
                    <li className="time-count">
                      <a suppressHydrationWarning>{Time("2024-01-01 00:00:00").seconds}</a> <span>Seconds</span>
                    </li>
                  </ul>
                     
                </div>
            </div>
            <div className="coming-soon-area d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="comin-soon-text">
                                <h2>Exciting Innovations Ahead</h2>                             
                                <p>Stay tuned for groundbreaking AI solutions and transformative educational courses. Be the first to know by following us!</p>
                                <div className="contact-form mb-30">
                                    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                                    <ToastContainer />
                                        <input {...register("first_name")} name="first_name" type="text" className='mb-0' placeholder="First name" />
                                        <p className="form_error">{errors.first_name?.message}</p>
                                        <input {...register("last_name")} name="last_name" type="text" className='mb-0' placeholder="Last name" />
                                        <p className="form_error">{errors.last_name?.message}</p>
                                        <input {...register("email")} name="email" type="email" placeholder="email address" />
                                        <p className="form_error">{errors.email?.message}</p>
                                        <button type="submit" className="login-btn btn-black">subscribe now</button>
                                    </form> 
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7"></div>
                    </div>
                </div>
            </div>
            <div className="coming-soon-time d-none d-xl-block">
                <div className="time-count-box " >
                <ul className="time-count-box">
                    <li className="time-count">
                            {Time("2024-01-01 00:00:00").days}<span>Days</span> 
                    </li>
                    <li className="time-count">
                            {Time("2024-01-01 00:00:00").hours} <span>Hours</span> 
                    </li>
                    <li className="time-count">
                             {Time("2024-01-01 00:00:00").minutes}<span>Minutes</span> 
                    </li>
                    <li className="time-count">
                      <a suppressHydrationWarning>{Time("2024-01-01 00:00:00").seconds}</a> <span>Seconds</span>
                    </li>
                  </ul>
                     
                </div>
            </div>

            <div className="coming-soon-icon">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="coming-footer mb-10">
                                <span>Follow us: </span> 
                                <div className="coming-social">
                                    {"  "}<SocialLinksTwo /> {" "}
                                </div>
                            </div>
                            <div className="copyright">
                                <p><CopyRight /></p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComingSoonArea;