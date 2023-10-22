---
title: 数论函数总结
date: 2023-10-18 17:42:34
categories:
    - 理论
tags:
    - 数论
---

数论函数定义为定义域为整数，值域为整数的函数。

常见的数论函数：

- 单位函数 $\varepsilon(n)=[n=1]$
- 常数函数 $k(n)=k$
- 恒等函数 $\mathrm{id}_k(n)=n^k$，$\mathrm{id}_0$ 简记作 $\mathrm{id}$
- 除数函数 $\sigma_k(n)=\sum_{d|n}d^k$，$\sigma_0$ 简记作 $d$，$\sigma_1$ 简记作 $\sigma$
- 欧拉函数 $\varphi(n)$ 表示 $[1,n]$ 中与 $n$ 互质的数
- 莫比乌斯函数 $\mu(n)$

函数 $f$ 是**积性函数**当且仅当 $f(1)=1$，且对于任意**互质**的 $x,y$ 都有 $f(xy)=f(x)f(y)$。

函数 $f$ 是**完全积性函数**当且仅当 $f(1)=1$，且对于任意 $x,y$ 都有 $f(xy)=f(x)f(y)$。

## Dirichlet 卷积

对于两个数论函数 $f,g$，$f$ 与 $g$ 的 Dirichlet 卷积定义为

$$(f*g)(n)=\sum_{d|n}f(d)g(\frac nd)$$

Dirichlet 卷积具有交换律、结合律，$\varepsilon$ 为 Dirichlet 卷积的单位元。

任何 $1$ 处点值非 $0$ 的数论函数都存在 Dirichlet 卷积逆。

积性函数的 Dirichlet 卷积是积性函数，积性函数的 Dirichlet 卷积逆也是积性函数。

## 莫比乌斯函数

定义莫比乌斯函数

$$\mu(n)=\begin{cases}0&(\exists x>1,x^2|n)\\(-1)^{\omega(n)}&(\text{Otherwise})\end{cases}$$

莫比乌斯函数与 $1$ 互为 Dirichlet 卷积逆，即 $\mu*1=\varepsilon$。

证明：

$$(\mu*1)(n)=\sum_{d|n}\mu(d)$$

考虑到右式只有当 $d$ 不含平方因子时 $\mu(d)$ 才非 $0$。

设 $n={p_1}^{\alpha_1}{p_2}^{\alpha_2}\cdots{p_n}^{\alpha_n}$，其中 $p$ 两两不同，$\alpha_i\ge1$。显然

$$
\begin{aligned}
(\mu*1)(n)
&=\sum_{T\subseteq\{p_1,p_2,\cdots p_n\}}\mu\left(\prod_{t\in T}t\right)\\
&=\sum_{T\subseteq\{p_1,p_2,\cdots,p_n\}}(-1)^{|T|}\\
&=\sum_{k=0}^n\binom nk(-1)^k\\
&=(1-1)^n\\
&=\varepsilon(n)\qquad\Box
\end{aligned}
$$

## 数论函数的常见性质

$\varphi*1=\mathrm{id}$，也即 $\sum_{d|n}\varphi(d)=n$。

证明：考虑构造 $x\in[1,n]$ 到 $\{(d,x):d|x,\gcd(x,d)=1\}$ 的映射

$$f:x\mapsto\left(\frac n{\gcd(x,n)},\frac x{\gcd(x,n)}\right)$$

不难发现这是一个双射。$\Box$

$\varphi=\mu*\mathrm{id}$，也即 $\sum_{d=1}^n[\gcd(n,x)=1]=\sum_{d|n}\mu(d)\cdot\dfrac nd$。

证明：设 $n={p_1}^{\alpha_1}{p_2}^{\alpha_2}\cdots{p_n}^{\alpha_n}$，其中 $p$ 两两不同，$\alpha_i\ge1$，由容斥原理

$$
\begin{aligned}
\sum_{d=1}^n[\gcd(d,n)=1]
&=\sum_{T\subseteq\{p_1,p_2,\cdots,p_n\}}(-1)^{|T|}\cdot\frac n{\prod_{t\in T}t}\\
&=\sum_{d|n}\mu(d)\cdot\frac nd\qquad\Box
\end{aligned}
$$

设 $n={p_1}^{\alpha_1}{p_2}^{\alpha_2}\cdots{p_n}^{\alpha_n}$，其中 $p$ 两两不同，$\alpha_i\ge1$。有

$$\varphi(n)=n\prod_{i=1}^n1-\frac1{p_i}$$

证明：类似上一个结论，运用容斥原理有

$$
\begin{aligned}
\sum_{d=1}^n[\gcd(d,n)=1]
&=\sum_{T\subseteq\{p_1,p_2,\cdots,p_n\}}(-1)^{|T|}\cdot\frac n{\prod_{t\in T}t}\\
&=n\sum_{T\subseteq\{p_1,p_2\cdots,p_n\}}\prod_{t\in T}-\frac1t\\
&=n\prod_{i=1}^n(1-\frac1{p_i})
\end{aligned}
$$
