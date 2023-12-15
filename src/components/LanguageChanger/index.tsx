import { useState } from 'react';

const languages: string[] = ['English', 'French', 'Spanish'];

export const LanguageChanger = () => {
	const [isHovered, setIsHovered] = useState<boolean>(false);
	return (
		<section className='flex items-center py-1'>
			<div className='flex gap-x-4'>
				<button className='text-[#4D5562] hover:text-[#F9FAFB] text-xs'>
					Detect Language
				</button>
				{languages.map((language, index) => {
					return (
						<button
							key={index}
							className='text-[#4D5562] hover:text-[#F9FAFB] text-xs'
						>
							{language}
						</button>
					);
				})}
			</div>
			<svg
				width='16'
				height='16'
				viewBox='0 0 16 16'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='ml-2 cursor-pointer'
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<path
					d='M12 6L8 10L4 6'
					stroke='#6C727F'
					strokeWidth='2'
					className={isHovered ? 'stroke-white' : ''}
				/>
			</svg>
		</section>
	);
};
