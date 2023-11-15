---
title: "[GXOI/GZOI2019] 旅行者（TODO）"
categories:
  - 题目
date: 2023-11-15 21:11:45
tags:
  - 贪心
---
对每个点分别求出到它最近的关键点 $f_u$，和它能到达的最近的关键点 $g_u$。

枚举每个点 $u$，如果 $f_u\not=g_u$，用 $\mathrm{dist}(f_u,u)+\mathrm{dist}(u,g_u)$ 更新答案。

枚举每条边 $(u,v,w)$，如果 $f_u\not=g_v$，用 $\mathrm{dist}(f_u,u)+w+\mathrm{dist}(v,g_v)$ 更新答案。

证明待续。