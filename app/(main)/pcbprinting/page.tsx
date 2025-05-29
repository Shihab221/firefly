import React from 'react'

const page = () => {
  return (
    <div className='px-10 sm:px-20 py-5 flex flex-col sm:flex-row gap-6'>
        <div className="bg-white w-full sm:w-2/3 border p-6  shadow-md mx-auto">
        <h2 className="text-2xl font-semibold  mb-4 font-orbitron text-emerald-500">Order PCB</h2>
        <form className="space-y-4">
            <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
                type="text"
                placeholder="e.g. Shihab Ahemed"
                className="w-full border border-gray-300 border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            </div>
            
            <label className="block text-gray-700 font-medium mb-1">Institute Name</label>
            <input
                type="text"
                placeholder="KUET, KU, Brac, NSU, etc."
                className="w-full border border-gray-300 border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
                type="email"
                placeholder="example@email.com"
                className="w-full border border-gray-300 border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            </div>
            
            
            <label className="block text-gray-700 font-medium mb-1">Contact Number</label>
            <input
                type="mobile"
                placeholder="+880 123 456 7890"
                className="w-full border border-gray-300 border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <div>
            <label className="block text-gray-700 font-medium mb-1">PCB layers</label>
            <select
                className="w-full border border-gray-300 border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
                
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="multi">Multi</option>
            
            </select>
            </div>


            <div>
            <label className="block text-gray-700 font-medium mb-1">PCB Details</label>
            <textarea
                
                placeholder="Describe your project..."
                className="w-full border border-gray-300 border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
            </div>

            <div>
            <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-300 to-orange-300 hover:bg-emerald-700 text-neutral-700 font-semibold py-2 transition-all duration-200 font-orbitron hover:shadow-md duration-200"
            >
                Submit PCB Order
            </button>
            </div>
        </form>
    </div>

      <div className='bg-white w-full sm:w-1/3 border px-5 py-6'>
        <h4 className='font-orbitron font-bold mb-2 text-orange-500'>Terms & Conditions</h4>
        <ul className='list-disc flex flex-col gap-2 pl-5 text-sm text-gray-700 text-lg'>
          <li>All projects are custom-built based on your requirements.</li>
          <li>Booking requires a 50% advance payment.</li>
          <li>Delivery time varies based on project complexity.</li>
          <li>Contact us for any modifications or additional features.</li>
          <li>We provide support for the first month after delivery.</li>
          <li>Component and service charges are totally different.</li>
        </ul>

        <h4 className='mb-4 mt-10 font-bold text-lg font-orbitron text-orange-500'>
            শর্তাবলী
        </h4>
        <ul className='list-disc flex flex-col gap-2 pl-5 text-sm text-gray-700 text-sm'>
            <li>সমস্ত প্রজেক্ট আপনার চাহিদা অনুযায়ী কাস্টমভাবে তৈরি করা হয়।</li>
            <li>বুকিং এর জন্য ৫০% অগ্রিম পরিশোধ প্রয়োজন।</li>
            <li>প্রজেক্টের জটিলতার উপর ভিত্তি করে ডেলিভারি সময় পরিবর্তিত হয়।</li>
            <li>কোনো পরিবর্তন বা অতিরিক্ত ফিচারের জন্য আমাদের সাথে যোগাযোগ করুন।</li>
            <li>ডেলিভারির পর প্রথম মাসে আমরা সাপোর্ট প্রদান করি।</li>
            <li>কম্পোনেন্ট ও সার্ভিস চার্জ সম্পূর্ণ ভিন্ন।</li>
        </ul>

      </div>
    
    </div>
  )
}

export default page
