---
title: "[CERC2016] 二分毯 Bipartite Blanket" 
categories:
  - 题目
date: 2024-02-29 11:06:24
tags:
  - 二分图
---
如果存在一组匹配能够覆盖左部点集合 $X$，且存在一组匹配能覆盖右部点集合 $Y$，我们猜测 $X\cup Y$ 也能被一组匹配覆盖。

我们构造一个新图，对于原图上能覆盖 $X$ 的匹配中的一条边 $(u,v)$，我们在新图上连有向边 $(u,v)$；对于原图上 $Y$ 的匹配中的一条边 $(u,v)$，我们在新图上连有向边 $(u,v)$。不难发现新图上所有点的入度不超过 $1$。所以新图上的每个弱连通块都形如一条链或一个环。

对于原图上的一条极长链 $(u_0,u_1),(u_1,u_2),\cdots,(u_{k-1},u_k)$，我们不失一般性地假定 $u_{k-1}\in X$，那么显然 $u_k\not\in Y$，否则链不会在此终止。

如果 $k$ 是奇数，我们取 $(u_0,u_1),(u_2,u_3),\cdots,(u_{k-1},u_k)$ 作为一组匹配；如果 $k$ 是偶数，我们取 $(u_0,u_1),(u_2,u_3),\cdots,(u_{k-2},u_{k-1})$ 作为一组匹配。不难发现这样一定能覆盖该链上所有在 $X\cup Y$ 中的点。

环同理，交替选取构造匹配即可。

于是根据霍尔定理，两部分别状压判断即可。