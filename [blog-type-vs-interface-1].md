## Different between type aliases and interface in TypeScript

TypeScript is provides two ways to create custom types for data and they include Type aliases and Interfaces.

### Type aliases

Type alias is a name for any type. Type aliases can be used to represent not only primitives but also object types, union types, tuples and intersections.
Type aliases are declared with the "type" keyword preceding them.

``` 
type name = string;
type TInput = string | number | boolean;  
```

### Interfaces
Interfaces are another way to name data structures e.g objects. The declaration syntax for interfaces is different from that of type aliases.

``` 
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
```

### Unions and Intersections
A union type is formed from two or more other types, and represents a value that can be any one of them. 

### Tuples
Tuples are a way to type arrays with fixed lengths, accounting for every item in said array.

```
type Coordinate = [number, number, string];
```

### Conclusion
We have seen the differences and similarities between type aliases and interfaces.

- Both type aliases and interfaces can be used to describe the shape of an object or a function signature. But the syntax differs.
- Declaration merging only works on interfaces and not type aliases.
- You cannot declare a union, intersection or tuple with the "interface" keyword. However, you can make use of them within an interface.
- Classes can implement both type aliases and interfaces, but not type aliases that represent a union type.

I hope that you have gained something useful from this article.

