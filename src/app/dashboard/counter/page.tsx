import { CardCounter } from "@/shoping-cart";

export const metadata = {
  title: "Shoping Cart",
  description: "This is the counter page",
};
export default function CounterPage() {
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className="">Productos en el carrito</span>
      <CardCounter initialCount={20}/>
      
    </div>
  );
}