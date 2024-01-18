export default function ContentSection({ content }) {
     return (<section className="w-full p-4 mt-4">
          <div className="container col-span-12 mx-auto">
               <div className="w-full text-slate-600">
                    <h1 className="text-xl font-medium text-center">{content.name}</h1>
                    <article className="w-full prose text-justify max-w-none prose-md" dangerouslySetInnerHTML={{ __html: content.description }}></article>
                    <div className="grid w-full grid-cols-2 gap-4 mt-4 md:grid-cols-4">
                         {content.medias.map((media, i) => {
                              return <img key={`img-${i}`} src={media.url} alt={media.name} loading="eager" className="object-cover h-auto max-w-full rounded-lg" />;
                         })}
                    </div>
               </div>
          </div>
     </section>);
}