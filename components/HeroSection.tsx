import Image from 'next/image';
import Button from '@/components/Button';

export default function HeroSection() {
	return (
		<section className='flex flex-col gap-2 relative min-h-[75vh] z-40 p-20 xs:text-left'>
			<div className='absolute w-full md:w-3/4 h-full top-0 right-0 z-40'>
				<div className='absolute inset-0 w-full h-full z-50 bg-gradient-to-r from-dark-500 to-transparent' />
				<div className='absolute inset-0 w-full h-full z-50 bg-gradient-to-t from-dark-500 to-transparent' />
				<Image
					src='/hero-img.jpeg'
					alt='mountain bike'
					fill
					className='object-cover object-bottom'
				/>
			</div>
			<div className='grid grid-cols-1 gap-5'>
				<h1 className='text-light-500 font-bold text-4xl md:text-6xl z-50 max-w-[20ch] mt-24'>
					Sales, Service & Repair of Any & All Bicycles
				</h1>
				<p className='text-light-600 text-sm md:text-lg z-50 max-w-[52ch]'>
						Complete Cycling Solutions: Windsor&apos;s Premier Bike Shop for Sales,
						Expert Service & Repair, and a Vast Selection of Parts and Accessories.
				</p>
				<div className='flex flex-row text-center items-center gap-2 z-50'>
					<Button variant='primary-base' href='/contact'>
						Contact Us
					</Button>
					<Button variant='secondary-base' href='/services'>
						Services
					</Button>
				</div>
			</div>
		</section>
	);
}
