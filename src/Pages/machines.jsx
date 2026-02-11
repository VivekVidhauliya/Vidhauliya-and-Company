import { Link } from "react-router-dom";

import img2Lane from "../assets/classic-2lane.jpg";
import img3Lane from "../assets/3lane.jpg";
import imgRO from "../assets/RO.jpg";
import imgWater from "../assets/waterdispenser.jpg";

const machines = [
  // Coffee Machines
  {
    name: "2 Lane Coffee Machine",
    desc: "Best for small offices with 2 drink options and low power consumption.",
    image: img2Lane,
  },
  {
    name: "3 Lane Coffee Machine",
    desc: "Perfect for medium workplaces with 3 beverage varieties and quick dispensing.",
    image: img3Lane,
  },
  {
    name: "4 Lane Coffee Machine",
    desc: "Ideal for large offices with multiple drink choices and high serving capacity.",
    image: img3Lane,
  },
  {
    name: "5 Lane Coffee Machine",
    desc: "Advanced vending machine offering 5 beverage options for busy workplaces.",
    image: img3Lane,
  },
  {
    name: "Tea & Coffee Combo Machine",
    desc: "Dual-purpose machine serving both tea and coffee for diverse office needs.",
    image: img2Lane,
  },
  {
    name: "Bean-to-Cup Coffee Machine",
    desc: "Premium fully automatic machine that prepares fresh coffee directly from beans.",
    image: img2Lane,
  },

  // Water Machines
  {
    name: "Hot & Cold Water Dispenser",
    desc: "Energy-efficient water dispenser providing instant hot and cold drinking water.",
    image: imgWater,
  },
  {
    name: "RO Water Purifier Machine",
    desc: "Advanced RO purification system ensuring safe and clean drinking water for offices.",
    image: imgRO, // ✅ fixed
  },

  // Snack Machines (no images yet → fallback will show)
  {
    name: "Automatic Snack Vending Machine",
    desc: "Smart vending machine for chips, biscuits, chocolates, and packaged snacks.",
  },
  {
    name: "Combo Snack & Beverage Machine",
    desc: "Multi-product vending machine dispensing snacks along with cold beverages.",
  },
];

export function Machines() {
  return (
    <section className="p-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Vending & Water Machines
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {machines.map((m, i) => (
          <div
            key={i}
            className="border rounded-2xl p-6 shadow bg-white hover:shadow-lg transition"
          >
            {/* Image or fallback */}
           {m.image ? (
  <div className="h-48 w-full bg-gray-100 rounded-xl mb-4 flex items-center justify-center p-4">
    <img
      src={m.image}
      alt={m.name}
      className="max-h-full max-w-full object-contain"
    />
  </div>
) : (
  <div className="h-48 bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
    <span className="text-gray-500">Image Coming Soon</span>
  </div>
)}


            <h3 className="text-xl font-semibold mb-2">{m.name}</h3>
            <p className="mb-4 text-gray-600">{m.desc}</p>

            <Link
              to="/contact"
              className="bg-black text-white px-4 py-2 rounded-xl inline-block hover:bg-gray-800 transition"
            >
              Contact for Price
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
