import { render } from "@testing-library/react";

import Title from "../Title";

test("renders Title correctly", () => {
  const { getByText } = render(<Title level={1}>My Title</Title>);
  const linkElement = getByText(/My Title/i);
  expect(linkElement).toBeInTheDocument();
});
