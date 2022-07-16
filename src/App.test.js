import { render, screen } from "@testing-library/react";
import App from "./App";

test("Header renders correctly", () => {
  render(<App />);
  const headerEl = screen.getByText(/coding with me/i);
  expect(headerEl).not.toBeInTheDocument();
  expect(headerEl).toHaveTextContent("Goding with me");
});
test("Button tes", ()=>{
render(<App/>);
const buttonEl = screen.getByRole("button")
expect(buttonEl).toHaveTextContent("Click")
expect()
})
test("Blue Elemnt Renders Correctly", () => {
  render(<App />);
  const blueElement = screen.getByText(/Benim rengim Mavi/i);

  expect(blueElement).toBeInTheDocument();
  expect(blueElement).toHaveTextContent("Benim rengim Mavi")
  expect(blueElement).toHaveClass("blue")
});

//testimin ismi
//calback fonksiyonu
//timeout number

//screen.debug fonksiyonu neyi render edip etmediğini görmek için kullanabilirim
//i büyük küçük harfleri ayrıt etme
