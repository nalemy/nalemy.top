---
title: 杜教筛
categories:
  - 算法
date: 2024-02-29 09:18:12
tags:
  - 数论
---
对于数论函数 $f$ 定义前缀和 $S_f(n)=\sum_{i=1}^nf(i)$。

如果有两个数论函数 $f,g$ 满足我们可以快速计算 $S_g$ 和 $S_{f*g}$，可以通过杜教筛快速求出 $S_f(n)$。

$$
\begin{aligned}
S_{f*g}(n)=&\sum_{i=1}^n\sum_{d|i}g(d)f\left(\frac id\right)\\
=&\sum_{d=1}^ng(d)\sum_{k=1}^{\lfloor\frac nd\rfloor}f(k)\\
=&\sum_{d=1}^ng(d)S_f(\left\lfloor\frac nd\right\rfloor)
\end{aligned}
$$

于是有

$$
g(1)S_f(n)=S_{f*g}(n)-\sum_{d=2}^ng(d)S_f(\left\lfloor\frac nd\right\rfloor)
$$

直接利用该式记忆化地递归求解，因为

$$
\left\lfloor\frac{\lfloor\frac n{d_1}\rfloor}{d_2}\right\rfloor=\left\lfloor\frac n{d_1d_2}\right\rfloor
$$

所以我们只在所有 $\lfloor\frac nd\rfloor$ 处求了 $S_f$ 的值（其中 $d$ 是 $[1,n]$ 内的整数），每次求值使用整除分块，将 $d$ 以 $\sqrt n$ 为界分开考虑，总复杂度如下：

$$
\begin{aligned}
&O\left(\sum_{i=1}^{\sqrt n}\sqrt i+\sum_{i=1}^{\sqrt n}\sqrt\frac ni\right)\\
=&O\left(\int_0^{\sqrt n}\sqrt x\mathrm dx+\int_0^{\sqrt n}\sqrt\frac nx\mathrm dx\right)\\
=&O\left(\left.x^{\frac32}\right|_0^{\sqrt n}+\left.\sqrt{nx}\right|_0^{\sqrt n}\right)\\
=&O\left(n^\frac34\right)
\end{aligned}
$$

如果 $f$ 可以通过线性筛预处理出不超过 $K$ 的 $S_f$ 值，复杂度可以进一步优化。因为只求所有不超过 $\sqrt n$ 处的 $S_f$ 值已经达到了 $O(n^\frac34)$ 的复杂度，所以想要优化复杂度，$K$ 至少为 $\sqrt n$。所以有

$$
\begin{aligned}
&O\left(K+\sum_{i=1}^\frac nK\sqrt\frac ni\right)\\
=&O\left(K+\left.\sqrt{nx}\right|_0^{\frac nK}\right)\\
=&O\left(K+nK^{-\frac12}\right)
\end{aligned}
$$

$K=O(n^\frac 23)$ 时复杂度平衡，为 $O(n^\frac 23)$。