import { createStandardAction } from "typesafe-actions";

export const exampleAction = createStandardAction(
  "@<%= featureName %>/exampleAction"
)<void>();
