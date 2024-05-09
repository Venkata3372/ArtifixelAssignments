
const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}
for (const num of numbers) {
  console.log(num * num)
}
let sum = 0
for (const num of numbers) {
  sum = sum + num  
}
console.log(sum) // 15
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}
for (const tech of webTechs) {
  console.log(tech[0]) 
}
