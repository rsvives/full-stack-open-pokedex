# FullStack Open - Part 11: CI/CD

<!-- Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by Google.

What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask Google!

Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision? -->

## Exercise 1.1: Tools for linting, testing, and building in Rust Programming Language

Due to its increasing popularity for being fast and safe, I've chosen the Rust programming language as the programming language for this exercise. Rust has contemporary tools for developers like:

### Cargo

Which is a dependency manager and a build tool but it also allows to compile, run, test and publish projects.

### The Rust Compiler (rustc):

`rustc` is the actual Rust compiler. It compiles individual Rust source files and produces executables or libraries. It also includes some basic linting capabilities to catch common issues, such as:

- Unused variables or imports.
- Dead code (functions or structs that aren't used).
- Unreachable code.
- Potential mismatches in pattern matching.

### Clippy

Is a more feature-rich and flexible linting tool that provides more detailed feedback on Rust code. Clippy includes many lints for potential bugs, performance improvements, stylistic choices, and more. It's highly recommended for improving code quality and ensuring adherence to Rust best practices.

### Rustfmt

A tool for formatting Rust code according to style guidelines to ensure every developer in the project writes the same-styled code.

## Exercise 1.2: Jenkins and GitHub Actions alternatives

Among the alternatives to above mentioned tools I found:

### Travis CI

Travis CI is a self-hosted continuous integration service used to build and test software projects hosted on GitHub, Bitbucket, GitLab. Is no longer a free tool

### TeamCity

TeamCity is a build management and continuous integration server from JetBrains.

### Circle CI

Is a CI Platform which offers both self-hosted and cloud services alternatives

### GitLab CI

Is the Git-based CI pipelines tool alternative of GitHub Actions from GitLab

## Exercise 1.3: Self-hosted vs Cloud-based

Due to the urgent need of deploying the hypothetical app for this exercise, I would use an easier-to-config tool rather than a more-in-depth one. In other words, it would be easier and faster to deploy this Rust app with a cloud-based tool.

Additionally, as I know very few things about Rust, I would stick to its official documentation where there's few examples of deploying and using a CI pipeline with GitHub Actions, Circle CI and GitLab CI.
