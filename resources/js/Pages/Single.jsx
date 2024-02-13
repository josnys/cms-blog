import { useForm } from '@inertiajs/react';
import CallToAction from '@/Components/CallToAction';
import CallToActionSimple from '@/Components/CallToActionSimple';
import ContentSectionFull from '@/Components/ContentSectionFull';
import ContentSectionTwo from '@/Components/ContentSectionTwo';
import GallerySection from '@/Components/GallerySection';
import MapDisplay from '@/Components/MapDisplay';
import ContactForm from '@/Components/ContactForm';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, usePage } from '@inertiajs/react';
import NewsLetterUpdate from '@/Components/Front/NewsLetterUpdate';

export default function Single() {
    const { info, app, additional } = usePage().props;
    const page = info.page.data ?? info.page;
    const cta = info.cta ?? null;
    const blocks = Object.values(page.block_display.blocks);
    const newsletters = Object.values(page.block_display.newsletter);
    const { data, setData } = useForm({
        mapData: cta.map
    });
    
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

    const gsearchPubData = (query) => {
        let mapData = cta.map.filter((map) => {
            return map.name.toLowerCase().lastIndexOf(`${query.toLowerCase()}`) != -1;
        });
        setData('mapData', mapData);
    }

    return (
        <GuestLayout>
            <Head title="Welcome" />
            {cta ? <CallToAction appData={app.data} ctaData={cta.app} gsearchPubData={gsearchPubData} /> : null}
            {cta ? <section className="z-0 flex items-center justify-center w-full -mt-36">
                <div className="flex items-center w-full md:container md:mx-auto">
                    <div className="w-3/4 mx-auto">
                        <MapDisplay mapData={data.mapData} />
                    </div>
                </div>
            </section> : null}
            {blocks.map((block, i) => {
                return displaySection(block, i);
            })}
            {cta ? <CallToActionSimple ctaData={cta.app} /> : null}
            {newsletters.length ? <NewsLetterUpdate newsletters={newsletters} /> : null}
            <ContactForm bgData={additional.mascot} />
        </GuestLayout>
    );
}
