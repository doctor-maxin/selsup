import { WidgetParamEditor } from "@/widgets/param-editor";
import type { FC } from "react";
import { mockModel, mockParmas } from "../model/mockData";

export const HomePage: FC = () => {
  return <div>
      <h1>VibeCoder Param Editor</h1>
      <WidgetParamEditor params={mockParmas} model={mockModel} />
  </div>;
}