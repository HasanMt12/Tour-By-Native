import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';



const Login = () => {
    useTitle('login')

    const {signIn} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

       signIn(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
        })
        .then(error => console.log(error));
    }

    return (
        <div className="hero w-full my-20">
            
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
	<h1 className="text-2xl font-bold text-center">Login</h1>
	<form onSubmit={handleLogin} className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			<label for="username" className="block dark:text-gray-400">Username</label>
			<input type="text" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="password" className="block dark:text-gray-400">Password</label>
			<input type="password" name="password"  placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
			<div className="flex justify-end text-xs dark:text-gray-400">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>
		<button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Sign in</button>
	</form>
	
	<p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
          <p className='underline '>New to Genius Car <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
	</p>
</div>
        </div>

    );
};

export default Login;