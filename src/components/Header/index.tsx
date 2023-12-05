import hero from '@assets/images/hero_img.jpg';

const Header = () => {
	return (
		<>
			<h1 className='text-3xl font-bold underline'>Hello world!</h1>
			<img src={hero} alt='hero' />
		</>
	);
};

export default Header;
