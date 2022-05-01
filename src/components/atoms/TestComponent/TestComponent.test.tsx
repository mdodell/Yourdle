import { render } from "@testing-library/react";

import TestComponent from "./TestComponent";

describe("TestComponent", () => {
  it("should greet you with the proper name", () => {
    const name = "Bob";

    const { queryByText } = render(<TestComponent name={name} />);
    expect(queryByText(`Hello ${name}`)).toBeInTheDocument();
  });
});
