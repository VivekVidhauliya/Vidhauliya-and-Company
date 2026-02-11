import { Link as RouterLink } from "react-router-dom";

export function Home() {
  return (
    <div>
      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-100">
        <h3 className="text-4xl font-bold text-center mb-12">
          Why Choose Vidhauliya and Company?
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "High Quality Machines",
              desc: "Durable, modern vending machines designed for continuous office and commercial use.",
            },
            {
              title: "Cost-Effective Service",
              desc: "Affordable rental and purchase options suitable for small to large businesses.",
            },
            {
              title: "Quick Support & Maintenance",
              desc: "Fast response service to ensure your coffee never stops flowing.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition text-center"
            >
              <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-600 text-white text-center px-6">
        <h3 className="text-4xl font-bold mb-4">
         Ready to Upgrade Your Workplace with Smart Vending Solutions?
        </h3>
        <p className="mb-8 text-lg opacity-95">
          Contact us today to get the best vending solution for your office, shop, or workplace.
        </p>

        <RouterLink
          to="/contact"
          className="bg-black px-8 py-3 rounded-2xl font-semibold hover:scale-105 transition"
        >
          Contact Now
        </RouterLink>
      </section>
    </div>
  );
}
