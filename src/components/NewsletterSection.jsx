const NewsletterSection = () => (
  <section className="py-16 bg-blue-50">
    <div className="max-w-2xl mx-auto text-center px-6">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Stay Updated</h2>
      <p className="text-gray-600 mb-6">
        Get notified when new jobs or features are added. No spam, we promise.
      </p>
      <form className="flex flex-col sm:flex-row gap-3 justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-auto"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  </section>
);

export default NewsletterSection;
