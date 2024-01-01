---
title: FWT - 快速沃尔什变换
categories:
  - 理论
date: 2023-12-29 11:01:38
tags:
  - 异或
  - 矩阵
---
对于任意两个长为 $N=2^m$ 的数列 $a,b$，令

$$c_i=\sum_{i=p\oplus q}a_pb_q$$

欲构造可逆线性变换 $\mathcal F_m$，对于所有 $i\in[0,N)$ 满足

$$\mathcal F_m(c)_i=\mathcal F_m(a)_i\cdot\mathcal F_m(b)_i$$

我们考察 $\mathcal F$ 的矩阵表达 $T$，将 $a,b,c$ 写作列向量 $\mathbf{a,b,c}$，即

$$(T\mathbf c)_i=(T\mathbf a)_i(T\mathbf b)_i$$

再展开得

$$
\begin{aligned}
(\sum_jT_{i,j}c_j)&=(\sum_jT_{i,j}a_j)(\sum_jT_{i,j}b_j)\\
\sum_{p,q}T_{i,p\oplus q}a_pb_q&=\sum_{p,q}T_{i,p}T_{i,q}a_pb_q
\end{aligned}$$

为了让 $\mathcal F$ 对于任意的 $a,b$ 都满足这样的性质，每项 $a_pb_q$ 前的系数都要相等，即对于任意 $i,p,q$ 都有

$$T_{i,p\oplus q}=T_{i,p}T_{i,q}$$

不难发现 $T$ 的每一行都由这样一个方程组限制：

$$
\begin{cases}
x_{p\oplus q}=x_px_q&\forall p,q\in[0,N)
\end{cases}
$$

为了使得 $\mathcal F$ 可逆，我们需要对该方程组求出 $N$ 组线性无关的解。

---

首先有 $x_0^2=x_0$，解得 $x_0$ 为 $0$ 或 $1$。由于 $x_0=0$ 会导致所有 $x_i$ 都为 $0$，与任意一组解皆线性相关，舍去。

然后有 $x_i^2=x_0=1$，解得 $x_i=\pm1$。于是 $f(i)=x_i$ 为 $(S,\oplus)$ 到 $(\{0,\pm1\},\times)$ 两个线性空间之间的同态，其中 $S$ 表示在 $[0,N)$ 内的自然数。

于是我们取出 $(S,\oplus)$ 的一组基，指定集合中每个元素的 $x$ 值后即可得到每个位置的解。简单起见，我们指定

$$
T_{i,2^j}=\begin{cases}
1&(\left\lfloor\frac i{2^j}\right\rfloor\bmod2=0)\\
-1&(\left\lfloor\frac i{2^j}\right\rfloor\bmod2=1)\\
\end{cases}
$$

$\left\lfloor\frac i{2^j}\right\rfloor\bmod2$ 即 $i$ 二进制下第 $j$ 位上的数字。

通过观察不难发现，$T_{i,j}$ 的值即为 $(-1)^{\mathrm{popcount}(i\operatorname{AND}j)}$，其中 $i\operatorname{AND}j$ 表示按位与，$\mathrm{popcount}$ 表示二进制下 $1$ 的个数。

更进一步地，按照 $i,j$ 的二进制下第 $m-1$ 位分类讨论，可以将 $T_{i,j}$ 划分为四个方阵。可以看出 $\mathcal F_m$ 的矩阵表示 $T$ 与 $\mathcal F_{m-1}$ 的矩阵表示 $A$ 存在一定关系：

$$
T=\begin{bmatrix}
A&A\\A&-A
\end{bmatrix}
$$

因此求 $\mathcal F_m(a)$ 也可以依此递归进行，将 $a$ 等分成两份 $a_0,a_1$，于是 $\mathcal F_m(a)$ 的前半部分为 $\mathcal F_{m-1}(a_0)+\mathcal F_{m-1}(a_1)$，后半部分为 $\mathcal F_{m-1}(a_0)-\mathcal F_{m-1}(a_1)$。这里的加减表示序列对应位置相加减后得到一个新序列。

为了求 $T$ 的逆，我们进行消元：

$$
\left[\begin{array}{cc|cc}A&A&1&0\\A&-A&0&1\end{array}\right]
\rightarrow\left[\begin{array}{cc|cc}A&A&1&0\\0&-2A&-1&1\end{array}\right]
\rightarrow\left[\begin{array}{cc|cc}A&0&\frac12&\frac12\\0&-2A&-1&1\end{array}\right]
\rightarrow\left[\begin{array}{cc|cc}1&0&\frac12A^{-1}&\frac12A^{-1}\\0&1&\frac12A^{-1}&-\frac12A^{-1}\end{array}\right]
$$

即

$$
T^{-1}=\frac12\begin{bmatrix}A^{-1}&A^{-1}\\A^{-1}&-A^{-1}\end{bmatrix}
$$

此时

$$T_{i,j}=\frac{(-1)^{\mathrm{popcount}(i\operatorname{AND}j)}}{2^n}$$

也即得到了 $\mathcal F$ 的逆变换。