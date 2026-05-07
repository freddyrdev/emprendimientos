import { CardSection } from './cards/CardsSection';
import { HeroSection } from './hero/HeroSection';
import { NostrosSection } from './nosotros/NosotrosSection';

export const Landing = () => {
    return (
        <main className='grid grid-rows-[1fr_1fr_1fr]'>
            <HeroSection />
            <CardSection />
            <NostrosSection />
        </main>
    )
}