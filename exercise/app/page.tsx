import TableContent from "./components/TableContent";

export default function Home() {
  return (
    <main className="p-5 bg-[#0A1117] w-full h-screen text-white">
      <div className="mb-5">
        <h1 className="text-2xl">Members</h1>
        <span className="">View your members here.</span>
      </div>
      <TableContent />
    </main>
  );
}
