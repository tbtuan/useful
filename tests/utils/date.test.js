import { zuluDateToString } from "../../src/utils/date";

test("Datetime", () => {
  expect(zuluDateToString("2021-02-20T00:00:00.000Z")).toBe(
    "February 20, 2021"
  );
  expect(zuluDateToString("2021-02-20")).toBe("February 20, 2021");
});
