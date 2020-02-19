const A = []

A[0] = 1
A[1] = 1
A[2] = 1
A[3] = 1
A[4] = 1
A[5] = 1

function solution(A) {
  const sorted = A.map((value, i) => ({ i, value })).sort((a, b) =>
    a.value > b.value ? 1 : -1
  )
  let min = -1
  let multiple = []

  for (const [i, item] of sorted.entries()) {
    if (i < sorted.length - 1) {
      if (item.value === sorted[i + 1].value) multiple.push(item)
      else {
        if (multiple.length > 0) {
          checkMultiple(i)
        }
        check(item, sorted[i + 1])
      }
    }
  }

  return min

  function checkMultiple(i) {
    for (const item of multiple) {
      check(item, sorted[i + 1])
    }
    multiple = []
  }

  function check(item1, item2) {
    if (item1.value !== item2.value) {
      const distance = Math.abs(item1.i - item2.i)
      if (min === -1 || distance < min) min = distance
    }
  }
}

console.log(solution(A))
