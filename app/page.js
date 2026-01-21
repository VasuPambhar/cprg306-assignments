import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="text-2xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      </header>
      <section>
        <Link href="week-2">Go to Week-2</Link>
      </section>
    </main>
  );
}
