/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
    let a = new ListNode(0,null)
    let b = a
    let jin = 0
    while (l1!=null||l2!=null){
        let sum = (l1 === null ? 0 : l1.val)+(l2 === null ? 0 : l2.val) + jin
        let newNode = new ListNode((sum )%10,null)
        b.next = newNode
        b = b.next
        l1 = l1 === null ? null : l1.next
        l2 = l2 === null ? null : l2.next
        jin  = Math.floor(sum/10)
    }
    if (jin !=0){
        b.next = new ListNode(1)
    }
    return a.next
};

// let l1=new ListNode(2,new ListNode(4,new ListNode(3,null)))
// let l2=new ListNode(5,new ListNode(6,new ListNode(4,null)))

let l1=new ListNode(9,new ListNode(9,new ListNode(9,new ListNode(9,new ListNode(9,new ListNode(9,new ListNode(9)))))))
let l2=new ListNode(9,new ListNode(9,new ListNode(9,new ListNode(9))))
// console.log(l1)
console.log(JSON.stringify(addTwoNumbers(l1,l2)))
