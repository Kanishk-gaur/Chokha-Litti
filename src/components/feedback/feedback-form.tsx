"use client";
import { useState } from "react";
import Image from "next/image"; // Import Next.js Image component
import React from "react";

export default function FeedbackForm() {
  // Define interface for form data
  interface FormData {
    name: string;
    city: string;
    phone: string;
    rating: string;
    suggestions: string;
  }
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    city: "",
    phone: "",
    rating: "",
    suggestions: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  interface MessageState {
    text: string;
    type: string;
  }
  
  const [message, setMessage] = useState<MessageState>({ text: "", type: "" });
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (value: number) => {
    setFormData((prev) => ({ ...prev, rating: value.toString() }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage({
          text: "Feedback submitted successfully!",
          type: "success",
        });
        setFormData({
          name: "",
          city: "",
          phone: "",
          rating: "",
          suggestions: "",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err) { // Changed variable name from 'error' to 'err' and using it below
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setMessage({ text: `Failed to submit feedback: ${errorMessage}`, type: "error" });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage({ text: "", type: "" }), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-amber-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-2xl border border-orange-100">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image on the left - replaced img with Next.js Image component */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative w-full h-[600px]">
              <Image
                src="/images/Logo.png"
                alt="Customer feedback"
                fill
                className="object-contain"
                priority // Marks this image as high priority for LCP
              />
            </div>
          </div>

          {/* Form on the right */}
          <div className="w-full md:w-1/2">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-orange-800 mb-3">
                Share Your Feedback
              </h1>
              <p className="text-orange-600 text-xl">
                We value your opinion and suggestions
              </p>
            </div>

            {message.text && (
              <div
                className={`p-4 mb-6 rounded-lg text-center font-medium text-lg ${
                  message.type === "success"
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}
              >
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-black font-medium mb-2 text-xl">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 text-lg bg-white text-black border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-black font-medium mb-2 text-xl">
                    Native City*
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-5 py-4 text-lg bg-white text-black border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Enter your city"
                    required
                  />
                </div>

                <div>
                  <label className="block text-black font-medium mb-2 text-xl">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 text-lg bg-white text-black border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    pattern="[0-9]{10}"
                    placeholder="10-digit phone number"
                    required
                  />
                  <p className="text-md text-orange-600 mt-2">
                    We will never share your phone number
                  </p>
                </div>

                <div>
                  <label className="block text-black font-medium mb-2 text-xl">
                    Rating*
                  </label>
                  <div className="flex items-center justify-center space-x-4">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => handleRatingClick(rating)}
                        onMouseEnter={() => setHoveredRating(rating)}
                        onMouseLeave={() => setHoveredRating(null)}
                        className={`w-16 h-16 flex items-center justify-center rounded-xl text-2xl font-bold transition-all
                          ${
                            formData.rating === rating.toString() ||
                            (hoveredRating && rating <= hoveredRating)
                              ? "bg-orange-500 text-white shadow-md transform hover:scale-105"
                              : "bg-white text-orange-500 border-2 border-orange-300 hover:bg-orange-100"
                          }`}
                      >
                        {rating}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 px-4 text-sm text-orange-600">
                    <span>Excellent</span>
                    <span>Poor</span>
                  </div>
                  <input
                    type="hidden"
                    name="rating"
                    value={formData.rating}
                    required
                  />
                </div>

                <div>
                  <label className="block text-black font-medium mb-2 text-xl">
                    Suggestions
                  </label>
                  <textarea
                    name="suggestions"
                    value={formData.suggestions}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-5 py-4 text-lg bg-white text-black border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Any suggestions for improvement?"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !formData.rating}
                className={`w-full py-5 px-6 rounded-xl font-bold text-white text-xl transition-all ${
                  isSubmitting
                    ? "bg-orange-400 cursor-not-allowed"
                    : !formData.rating
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-md hover:shadow-lg"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Submit Feedback"
                )}
              </button>
            </form>

            <div className="mt-8 text-center text-orange-600 text-lg">
              <p>Thank you for helping us improve!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}