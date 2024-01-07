import favicon from '@assets/images/favicon.svg';
import { TranslationInput } from '../TranslationInput';

export default function App() {
	return (
		<main className='bg-hero bg-no-repeat bg-cover bg-center min-h-screen px-3 flex justify-center content-center flex-col items-center '>
			<img src={favicon} alt='favicon' className='w-28 max-auto' />
			<TranslationInput />
		</main>
	);
}
