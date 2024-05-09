function displayRecursiveString(n) { 
    if (n == 0) { 
        return; 
    } 
    console.log("Artifixel Technologies"); 
    displayRecursiveString(n - 1); 
} 
  
let n = 9; 
displayRecursiveString(n)
/*
Artifixel Technologies
Artifixel Technologies
Artifixel Technologies
Artifixel Technologies
Artifixel Technologies
Artifixel Technologies
Artifixel Technologies
Artifixel Technologies
Artifixel Technologies
*/