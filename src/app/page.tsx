import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
<figure className="md:flex bg-slate-100 rounded-xl p-8 md: dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="/asif.jpeg" alt="" width="384" height="512"/>
  <div className="pt-6 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “My name is muhammad asif abbas i am student class 7 sesmester i belong from Rahim Yar Khan i am doing AI crouse which is top trending in the world.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        M Asif Abbas
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Commerce College
      </div>
    </figcaption>
  </div>
</figure></div>
    </main>
  );
}
