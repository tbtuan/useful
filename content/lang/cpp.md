---
title: 'C++'
metaTitle: 'C++ - /useful'
metaDescription: 'C++ Cheatsheet'
---

## Types

```cpp
unsigned int // positive number
std::size_t // Unsigned int but used for objects (size depends on the underlying architecture 32/64-bit)
void* // void pointer
void (*)() // Function pointer which returns void
```

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

## Reference/Dereferencing

```cpp

```

## Constructor/Destructor

```cpp
#include <iostream>

class Foo {
    public:
        Foo(const char* bar)
            : bar(bar)
        {
            std::cout << "\"" << bar << "\"" << " constructed" << std::endl;
        }
        ~Foo()
            : bar(bar)
        {
            std::cout << "\"" << bar << "\"" << " destructed" << std::endl;
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

## Access modifiers

```cpp
class Foo {
    public:
        // const int at the beginning = return type is immutable
        // const at the end = the object's state is immutable
        // (number = ... or text = ... doesn't work)
        const int bar() const {
            return 0;
        }
    private:
        char* text;
        int number;
};
```

## Dynamic polymorphism

```cpp
class A {};
class B: public A {};
class C final: public B {};

class D {
    public:
        // A pure virtual function (marked by assigning 0).
        // Any class (derived from D) must implement this method
        virtual double calculate() const = 0;
}

class Foo {
    public:
        void f() {};
        virtual B* g() { return nullptr; }
        virtual B* h(B* b) { return nullptr; }
};

class Bar: public Foo {
   public:
        // Doesn't work (f =/= dynamically polymorphic method)
        void f() override {};
        // Works (non polymorphic -> polymorphic)
        virtual void f() {};
        // Works (f in "Foo" and f in "Bar" aren't polymorphic)
        void f() {};
        // Works (should have override)
        B* g() { return nullptr; }
        // Doesn't work (Returns a contravariant type (A is base class of B))
        A* g() { return nullptr; }
        // Works (Returns a covariant type (B is base class of C))
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

## Memory management
