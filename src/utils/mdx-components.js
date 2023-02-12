import React from "react"

const MyH1 = props => (
  <h1 className="font-bold text-3xl lg:text-4xl py-2" {...props} />
)
const MyH2 = props => (
  <h2 className="font-medium text-2xl lg:text-3xl py-2" {...props} />
)
const MyH3 = props => <h3 className="text-xl lg:text-2xl py-2" {...props} />
const MyP = props => <p className="text-base mb-2" {...props} />
const MyLink = props => (
  <a className="text-secondary hover:underline" {...props} />
)
const MyList = props => <ul className="list-disc ml-6 lg:ml-10" {...props} />
const MyOrderedList = props => (
  <ol className="list-decimal ml-6 lg:ml-10" {...props} />
)
const MyListItem = props => <li className="text-base" {...props} />
const MyButton = props => (
  <button
    type="button"
    className="bg-secondary text-white p-2 rounded-md"
    {...props}
  />
)

export {
  MyH1,
  MyH2,
  MyH3,
  MyP,
  MyLink,
  MyList,
  MyListItem,
  MyButton,
  MyOrderedList,
}
