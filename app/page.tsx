import Image from "next/image";
import data from "@/app/data/data.json"
console.log(data)

interface Phone{
  name : string;
  id : string;
}

export default function Home() {
  let str : string = "mohamed amine mezzat"
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.map((item, i) => <h1 key={i}>{item.size}</h1>)}
    </main>
  );
}
