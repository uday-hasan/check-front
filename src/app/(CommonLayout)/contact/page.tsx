import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-md w-full border border-gray-300 rounded-xl p-8 shadow-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">
          Contact Us
        </h1>

        <p className="text-gray-700 mb-4">
          <strong>Address:</strong> 123 MediStore Street, Dhaka, Bangladesh
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Email:</strong> support@medistore.com
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Phone:</strong> +880 1234 567890
        </p>

        <div className="mt-6">
          <h2 className="font-semibold text-gray-700 mb-2">Follow us:</h2>
          <div className="flex justify-center gap-6">
            <Link href="https://www.facebook.com/" className="text-blue-600 hover:underline">
              Facebook
            </Link>
            <Link href="https://x.com/" className="text-blue-500 hover:underline">
              X(Twitter)
            </Link>
            <Link href="https://www.instagram.com/" className="text-blue-500 hover:underline">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
