
const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier) {
    return value * multiplier;
  }
  if (multiplier === 0) {
    return value * multiplier;
  }
  return value * 2;
};

 

 

type TInput = string | number | boolean;

const processInput = (input: TInput) => {
  if (typeof input === "string") {
    return input.trim().toLocaleLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else if (typeof input === "boolean") {
    if (input) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
};


 

const formatCoordinate = (coordinate: readonly [number, number, string]) => {
  const [latitude, longitude, location] = coordinate;
  return `Location: ${location}, (${latitude}, ${longitude})`;
};

 

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return ([] as T[]).concat(...arrays);
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
};

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary:${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }
  getRoleInfo(): string {
    return `Manager of ${this.department} : ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
    } else {
      resolve("Access Granted");
      setTimeout(() => {
        return "Access Granted";
      }, 1000);
    }
  });
};

(async () => {
  try {
    const sample = await validateAgeAsync(15);
    console.log(sample);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
})();
