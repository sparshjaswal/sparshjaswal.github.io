# Recursion

An invocation pattern is known as recursion.
function factorial(num) {
    if(num==1)
        return 1;
    else
        return num * factorial(num-1)
}