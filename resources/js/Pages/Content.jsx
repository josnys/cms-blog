import ContentSection from '@/Components/ContentSectionFull';
import GallerySection from '@/Components/GallerySection';
import NotFound from '@/Components/NotFound';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Single() {
     const { info } = usePage().props;
     const page = info.page?.data;
     
     const displaySection = (content, i) => {
          if (content.type == 'Content') {
               return <ContentSection content={content} />;
          } else if (content.type == 'Gallery') {
               return <GallerySection content={content} />;
          } else {
               return null;
          }
     }

     return (
          <GuestLayout>
               <Head title="Welcome" />

               {page ? displaySection(page) : <NotFound />}
          </GuestLayout>
     );
}
