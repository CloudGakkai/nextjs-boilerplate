import {
  getLocalStorage,
  getSessionStorage,
  removeLocalStorage,
  removeSessionStorage,
  setLocalStorage,
  setSessionStorage,
} from ".";

describe("getLocalStorage", () => {
  it("should return null if the key does not exist", () => {
    expect(getLocalStorage("test")).toBeNull();
  });

  it("should return the value if the key exists", () => {
    setLocalStorage("test", "value");

    expect(getLocalStorage("test")).toBe("value");
  });
});

describe("getSessionStorage", () => {
  it("should return null if the key does not exist", () => {
    expect(getSessionStorage("test")).toBeNull();
  });

  it("should return the value if the key exists", () => {
    setSessionStorage("test", "value");

    expect(getSessionStorage("test")).toBe("value");
  });
});

describe("removeLocalStorage", () => {
  it("should remove the key from localStorage", () => {
    setLocalStorage("test", "value");

    removeLocalStorage("test");

    expect(getLocalStorage("test")).toBeNull();
  });
});

describe("removeSessionStorage", () => {
  it("should remove the key from sessionStorage", () => {
    setSessionStorage("test", "value");

    removeSessionStorage("test");

    expect(getSessionStorage("test")).toBeNull();
  });
});

describe("setLocalStorage", () => {
  it("should set the value in localStorage", () => {
    setLocalStorage("test", "value");

    expect(getLocalStorage("test")).toBe("value");
  });
});

describe("setSessionStorage", () => {
  it("should set the value in sessionStorage", () => {
    setSessionStorage("test", "value");

    expect(getSessionStorage("test")).toBe("value");
  });
});
