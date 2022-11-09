import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Login = () => {
	const {signIn} = useContext(AuthContext);
const handleConnect = event => {

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
//         <div className="w-full mx-auto bg-gray-200 max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
// 	<h1 className="text-2xl font-bold text-center">Login</h1>
// 	<form onSubmit={handleConnect} className="space-y-6 ng-untouched ng-pristine ng-valid">
// 		<div className="space-y-1 text-sm">
// 			<label for="username" className="block dark:text-gray-400">Username</label>
// 			<input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
// 		</div>
// 		<div className="space-y-1 text-sm">
// 			<label for="password" className="block dark:text-gray-400">Password</label>
// 			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
// 			<div className="flex justify-end text-xs dark:text-gray-400">
// 				<a rel="noopener noreferrer" href="">Forgot Password?</a>
// 			</div>
// 		</div>
// 		<button type='submit' className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Sign in</button>
// 	</form>
// 	<div className="flex items-center pt-4 space-x-1">
// 		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
// 		<p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
// 		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
// 	</div>
// 	<div className="flex justify-center space-x-4">
// 		<button aria-label="Log in with Google" className="p-3 rounded-sm">
// 			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
// 				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
// 			</svg>
// 		</button>
		
// 	</div>
// 	<p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
// 		<a rel="noopener noreferrer"  className="underline dark:text-gray-100" ><Link  to="/signUp">Sign Up</Link></a>
// 	</p>
// </div>
 <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src="" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleConnect} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>New to Genius Car <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;