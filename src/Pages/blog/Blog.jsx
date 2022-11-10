import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
	useTitle('Blog')
    return (
       <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
			<div>
				<h3 className="font-semibold">Difference between SQL and NoSQL?</h3>
				<p className="mt-1 dark:text-gray-400">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
			</div>
			<div>
				<h3 className="font-semibold">What is JWT, and how does it work?</h3>
				<p p className = "mt-1 dark:text-gray-400" > JSON Web Token JWT is an open standard(RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key / or a public key pair by the Identity Provider(IdP).So the integrity and authenticity of the token can be verified by other parties involved.The purpose of using JWT is not to hide data but to ensure the authenticity of the data.JWT is signed and encoded, not encrypted.JWT is a token based stateless authentication mechanism.Since it is a client - side based stateless session, server doesn 't have to completely rely on a datastore(database) to save session information.</p>
			</div>
			<div>
				<h3 className="font-semibold">What is the difference between javascript and NodeJS?</h3>
				<p className="mt-1 dark:text-gray-400">NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.</p>
			</div>
			<div>
				<h3 className="font-semibold">How does NodeJS handle multiple requests at the same time?</h3>
				<p className="mt-1 dark:text-gray-400">We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.</p>
			</div>
		</div>
	</div>
</section>
    );
};

export default Blog;