---
title: "[GXOI/GZOI2019] 旅行者"
categories:
  - 题目
date: 2023-11-15 21:11:45
tags:
  - 贪心
  - 最短路
---
对每个点分别求出到它最近的关键点 $f_u$，和它能到达的最近的关键点 $g_u$。

枚举每个点 $u$，如果 $f_u\not=g_u$，用 $k=\mathrm{dist}(f_u,u)+\mathrm{dist}(u,g_u)$ 更新答案。

枚举每条边 $(u,v,w)$，如果 $f_u\not=g_v$，用 $k=\mathrm{dist}(f_u,u)+w+\mathrm{dist}(v,g_v)$ 更新答案。

不难发现上述每个用以更新答案的值 $k$ 都对应着至少一条合法路径，所以我们只需要证明 $k$ 至少一次取到正确答案。

考察所有起点和终点均为关键点的路径中最短的一条 $p_0,p_1,p_2\cdots,p_{m}$，设其长度即原问题答案为 $t$，那么我们有以下结论：

- 对于 $p$ 上任意一点 $u$，$f_u\not=g_u\Rightarrow\mathrm{dist}(f_u,u)+\mathrm{dist}(u,g_u)=t$
- 对于 $p$ 上任意一边 $(u,v,w)$，$f_u\not=g_v\Rightarrow\mathrm{dist}(f_u,u)+w+\mathrm{dist}(v,g_v)=t$

否则不满足 $f$ 或 $g$ 的定义。

由此结论可以得出，我们的更新方法中 $k$ **取不到**正确答案 $t$，当且仅当这条路径上的每个点 $u$ 都有 $f_u=g_u$，每条边 $(u,v,w)$ 都有 $f_u=g_v$。那么

$$f_{p_0}=g_{p_1}=f_{p_1}=g_{p_2}=\cdots=g_{p_{m-1}}=f_{p_m}$$

而我们又显然有 $f_{p_0}=p_0\not=p_m=f_{p_m}$。矛盾，所以我们的更新方法一定能够取到正确答案。