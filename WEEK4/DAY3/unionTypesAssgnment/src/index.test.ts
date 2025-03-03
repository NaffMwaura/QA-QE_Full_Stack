import { validateUsername } from "./index"; // Import function from index.ts

test("should return true for valid usernames", () => {
  expect(validateUsername("Matt1234")).toBe(true); 
  expect(validateUsername("Alice")).toBe(false);   
  expect(validateUsername("Bob")).toBe(false);     
});
