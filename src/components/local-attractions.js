import React from "react"
import { localAttractions } from "../content/local-attractions/local-attractions"

export default function LocalAttractionCards() {
  return (
    <div>
      <div
        id="activities"
        className="mx-auto max-w-4xl w-full flex items-center justify-center"
      >
        <h3 className="text-xl lg:text-3xl font-bold w-full text-center mb-4 pb-4">
          Local Attractions
        </h3>
      </div>
      <div className="flex flex-wrap justify-center">
        {localAttractions.map(attraction => (
          <div
            className="flex flex-col justify-between max-w-sm rounded-xl border-grey-neutral bg-grey-neutral border overflow-hidden shadow-md m-4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
            key={attraction.name}
          >
            <div className="px-2 pb-4 text-white">
              <div className="font-bold text-xl mb-2 text-primary">
                {attraction.name}
              </div>
              <p className="text-base">{attraction.description}</p>
            </div>
            <div>
              <div className="px-2 py-4">
                {attraction.tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-grey-neutral mr-2 mb-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="px-2">
                <button className="bg-secondary hover:bg-tertiary transition text-white font-bold py-2 px-4 rounded">
                  <a href={attraction.url} target="_blank" rel="noreferrer">
                    Visit Site
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
