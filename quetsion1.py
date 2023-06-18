# Example 1
l1 = ListNode(2)
l1.next = ListNode(4)
l1.next.next = ListNode(3)

l2 = ListNode(5)
l2.next = ListNode(6)
l2.next.next = ListNode(4)

result = addTwoNumbers(l1, l2)
# The sum is 342 + 465 = 807
# The expected output is [7, 0, 8]
while result:
    print(result.val)
    result = result.next

# Example 2
l1 = ListNode(0)
l2 = ListNode(0)

result = addTwoNumbers(l1, l2)
# The sum is 0 + 0 = 0
# The expected output is [0]
while result:
    print(result.val)
    result = result.next

# Example 3
l1 = ListNode(9)
l1.next = ListNode(9)
l1.next.next = ListNode(9)
l1.next.next.next = ListNode(9)
l1.next.next.next.next = ListNode(9)
l1.next.next.next.next.next = ListNode(9)
l1.next.next.next.next.next.next = ListNode(9)

l2 = ListNode(9)
l2.next = ListNode(9)
l2.next.next = ListNode(9)
l2.next.next.next = ListNode(9)

result = addTwoNumbers(l1, l2)
# The sum is 9999999 + 9999 = 10009998
# The expected output is [8, 9, 9, 9, 0, 0, 0, 1]
while result:
    print(result.val)
    result = result.next
