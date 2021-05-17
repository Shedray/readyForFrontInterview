// var Person = function (){
//     this.name = "默认名称"
// }
// Person.prototype.getName=function (){
//     console.log(this.name)
//     return this.name
// }
//
// let a = new Person()
//
// a.getName()

let tt = [1,2,4,[3,424,323,[2,1212,12123,]]]
console.log(tt)
console.log(tt.join(',').split(","))

let a =[]
function flat(arr){
    arr.map(item=>{
        if (Array.isArray(item)){
            flat(item)
        }else {
            a.push(item)
        }
    })
}
flat(tt)
console.log(a)
console.log(a[a.length-1])

let t =[1,1,22,33,44,44]
let obj = {}
t.map(item=>{
    obj[item]=0
})

console.log(Object.keys(obj))

