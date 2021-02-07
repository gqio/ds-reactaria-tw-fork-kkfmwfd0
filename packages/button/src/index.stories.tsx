import React from "react";
import { Button } from "./index";
import '~/tailwind/dist/load';

export default {
  parameters: {
    layout: "centered",
  },
};

export const Primary = () => (
 <Button onPress={() => alert('Button !')}>Primary</Button>
);

export const Secondary = () => (
 <Button variant="secondary" onPress={() => alert('Button pressed!')}>Secondary</Button>
);

