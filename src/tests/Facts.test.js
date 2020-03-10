import React from "react"
import App from "../App"
import FactList from "../components/FactList"
import Fact from "../components/Fact"
import NewFactsButton from "../components/NewFactsButton"
import { render, fireEvent } from '@testing-library/react'
jest.mock("../services/facts.js")

const facts = [
  {text: "fact 1"},
  {text: "fact 2"},
  {text: "fact 3"},
  {text: "fact 4"},
  {text: "fact 5"},
]

describe("<App />", () => {
  test("Renders content", async () => {
    const component = render(<App />);
    expect(component.container).toHaveTextContent("Random cat facts");
  })
})

describe("<Fact/>", () => {
  test("Fact component renders one fact", async () => {
    const fact = {text: "test fact"};
    const component = render(<Fact fact={fact} />)
    expect(component.container).toHaveTextContent('test fact')
  })
})

describe("<Fact/>", () => {
  test("FactList renders facts content", () => {
    const component = render(<FactList facts={facts} />);
    expect(component.container).toHaveTextContent("fact 1");
  });
});

describe("<NewFactsButton/>", () => {
  test("clicking the button calls event handler once", async () => {
    const mockHandler = jest.fn();
    const { getByText } = render(<NewFactsButton setFacts={mockHandler} />);
    const mybutton = getByText("New facts");
    fireEvent.click(mybutton);
    expect(mockHandler.mock.calls.length).toBe(1);
  });
});