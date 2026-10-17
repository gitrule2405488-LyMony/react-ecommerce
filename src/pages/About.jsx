function About() {
  return (
    <div className = "font-jost max-w-[90%] lg:max-w-5lg lg:mx-80 mx-4 my-8 lg:px-0">
      <div>
        <h1 className="text-center my-10 text-3xl font-bold  underline">About Us</h1>
        <p className="text-center my-10 text-lg " >This is Our Team</p>
      </div>
      {/* design team section */}
      <div className="flex flex-col lg:flex-row gap-10 my-10 mx-20">
          <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNuQDUlS7b62Pf00aqRFQdr8H7CUq2YmElhDBXPhBYxA&s=10" alt="" />
          </div>
            <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold text-center">John Doe</h1>
            <p className = "text-center font-bold text-2xl">Frontend Developer</p>
            <p className = "text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quos saepe <br/> praesentium iure minima rem facilis in. Ipsa, saepe .</p>
            <div>
               <h1 className = "text-center text-xl font-bold my-2">Contact</h1>
                <div className="flex gap-2 justify-center my-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">Email</button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded">LinkedIn</button> 
                  <button className="bg-gray-500 text-white px-4 py-2 rounded">GitHub</button>
                  <button className = "bg-gray-500 text-white px-4 py-2 rounded">Portfolio</button>
                </div>
            </div>
            </div>
      </div>
    </div>
  )
}

export default About