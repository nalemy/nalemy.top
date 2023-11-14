---
title: "[USACO18OPEN] Out of Sorts P"
categories:
  - 题目
date: 2023-11-10 19:42:04
tags:
  - 转化
---
一次冒泡排序后区间内的最大值一定会到区间末尾，所以至少会出现一个分割点。那么每个元素对于答案的贡献就等于这个元素进入递归的层数。

不难发现一个元素不再进入下一层递归，当且仅当这个元素左右两侧均有分割点。所以这个元素进入递归的层数等于左右两侧分割点出现时间的较大值。于是我们转而考察每个分割点出现的时间。

而一个位置出现分割点当且仅当所有所有排序后在它左侧的数都在它左侧。考虑到这个目标达成以前，每一次递归，排序后在分界点左侧，此时却在分界点右侧的所有数，都会恰好想左移动一格。也即该分界点第一次出现的时间，等于排序后在分界点左侧的，最靠右的点到分界点的距离。