import ContentSection from '@/Components/ContentSection';
import GallerySection from '@/Components/GallerySection';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, Head, usePage } from '@inertiajs/react';

export default function Single() {
    const { info } = usePage().props;
    const page = info.page.data ?? info.page;
    
    const displaySection = (content, i) => {
        if(content.type == 'content'){
            return <ContentSection key={`section-${i}`} content={content} />;
        } else if(content.type == 'gallery') {
            return <GallerySection key={`section-${i}`} content={content} />;
        } else {
            return null;
        }
    }

    return (
        <GuestLayout>
            <Head title="Welcome" />

            {page.block_display.map((block, i) => {
                return displaySection(block, i);
            })}
        </GuestLayout>
    );
}
