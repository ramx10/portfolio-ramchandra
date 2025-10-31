export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("/php/sendMail.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        e.target.reset();
      } else {
        alert("⚠️ Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong. Check console for details.");
    }
  };

  return (
    <section
      id="contact"
      className="
        min-h-screen
        flex flex-col justify-center items-center
        px-4 py-20 mt-16
        bg-gradient-to-br from-lightGradStart to-lightGradEnd
        dark:from-darkGradStart dark:to-darkGradEnd
        transition-colors duration-700
        text-center
      "
    >
      <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-gray-100">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full mx-auto glassmorphism p-8 rounded-lg space-y-5 shadow-lg"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-white text-black 
                     dark:bg-gray-800 dark:text-gray-100 focus:outline-none"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-white text-black 
                     dark:bg-gray-800 dark:text-gray-100 focus:outline-none"
          required
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Message…"
          className="w-full p-3 rounded bg-white text-black 
                     dark:bg-gray-800 dark:text-gray-100 focus:outline-none resize-none"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded w-full transition"
        >
          Send
        </button>
      </form>
    </section>
  );
}
