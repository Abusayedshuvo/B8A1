## Practical example of combining Union (|) and Intersection (&) types in TypeScript.

Union types allow a value to be one of several types, while intersection types combine multiple types into a single type. In some scenarios, you may need to transform a union type into an intersection type.

- Convert a union type into an intersection type.
- Use distributive conditional types for the transformation.
- Preserve the properties of all types in the resulting intersection.


### Union Type
A union type allows a variable to hold one of several types using the | operator.

```
type TInput = string | string | boolean; 
```
- TInput can be "string", "string", or "boolean".

### Intersection Type
An intersection type combines multiple types into one using the & operator. A value must satisfy all the combined types.

```
type Person = { name: string } & { age: number };
```
- Person must contain both name and age properties.


### Using Distributive Conditional Types
A distributive conditional type applies a conditional type separately to each member of a union. This behavior can be combined with function parameter inference to transform a union type into an intersection type. 
 

 ### Conclusion
 Mastering the transition from union types to intersection types in TypeScript unlocks a powerful tier of type-level programming.

 - Conditional types naturally distribute over union members, allowing you to evaluate and process each type individually.
 - Leveraging function parameter positions (infer U) in a contravariant context forces TypeScript to merge the distributed union members into a single intersection type.
 - While you may not need this technique every day, it is an essential pattern for building robust utility types, managing complex component props, or handling advanced state management architectures.