---
title: 'Tricks'
metaTitle: 'cpp/tricks'
metaDescription: 'C++ - Tricks'
date: 2020-06-30
---

## Singleton-Pattern

```cpp

/* Follows: construct on first use idiom */
/* Is: thread-safe */

// Singleton.hpp
#ifndef SINGLETON_HPP
#define SINGLETON_HPP

class Singleton {
    private:
        // C++ 11 Feature: Force Singleton to create a default constructor
        Singleton() = default;
    public:
        // Remove default copy constructor
        Singleton(const Singleton&) = delete;
        // Remove default assignment operator
        Singleton& operator=(const Singleton&) = delete;

        // Provide a static method (single instance of Singleton)
        static Singleton& get_instance();
}

// Singleton.cpp
#include "Singleton.hpp"
// Define get_instance method in a seperate translation unit,
// so no one can include Singleton
Singleton& Singleton::get_instance() {
    static Singleton singleton;
    return singleton;
}

// Accessing Singleton
Singleton& singleton(Singleton::get_instance());

```
