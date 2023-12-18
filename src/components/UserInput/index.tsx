import { useState, ChangeEvent } from 'react';

export const UserInput = () => {
	const [textLength, setTextLength] = useState<number>(0);
	const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setTextLength(event.target.value.length);
	};
	return (
		<section className='flex flex-col justify-between text-xs my-2 w-full h-16 items-end'>
			<textarea
				id='message'
				className='resize-none border-none bg-transparent outline-none w-full h-10 text-xs text-[#CDD5E0] placeholder:text-[#4D5562]'
				placeholder='Write your thoughts here...'
				onChange={handleInputChange}
			></textarea>
			<p className='text-[#4D5562]'>{textLength.toString()}/500</p>
		</section>
	);
};
