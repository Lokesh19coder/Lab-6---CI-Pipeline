const { test } = require("node:test");
const assert = require("node:assert");
const { greet, add } = require("../src/app");

// Test 1: Greeting function
test("Greeting function", () => {
    assert.strictEqual(
        greet("Lokesh"),
        "Hello, Lokesh! Welcome to Lab 6."
    );
});

// Test 2: Addition function
test("Addition function", () => {
    assert.strictEqual(add(10, 20), 30);
});

// Test 3: Addition with negative numbers
test("Addition with negative numbers", () => {
    assert.strictEqual(add(-5, 5), 0);
});