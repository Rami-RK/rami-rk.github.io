---
layout: distill
title: Self Attention
description: From intuition to scaled dot-product attention.
tags: [AIML]
categories: [AIML]
date: 2025-03-26
toc:
  - name: Overview
  - name: Calculation of Attention Weights
  - name: Introducing Queries, Keys, and Values
  - name: Database Analogy for Queries, Keys, and Values
  - name: How Self-Attention Helps in Contextual Understanding
---

## Overview

Most popular language models are Transformer-based and use a technique called self-attention. Self-attention differs from the
attention mechanism used in RNN-based encoder-decoder models. This section builds intuition before the math.

The primary function of self-attention is to generate context-aware vectors from the input sequence itself, rather than
considering both input and output as in the RNN encoder-decoder architecture.

{% include figure.liquid path="assets/img/self-attention/attention_matrix.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 1" %}

In this example, there are 7 words in the sentence "the train left the station on time" and a 7x7 attention score matrix.
The word "train" pays more attention to "station" than to other words like "on" or "the."

Attention scores help in understanding the contextual meaning of a word in a sentence. Here "station" is used in the context
of a train station, not a gas station or bus station.

The attention score is computed through cosine similarity (dot product), which assesses the relationship between words.

These scores are used as weights to compute a weighted sum of all words in the sentence. When representing the word "station,"
the words closely related to "station" contribute more to the sum, producing a context-aware vector.

> **Note**
> The attention vector and weights can be written as:
>
> $$ A(i) = \sum_{j=1}^{T_x} \alpha(i,j) x_j $$

Unfolding the equation for the word "train":

{% include figure.liquid path="assets/img/self-attention/unfolding_attention_vector.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 1 (unfolding)" %}

This process is repeated for every word in the sentence, yielding a new sequence of context-aware vectors.

---

## Calculation of Attention Weights

Before diving into self-attention, it helps to recall how attention is computed in RNN-based encoder-decoder models.

{% include figure.liquid path="assets/img/self-attention/context_vector.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 2" %}

> **Recall: RNN Attention**
>
> **Context vector:** $$ C(i) = \sum_{j=1}^{T_x} \alpha_{i,j} h(j) $$
>
> **Score:** $$ e_{i,j} = f(S_{i-1}, h_j) $$
>
> **Attention score:** $$ \alpha_{i,j} = \frac{\exp(e_{i,j})}{\sum_{k=1}^{T} \exp(e_{i,k})} $$

In self-attention, we remove RNN units and compute context-aware vectors from the input sequence itself. Suppose we have a
sequence of feature vectors (embeddings) $$ X_1, X_2, \dots, X_T $$. We use dot products to compute scores and apply SoftMax.

> **Self-Attention**
>
> **Score:** $$ X_i^T X_j $$
>
> **Attention score:** $$ \alpha_{i,j} = \text{SoftMax}(\text{score} / \text{const.}) $$
>
> **Attention vector:** $$ A(i) = \sum_{j=1}^{T_x} \alpha_{i,j} x(j) $$

Here $$ h(j) $$ is replaced by $$ x_j $$ and we call the output the "attention vector."

{% include figure.liquid path="assets/img/self-attention/attention_vector.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 3" %}

Self-attention in vectorized form:

$$ \text{SoftMax}\left(\frac{X_i^T X_j}{\text{const.}}\right) \cdot x_j \quad \text{(I)} $$

{% include figure.liquid path="assets/img/self-attention/table_comparison.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Table 1: Comparison of self-attention and RNN-based attention" %}

---

## Introducing Queries, Keys, and Values

The formulation above has no learnable parameters. To make self-attention trainable, we introduce three weight matrices and
compute Queries (Q), Keys (K), and Values (V):

> **Definitions**
>
> **Queries:** $$ Q = XW^Q $$
>
> **Keys:** $$ K = XW^K $$
>
> **Values:** $$ V = XW^V $$

Assume the input is a sequence with length $$ T $$ and embedding dimension $$ d_{model} $$.

{% include figure.liquid path="assets/img/self-attention/input_data_sample.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 4" %}

Shape tracking:

$$ Q = XW^Q \rightarrow (T \times d_{model}) \cdot (d_{model} \times d_k) \rightarrow (T \times d_k) $$
$$ K = XW^K \rightarrow (T \times d_{model}) \cdot (d_{model} \times d_k) \rightarrow (T \times d_k) $$
$$ V = XW^V \rightarrow (T \times d_{model}) \cdot (d_{model} \times d_v) \rightarrow (T \times d_v) $$

Substituting into (I), with $$ \text{const.} = \sqrt{d_k} $$, we get:

$$ \text{Attention}(Q, K, V) = \text{SoftMax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V \quad \text{(II)} $$

{% include figure.liquid path="assets/img/self-attention/scaled_dor_product_depiction1.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 5" %}

{% include figure.liquid path="assets/img/self-attention/scaled_dot_product_shapes1_m.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 6" %}

Shape of $$ QK^T $$:

$$ (T \times d_k) \times (d_k \times T) \rightarrow (T \times T) $$

Final output shape:

$$ (T \times T) \times (T \times d_v) \rightarrow (T \times d_v) $$

For batch size $$ N $$, the shape becomes $$ N \times T \times d_v $$. The values of $$ d_k, d_v, d_{model} $$ are
hyperparameters chosen to make the matrix multiplications valid.

---

## Database Analogy for Queries, Keys, and Values

In databases, queries retrieve data, keys identify records, and values contain the data. A similar analogy applies to
self-attention Q, K, and V:

{% include figure.liquid path="assets/img/self-attention/database_inspiration.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 7" %}

In self-attention, every word acts as a query once, while all words in the sequence act as keys. Attention weights determine
which keys match a query. Values are then combined using these weights to form the attention vector.

---

## How Self-Attention Helps in Contextual Understanding

If we see the word "check" alone, it could mean different things. When we look at surrounding words like "cashed" and "bank,"
we understand the context is a financial document rather than a chess move or a homework check.

> **Notes**
>
> - Each word attends to every other word. For $$ T $$ words, there are $$ T^2 $$ attention computations.
> - Q, K, and V are computed in parallel (unlike RNNs which are sequential).
> - Self-attention handles long sequences better than RNNs and avoids vanishing gradients.
