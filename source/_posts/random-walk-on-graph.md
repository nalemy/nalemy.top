---
title: 图上随机游走典例
date: 2023-10-18 17:52:33
categories:
    - 理论
tags:
    - 概率与期望
    - 高斯消元
    - 拓扑排序
---

## [USACO10HOL] Driving Out the Piggies G

从节点 $0$ 出发，在无向图上游走，在每个节点有 $p$ 的概率终止，否则等概率走向相邻节点。

设 $f_{i,u}$ 为 $i$ 时刻之前随机游走过程未终止，而 $i$ 时刻小 P 在点 $u$ 的概率。

而 $0$ 时刻在点 $1$，于是 $f_{0,u}=[u=1]$。

而第 $i$ 时刻（$i>1$）的情况可以表示为

$$ f_{i,u}=\sum_{v\in N(u)}\frac{(1-p)f_{i-1,v}}{|N(v)|} $$

于是最终停留在点 $u$ 的概率为

$$ \sum_{i=0}^\infty pf_{i,u}=p\sum_{i=0}^\infty f_{i,u} $$

令

$$
\begin{aligned}
g_u&=\sum_{i=0}^\infty f_{i,u}\\
&=f_{0,u}+\sum_{i=1}^\infty f_{i,u}\\
&=f_{0,u}+\sum_{i=1}^\infty\sum_{v\in N(u)}\frac{(1-p)f_{i-1,v}}{|N(v)|}\\
&=f_{0,u}+\sum_{v\in N(u)}\sum_{i=1}^\infty\frac{(1-p)f_{i-1,v}}{|N(v)|}\\
&=f_{0,u}+\sum_{v\in N(u)}\frac{1-p}{|N(v)|}\sum_{i=0}^\infty f_{i,v}\\
&=f_{0,u}+\sum_{v\in N(u)}\frac{1-p}{|N(v)|}\cdot g_v
\end{aligned}
$$

据此我们可以列出关于 $g$ 的方程组

$$
\begin{cases}
g_0+\sum_{v\in N(0)}\frac{1-p}{|N(v)|}\cdot g_v=1\\
g_u+\sum_{v\in N(u)}\frac{1-p}{|N(v)|}\cdot g_v=0&(u\neq 0)
\end{cases}
$$

然后使用高斯消元求解。

## [HNOI2013] 游走

从节点 $0$ 出发，在无向图上游走，等概率走向相邻节点，到 $t$ 点结束，求经过每条边的期望次数。

记 $N'(u)=N(u)\setminus\{t\}$。

设事件 $A_{i,u}$ 为第 $i$ 个时刻在点 $u$，$B_{i,v,u}$ 为 $i-1$ 时刻到 $i$ 时刻间由点 $v$ 转移到了点 $u$。显然有 $P(A_{0,u})=[u=0]$。

不难发现，对于 $v\in N'(u)$ 有

$$P(A_{i,u}B_{i,v,u})=P(A_{i-1,v}B_{i,v,u})=P(B_{i,v,u}|A_{i-1,v})P(A_{i-1,v})=\frac{P(A_{i-1,v})}{|N'(v)|}$$

由全概率公式，易得

$$P(A_{i,u})=\sum_{v\in N'(u)}P(A_{i,u}B_{i,v,u})=\sum_{v\in N'(u)}\frac{P(A_{i-1,v})}{|N'(v)|}$$

设 $f_u$ 为经过 $u$ 的期望次数，由期望的线性性可得

$$
\begin{aligned}
f_u&=\sum_{i=0}^\infty P(A_{i,u})\\
&=P(A_{0,u})+\sum_{i=1}^\infty\sum_{v\in N'(u)}\frac{P(A_{i-1,v})}{|N'(v)|}\\
&=[u=0]+\sum_{v\in N'(u)}\sum_{i=0}^\infty\frac{P(A_{i,v})}{|N'(v)|}\\
&=[u=0]+\sum_{v\in N'(u)}\frac{f_v}{|N'(v)|}
\end{aligned}
$$

由此可列出线性方程组，通过高斯消元解得答案。
