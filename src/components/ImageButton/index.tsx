interface ImageTextComponentProps {
	image: string;
	altText: string;
}

export const ImageButton = ({ image, altText }: ImageTextComponentProps) => {
	return (
		<>
			<button
				type='button'
				className='border-[#4D5562] rounded-md border-2 p-1'
			>
				<img src={image} alt={altText} />
			</button>
		</>
	);
};
