---
layout: distill
title: Understanding Derivatives
description: Building intuition and physical meaning of derivatives with simple examples.
tags: [Math]
categories: [Math]
date: 2025-04-15
featured: true
toc:
  - name: Calculating Slope using Derivative
  - name: Notation
  - name: Intuitive Interpretation
  - name: Formal Definition
  - name: Example from First Principle
  - name: Gradient
  - name: Derivatives in AIML
---

Let's understand the intuition and physical meaning of the derivative with a simple example and after that, we will see the definition & derivation of the derivative from the first principle.

Let's take a function $$ y = x^2 + 2 $$, which is an equation of a parabola and plotted in Figure 1. Now I want to plot a tangent on this curve at the point (2, 6) and for this, I need the **slope of the tangent line** at that point. Please note that the slope is a measure of the steepness of the line.
<div style="text-align: center;">
{% include figure.liquid path="assets/img/derivatives/parabola.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 1: Parabola" max-width="60%" %}
</div>

---

### Calculating Slope using Derivative

**How to calculate slope? Derivative comes to the rescue.**

We are going to calculate the derivative of the function, which gives the slope of the tangent at any particular point.

Again, another question, how to calculate derivative?

For the time being, we are going to use a few formulas listed below, and how we derived these formulas will be discussed later.

Symbolically, Derivative of any function 'y' wrt 'x' is written as: $$ \frac{dy}{dx} $$

1. **Derivative of any constant**, say $$ y = k $$, where k can assume any real value:

   $$ \frac{dy}{dx} = \frac{dk}{dx} = 0 $$

   i.e. derivative of any constant is always zero.

2. **Derivative of $$ y = x $$**, i.e. derivative of x with x itself:

   $$ \frac{dy}{dx} = \frac{dx}{dx} = 1 $$

   i.e. derivative of x with x itself is always 1.

3. **Derivative of $$ y = kx $$**, where k is a constant:

   $$ \frac{dy}{dx} = \frac{d(kx)}{dx} = k \times 1 = k $$

   Here constant 'k' came out of the derivative as it is and derivative of x wrt x is 1.

4. **Derivative of $$ y = x^n $$**, where n is a constant exponent of x:

   $$ \frac{dy}{dx} = \frac{dx^n}{dx} = n \times x^{n-1} = nx^{n-1} $$

   Here the exponent becomes coefficient and degrees of x decreased by 1.

Now, let's calculate the derivative of function: $$ y = x^2 + 2 $$ using above formulas, which gives slope of the tangent at any point.

$$ \frac{dy}{dx} = \frac{d(x^2 + 2)}{dx} = \frac{d(x^2)}{dx} + \frac{d(2)}{dx} = 2x + 0 = 2x $$

Note that slope of the tangent at any point of function y is denoted by: $$ \left(\frac{dy}{dx}\right)_{(x,y)} $$

And as per our above calculation:

$$ \left(\frac{dy}{dx}\right)_{(x,y)} = \frac{dy}{dx} = 2x $$

Finally, we can substitute the point $$ (x, y) = (2, 6) $$ in above equation to get slope of the tangent at that point which results in:

$$ \left(\frac{dy}{dx}\right)_{(2,6)} = 2 \times 2 = 4 $$

So, we got the slope ($$ m = 4 $$) of the tangent line that passes through the point $$ (x_0 = 2, y_0 = 6) $$ on the curve $$ y = x^2 + 2 $$.

To plot the tangent line, we can use the point-slope form of the straight-line equation, demonstrated below.

<div style="text-align: center;">
{% include figure.liquid path="assets/img/derivatives/slope_point_eqn.png" class="img-fluid rounded z-depth-1" zoomable=true max-width="70%" %}
</div>

$$ 4 = \frac{y - 6}{x - 2} $$

$$ 4x - 8 = y - 6 $$

$$ y = 4x - 2 $$ <---- **Equation of Tangent**

{% include figure.liquid path="assets/img/derivatives/tangent_on_curve.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 2: Tangent plot along with the Parabola" max-width="80%" %}

---

### Notation

You can find various notation to represent derivative or differentiation operation, all having the same meaning. Below are the notations for derivative of a function $$ f(x) $$ wrt **x**:

| Notation | Description |
|:--------:|:------------|
| $$ f'(x) $$ | Prime notation (Lagrange) |
| $$ \frac{df}{dx} $$ | Leibniz notation |
| $$ Df(x) $$ | Euler notation |
| $$ \frac{d}{dx} f(x) $$ | Operator notation |

---

### Intuitive Interpretation

We have understood the derivative through intuitive interpretation:

1. **Slope of the Tangent Line:** The derivative at a point represents the slope of the tangent line to the graph of the function at that point.

2. **Rate of Change:** The derivative at a point gives the rate at which the function value is changing at that point. For example, if $$ f(x) $$ represents the position of an object over time, $$ f'(x) $$ represents the object's velocity at time x.

---

### Formal Definition

Given a function $$ f(x) $$, the derivative of 'f' at a point x is defined as the limit of the average rate of change of the function over an interval as the interval becomes infinitesimally small. Mathematically, this is expressed as:

$$ f' = \frac{d}{dx} f(x) = \lim_{\Delta x \to 0} \frac{f(x + \Delta x) - f(x)}{\Delta x} \quad \text{--- (A)} $$

Here:
- $$ f' $$ is the derivative of $$ f(x) $$ at any point x; x can assume any value lying on the function.
- $$ \Delta x $$ is a small increment in x.
- $$ \frac{f(x + \Delta x) - f(x)}{\Delta x} = \frac{\Delta y}{\Delta x} $$ represents the average rate of change of the function over the interval from x to $$ (x + \Delta x) $$.

The meaning of eqn. (A) is best understood observing the figure below. The secant PQ represents the mean rate of change $$ \frac{\Delta y}{\Delta x} $$ of the function in the interval between x and $$ x + \Delta x $$.

<div style="text-align: center;">
{% include figure.liquid path="assets/img/derivatives/defn_derivative_1.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 3: Secant line PQ" max-width="60%" %}
</div>

If we want the rate of change, say, at P we have to move point Q (and the secant with it) to meet point P, as shown in figure below.

<div style="text-align: center;">
{% include figure.liquid path="assets/img/derivatives/defn_derivative_2.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 4: Moving Q towards P" max-width="60%" %}
</div>

In doing so, we must reduce $$ \Delta x $$. If $$ \Delta x \to 0 $$, we will get the tangent at point P, shown by the red line, whose inclination/slope will give the slope at P and thus the derivative at P.

---

### Example from First Principle

**Example of finding derivative from the first principle of the function $$ f(x) = 3x^2 + 2x - 1 $$**

$$
\frac{d}{dx} f(x) = \lim_{\Delta x \to 0} \frac{f(x + \Delta x) - f(x)}{\Delta x}
$$

$$
f'(x) = \lim_{\Delta x \to 0} \frac{3(x + \Delta x)^2 + 2(x + \Delta x) - 1 - (3x^2 + 2x - 1)}{\Delta x}
$$

$$
f'(x) = \lim_{\Delta x \to 0} \frac{3x^2 + 6x\Delta x + 3\Delta x^2 + 2x + 2\Delta x - 1 - 3x^2 - 2x + 1}{\Delta x}
$$

$$
f'(x) = \lim_{\Delta x \to 0} \frac{6x\Delta x + 3\Delta x^2 + 2\Delta x}{\Delta x}
$$

$$
f'(x) = \lim_{\Delta x \to 0} (6x + 3\Delta x + 2) = 6x + 2
$$

We have performed a simple derivative using the first principle for conceptual understanding. All the formulas we have used above, as well as the formulas for the derivatives of polynomial functions, trigonometric functions, exponential functions, and logarithmic functions, can be obtained using the first principle as demonstrated. These details are not necessary here, and one can refer to any intermediate calculus text for further study. Once we have the intuition, we can directly use the formulas for differential calculations of any function as needed.

---

### Gradient

You might have often heard the term **'Gradient'** which is equivalent to slope in two-dimensional setting and can be used interchangeably. In the context of multivariable calculus, the gradient is a vector that represents the direction and rate of the steepest ascent of a scalar field. For a scalar function $$ f(x, y, z) $$ in three-dimensional (3D) space, the gradient is a vector given by:

$$ \nabla f = \left( \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right) $$

Concept of partial derivative will be covered later.

---

### Derivatives in AIML

**How the concept of derivatives fits inside learning of AIML**

In almost all optimization algorithms, the concept of the derivative is used, and ML models utilize these algorithms to find the best parameters at the end of the training process. Gradient descent is one such optimization algorithm used in many ML techniques, and the widespread success of deep learning is largely due to this.

In gradient descent, the algorithm iteratively adjusts model parameters by computing the gradient of the loss function and moving a small step in the opposite direction. This process continues until the loss function is minimized, achieving optimal parameters.

**Example:** Let's see one simple yet powerful verbal problem which convinces you to fully appreciate the concept of derivatives.

**Problem Statement:** A farmer wants to build a rectangular enclosure for her sheep. She has 100 meters of fencing material to use. What dimensions should she choose for the enclosure to maximize the area?

**Solution:** Let's denote the length of the enclosure as $$ l $$ meters and the width as $$ w $$ meters. The perimeter of the rectangular enclosure is given by:

$$ P = 2l + 2w $$

Since the farmer has 100 meters of fencing material, we have:

**For Perimeter:**

$$ 2l + 2w = 100 \quad \text{---[I]} $$

**For area:**

Say it is denoted by A, then $$ A = l \times w $$

Substituting for w in equation [I]:

$$ A = l \times (50 - l) = 50l - l^2 \quad \text{---[II]} $$

As per the question we have to optimize the area. To find the maximum area, we need to find the critical points by taking the derivative of A with respect to l and setting it to zero:

$$ \frac{dA}{dl} = 50 - 2l $$

Setting $$ 50 - 2l = 0 $$ gives $$ l = 25 $$

Corresponding width is calculated using perimeter constraint, eqn. (I), which gives: $$ w = 25 $$

The dimensions that maximize the area are $$ l = 25 $$ meters and $$ w = 25 $$ meters. The maximum area is:

$$ A = l \cdot w = 25 \cdot 25 = 625 \text{ square meters} $$

Therefore, the farmer should choose dimensions of 25 meters by 25 meters to maximize the area of the enclosure.

This is a simple example of optimization, where we have figured out best value of length and width which will maximize the area. This example is just to develop the intuition and show the application of derivative. More on optimization will be covered in subsequent articles.
