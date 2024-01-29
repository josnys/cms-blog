import CallToAction from '@/Components/CallToAction';
import CallToActionSimple from '@/Components/CallToActionSimple';
import ContentSectionFull from '@/Components/ContentSectionFull';
import ContentSectionTwo from '@/Components/ContentSectionTwo';
import GallerySection from '@/Components/GallerySection';
import MapDisplay from '@/Components/MapDisplay';
import ContactForm from '@/Components/ContactForm';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Single() {
    const { info, app, additional } = usePage().props;
    const page = info.page.data ?? info.page;
    const cta = info.cta ?? null;
    const blocks = Object.values(page.block_display);
    
    const displaySection = (content, i) => {
        let className = (i % 2 == 0)?'bg-white':'bg-orange-50/[.85]';
        if(content.type == 'content'){
            return content.display_full ? <ContentSectionFull key={`section-${i}`} content={content} className={className} /> : <ContentSectionTwo key={`section-${i}`} content={content} className={className} />;
        } else if(content.type == 'gallery') {
            return <GallerySection key={`section-${i}`} content={content} className={className} carousel={true} />;
        } else {
            return null;
        }
    }

    return (
        <GuestLayout>
            <Head title="Welcome" />
            {cta ? <CallToAction appData={app.data} ctaData={cta.app} /> : null}
            {cta ? <section className="z-0 flex items-center justify-center w-full -mt-32">
                <MapDisplay />
            </section> : null}
            {blocks.map((block, i) => {
                return displaySection(block, i);
            })}
            {cta ? <CallToActionSimple ctaData={cta.app} /> : null}
            <ContactForm bgData={additional.mascot} />
        </GuestLayout>
    );
}
