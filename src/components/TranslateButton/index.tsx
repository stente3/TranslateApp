import translateImage from '@assets/images/Sort_alfa.svg';

export const TranslateButton = () => {
	return (
		<>
			<button
				type='button'
				className='flex bg-[#3662E3] items-center justify-center text-[#F9FAFB] gap-1 py-1 px-2 rounded-lg text-xs'
			>
				<img src={translateImage} alt='Translate icon' />
				Translate
			</button>
		</>
	);
};
