import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/ResList.mock.json";
import Body from "../Code/Components/Body";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search list for burger input", async () => {
  await act(async () =>
    render(
      <MemoryRouter>
        <Body />
      </MemoryRouter>
    )
  );
  //   const resCardBeforeSearch = screen.getAllByTestId("resCard");
  //   expect(resCardBeforeSearch.length).toBe(10);
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  //   const resCardAfterSearch = screen.getAllByTestId("resCard");
  //   expect(resCardAfterSearch.length).toBe(1);
});
