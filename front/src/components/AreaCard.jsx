
//import { Card, CardContent } from "@/components/ui/card";
function AreaCard({ name, img }) {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden shadow-lg 
    w-full sm:w-1/2 md:w-1/3 lg:w-1/4 min-w-[120px] min-h-[120px] 
     h-50 sm:h-62 md:h-70 lg:h-76">
      <img src={img} alt={name} className="w-full h-24 object-cover" />
      <div className="p-2 text-center text-sm font-medium">{name}</div>
      <span className="absolute top-2 right-2 bg-red-500 w-3 h-3 rounded-full"></span>
    </div>
  );
}
export default AreaCard