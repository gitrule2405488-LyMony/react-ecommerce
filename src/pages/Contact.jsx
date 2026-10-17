function Contact() {
  return (
    <div className = "max-w-[90%] lg:max-w-3xl mx-auto font-jost my-10">
      <form className = "w-full shadow-md p-4 ">
        <h1 className = "text-center font-bold text-2xl">Contact Us</h1>
          <div className = "md-3">
            <label>First Name <span className="text-red-500">*</span></label>
            <input type="text" name="firstName" id="firstName" className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className = "md-3">
            <label>Last Name <span className="text-red-500">*</span></label>
            <input type="text" name="lastName" id="lastName" className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className = "md-3">
            <label>Email <span className="text-red-500">*</span></label>
            <input type="email" name="email" id="email" className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className = "md-3">
            <label>Message</label>
            <textarea name="message" id="message" rows="4" className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <div className = "md-3">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
          </div>  
      </form>
    </div>
  )
}

export default Contact