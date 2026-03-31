
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="text-2xl font-bold text-center bg-blue-950 p-10 m-10 text-blue-100 rounded-2xl">CPRG 306: Web Development 2 - Assignments</h1>
      </header>
      <section className="flex flex-col bg-blue-300 text-blue-950 font-semibold m-10 p-10 rounded-2xl">
        <Link href="week-2" className="py-5 border-3 px-7 rounded-4xl mb-5">Go to Week-2</Link>
        <Link href="week-3" className="py-5 border-3 px-7 rounded-4xl mb-5">Go to Week-3</Link>
        <Link href="week-4" className="py-5 border-3 px-7 rounded-4xl mb-5">Go to Week-4</Link>
        <Link href="week-5" className="py-5 border-3 px-7 rounded-4xl mb-5">Go to Week-5</Link>
        <Link href="week-6" className="py-5 border-3 px-7 rounded-4xl mb-5">Go to Week-6</Link>
        <Link href="week-7" className="py-5 border-3 px-7 rounded-4xl mb-5">Go to Week-7</Link>
        <Link href="week-8" className="py-5 border-3 px-7 rounded-4xl mb-5">Go to Week-8</Link>
        <Link href="week-9" className="py-5 border-3 px-7 rounded-4xl mb-5">Go to Week-9</Link>
        <Link href="week-10" className="py-5 border-3 px-7 rounded-4xl">Go to Week-10</Link>


      </section>
    </main>
  );
}
