import { ImageButton } from '../ImageButton';
import { LanguageChanger } from '../LanguageChanger';
import { TranslateButton } from '../TranslateButton';
import { UserInput } from '../UserInput';

import soundIcon from '@assets/images/sound_max_fill.svg';
import copyIcon from '@assets/images/Copy.svg';

export const TranslationInput = () => {
	return (
		<section className='bg-[#212936] bg-opacity-60 rounded-lg border border-[#4D5562] p-4 flex flex-col'>
			<LanguageChanger />
			<hr className='border-t border-[#4D5562]' />
			<UserInput />
			<section className='flex justify-between items-center'>
				<section className='flex gap-1'>
					<ImageButton image={soundIcon} altText='Sound Icon' />
					<ImageButton image={copyIcon} altText='Copy Icon' />
				</section>
				<TranslateButton />
			</section>
		</section>
	);
};
