import React, { useState } from "react"
import { localAttractions } from "../content/local-attractions/local-attractions"

export default function LocalAttractionCards() {
  // State to track which cards are expanded
  const [expandedCards, setExpandedCards] = useState({})

  const toggleCard = index => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <div>
      <div
        id="activities"
        className="mx-auto max-w-4xl w-full flex items-center justify-center"
      >
        <h3 className="text-xl lg:text-3xl font-bold w-full text-center mb-4 pb-4">
          Local Attractions & Events
        </h3>
      </div>
      <div className="flex flex-wrap justify-center">
        {localAttractions.map((attraction, index) => (
          <div
            className="flex flex-col justify-between max-w-sm rounded-xl border-grey-neutral bg-grey-neutral border overflow-hidden shadow-md m-4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 transition-all duration-300"
            key={attraction.name}
          >
            <div className="px-2 pb-4 text-white">
              {/* Title and Basic Info - Always Visible */}
              <div className="font-bold text-xl mb-2 text-primary">
                {attraction.name}
              </div>
              <p className="text-base mb-2">{attraction.description}</p>

              {/* Quick Preview of Dates - Always Visible for Events */}
              {attraction.eventInfo?.dates && (
                <p className="text-sm font-medium text-primary mt-2">
                  {attraction.eventInfo.dates}
                </p>
              )}

              {/* Expandable Event Details */}
              {attraction.eventInfo && (
                <>
                  <button
                    onClick={() => toggleCard(index)}
                    className="mt-3 text-primary hover:text-secondary transition-colors duration-200 text-sm font-medium focus:outline-none flex items-center gap-2"
                  >
                    {expandedCards[index] ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                        Show Less
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        Show Details
                      </>
                    )}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedCards[index]
                        ? "max-h-[500px] opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-3">
                      {attraction.eventInfo.schedule && (
                        <div>
                          <h4 className="text-primary font-semibold text-sm">
                            Schedule:
                          </h4>
                          {attraction.eventInfo.schedule.map((time, idx) => (
                            <p key={idx} className="text-sm">
                              {time}
                            </p>
                          ))}
                        </div>
                      )}

                      {attraction.eventInfo.pricing && (
                        <div>
                          <h4 className="text-primary font-semibold text-sm">
                            Admission:
                          </h4>
                          <p className="text-sm">
                            {attraction.eventInfo.pricing}
                          </p>
                        </div>
                      )}

                      {attraction.eventInfo.notes && (
                        <div>
                          <p className="text-sm italic">
                            {attraction.eventInfo.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Tags and Visit Site Button */}
            <div>
              <div className="px-2 py-4 flex flex-wrap gap-2">
                {attraction.tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-grey-neutral"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="px-2">
                <a
                  href={attraction.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block bg-secondary hover:bg-tertiary transition text-white font-bold py-2 px-4 rounded text-center"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
