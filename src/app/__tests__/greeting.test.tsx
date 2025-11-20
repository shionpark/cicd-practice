import { render, screen } from "@testing-library/react";

function Greeting({ name }: { name: string }) {
  return <p role="status">안녕하세요, {name}</p>;
}

describe("Greeting component", () => {
  it("이름을 표시한다", () => {
    render(<Greeting name="CI/CD" />);
    expect(screen.getByRole("status")).toHaveTextContent("안녕하세요, CI/CD");
  });
});
