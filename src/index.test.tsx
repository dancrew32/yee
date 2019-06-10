import React from "react";
import renderer from "react-test-renderer";

jest.mock("./main.less", () => jest.fn());
jest.mock("./home.md", () => jest.fn());

import { App } from "./index.tsx";

describe("<App />", () => {
  it("should snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
