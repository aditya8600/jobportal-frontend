const TestimonialsSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-10">What Our Users Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <p className="text-gray-600 mb-4">
            “This platform helped me land my dream job within a week. The process was smooth and quick.”
          </p>
          <h4 className="text-blue-700 font-semibold">– Anjali, Candidate</h4>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <p className="text-gray-600 mb-4">
            “As a recruiter, I found the dashboard extremely helpful to track applicants and manage postings.”
          </p>
          <h4 className="text-blue-700 font-semibold">– Rajiv, Recruiter</h4>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <p className="text-gray-600 mb-4">
            “Simple interface and powerful features. It saves so much time!”
          </p>
          <h4 className="text-blue-700 font-semibold">– Shruti, HR Manager</h4>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;