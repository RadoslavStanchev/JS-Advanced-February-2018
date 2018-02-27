function solution (arr) {
    return Math.max.apply('', arr) //prazen string zashtoto math.max ochakva da polychi dv parametura no nqma da izpolzva this-a
}
    console.log(solution([1,2,3,55]))