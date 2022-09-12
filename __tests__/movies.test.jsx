import {render} from "react-dom";
import {ListMovies} from "../index";

describe("movie pages", () => {

    it("shows movies list", () => {

        const element = document.createElement("div");
        render(<ListMovies />, element);

    });

    it("test add new movies", () => {

    });

});