import { sum } from "../sum";

describe("sum", () => {
  it("두 숫자를 더한다", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
