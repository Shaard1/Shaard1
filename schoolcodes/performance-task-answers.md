# Performance Task 1: Debugging

## Console Output Before Adding `debugger`

The console shows:

```text
before outer() call
Hello Mae!
after outer() call
```

This happens because JavaScript runs the file from top to bottom. First, it prints the message before the function call. Then it calls `outer()`, and `outer()` calls `inner()`, which returns the greeting message. After that, the last `console.log` runs.

## Step 7 Explanation

After placing the `debugger` statement before calling `outer()`, the browser pauses the JavaScript code at that line. The console may only show the earlier output, or it may show no new output yet, depending on where the debugger statement was placed. This is because the program is temporarily stopped and is waiting for the user to continue it through Developer Tools.

## Step 9 Explanation

When the Resume button is clicked, the browser continues running the JavaScript code after the paused line. As a result, the console displays the remaining output:

```text
before outer() call
Hello Mae!
after outer() call
```

This means the code successfully continued after the debugging pause.

## Step 17 Answer

When the Step Over button is pressed, Developer Tools moves to the next line of JavaScript without entering inside a function call. It lets the programmer run the code line by line while staying at the same level of the program. This is useful when checking what happens in each line without going into the details of every function.

## Step 18 Answer

If the Step Over button is pressed two additional times, the console continues to show the output one line at a time as each `console.log` statement is executed. The first output is usually:

```text
before outer() call
```

Then, after the next executed line, the result of `outer()` appears:

```text
Hello Mae!
```

## Step 20 Answer

When Step Into is used after the first `console.log`, Developer Tools enters the function call instead of skipping over it. The highlighted parts usually move through these words or lines:

```text
outer
name
inner
name
return "Hello Mae!"
return message
```

The exact highlight may look slightly different depending on the browser version, but the main idea is that Step Into goes inside `outer()` and then inside `inner()`.

## Screenshot Checklist

Take screenshots for these parts:

1. Console output before adding `debugger`.
2. Console after adding `debugger` and refreshing the page.
3. Console after clicking Resume.
4. Developer Tools when using Step Into six times.

## Final Submission Files

Include these files in the ZIP:

```text
PThtml.html
PTscript.js
```

Make sure the final `PTscript.js` does not include the `debugger` statement.
