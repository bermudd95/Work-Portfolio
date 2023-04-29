import React, { useRef } from 'react'
import { GrSend } from 'react-icons/gr'
import emailjs from '@emailjs/browser';

export const Contact = () => {
    
    const form = useRef();
      
    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs.sendForm('service_u2f5wlu', 'template_oq0mgol', form.current, 'dkSCkT9G1nrflBiqD')
        .then((result) => {
            console.log(result.text);
            window.alert('Your Message has been sent successfully!');
        }, (error) => {
            console.log(error.text);
        });

        document.getElementById('form').reset();
    };
  return (
		<div
			name='contact'
			className='h-full py-10 m-7 border-solid border-t-2 border-gray-400'
		>
			<div className='py-4 text-center'>
				<h1 className='text-3xl font-bold'>Let's chat!</h1>
				<h4 className='text-xl font-semibold py-6'>
					Please fill out the form below and I'll get back to you as soon as
					possible.
				</h4>
			</div>
			<form
				id='form'
				ref={form}
				onSubmit={sendEmail}
				className='max-w-[600px] m-auto pt-5'
			>
				<div className='grid grid-cols-2 gap-2'>
					<input
						name='user_name'
						className='border shadow-lg p-3 rounded-lg'
						type='text'
						placeholder='Full Name'
						required
					/>
					<input
						name='user_email'
						className='border shadow-lg p-3 rounded-lg'
						type='email'
						placeholder='Email'
						required
					/>
				</div>
				<input
					name='user_subject'
					className='border shadow-lg rounded-lg p-3 w-full my-2'
					type='text'
					placeholder='Subject'
					required
				/>
				<textarea
					name='message'
					className='border shadow-lg rounded-lg p-3 w-full'
					cols='30'
					rows='10'
					placeholder='Message'
					required
				/>
				<button className='flex justify-center bg-blue-600 hover:bg-blue-400 border shadow-lg rounded-lg p-3 w-full mt-2'>
					Submit
					<span className='pl-2 pt-1'>
						<GrSend />
					</span>
				</button>
			</form>
		</div>
	);
}

export default Contact