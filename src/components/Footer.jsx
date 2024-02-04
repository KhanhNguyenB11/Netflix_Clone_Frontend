

function Footer() {
  return (
    <>
      <div className=" w-full bg-gray-700 h-2"></div>
      <footer className="bg-black text-white py-8 w-full flex justify-center">
        <div className="container flex justify-center px-4 w-full">
          <div className="flex justify-between">
            <div className=" md:mb-0 md:mx-[40px]">
              <h3 className="text-lg font-semibold mb-2 text-gray-300 underline">
                Questions? Contact us.
              </h3>
              <ul>
                <li className=" text-gray-300 underline">FAQ</li>
                <li className=" text-gray-300 underline">Investor Relations</li>
                <li className=" text-gray-300 underline">Privacy</li>
                <li className=" text-gray-300 underline">Speed Test</li>
              </ul>
            </div>
            <div className="md:mb-0 md:mx-[40px] mx-3">
              <h3 className="text-lg font-semibold mb-2">Netflix</h3>
              <ul>
                <a className=" text-gray-300 underline">Help Center</a>
                <li className=" text-gray-300 underline">Jobs</li>
                <li className=" text-gray-300 underline">
                  Cookies Preferences
                </li>
                <li className=" text-gray-300 underline">Legal Notices</li>
              </ul>
            </div>
            <div className="md:mb-0 md:mx-[40px] mx-3">
              <h3 className="text-md font-semibold mb-2 md:text-lg">Helpful Links</h3>
              <ul>
                <li className=" text-gray-300 underline">Account</li>
                <li className=" text-gray-300 underline">Ways to Watch</li>
                <li className=" text-gray-300 underline">
                  Corporate Information
                </li>
                <li className=" text-gray-300 underline">Only on Netflix</li>
              </ul>
            </div>
            <div className="md:mb-0 md:mx-[40px] mx-3">
              <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
              <ul>
                <li className=" text-gray-300 underline">Media Center</li>
                <li className=" text-gray-300 underline">Term of Uses</li>
                <li className=" text-gray-300 underline">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
