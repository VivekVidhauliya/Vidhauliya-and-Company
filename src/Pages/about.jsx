export function About() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Vidhauliya and Company
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
          Vidhauliya and Company is a trusted provider of modern vending
          solutions, offering high-quality coffee machines, water dispensers,
          and snack vending systems designed for offices, shops, and commercial
          spaces. Our mission is to deliver reliable service, affordable pricing,
          and seamless installation so your workplace never runs out of refreshment.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Premium Quality Machines
            </h3>
            <p className="text-gray-600">
              We supply durable and efficient vending machines built for
              continuous commercial use with consistent performance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Affordable & Flexible Pricing
            </h3>
            <p className="text-gray-600">
              Choose from rental, purchase, or customized service plans that
              perfectly match your business needs and budget.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Fast Service & Support
            </h3>
            <p className="text-gray-600">
              Our quick installation and responsive maintenance ensure your
              coffee and refreshment service runs smoothly at all times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
