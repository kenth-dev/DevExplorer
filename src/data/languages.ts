import type { Language } from '@/types';

export const languages: Language[] = [
  {
    id: 'python',
    label: 'Python',
    filename: 'python.py',
    extension: '.py',
    shikiLanguage: 'python',
    accentColor: 'lang-yellow',
    usedFor: ['Data Science', 'AI', 'Automation'],
    code: `# ============================================
# Python
# ============================================
# Created by: Guido van Rossum (1991)
#
# WHERE IS PYTHON USED?
#   - Data Science and Machine Learning
#     (most popular language for AI)
#   - Web Development (Django, Flask frameworks)
#   - Automation and scripting
#   - Scientific research and academia
#
# Python is known for its clean, readable syntax.
# It reads almost like plain English.
# ============================================

# The print() function displays text on the screen
print("Hello, World!")

# That's it! In Python, one line is all you need.
# No semicolons, no curly braces — just clean code.`,
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    filename: 'javascript.js',
    extension: '.js',
    shikiLanguage: 'javascript',
    accentColor: 'lang-yellow',
    usedFor: ['Web Frontend', 'Web Backend', 'Full Stack'],
    code: `// ============================================
// JavaScript
// ============================================
// Created by: Brendan Eich (1995)
//
// WHERE IS JAVASCRIPT USED?
//   - Web Development (the language of the browser)
//   - Frontend frameworks (React, Vue, Angular)
//   - Backend servers (Node.js)
//   - Mobile apps (React Native)
//
// JavaScript is the most widely used programming language
// in the world. Every website you visit uses JavaScript.
// ============================================

// console.log() prints a message to the browser console
console.log("Hello, World!");

// You can also use document.write() to display on a web page
document.write("Hello, World!");

// JavaScript uses semicolons at the end of statements,
// but they are technically optional.`,
  },
  {
    id: 'php',
    label: 'PHP',
    filename: 'php.php',
    extension: '.php',
    shikiLanguage: 'php',
    accentColor: 'lang-indigo',
    usedFor: ['Web Backend', 'CMS', 'WordPress'],
    code: `<?php
// ============================================
// PHP
// ============================================
// Created by: Rasmus Lerdorf (1995)
//
// WHERE IS PHP USED?
//   - Web Backend Development (server-side scripting)
//   - Content Management Systems (WordPress, Drupal)
//   - E-commerce platforms (Magento, WooCommerce)
//   - Over 75% of websites use PHP on the backend
//
// PHP stands for "PHP: Hypertext Preprocessor."
// It powers WordPress, which runs about 40% of all
// websites on the internet.
// ============================================

// echo outputs text to the web page
echo "Hello, World!";

// You can also use print — it works almost the same way
print("Hello, World!");

// PHP code is written between <?php and ?> tags.
// Every statement ends with a semicolon.
?>`,
  },
  {
    id: 'java',
    label: 'Java',
    filename: 'java.java',
    extension: '.java',
    shikiLanguage: 'java',
    accentColor: 'lang-orange',
    usedFor: ['Android', 'Enterprise', 'Backend'],
    code: `// ============================================
// Java
// ============================================
// Created by: James Gosling at Sun Microsystems (1995)
//
// WHERE IS JAVA USED?
//   - Android app development
//   - Enterprise software (banks, governments)
//   - Backend web services (Spring Boot)
//   - Big data processing (Hadoop, Spark)
//
// Java's motto is "Write Once, Run Anywhere" —
// code compiled in Java can run on any device that has
// the Java Virtual Machine (JVM) installed.
// ============================================

// Every Java program needs a class and a main method
public class HelloWorld {

    // The main method is where the program starts running
    public static void main(String[] args) {

        // System.out.println() prints text to the console
        System.out.println("Hello, World!");
    }
}

// Java is more verbose than Python, but that structure
// makes it great for large, complex applications.`,
  },
  {
    id: 'c',
    label: 'C',
    filename: 'c.c',
    extension: '.c',
    shikiLanguage: 'c',
    accentColor: 'lang-blue',
    usedFor: ['Operating Systems', 'Embedded', 'Hardware'],
    code: `// ============================================
// C
// ============================================
// Created by: Dennis Ritchie at Bell Labs (1972)
//
// WHERE IS C USED?
//   - Operating Systems (Linux, Windows, macOS kernels)
//   - Embedded systems (microcontrollers, IoT devices)
//   - Game engines and performance-critical software
//   - System-level programming
//
// C is one of the oldest and most influential programming
// languages. Almost every modern language was inspired
// by C's syntax.
// ============================================

// #include loads the standard input/output library
#include <stdio.h>

// main() is where every C program begins executing
int main() {

    // printf() prints formatted text to the console
    printf("Hello, World!\\n");

    // return 0 tells the operating system the program succeeded
    return 0;
}

// The \\n at the end of the string creates a new line.
// C requires you to manage a lot of details yourself —
// that's what makes it powerful but challenging.`,
  },
  {
    id: 'cpp',
    label: 'C++',
    filename: 'cpp.cpp',
    extension: '.cpp',
    shikiLanguage: 'cpp',
    accentColor: 'lang-blue',
    usedFor: ['Game Engines', 'Systems', 'Performance'],
    code: `// ============================================
// C++
// ============================================
// Created by: Bjarne Stroustrup (1985)
//
// WHERE IS C++ USED?
//   - Game engines (Unreal Engine, Unity internals)
//   - Operating systems and browsers
//   - High-performance computing and simulations
//   - Competitive programming
//
// C++ extends C with object-oriented features.
// It's the language behind most AAA video games
// and performance-critical software.
// ============================================

// #include loads the input/output stream library
#include <iostream>

// using namespace std lets us write cout and endl without std::
using namespace std;

// main() is the entry point of every C++ program
int main() {

    // cout sends text to the console output stream
    // endl adds a new line and flushes the buffer
    cout << "Hello, World!" << endl;

    // return 0 signals the program finished successfully
    return 0;
}

// C++ uses << (insertion operator) instead of printf().
// "using namespace std;" shortens standard library names.`,
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    filename: 'typescript.ts',
    extension: '.ts',
    shikiLanguage: 'typescript',
    accentColor: 'lang-blue',
    usedFor: ['Large Web Apps', 'Frontend', 'Full Stack'],
    code: `// ============================================
// TypeScript
// ============================================
// Created by: Anders Hejlsberg at Microsoft (2012)
//
// WHERE IS TYPESCRIPT USED?
//   - Large-scale web applications
//   - Frontend frameworks (Angular, React, Vue)
//   - Backend with Node.js (NestJS, Express)
//   - Any project where JavaScript needs more safety
//
// TypeScript is JavaScript with added type checking.
// It catches bugs before your code even runs, making
// it perfect for large team projects.
// ============================================

// We declare a variable with a type annotation (: string)
const message: string = "Hello, World!";

// console.log() works just like in JavaScript
console.log(message);

// TypeScript adds types to JavaScript:
// string, number, boolean, array, object, and more.
// This helps catch mistakes while you write code,
// not after you run it.`,
  },
  {
    id: 'ruby',
    label: 'Ruby',
    filename: 'ruby.rb',
    extension: '.rb',
    shikiLanguage: 'ruby',
    accentColor: 'lang-red',
    usedFor: ['Web Apps', 'Rails', 'Scripting'],
    code: `# ============================================
# Ruby
# ============================================
# Created by: Yukihiro "Matz" Matsumoto (1995)
#
# WHERE IS RUBY USED?
#   - Web applications (Ruby on Rails framework)
#   - Scripting and automation
#   - Prototyping and startups
#   - DevOps tools (Chef, Puppet)
#
# Ruby was designed to make programmers happy.
# Its creator said: "Ruby is designed to make programmers
# productive and happy."
# ============================================

# puts (put string) prints text with a newline at the end
puts "Hello, World!"

# That's it! Like Python, Ruby keeps things simple.
# Ruby doesn't need semicolons or parentheses here.
# The language is designed to feel natural to read.`,
  },
  {
    id: 'go',
    label: 'Go',
    filename: 'go.go',
    extension: '.go',
    shikiLanguage: 'go',
    accentColor: 'lang-cyan',
    usedFor: ['Cloud', 'APIs', 'Infrastructure'],
    code: `// ============================================
// Go (Golang)
// ============================================
// Created by: Robert Griesemer, Rob Pike, Ken Thompson
//             at Google (2009)
//
// WHERE IS GO USED?
//   - Cloud infrastructure (Docker, Kubernetes)
//   - Web APIs and microservices
//   - DevOps and networking tools
//   - High-performance backend systems
//
// Go was created at Google to be simple, fast, and great
// at handling many tasks at once (called "concurrency").
// ============================================

// Every Go file starts with a package declaration
package main

// import loads the "fmt" (format) package for printing
import "fmt"

// func main() is the entry point of the program
func main() {

    // fmt.Println() prints text with a newline
    fmt.Println("Hello, World!")
}

// Go is compiled and very fast — close to C speed.
// It was designed to be simple: fewer features,
// but each one is done really well.`,
  },
  {
    id: 'rust',
    label: 'Rust',
    filename: 'rust.rs',
    extension: '.rs',
    shikiLanguage: 'rust',
    accentColor: 'lang-orange',
    usedFor: ['Systems', 'WebAssembly', 'Safety-Critical'],
    code: `// ============================================
// Rust
// ============================================
// Created by: Graydon Hoare at Mozilla (2010)
//
// WHERE IS RUST USED?
//   - Systems programming (OS components, browsers)
//   - WebAssembly (running code in browsers at near-native speed)
//   - Safety-critical software (no crashes, no data races)
//   - Command-line tools and game engines
//
// Rust is loved by developers for being blazingly fast
// while preventing common bugs that crash programs
// in C and C++.
// ============================================

// fn main() is the entry point of every Rust program
fn main() {

    // println!() is a macro (note the !) that prints text
    println!("Hello, World!");
}

// Rust uses an exclamation mark for macros like println!()
// The compiler is very strict — it catches memory bugs
// at compile time, so your programs are safe and fast.`,
  },
  {
    id: 'swift',
    label: 'Swift',
    filename: 'swift.swift',
    extension: '.swift',
    shikiLanguage: 'swift',
    accentColor: 'lang-orange',
    usedFor: ['iOS', 'macOS', 'Apple Apps'],
    code: `// ============================================
// Swift
// ============================================
// Created by: Chris Lattner at Apple (2014)
//
// WHERE IS SWIFT USED?
//   - iOS app development (iPhone, iPad)
//   - macOS applications
//   - watchOS and tvOS apps
//   - Server-side Swift (Vapor framework)
//
// Swift is Apple's modern programming language.
// If you want to build apps for iPhones, iPads, or
// Macs, Swift is the language to learn.
// ============================================

// print() displays text in the console — simple!
print("Hello, World!")

// Swift is clean and readable, like Python,
// but with the power needed for mobile apps.
// No semicolons needed at the end of lines.`,
  },
];
