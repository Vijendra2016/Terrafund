import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       <h1 className="text-9xl font-mono font-semibold px-1 py-0.5 rounded">Terrafund</h1>
       <p className="text-sm font-mono font-semibold px-1 py-0.5 rounded">Building Wealth on Solid Ground</p>

        <Image
          className="dark:invert"
          src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68904ae2e584c1956349ed88_futuraland.png"
          alt="Next.js logo"
          width={1200}
          height={800}
          priority
        />
        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>Terrafund.com</p>
      </footer>
    </div>
  );
}
