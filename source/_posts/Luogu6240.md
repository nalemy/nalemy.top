---
title: "[Luogu6240] 好吃的题目"
date: 2023-10-18 18:03:30
categories:
    - 题目
tags:
    - 分治
---

物品成序列，每次对其中的一个区间做背包问题。

设一组物品 $S$ 限定体积不超过 $m$ 的情况下能够取得的最大价值为 $f_S(m)$。如果使用线段树维护区间内元素的 $f_S$ 值会带来大量复杂度为 $O(m^2)$ 合并。而插入单个元素时间复杂度为 $O(m)$，所以我们倾向于使用更多的插入操作而非合并操作。

考虑对区间进行分治，将每个询问放到最小的完全包含询问区间的分治区间进行处理。显然询问区间一定跨过该分治区间中点。于是对于每个分治区间，预处理其前半部分的每个后缀的 $f$、后半部分的每个前缀的 $f$，各 $O(nm)$ 的时间复杂度，然后对所有跨过区间中点的询问，进行一次 $O(m)$ 的合并（因为这里只需要算出 $f$ 的一处点值）即可求得答案。

复杂度为 $O(nm\log n+mq)$