# EXERCISE -----> https://leetcode.com/problems/merge-two-sorted-lists/

# Merge two sorted linked lists and return it as a new sorted list.
#  The new list should be made by splicing together
#   the nodes of the first two lists.

# Example:

# Input: 1->2->4, 1->3->4
# Output: 1->1->2->3->4->4

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def merge_two_lists(l1, l2)
  arr = []
  while l1 || l2
    arr << l1.val if l1
    arr << l2.val if l2
    l1 = l1.next  if l1
    l2 = l2.next  if l2
  end
  int_to_list(arr)
end

def int_to_list(arr)
  arr.sort! { |x, y| y <=> x }
  list = ListNode.new(arr.pop)

  while !arr.empty? do
    tail = find_tail(list)
    tail.next = ListNode.new(arr.pop)
  end

  list
end

def find_tail(list)
  node = list
  return node if !node.next

  return node if !node.next while (node = node.next)
end
