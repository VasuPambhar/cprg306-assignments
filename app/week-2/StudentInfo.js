import Link from "next/link";

export default function StudentInfo() {
  return(
    <main>
      <section>
        <h1>Name: Vasu Pambhar</h1>
        Github: <Link className="underline" href="https://github.com/VasuPambhar/cprg306-assignments">VasuPambhar/cprg306-assignments</Link>
      </section>
    </main>
  );
}