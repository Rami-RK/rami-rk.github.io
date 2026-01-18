---
layout: distill
title: Birth of Attention Mechanism
description: The evolution of attention in sequence-to-sequence models.
tags: [AIML]
categories: [AIML]
date: 2024-03-26
featured: true
toc:
  - name: Overview
  - name: Lets See the Decoder in Detail
  - name: What Goes Into the Bottom of the Decoder RNN Unit
  - name: Problem With Seq2Seq
  - name: To Solve This Problem: Attention is Originated for Seq2Seq
  - name: Improved Encoder-Decoder Architecture With Attention
  - name: Context Vector
  - name: Calculating Attention Weights
---

## Overview

The onset of ChatGPT and open-source LLMs has changed how we work across industries, but transformer-based models power the
magic behind BERT, GPT, and other large language models. This post is part of a series to explain Transformers step by step:

1. The Birth of Attention Mechanism
2. Self-Attention
3. Transformer Architecture

We start with the attention mechanism in the context of language translation using a seq2seq (encoder-decoder) architecture.
In the example below, a Hindi sentence (in Devanagari) is fed into an encoder and decoded into English as "I love to eat."

The encoder ingests the input and computes hidden states $$ h(1), h(2), \dots, h(T) $$, returning a final hidden state
$$ h(T) $$. This vector is a compressed representation of the input sequence (often called a "thought vector") and becomes
the input to the decoder.

{% include figure.liquid path="assets/img/birth-of-attention-mechanism/enc_dec_rnn.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 1" %}

---

## Lets See the Decoder in Detail

Every RNN unit has two sources of input: the current input and the previous hidden state. The decoder is an RNN that uses the
encoder output $$ h(T) $$ as its initial hidden state. Its job is to decompress the input representation into the target
sequence.

---

## What Goes Into the Bottom of the Decoder RNN Unit

At the beginning, a special token `\<SOS>` indicates the start of the sequence. The decoder predicts the first word, feeds
it back as input, and continues until it produces the end token. This is an autoregressive (causal) process. In practice,
training requires paired input-output sentence data.

---

## Problem With Seq2Seq

1. Every input sequence is compressed into a single fixed-size vector $$ h(T) $$. For long sentences, that vector must
   remember too much.
2. Humans do not translate by remembering entire sentences at once; we focus on relevant parts as we go.

---

## To Solve This Problem: Attention is Originated for Seq2Seq

The idea is to let each output word attend to the most relevant parts of the input.

{% include figure.liquid path="assets/img/birth-of-attention-mechanism/attention_def.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 2" %}

Consider an input sentence (in Hindi) that translates to "I am going to play." The list $$ t_1 $$ contains attention values
for the first output word, $$ t_2 $$ for the second, and so on. Each list represents how much the output should focus on each
input word.

{% include figure.liquid path="assets/img/birth-of-attention-mechanism/attention_values.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 3" %}

For the first output word, we might focus on just the first input token; later steps may focus on different or multiple input
tokens. This is exactly what standard seq2seq fails to do, since each step only sees the same final encoder state.

---

## Improved Encoder-Decoder Architecture With Attention

Instead of feeding only the final encoder state to the decoder, we provide all encoder hidden states to each decoder step and
learn attention weights (alphas) that determine how much each input should contribute.

For output at time step $$ t = 2 $$:

$$ \alpha_{2,1} \text{ is the weight on input 1} $$
$$ \alpha_{2,2} \text{ is the weight on input 2} $$
$$ \alpha_{2,3} \text{ is the weight on input 3} $$
$$ \alpha_{2,4} \text{ is the weight on input 4} $$

Similarly, for output at time step $$ t = 4 $$:

$$ \alpha_{4,1}, \alpha_{4,2}, \alpha_{4,3}, \alpha_{4,4} $$

{% include figure.liquid path="assets/img/birth-of-attention-mechanism/rnn_with_attention.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Figure 4" %}

---

## Context Vector

Define the weighted combination as a context vector. For output at time step 4:

$$ C(4) = \alpha_{4,1} h(1) + \alpha_{4,2} h(2) + \alpha_{4,3} h(3) + \alpha_{4,4} h(4) $$

In general:

$$ C(i) = \sum_{j=1}^{T_x} \alpha_{i,j} h(j) $$

The context vector is simply the weighted sum of encoder hidden states. The weights are the attention scores.

---

## Calculating Attention Weights

We introduce an alignment score $$ e_{i,j} $$: at the $$ i^\text{th} $$ decoder step, how important is the $$ j^\text{th} $$
input word. This depends on the decoder state and the encoder hidden state:

$$ e_{i,j} = f(S_{i-1}, h_j) $$

We then normalize these scores with SoftMax to form a probability distribution over input tokens:

$$ \alpha_{i,j} = \frac{\exp(e_{i,j})}{\sum_{k=1}^{T} \exp(e_{i,k})} $$

The attention weight $$ \alpha_{i,j} $$ is the probability of focusing on the $$ j^\text{th} $$ input word when producing the
$$ i^\text{th} $$ output word.
