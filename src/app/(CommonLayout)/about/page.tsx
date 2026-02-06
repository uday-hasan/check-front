const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-3xl w-full border border-gray-300 rounded-xl p-8 shadow-md space-y-10">
        <h1 className="text-4xl font-bold mb-6 text-blue-600 text-center">
          About MediStore
        </h1>

        {/* Our Story */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
          <p className="text-gray-700">
            MediStore was founded to simplify access to healthcare. We noticed
            that people often struggle to find reliable medicines and healthcare
            products online. Our goal is to bridge that gap and provide a
            trusted, convenient, and secure platform for everyone.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">Mission & Vision</h2>
          <p className="text-gray-700">
            <strong>Mission:</strong> To provide high-quality medicines and
            healthcare products directly to your door, ensuring convenience and
            reliability.
          </p>
          <p className="text-gray-700">
            <strong>Vision:</strong> To become the most trusted online pharmacy
            in Bangladesh, empowering people to take control of their health
            with ease.
          </p>
        </section>

        {/* Core Values */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">Core Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Quality – We only provide genuine medicines.</li>
            <li>Trust – Transparency and honesty in everything we do.</li>
            <li>Convenience – Easy online ordering and fast delivery.</li>
            <li>Customer Care – We prioritize your health and satisfaction.</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
          <p className="text-gray-700">
            At MediStore, we combine quality, convenience, and reliability. Our
            platform is secure, our delivery is fast, and our team is always
            ready to assist you. Your health and satisfaction are our top
            priorities.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
