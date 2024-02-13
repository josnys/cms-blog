export default function ContentSectionFull({content, className = ''}) {
     return (<section id={content.id ?? ''} className={`w-full p-4 mt-4 ${className}`}>
          <div className="w-full p-2 md:p-0 md:col-span-12 md:mx-auto md:container">
               <div className="w-full text-slate-600">
                    <h1 className="mt-8 text-2xl font-medium md:text-4xl">{content.title}</h1>
                    <article className="w-full mt-4 text-sm italic prose text-justify text-slate-500 max-w-none prose-md" dangerouslySetInnerHTML={{ __html: content.intro }}></article>
                    <span className="w-auto p-1 mt-2 text-xs rounded-full bg-slate-50 text-slate-300">By <span className="text-slate-500">{content.user.related.person.fullname}</span></span>
                    {content.cover ? <div className="w-full p-2 mt-4 rounded-lg bg-slate-50">
                         <img 
                              src={content.cover.url.external ? content.cover.url.external : content.cover.url.large} 
                              className="object-cover object-center w-full h-48 rounded-lg md:h-96" 
                              alt={content.cover.name}
                         />
                         {content.cover.description ? <figure className="mt-2 text-xs italic text-slate-400">{content.cover.description}</figure> : null}
                    </div> : null}
                    <article className="w-full mt-4 prose text-justify max-w-none prose-md" dangerouslySetInnerHTML={{ __html: content.body }}></article>
               </div>
          </div>
     </section>);
}