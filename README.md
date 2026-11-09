## Problem Solving with TypeScript & OOP 
Here I have try to solve 8 TypeScript basic problem

### Problem 1:
Create a function `multiplyValue` that accepts a number `value` and an optional number `multiplier`.

* If `multiplier` is provided, return `value` multiplied by `multiplier`.
* If `multiplier` is not provided (`undefined`), return `value` multiplied by `2` by default.

### Problem 2:

Create a function `processInput` that accepts a value which may be a **string**, **number**, or **boolean**, and returns a formatted result based on the value's type:

* If the input is a **string** → trim any leading/trailing spaces and return it in **lowercase**.
* If the input is a **number** → return the number multiplied by **10**.
* If the input is a **boolean** → return `"Active"` if `true`, or `"Inactive"` if `false`.

### Problem 3:

Create a function `formatCoordinate` that accepts a **readonly tuple** representing a coordinate and location name in the exact order `[latitude, longitude, locationName]` (`[number, number, string]`), and returns a formatted location string.


### Problem 4:

Create a generic function `concatenateArrays` that accepts multiple arrays of the **same type** `T` using rest parameters (`...arrays: T[][]`) and returns a single combined array containing all elements in the order they were passed.


### Problem 5:

Define an interface `Course` with the following properties:
* `title` (string)
* `students` (number)
* `isPublished` (boolean)

Then, create a function `getPopularCourses` that accepts an array of `Course` objects and a `minStudents` number. The function should return a **new array** containing only the courses where `isPublished` is `true` **and** `students` is greater than or equal to `minStudents`.


### Problem 6:

Write a generic function `pluckValues` that accepts an array of objects (`items: T[]`) and a valid property key of those objects (`key: K`), and returns a new array (`T[K][]`) containing the values of that specific property from each object in the same order.


### Problem 7:

Create an `Employee` class and a `Manager` subclass following these exact specifications:

1. **`Employee` class:**
   * Has a `protected` property `name` (`string`) and a `private` property `baseSalary` (`number`).
   * Constructor accepts `(name: string, baseSalary: number)` in that exact order.
   * Has a method `getDetails()` that returns `"Employee: [name], Base Salary: [baseSalary]"`.

2. **`Manager` class (extends `Employee`):**
   * Adds a `private` property `department` (`string`).
   * Constructor accepts `(name: string, baseSalary: number, department: string)` in that exact order and calls `super(name, baseSalary)`.
   * Has a method `getRoleInfo()` that returns `"Manager of [department]: [name]"`.


### Problem 8:

Create an async function `validateAgeAsync` that accepts a number `age` and returns a `Promise<string>`:

* If `age` is **18 or above**, resolve after **1 second** (`1000` ms) with the string `"Access Granted"`.
* If `age` is **less than 18**, reject immediately with `new Error("Access Denied: Must be 18 or older")`.


### Here is two blog added

Check out blog 1 : [Different between type aliases and interface in TypeScript](https://github.com/Abusayedshuvo/B8A1/blob/main/[blog-type-vs-interface-1].md)

Check out blog 2 : [Practical example of combining Union (|) and Intersection (&) types in TypeScript](https://github.com/Abusayedshuvo/B8A1/blob/main/[blog-union-intersection-2].md)