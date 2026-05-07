import { CardSection } from './cards/CardsSection';
import { HeroSection } from './hero/HeroSection';

export const Landing = () => {
    return (
        <main className='grid grid-rows-[1fr_1fr] gap-25'>
            <HeroSection />
            <CardSection />
        </main>
    )
}