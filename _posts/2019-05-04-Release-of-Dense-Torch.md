---
title: "Release of DenseTorch"
date: 2019-05-04
categories:
  - technical
tags:
  - pytorch
  - code
---

I have just released a PyTorch wrapper that aims to facilitate a typical training workflow of dense per-pixel tasks. The project code is available [here](https://github.com/drsleep/densetorch). Currently, two training examples are provided: [one](https://github.com/DrSleep/DenseTorch/tree/master/examples/singletask) for single-task training of semantic segmentation using DeepLab-v3+ with the Xception65 backbone, and [one](https://github.com/DrSleep/DenseTorch/tree/master/examples/multitask) for multi-task training of joint semantic segmentation and depth estimation using Multi-Task RefineNet with the MobileNet-v2 backbone.

More examples and features will be gradually added!