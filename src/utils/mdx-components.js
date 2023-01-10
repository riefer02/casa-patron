import React from "react"

const MyH1 = props => <h1 className="font-bold text-3xl" {...props} />
const MyH2 = props => <h2 className="font-medium text-2xl" {...props} />
const MyH3 = props => <h3 className="text-xl" {...props} />
const MyP = props => <p className="text-base" {...props} />
const MyLink = props => (
  <a className="text-blue-500 hover:underline" {...props} />
)
const MyList = props => <ul className="list-decimal ml-8" {...props} />
const MyListItem = props => <li className="text-base" {...props} />
const MyButton = props => (
  <button className="bg-blue-500 text-white p-2 rounded-md" {...props} />
)

export { MyH1, MyH2, MyH3, MyP, MyLink, MyList, MyListItem, MyButton }
