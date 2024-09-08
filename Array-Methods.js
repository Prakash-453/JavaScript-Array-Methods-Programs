1) Write a function to filter an array of strings to include
    only strings that start with a specified character.

Example: ["hello", "world", "this", "is", "a", "test"], "h" -> ["hello"]

PROGRAM:

function array(arr) {
    for (i of arr) {
        if (i.startsWith('h')) {
            console.log([i])
        }
    }
}
array(["hello", "world", "this", "is", "a", "test"])

OUTPUT: 
[ 'hello' ]

2. Write a function to filter an array of strings to exclude 
     strings that include a specified substring.

Example: ["hello", "world", "this", "is", "a", "test"], "o" -> [ "this", "is", "a", "test"]

PROGRAM:
function array1(arr1) {
    newarr=[]
    for (i of arr1) {
        if (!i.includes('o')) {
            newarr.push(i)
        }
    }
    console.log(newarr)
}
array1(["hello", "world", "this", "is", "a", "test"])

OUTPUT:
[ 'this', 'is', 'a', 'test' ]


3. Write a function to extract the first character from each 
     string in an array of strings.

Example: ["hello", "world", "this", "is", "a", "test"] -> ["h", "w", "t", "i", "a", "t"]

PROGRAM:
function array2(arr2) {
    newarr2=[]
    for(i=0;i<arr2.length;i++)
    {
        result=arr2[i][0]
        newarr2.push(result)
    }
    console.log(newarr2)
}
array2(["hello", "world", "this", "is", "a", "test"])

OUTPUT:
[ 'h', 'w', 't', 'i', 'a', 't' ]

