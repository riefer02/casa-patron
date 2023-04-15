import React from "react"

const MyH1 = props => (
  <h1 className="font-bold text-4xl lg:text-5xl py-4">{props.children}</h1>
)

const MyH2 = props => (
  <h2 className="font-semibold text-3xl lg:text-4xl py-4">{props.children}</h2>
)

const MyH3 = props => (
  <h3 className="font-medium text-2xl lg:text-3xl py-4">{props.children}</h3>
)

const MyP = props => (
  <p className="text-lg lg:text-xl leading-relaxed pb-4">{props.children}</p>
)

const MyLink = props => (
  <a
    className="text-secondary font-semibold hover:text-tertiary transition ease-out hover:underline"
    {...props}
  >
    {props.children}
  </a>
)

const MyList = props => (
  <ul className="list-disc ml-4 lg:ml-8 pb-4">{props.children}</ul>
)

const MyOrderedList = props => (
  <ol className="list-decimal ml-4 lg:ml-8 pb-4">{props.children}</ol>
)

const MyListItem = props => (
  <li className="text-lg lg:text-xl leading-relaxed pb-2">{props.children}</li>
)

const MyButton = props => (
  <button
    type="button"
    className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md"
    {...props}
  >
    {props.children}
  </button>
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
