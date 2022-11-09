// 1. Consecutive integers
// Given an array of integers, find the length of the longest range of consecutive integers that are contained in the sorted version of the array.
// maxConsec([4, 9, 10, 5, 17, 3, 8, 11, 1, 12, 18, 20]) ➞ 5
// After sorting array becomes [1, 2, 4, 5, 8, 9, 10, 11, 12, 17, 18, 20]
// Longest consecutive subsequence is [8, 9, 10, 11, 12], which has length 5

// Solution

const maxConsec = (arr) => {  
	arr= [...new Set(arr)].sort((a,b) => a-b)  
	let total=1  
	let temp=1  
	for(let i=0; i<arr.length; i++) {  
		if(arr[i+1]-arr[i]===1) {  
			temp+=1  
			if(temp>total) {  
				total = temp  
			}  
		} else {  
			temp=1  
		}  
	}  
	return total  
} 

// 2. Numbers in Strings
// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. 
// If there are no strings containing numbers, return an empty array.

// Solution

const numInStr = (arr) => {
	let newArr=[]
	arr.forEach(item => {
		for(let i=0; i<10; i++) {
			if(item.includes(i.toString())) {
				newArr.push(item)
				break;
			}
		}
	})
	return newArr
}

// 3.Is it an Object?

// Create a function to check whether the given parameter is an Object or not.

//Solution
function isObject(obj) {
	return obj === Object(obj);
}
//4. Closures
function greetingMaker(salutation) {
 	return function closure(name) {
 	  return salutation + ", " + name 	
 	}
}
//const greeting = greetingMaker('hello')
//greeting('Julia')
