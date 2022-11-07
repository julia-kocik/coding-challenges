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
