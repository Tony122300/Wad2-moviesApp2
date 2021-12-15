import React from "react";
import MovieHeader from "../components/headerMovie";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
// eslint-disable-next-line no-unused-vars
import { action } from "@storybook/addon-actions";

export default {
  title: "Movie Details Page/MovieHeader",
  component: MovieHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <MovieHeader movie={SampleMovie} />;

Basic.storyName = "Default";