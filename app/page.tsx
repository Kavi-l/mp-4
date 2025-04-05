import getData from "@/lib/getData";
import UpdateTitle from "./components/title";

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex flex-wrap justify-evenly bg-[white]">
      {/* create function to update title since it doesnt work for async  */}
      <UpdateTitle title="Home"/> 
      {data.map((item) => (
        <div key={item.id} className="flex flex-col justify-center max-w-[30%] p-[0.5%_1%] m-1 border border-black rounded-xl italic font-bold text-[calc(2px+1vw)] font-[Papyrus] text-center shadow-[2px_2px_8px_black] bg-[#67A8E1FF]">
          <img
            src={item.primaryimageurl }
            alt={item.title}
            className="w-full h-auto object-cover rounded"
          />
          <h2 className="mt-2 font-semibold text-black text-[calc(4px+1.5vw)]">{item.title}</h2>
          <p className="text-blue-800">Artwork type: {item.classification}</p>
        </div>
      ))}
    </main>
  );
}
