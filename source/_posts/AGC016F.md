---
title: "[AGC016F] Games on DAG"
categories:
  - 题目
date: 2023-12-04 20:56:02
tags:
  - 博弈论
  - 动态规划
---
将该组合游戏进行拆解，某个 DAG 上该游戏先手必胜等价于 $1,2$ 节点的 SG 值不相等。

某个节点的 SG 值为其所有后继节点的 $\mathrm{mex}$，也即某个节点的 SG 值为 $x$ 当且仅当其向 SG 值分别为 $[0,x)$ 的节点各连了至少一条边，并且没有连向 $x$ 的边。

这提示我们从小到大，每次考察 SG 值为 $x$ 的点的集合。SG 值大于 $x$ 的所有节点必须向这个集合中至少连一条边；这个集合中的节点不能向集合中其它节点连边；SG 值小于 $x$ 的所有节点连边无限制。

状压 DP 即可。