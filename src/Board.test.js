import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Board from "./Board";



// smoke  and snapshot tests
describe("Board", function () {
    it("renders without crashing", function () {
        render(<Board nrows={5} ncols={5} chanceLightStartsOn={0.5} />);
    }); 

    it("matches snapshot", function () {
        const { asFragment } = render(<Board nrows={5} ncols={5} chanceLightStartsOn={0.5} />);
        expect(asFragment()).toMatchSnapshot();
    });



});
