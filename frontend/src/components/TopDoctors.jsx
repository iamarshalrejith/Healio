import React from 'react'
import { doctors } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'

const TopDoctors = () => {
    const navigate = useNavigate()
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-semibold text-gray-800 mb-2">Top Doctors to Book</h1>
      <p className="text-gray-600 mb-8">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.slice(0, 9).map((doctor, index) => (
          <div onClick={()=> navigate(`/appointment/${doctor._id}`)}
            className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition"
            key={index}
          >
            <img
              src={doctor.image}
              alt="doctor"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="text-green-600 text-sm font-medium mb-1">● Available</p>
              <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
              <p className="text-gray-500 text-sm">{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 px-6 py-2.5 bg-gray-950  text-white font-medium rounded-xl shadow hover:bg-black transition">
        More
      </button>
    </div>
  )
}

export default TopDoctors
