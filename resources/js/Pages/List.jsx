import GuestLayout from '@/Layouts/GuestLayout';
import { Link, Head, usePage } from '@inertiajs/react';

export default function Single() {
     const { info } = usePage().props;
     const page = info.page.data;
     
     return (
          <GuestLayout>
               <Head title="Welcome" />

               <section className="w-full">
                    <div className="container mx-auto">
                         <div className="grid grid-cols-3 gap-3 p-4">
                              {page.map((content, i) => {
                                   return <Link href={route('site.page', content.slug)} className={`p-2 border rounded bg-slate-50 border-slate-100 hover:shadow-md`} key={`content${i}`} >
                                        <div className="w-full mt-1 text-sm text-slate-500">
                                             {content.cover ? <img src={content.cover.url.external ?? content.cover.url.small} className="object-cover object-center w-full h-24" alt={content.cover.name} /> : null}
                                             <h4 className="flex items-center mt-2 font-semibold text-md">{content.title}</h4>
                                             <div className="mt-2 font-normal text-justify line-clamp-3" dangerouslySetInnerHTML={{ __html: content.intro }}></div>
                                             <p className="flex justify-between p-2 mt-2 font-medium border-t border-t-slate-400">
                                                  <span>By: {content.user.username}</span>
                                                  <span className="text-right">Published: {content.published.text}</span>
                                             </p>
                                        </div>
                                   </Link>
                              })}
                         </div>
                    </div>
               </section>
               
          </GuestLayout>
     );
}
