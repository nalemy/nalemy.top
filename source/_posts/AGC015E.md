---
title: "[AGC015E] Mr.Aoki Incubator"
categories:
  - 题目
date: 2023-12-03 20:52:01
tags:
  - 动态规划
---
设初始局面只有点 $x$ 被染色，最后被染色的点集为 $f(x)$，那么显然起初有多个点 $x_1,x_2,\cdots,x_m$ 染色，最终被染色的点集为 $f(x_1)\cup f(x_2)\cup\cdots\cup f(x_m)$。

于是我们探寻 $f(x)$ 会包含哪些节点。

对于点 $i<x$，它被染色当且仅当存在点 $j$ 不在 $x$ 左侧，并且满足 $V_j<V_i$。这样 $i$ 要么先与 $x$ 相遇，被染色；要么先与 $j$ 相遇，此时 $j$ 一定在 $x$ 左侧，即 $j$ 一定被染色，于是 $i$ 被染色。显然不存在其它染色情况。

同理，对于点 $i>x$ 它被染色当且仅当存在点 $j$ 不在 $x$ 右侧，并且满足 $V_j>V_i$。

我们把所有点按照 $X$ 排序后重新编号。设 $\mathrm{pmx}_i=\max_{i\in[1,i]}V_i$ 和 $\mathrm{smn}=\min_{i\in[i,n]}V_i$。于是 $f(x)=\{i\mid i<x\land V_i<\mathrm{smn_i}\}\cup\{i\mid i>x\land V_i>\mathrm{pmx_i}\}\cup\{x\}$。

于是考虑对初始局面进行 DP。设 $g_i$ 为最靠右的初始被染色的点，且能够最终将 $[1,i]$ 中所有点都染上色的初始局面数。

那么由 $g_j$ 到 $g_i$ 的转移只需要保证 $(i,j)$ 中所有节点都染上色即可，即 $(i,j)$ 中不存在点 $t$ 使得 $V_t\in[\mathrm{pmx}_j,\mathrm{smn}_i]$。考虑到 $\mathrm{pmx},\mathrm{smn}$ 均单调，可以使用双指针维护。