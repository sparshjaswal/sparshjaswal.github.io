# Async & Await

## What is Async/Await?
Async/await is syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code.

## Basic Syntax

### Async Function
```javascript
// Always returns a Promise
async function fetchData() {
    return "Hello World"; // Automatically wrapped in Promise.resolve()
}

fetchData().then(data => console.log(data)); // "Hello World"
```

### Await Keyword
```javascript
async function getData() {
    // Wait for the promise to resolve
    const data = await fetchData();
    console.log(data); // "Hello World"
}
```

## Practical Examples

### Fetching Data
```javascript
// Using Promises (older way)
function fetchUserData() {
    return fetch('/api/user')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Using Async/Await (modern way)
async function fetchUserData() {
    try {
        const response = await fetch('/api/user');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
```

### Sequential vs Parallel Execution
```javascript
// Sequential execution (slower)
async function sequential() {
    const user = await fetchUser();
    const posts = await fetchPosts();
    const comments = await fetchComments();
    
    return { user, posts, comments };
}

// Parallel execution (faster)
async function parallel() {
    const [user, posts, comments] = await Promise.all([
        fetchUser(),
        fetchPosts(),
        fetchComments()
    ]);
    
    return { user, posts, comments };
}
```

## Error Handling

### Try-Catch
```javascript
async function handleErrors() {
    try {
        const data = await riskyOperation();
        console.log('Success:', data);
    } catch (error) {
        console.error('Failed:', error.message);
    } finally {
        console.log('Cleanup operations');
    }
}
```

### Multiple Async Operations
```javascript
async function processData() {
    try {
        const step1 = await firstOperation();
        const step2 = await secondOperation(step1);
        const step3 = await thirdOperation(step2);
        
        return step3;
    } catch (error) {
        // Handle any error from any step
        console.error('Process failed:', error);
        throw error; // Re-throw if needed
    }
}
```

## Common Patterns

### Timeout with Async/Await
```javascript
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedOperation() {
    console.log('Starting...');
    await timeout(2000);
    console.log('Done after 2 seconds');
}
```

### Retry Logic
```javascript
async function retryOperation(operation, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const result = await operation();
            return result;
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            console.log(`Attempt ${i + 1} failed, retrying...`);
            await timeout(1000); // Wait before retry
        }
    }
}
```

### Processing Arrays
```javascript
const urls = ['url1', 'url2', 'url3'];

// Sequential processing
async function processSequentially() {
    const results = [];
    for (const url of urls) {
        const result = await fetch(url);
        results.push(result);
    }
    return results;
}

// Parallel processing
async function processInParallel() {
    const promises = urls.map(url => fetch(url));
    const results = await Promise.all(promises);
    return results;
}
```

## Important Rules

1. **await can only be used inside async functions**
```javascript
// ❌ Wrong
function regularFunction() {
    const data = await fetchData(); // SyntaxError
}

// ✅ Correct
async function asyncFunction() {
    const data = await fetchData();
}
```

2. **async functions always return Promises**
```javascript
async function example() {
    return 42;
}

example().then(value => console.log(value)); // 42
```

3. **Error handling is crucial**
```javascript
// ❌ Unhandled promise rejection
async function badExample() {
    await riskyOperation(); // If this fails, error is unhandled
}

// ✅ Properly handled
async function goodExample() {
    try {
        await riskyOperation();
    } catch (error) {
        console.error('Handled:', error);
    }
}
```

## Async/Await vs Promises

```javascript
// Promise chain
function promiseWay() {
    return fetchUser()
        .then(user => fetchPosts(user.id))
        .then(posts => fetchComments(posts[0].id))
        .then(comments => ({ user, posts, comments }))
        .catch(error => console.error(error));
}

// Async/await
async function asyncWay() {
    try {
        const user = await fetchUser();
        const posts = await fetchPosts(user.id);
        const comments = await fetchComments(posts[0].id);
        return { user, posts, comments };
    } catch (error) {
        console.error(error);
    }
}
```

## Best Practices

1. Always use try-catch for error handling
2. Use Promise.all() for parallel operations
3. Don't forget to handle rejections
4. Keep async functions focused and small
5. Use async/await consistently throughout your codebase
