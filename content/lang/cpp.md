---
title: 'C++'
metaTitle: 'C++'
metaDescription: 'C++ Cheatsheet'
date: 2020-07-02
---

<mc minWidth='800'>

<sc>

## Types

```cpp
// positive number
unsigned int 
// Unsigned int but used for objects 
// (size depends on the underlying architecture)
std::size_t 
 // void pointer
void*
 // Function pointer which returns void
void (*)()
```

</sc>

<sc>

## Initialization

```cpp
// Default initialization
T t = new T
// Direct initialization
std::string s("hello");
// Value initialization
std::string s{};
// Copy initialization
std::string s = "hello";
// List initialization
std::string s{'a', 'b', 'c'};
// Aggregate initialization
char a[3] = {'a', 'b'};
// Reference initialization
char& c = a[0];

```

</sc>

<sc>

## References

```cpp
// lvalues = variable that stores something
// rvalues = temporary values

// lvalue-references = only takes lvalues unless it's const
// rvalue-references = only takes rvalues

// In case
void setInt(const int& value) { }
void setInt(int&& value) { }
// Even if const int& accepts rvalues 
// setInt(int&& value) will be chosen

```

</sc>


<sc>

## Constructor/Destructor

```cpp
#include <iostream>

class Foo {
    public:
        Foo(const char* bar)
            : bar(bar)
        {
            std::cout 
                << "\"" << bar 
                << "\"" << " constructed" 
                << std::endl;
        }
        ~Foo()
            : bar(bar)
        {
            std::cout 
                << "\"" << bar 
                << "\"" << " destructed" 
                << std::endl;
        }
    private:
        const char* bar;
}

int main() {
    for (int i = 0; i < 2; i++) {
        Foo a = "a for loop";
        {
        Foo b = "b inner block";
        Foo c = "c inner block";
        }
        Foo d = "d for loop";
    }
    // "a for loop" constructed
    // "b inner block" constructed
    // "c inner block" constructed
    // "c" destructed
    // "b inner block" destructed
    // "d for loop" constructed
    // "d for loop" destructed
    // "a for loop" destructed
    // "a for loop" constructed
    // "b inner block" constructed
    // "c inner block" constructed
    // "c inner block" destructed
    // "b inner block" destructed
    // "d for loop" constructed
    // "d for loop" destructed
    // "a for loop" destructed
}

```

</sc>

<sc>

## Other constructors/assignment operators

```cpp
class Vector2D {
	private:
		int x, y;
	public:
		// Default constructor
		Vector2D()
            // Initializer list
            : x(0)
            , y(0)
        { }
		// Constructor with 2 parameters
		Vector2D(double x, double y)
            : x(x)
            , y(y)
        { }
		// Copy constructor
		Vector2D(const Vector2D& v2) { }
		// Move constructor
		Vector2D(Vector2D&& v2) { }
		// Destructor
		~Vector2D() { }
		// Copy assignment operator (remove "=" operator)
		Vector2D& operator=(const Vector2D& other) = delete;
		// Move assignment operator
		Vector2D& operator=(Vector2D&& other) = delete;

};

int main() {
	Vector2D vector { }; // Default constructor
	Vector2D b = a; // Copy assignment operator
}
```

</sc>

<sc>

## Access modifiers

```cpp
class Foo {
    public:
        // const (beginning) = return type is immutable
        // const (end) = the object's state is immutable
        // (number = ... or text = ... doesn't work)
        const int bar() const {
            return 0;
        }
    private:
        char* text;
        int number;
};
```

</sc>

<sc>

## Dynamic polymorphism

```cpp
class A {};
class B: public A {};
class C final: public B {};

class D {
    public:
        // A pure virtual function (marked by assigning 0).
        // Any class (derived from D) 
        // must implement this method
        virtual double calculate() const = 0;
        // IMPORTANT FOR MEMORY LEAKS
        // If D gets destructed any class derived from D
        // will also be destructed
        // e. g. D* b = new B();
        // delete b;
        // IT WON'T HAPPEN IF D IS NOT VIRTUAL!
        virtual ~D() { }
}

class Foo {
    public:
        void f() {};
        virtual B* g() { return nullptr; }
        virtual B* h(B* b) { return nullptr; }
};

class Bar: public Foo {
   public:
        // Doesn't work 
        // (f =/= dynamically polymorphic method)
        void f() override {};
        // Works (non polymorphic -> polymorphic)
        virtual void f() {};
        // Works 
        // (f in "Foo" and f in "Bar" aren't polymorphic)
        void f() {};
        // Works (should have override)
        B* g() { return nullptr; }
        // Doesn't work (Returns a contravariant type 
        // (A is base class of B))
        A* g() { return nullptr; }
        // Works (Returns a covariant type 
        // (B is base class of C))
        C* g() { return nullptr; }
        // Works (g is not polymorphic)
        B* g(B* b) { return nullptr; }
        // Works (h is not polymorphic)
        C* h(A* a) { return nullptr; }
        // Works (h is not polymorphic)
        B* h(A* a) { return nullptr; }
        // Doesn't work (Argument is a contravariant type)
        B* h(A* a) override { return nullptr; }

};

// Doesn't work (C is final)
class Bar: public C {
};
```

</sc>

<sc>

## Type casting

```cpp
// cast happens during translation time; 
static_cast<int>
// allows type casting for which a static_cast would fail
reinterpret_cast<int>
// Checks if it's actual the type (returns null otherwise)
// Used for example for checking if bar is derived from a 
// class Foo
dynamic_cast<Foo*>(bar)
// Used to remove or add "const"
// modifying a formerly const value is only undefined 
// if the original variable is const
const_cast<int>
```
### See

[Stackoverflow - When should static_cast, dynamic_cast, const_cast and reinterpret_cast be used?](https://stackoverflow.com/questions/332030/when-should-static-cast-dynamic-cast-const-cast-and-reinterpret-cast-be-used)

</sc>

<sc>

## Memory management

```cpp
// TODO Something about RAII and stuff
```

</sc>

<sc>

## Function pointer

```cpp
void myFunction(int value) { }
// Variant 1: Define a function pointer "myFunction2"
// which points to myFunction
void(*myFunction2)(int) = myFunction;
// You can use "myFunction2" like a normal function
myFunction2(3);
// Variant 2
typedef void(*myfunction3)(int);
myfunction3 = myfunction;
myfunction3(4);
// Variant 3
auto myFunction4 = myFunction;
```

</sc>

<sc>

## Iterators

```cpp
// TODO Iterators
```

</sc>

<sc>

## Templates

```cpp
#include <iostream>
// templates are not restricted to types
// Even int work
template<typename T, int N>
class Array
{
	public:
		T size() const { return N; }
	private:
		T array[N];
};

template<typename T>
void myMethod(T value) {
    std::cout << value << std::endl;
}

int main() {
    // Matches N with 10
    Array<int, 10> a = Array<int, 10>();
    std::cout << a.size() << std::endl;
    myMethod<std::string>("asdf");
    // C++ can infer types
    myMethod("asdf");
}
```

</sc>

<sc>

## Lambdas

```cpp
#include <iostream>
// [<capture>](<Parameters>) { ... }
myFunction(void(*func)) { 
    func();
}

auto str_equivalence_ignore_case(const std::string& text) {
    // Copy reference of std::string& text with [=]
    // otherwise it would be discarded (rvalue!)
    // Set return type to bool
    return [=](const std::string& s) -> bool {
        // compare s from std::vector<std::string>
        // with a copied "b" from const std::string& text
        return boost::iequals(s, text);
    };
}

int main() {

    // lambda capture 
    // [=] = pass everything in this scope by value
    // [&] = pass everything in this scope by reference
    // [a, &b, c] = pass individual values by value/reference
    myFunction([]() {
        std::cout << "pass a lambda" << std::endl;
    });

    std::vector<std::string> a = {"a", "b", "c"};
    auto look_for_b = str_equivalence_ignore_case("b");
    // std::find_if requires a UnaryPredicate 
    auto it = std::find_if(a.begin(), a.end(), look_for_b);
}


```

### See

- [cppreference - Lambda expressions](https://en.cppreference.com/w/cpp/language/lambda)
- [cppreference - find](https://en.cppreference.com/w/cpp/algorithm/find)


</sc>

</mc>