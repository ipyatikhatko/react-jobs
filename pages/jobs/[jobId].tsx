import { NextPage } from "next";
import React from "react";

type JobsPageProps = {};

const JobsPage: NextPage<JobsPageProps> = () => {
  return (
    <>
      <div className="p-8 h-full">
        <div className="w-3/4 pb-16 mx-auto">
          <h1 className="font-bold text-2xl text-slate-700 mb-2">
            Middle React Developer Needed
          </h1>
          <div className="mb-4 flex gap-3 text-green-600 font-bold text-xl">
            <span>2000$</span>
            <span>-</span>
            <span>3000$</span>
          </div>
          <h3 className="font-bold text-xl text-slate-600">Job Description</h3>
          <p className="mb-4 text-slate-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus
            aspernatur sed vel nemo architecto aut facere consequatur laudantium
            reprehenderit voluptates optio minus officia quidem rerum quo quae
            itaque assumenda, saepe ullam distinctio ducimus incidunt doloremque
            ipsum. Odio, nobis minima. Dignissimos ratione doloribus pariatur,
            adipisci quo voluptatibus ea, quam vitae dolor cumque corrupti
            provident quia? Dolor tempora adipisci quisquam unde. In mollitia
            ducimus suscipit omnis vitae incidunt amet sed, sunt facere dolore
            qui excepturi magni delectus voluptatum commodi ullam recusandae
            officiis quaerat! Ipsum, facilis. Numquam eligendi quibusdam
            consequuntur, perspiciatis consequatur ipsa voluptatem quisquam,
            enim ab porro in hic ipsum reprehenderit. Hic quas expedita officiis
            vel ex, consectetur corporis, commodi nam error cum, sequi possimus
            asperiores! Laborum natus, possimus, quia dignissimos dolore esse
            alias voluptatum cumque inventore aut itaque beatae tenetur unde in
            officia soluta impedit? Aliquam natus totam sunt. Non incidunt
            minima nihil nemo odio tempore velit eum molestias, ducimus minus
            commodi magnam quidem perspiciatis eos amet nesciunt modi quo totam
            sed. Ab consequatur officiis architecto qui nesciunt commodi
            doloribus velit harum. Obcaecati ullam alias, quo ducimus voluptatem
            impedit veniam architecto culpa unde iure? Suscipit exercitationem
            laboriosam id at vero ratione iure perferendis, perspiciatis quam.
            Ad deleniti voluptatem excepturi omnis atque architecto nulla itaque
            facere ipsam consequatur quidem non ut, harum provident pariatur
            voluptates quasi tempora? Doloribus vel in laborum possimus, ea
            excepturi minus voluptate iusto impedit, itaque temporibus. Natus,
            fugiat! Quae, quasi maxime impedit recusandae quisquam esse totam
            amet odio aliquid neque! Consequuntur labore nemo in ab nostrum
            adipisci alias aut autem velit exercitationem nihil aperiam, quia
            perferendis a illum porro dolores voluptate. Molestiae ipsa quia
            consequatur. Provident distinctio corrupti voluptas minus dicta enim
            eaque tempora reiciendis delectus accusamus cupiditate, expedita
            consectetur quod ea voluptatum atque mollitia fugit neque corporis
            deserunt fugiat veniam nulla! Reprehenderit deserunt assumenda
            laborum!
          </p>
          <h3 className="font-bold text-xl text-slate-600">Technologies</h3>
          <div className="mt-2 flex flex-wrap gap-2 text-xs w-2/3">
            <span className="px-2 py-1 bg-slate-100 group-hover:bg-slate-300 rounded-full">
              yup
            </span>
            <span className="px-2 py-1 bg-slate-100 group-hover:bg-slate-300 rounded-full">
              formik
            </span>
            <span className="px-2 py-1 bg-slate-100 group-hover:bg-slate-300 rounded-full">
              NextAuth
            </span>
            <span className="px-2 py-1 bg-slate-100 group-hover:bg-slate-300 rounded-full">
              GraphQL
            </span>
            <span className="px-2 py-1 bg-slate-100 group-hover:bg-slate-300 rounded-full">
              typescript
            </span>
            <span className="px-2 py-1 bg-slate-100 group-hover:bg-slate-300 rounded-full">
              zustand
            </span>
            <span className="px-2 py-1 bg-slate-100 group-hover:bg-slate-300 rounded-full">
              mui
            </span>
            <span className="px-2 py-1 bg-slate-100 group-hover:bg-slate-300 rounded-full">
              next.js
            </span>
          </div>
          <h3 className="mt-4 font-bold text-xl text-slate-600">
            Requirements
          </h3>
          <ul className="ml-4 list-disc text-sm text-slate-500">
            <li>3+ years of experience in front end</li>
            <li>1.5+ years of experience using Next.js</li>
            <li>Write high quality and reusable code</li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-12 left-0 right-0 grid place-items-center">
        <button className="py-2 px-6 bg-green-300 text-green-700 rounded-full shadow-lg transition-all hover:shadow-green-200 hover:bg-green-400 hover:text-green-100">
          Send CV
        </button>
      </div>
    </>
  );
};

export default JobsPage;
