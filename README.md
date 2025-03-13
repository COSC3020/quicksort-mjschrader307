# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

---

Answer: The worst-case situation for this algorithm would involve maximizing the number of iterations in the partition step and also maximizing the while-loop iterations in the main `quicksort()` function. To maximize the iterations in the partition step, the pivot value would have to be swapped *n* times. To maximize the while-loop iterations in the main `quicksort()` function, the worst possible pivot value would have to be chosen every time, resulting in *n* partition iterations. In the case that *n* partitions are done with each partition moving the pivot value *n* times, that gives this function a worst-case time complexity of $\Theta(n^2)$.

---

Went to office hours --> got suggestion to mimic the recursion using a data structure --> led me to try using an explicit implemenation of a stack (list of tuples of subarray bounds) as opposed to letting the function call stack handle it like normal

I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.
