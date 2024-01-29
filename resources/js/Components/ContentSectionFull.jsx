export default function ContentSectionFull({content, className = ''}) {
     return (<section id={content.id ?? ''} className={`w-full p-4 mt-4 ${className}`}>
          <div className="w-full p-2 md:p-0 md:col-span-12 md:mx-auto md:container">
               <div className="w-full text-slate-600">
                    <h1 className="text-2xl font-medium md:text-4xl">{content.name}</h1>
                    <article className="w-full prose text-justify max-w-none prose-md" dangerouslySetInnerHTML={{ __html: content.body }}></article>
               </div>
          </div>
     </section>);
}