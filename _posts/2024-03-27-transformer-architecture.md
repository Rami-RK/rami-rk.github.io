---
layout: distill
title: Transformer Model Architecture
description: From encoders to masked attention and decoders - Transformer architecture demystified.
tags: [AIML]
categories: [AIML]
date: 2024-03-27
featured: true
toc:
  - name: Overview
  - name: Encoder
  - name: Multi-Head Attention
  - name: Positional Encoding
  - name: Causal or Masked Attention in Decoder Block
  - name: Why Does Multi-Head Attention Work
---

## Overview

Figure 1 shows the Transformer architecture from the "Attention Is All You Need" paper (2017). The left block is the
**Encoder** and the right block is the **Decoder**. This encoder-decoder architecture mirrors RNN-based seq2seq in its
input-output flow, but removes recurrent components. The decoder still behaves as a causal model.

{% include figure.liquid path="assets/img/transformer/tfr_full_archi.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 1" %}

The encoder sends values (V) and queries (Q) to the decoder in a cross-attention connection, allowing the decoder to focus on
relevant parts of the encoded input when producing the output sequence.

Encoders and decoders can also stand alone. BERT is encoder-only, GPT is decoder-only, and T5 combines both.

Both blocks include Positional Encoding, Multi-Head Attention, Add & Norm (skip connection + layer norm), and Feed Forward
layers. The decoder uses causal (masked) attention so each token attends only to previous tokens.

**Mastering the Encoder block makes the entire Transformer easier to understand.**

---

## Encoder

The encoder consists of Transformer blocks as shown in Fig. 2 (simplified and expanded in the right panel).

{% include figure.liquid path="assets/img/transformer/enc_unfolded.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 2" %}

The Transformer block can be sub-divided into two main sub-layers:

- A **multi-head attention** sub-layer that receives queries, keys, and values.
- A **feed-forward network** sub-layer.

Each sub-layer is followed by layer normalization and a residual connection. Dropout is applied before layer norm for
regularization (not shown in the diagram).

The feed-forward network is typically two linear layers with a ReLU activation in between. The encoder is formed by stacking
these blocks multiple times (shown as N in Fig. 2).

BERT (Bi-directional Encoder Representations) is an encoder-only architecture that stacks multiple transformer blocks and a
prediction head, as shown in Fig. 3.

{% include figure.liquid path="assets/img/transformer/tfr_blocks_assembed.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 3" %}

---

## Multi-Head Attention

Multi-Head Attention (MHA) runs multiple attention heads in parallel. Each head splits Q, K, and V independently, computes
attention, and the results are concatenated and projected to produce the final output. This helps the model capture multiple
relationships in the sequence.

{% include figure.liquid path="assets/img/transformer/mha.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 4" %}

Shape tracking (Fig. 5):

- Input shape to each attention layer: $$ (T \times d_{model}) $$
- Output shape after each head: $$ (T \times d_V) $$
- Output after concatenation: $$ (T \times h d_V) $$

Final projection:

$$ \text{Output} = \text{Concat}(A_1, A_2, \dots, A_h) W^O $$

- $$ \text{Concat}(A_1, \dots, A_h) \rightarrow (T \times h d_V) $$
- $$ W^O \rightarrow (h d_V \times d_{model}) $$
- Output shape: $$ (T \times d_{model}) $$

> **Back to the initial input shape.**

{% include figure.liquid path="assets/img/transformer/mh_concat.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 5" %}

Each head operates independently, so attention calculations are parallel.

---

## Positional Encoding

Without RNNs, attention is permutation invariant, so token order is lost. Positional encoding adds order information to
embeddings by injecting a unique pattern of values at each position.

Two common approaches:

1. Trainable positional embeddings (sub-class the embedding layer).
2. Fixed sinusoidal encoding (as in the original paper).

Paper formulas:

$$ PE_{(pos,\,2i)}=\sin\!\left(\frac{pos}{10000^{2i/d_{model}}}\right) $$

$$ PE_{(pos,\,2i+1)}=\cos\!\left(\frac{pos}{10000^{2i/d_{model}}}\right) $$

---

## Causal or Masked Attention in Decoder Block

Decoder blocks are causal. When predicting a token, the decoder should only attend to previous tokens, not future tokens.

For a sequence length $$ T $$, the attention score matrix is $$ T \times T $$. We enforce causality by masking the upper
triangle so that attention weights are non-zero only when $$ i \ge j $$.

{% include figure.liquid path="assets/img/transformer/masking.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 6" %}

This masked attention is used inside decoder blocks. GPT-style models are decoder-only architectures built on this mechanism.

The decoder with masked MHA is shown in Fig. 7:

{% include figure.liquid
  path="assets/img/transformer/decoder_with_masked_mha.png"
  class="img-fluid rounded z-depth-1"
  zoomable=true
  caption="Figure 7"
%}

The full encoder-decoder connection is shown in Fig. 8:

{% include figure.liquid path="assets/img/transformer/enc_dec_connection.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 8" %}

---

## Why Does Multi-Head Attention Work

Multi-head attention lets the model learn multiple types of relationships in parallel. For example, one head might capture
*where* a subject goes, while another captures *what* the subject did. This allows richer representations of sequences.

{% include figure.liquid path="assets/img/transformer/intuition_mha.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 9" %}
