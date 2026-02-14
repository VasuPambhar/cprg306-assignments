import NewItem from "./NewItem";

export default function Page() {
  return (
     <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 font-bold">
      <header className="w-full">
        <h1 className="text-white text-3xl font-bold text-center mb-6">
          Shopping List - Add Item
        </h1>
      </header>
      <section className="w-full">
        <NewItem />
      </section>

    </main>
  );
}