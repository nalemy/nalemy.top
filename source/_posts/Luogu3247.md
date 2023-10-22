---
title: "[HNOI2016] 最小公倍数"
categories:
  - 题目
date: 2023-10-20 09:31:47
tags:
  - 分块
---
转化题意：给定一个图，每条边有边权 $(a,b)$，多次给定 $u,v,x,y$，询问 $u$ 到 $v$ 中存在一条路径 $p_0,p_1,\cdots,p_k$，使得 $\max_{i=0}^na_{p_i}=x$ 且 $\max_{i=0}^nb_{p_i}=y$。

首先抛开相等的限制，单是考虑所有所有 $a_i\le x,b_i\le y$ 的边 $i$ 是否能够连接 $u,v$。这是一个类似二维数点的问题，但是它不能将边划分为两个集合，分别求得答案后相加，也即答案在元素集合维不具有可加性。于是无法 CDQ 分治。

考虑分块用并查集维护连通性。边按照 $a$ 排序，分块，并依次处理。将询问按照 $a$ 分到不同的块中，发现所在块之前的所有块内的边 $a$ 限制一定满足，之后的所有块内的边 $a$ 限制一定不满足，所在块内的边可以暴力处理。

先考虑每个块处理时，它前面的所有块。这些块只需要考虑 $b$ 限制。故维护这些块按照 $b$ 排序的结果，每处理完一块就归并进去。块内询问也按照 $b$ 排序，双指针扫，即可线性将每个块之前的所有块中合法的边加入并查集。

对于每个询问，处理完前面所有块之后，加入本块中满足条件的所有边并判别连通性。注意到这些块内边并不具有单调性，在前面询问涉及到的边不一定在后面询问中出现过，所以需要在处理完后撤回（实际上这就是回滚莫队）。

想起来我们起初将“路径上权值最大值等于 $x$”的限制弱化为“路径上所有边权值不超过 $x$”，这里的处理也很简单，并查集维护连通性的同时分别维护连通块内所有边 $a,b$ 的最大值。注意在往并查集中加边时，无论边的两个端点是否连通，都需要更新最大值；只有两个端点不连通时，才更改连通性相关的信息。