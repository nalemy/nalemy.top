---
title: LGV 引理 & Matrix Tree 定理 & BEST 定理
categories:
  - 理论
date: 2024-03-06 09:32:56
tags:
  - 图论
  - 矩阵
  - 矩阵树定理
---
## LGV 引理

一个带权 DAG 上，对于某个起点序列 $A_k$ 和终点序列 $B_k$，称一组不相交路径 $S$ 为 $k$ 条路径 $A_i\to B_{\sigma_S(i)}$ 构成的集合，满足路径间两两没有公共点，其中 $\sigma_S$ 是与 $S$ 相关的一个 $k$ 阶排列。

定义一条路径 $p$ 的权值 $\omega(p)$ 为路径上所有边的边权乘积。$e(u,v)$ 表示 $u$ 到 $v$ 的所有路径的边权之和。那么有

$$
\sum_{S}(-1)^{\tau(\sigma_S)}\prod_{i=1}^k\omega(S_k)=
\begin{vmatrix}e(A_1,B_1)&e(A_1,B_2)&\cdots&e(A_1,B_k)\\
e(A_2,B_1)&e(A_2,B_2)&\cdots&e(A_2,B_k)\\
\vdots&\vdots&\ddots&\vdots\\
e(A_k,B_1)&e(A_k,B_2)&\cdots&e(A_k,B_k)\end{vmatrix}
$$

其中 $\tau(\sigma_S)$ 表示 $\sigma_S$ 的逆序对数。

称左式 $\sum$ 内的部分为 $S$ 的权值。根据行列式定义，右式计算的是所有 $k$ 条路径 $A_i\to B_{\sigma_S(i)}$ 构成的路径组的权值之和，而左式是其中路径两两无公共点的路径组的权值之和。

对于一个相交的路径组 $S$，我们找出图上编号最小的出现在至少两条路径中的点 $u$，找经过它的路径中编号最小的两条边，交换它们 $u$ 以后的部分。因为交换一个排列的两个位置，排列的逆序对数奇偶改变，所以我们构造出了一个贡献完全相反的路径组 $S'$。

而且不难发现对 $S'$ 进行相同的构造可以得到 $S$，所以实际上我们获得了所有路径有相交的路径组的一组匹配，且这个匹配内相对的路径组贡献相反。所以所有路径有相交的路径组的贡献总和是 $0$。

而对于有向网格图，$A_i$ 均在第一行，$B_i$ 均在最后一行这样的只有满足 $\sigma_S(i)=i$ 的路径组 $S$ 不相交的情形，LGV 引理算出来的即 $k$ 条不相交路径 $A_i\to B_i$ 构成的路径组的权值和。

todo