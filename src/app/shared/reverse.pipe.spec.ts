import { Reverse } from "./reverse.pipe";

let pipe: Reverse;

describe("Reverse pipe", () => {
  beforeEach(() => {
    pipe = new Reverse();
  });

  it('should reverse string', () => {
    expect(pipe.transform("hello")).toEqual("olleh");
  });
});
