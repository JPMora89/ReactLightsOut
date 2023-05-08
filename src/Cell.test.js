import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Cell from "./Cell";

// smoke  and snapshot tests

test("renders without crashing", function () {
    render(<Cell />);
}
);
