---
title: 基础分块总结
date: 2023-10-18 18:07:37
categories:
    - 算法
tags:
    - 分块
---

## 教主的魔法（区间加 区间查排名）

分块并维护块内排序后的结果，设块长为 $B$。

区间加时，整块打 tag，散块暴力修改后排序。

区间查询 rank，整块二分，散块暴力统计。

这样时间复杂度为 $O(q\log(B)(\dfrac nB+B))$

---

考虑到区间加时，散块中被修改的和未被修改的部分内部，相对大小关系不变，可以 $O(B)$ 归并。

这样时间复杂度为为 $O(q\log(B)\dfrac nB+qB)$，$B$ 取 $\sqrt{n\log n}$ 以平衡复杂度。

## 由乃打扑克（区间加 区间查第 k）

类似地，分块维护块内排序内的结果，设块长为 $B$。

区间加时，整块打 tag，散块同样 $O(B)$ 归并。

区间查询第 k，通过二分答案转化为查询 rank。

这样时间复杂度为 $O(q\log(w)(\dfrac nB+B))$。

---

二分后，在散块中查询 rank 时可以将至多两个散块归并到一个新数组，从而将查询 rank 的 $O(B)$ 的时间复杂度变为 $O(\log B)$。

这样时间复杂度为 $O(q\log(w)(\dfrac nB\log B+\log B)+q(\dfrac nB+B))=O(q\log(w)\dfrac nB\log B+qB)$，一般近似地认为 $\log w$ 和 $\log B$ 同阶。取 $\sqrt{n}\log w$ 以平衡时间复杂度。

---

二分时可以使用分散层叠减少二分次数，达到 $O(q\sqrt n)$ 的时间复杂度。

见 [gxy001 的博客](https://www.luogu.com.cn/blog/gxy001/solution-p5356)。
