//import { Card, CardContent } from "@/components/ui/card";
function SensorCard({ name, value, alert, img }) {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden shadow-lg min-w-[120px]">
      <img src={img} alt={name} className="w-full h-24 object-cover" />
      <div className="p-2 text-center text-sm font-medium">
        {name}
        {value && <div className="font-bold">{value}</div>}
        {alert && <div className="text-red-500 text-xs">{alert}</div>}
      </div>
      <span className="absolute top-2 right-2 bg-red-500 w-3 h-3 rounded-full"></span>
    </div>
  );
}
export default SensorCard