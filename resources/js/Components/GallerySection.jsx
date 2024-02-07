import Carousel from "@/Components/Carousel";

export default function ContentSection({ content, className = '', carousel = false }) {
     return (<section id={content.id ?? ''} className={`w-full py-4 md:py-8 ${className}`}>
          <div className="w-full col-span-12 py-5 md:container md:py-10 md:mx-auto">
               <div className="w-full text-slate-600">
                    <h1 className="mt-4 text-2xl font-medium text-center md:text-4xl">{content.name}</h1>
                    {content.description ? <article className="w-full p-4 mx-auto mt-4 prose text-center md:p-0 md:w-1/2 max-w-none prose-md" dangerouslySetInnerHTML={{ __html: content.description }}></article> : null}
                    {!carousel ? <div className="grid w-full grid-cols-2 gap-4 mt-8 md:grid-cols-4">
                         {content.medias.map((media, i) => {
                              return <img key={`img-${i}`} src={media.url} alt={media.name} loading="eager" className="object-cover h-auto max-w-full rounded-lg" />;
                         })}
                    </div>:null}
                    {carousel ? <div className="mt-8">
                         <Carousel data={content.medias} />
                    </div> : null}
               </div>
          </div>
     </section>);
}