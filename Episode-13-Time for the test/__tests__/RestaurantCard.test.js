import { render, screen } from "@testing-library/react";
import MOCK_JSON from "../mocks/RestaurantCard.mock.json";
import ResturantCard, {
  withPromotedLabel,
} from "../Code/Components/ResturantCard";
import "@testing-library/jest-dom";

it("should render Starbucks Coffee", () => {
  render(<ResturantCard resData={MOCK_JSON} />);
  const text = screen.getByText("Starbucks Coffee");
  expect(text).toBeInTheDocument();
});
it("Should render restaurant card with promoted label", () => {
  const RestaurantCardPromoted = withPromotedLabel(ResturantCard);
  render(<RestaurantCardPromoted resData={MOCK_JSON} />);
  const text = screen.getByText("Promoted");
  expect(text).toBeInTheDocument();
});
