import { CardSection } from './cards/CardsSection';
import { HeroSection } from './hero/HeroSection';
import { NostrosSection } from './nosotros/NosotrosSection';
import { CtaSection } from './cta/CtaSection';

export const Landing = () => {
    return (
        <main className='grid mt-60 md:mt-90 gap-125 lg:mt-0 lg:gap-0 lg:grid-rows-[1fr_1fr_1fr]'>
            <HeroSection />
            <CardSection />
            <NostrosSection />
            <CtaSection />
        </main>
    )
}