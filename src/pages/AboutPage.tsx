export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Lurevia Store</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the story behind our commitment to bringing you the finest products 
            and exceptional shopping experience.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 lg:p-12">
            {/* Our Story */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Founded in 2020, Lurevia Store began as a vision to create a premium shopping 
                  destination that combines quality, style, and affordability. What started as a 
                  small online boutique has grown into a trusted brand serving customers worldwide.
                </p>
                <p className="mb-4">
                  Our name "Lurevia" represents the allure of beautiful, well-crafted products 
                  that enhance your daily life. We believe that everyone deserves access to 
                  high-quality items that reflect their personal style and values.
                </p>
                <p>
                  Today, we continue to curate an exceptional collection of products across 
                  fashion, electronics, and lifestyle categories, always with our customers' 
                  satisfaction as our top priority.
                </p>
              </div>
            </section>

            {/* Our Mission */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <p className="text-lg text-gray-700 italic">
                  "To provide our customers with carefully selected, high-quality products 
                  that enhance their lifestyle while delivering an exceptional shopping 
                  experience built on trust, reliability, and outstanding customer service."
                </p>
              </div>
            </section>

            {/* Our Values */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
                    <p className="text-gray-600">
                      Every product is carefully vetted to ensure it meets our high standards 
                      for quality, durability, and design.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Focused</h3>
                    <p className="text-gray-600">
                      Our customers are at the heart of everything we do. We listen, adapt, 
                      and continuously improve based on your feedback.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                    <p className="text-gray-600">
                      We embrace new technologies and trends to bring you the latest and 
                      most innovative products in the market.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
                    <p className="text-gray-600">
                      We're committed to responsible business practices and supporting 
                      brands that share our environmental values.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Team Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  At Lurevia Store, we're more than just an online retailer. We're your 
                  trusted partner in finding products that truly make a difference in your life. 
                  Our team works tirelessly to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Source products from reputable manufacturers and brands</li>
                  <li>Provide detailed product information and honest reviews</li>
                  <li>Offer competitive pricing without compromising on quality</li>
                  <li>Ensure fast, secure, and reliable shipping</li>
                  <li>Deliver exceptional customer service at every touchpoint</li>
                </ul>
              </div>
            </section>

            {/* Contact CTA */}
            <section className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Have questions about our products or want to learn more about Lurevia Store? 
                We'd love to hear from you.
              </p>
              <a
                href="/contact"
                className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Contact Us
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
