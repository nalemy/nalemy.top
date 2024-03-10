---
title: 二分图边染色
categories:
  - 理论
date: 2024-03-03 19:52:46
tags:
  - 二分图
---
给二分图的每条边染色，求最小的颜色数量，使得任何两个共顶点的边不同色。

## 证明

我们构造性的证明该问题的答案为**所有点度数的最大值**。

首先将颜色映射到自然数。然后以任意顺序考察每条边，将其染色。我们需要保证每一步染色之后，已经染色的这些边满足限制。

对于一条边 $(u,v)$，设以 $u$ 为端点的所有边的颜色构成的集合的补集中最小的（即 $\mathrm{mex}$）为 $x$，$v$ 的为 $y$。若 $x=y$，则将边 $(u,v)$ 染成该颜色。

否则构造这样的序列：$p_0,q_1,p_1,q_2,p_2,\cdots$。其中 $p_0=u$，$q_i$ 为 $p_{i-1}$ 连出的颜色为 $y$ 的边的另一端，$p_i$ 为 $q_i$ 连出的颜色为 $x$ 的边的另一端。如果 $p_i$ 不存在连出的颜色为 $y$ 的边，或 $q_i$ 不存在连出的颜色为 $x$ 的边，则该项为序列结尾。

显然，不存在 $p_i\not=p_j,q_{i+1}=q_{j+1}$，不存在 $q_i\not=q_j,p_i=p_j$。所以这样的序列元素一定两两不同，其长度不超过总点数。

并且 $v$ 一定不在该序列中，因为 $v$ 不存在颜色为 $y$ 的边。

然后将图上每条边 $(p_i,q_{j+1})$ 的颜色改为 $x$，将 $(p_i,q_i)$ 的颜色改为 $y$。然后给 $(u,v)$ 染色为 $y$ 即可。

显然原问题答案不会小于所有点的最大度数，而上述构造方案得出的所有边的颜色不会超过所有点的最大度数，证毕。

## 应用

直接按照上述过程进行构造，时间复杂度为 $O(nm)$。

可以利用它将 k-正则图分解为若干组匹配的无交并。染色后每条边的颜色即它属于哪个匹配。

例题：[[SNOI2024] 拉丁方](https://www.luogu.com.cn/problem/P10062)