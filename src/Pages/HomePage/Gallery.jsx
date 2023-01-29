import React from 'react';

const Gallery = () => {
    return (
        <div>
            <h2 className='text-sky-900 font-bold text-2xl py-2 my-4 text-center '> Tour gallery</h2>
            <section className="py-6 bg-slate-100">
	<div className="container flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			<img className="object-cover w-full bg-slate-100 aspect-square" src="https://source.unsplash.com/random/300x300/?1" />
			<img className="object-cover w-full bg-slate-100 aspect-square" src="https://source.unsplash.com/random/300x300/?2" />
			<img className="object-cover w-full bg-slate-100 aspect-square" src="https://source.unsplash.com/random/300x300/?3" />
			<img className="object-cover w-full bg-slate-100 aspect-square" src="https://source.unsplash.com/random/300x300/?4" />
		</div>
	</div>
</section>
        </div>
    );
};

export default Gallery;