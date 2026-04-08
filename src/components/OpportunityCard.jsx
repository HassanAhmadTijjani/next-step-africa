import React from 'react'
import { Link } from 'react-router-dom'

// @ts-ignore
const OpportunityCard = ({opportunity}) => {
  return (
      <div>
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
              <div>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                      {opportunity.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800 mt-2 mb-2">
                      {opportunity.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                      {opportunity.summary}
                  </p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-red-500 font-medium">
                      Deadline: {opportunity.deadline}
                  </span>
                  <Link
                      to={`/opportunity/${opportunity.id}`}
                      className="text-sm text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                      View Details
                  </Link>
              </div>
          </div>
    </div>
  )
}

export default OpportunityCard