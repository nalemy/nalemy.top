---
title: "[NOI2011] 阿狸的打字机"
date: 2023-10-18 18:17:35
categories:
    - 题目
tags:
    - ACAM
---

给定多个字符串，多次询问 $x$ 串在 $y$ 串中出现了多少次。

$x$ 在 $y$ 中的每次出现都恰对应 AC 自动机上的一个节点，使得这个节点为 $y$ 的前缀（在 Trie 树上为 $y$ 的祖先），并且这个节点存在后缀 $x$（在失配树上为 $x$ 的后代），这个点即以该次出现的右端点为右端点的前缀。

也即我们需要查询 Trie 树上从根到 $y$ 这一条路径上，有多少在失配树上以 $x$ 为根的子树内。于是用树状数组根据 dfs 序维护子树和，在 Trie 树上 dfs，动态维护当前所在的点到根这一条路径上所有点，在树状数组上做单点加减，区间求和。