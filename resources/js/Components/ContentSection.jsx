export default function ContentSection({content}){
     return (<section className="w-full p-4 mt-4">
          <div className="container col-span-12 mx-auto">
               <div className="w-full text-slate-600">
                    <h1 className="text-xl font-medium">{content.name}</h1>
                    <article className="w-full prose text-justify max-w-none prose-md" dangerouslySetInnerHTML={{ __html: content.body }}></article>
               </div>
          </div>
     </section>);
}