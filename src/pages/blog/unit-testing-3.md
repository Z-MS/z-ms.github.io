---
layout: "../../layouts/BlogPost.astro"
title: "Unit Testing Adventures (Part 3)"
publishDate: "Sep 1 2024"
---

I was happy to find out that Jest had methods (matchers) for checking errors. In hindsight, it makes perfect sense and is something that *should* be there. I guess being a newbie makes you impressed with things that are not so impressive, per se.

One challenge I faced was that I didn't know I had to wrap `generateQuiz()` in a function to use `toThrow`. I saw the answer in the docs though. Doing the error checks was cool and pretty smooth

I also used some nice matchers for working with numbers, like `toBeEqual` and `toBeGreater` than. Again, it shouldn't have surprised me to see them there, but it just gave me this feeling, a happy feeling that Jest is a complete tool that you can use to cover a lot of cases.

## Outputs

Things got interesting when I began writing tests for the outputs. I was looping through the question object (which is an array of objects), and I tried using `forEach`. `forEach` wasn't working as I expected, and after several tries, it hit me that it wasn't the right tool for the job. Since I needed to know if the array passed a condition, I needed to use the `every` function. Alhamdulillah, it eventually worked.

Fun fact: I built some utility methods to help me work with the array of objects.

Unit testing can bring to light things about your code you didn't know.
I thought all the options needed to be part of options bank, but I was wrong. In short, the questions bank doesn't need to be a subset (proper or not) of the options bank. In another short, I mean the answer (sound) doesn't need to be in the options database.

## Using the Library
Alhamdulillah, using the library in my quizzes didn't require much code changes. A few renames here, property changes there, and everything was working fine.

## What's next?
I want to:
- Separate the tests. From what I saw in the docs, I can group similar tests using `describe`.
- See if there's room for improvement, whether some tests are useless or not.
- document my library using JSDoc syntax.
- make it easy to import in my quizzes.
Jest currently has experimental support for ES6 modules, so I use CommonJS module syntax for the library. When I use the library in my quiz apps, I have to change it to ES6 modules. It's not too stressful, but it's a bit annoying.
