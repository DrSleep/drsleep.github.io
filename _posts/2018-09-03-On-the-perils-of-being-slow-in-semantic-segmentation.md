---
title: "On the perils of being slow in semantic segmentation"
date: 2018-09-03
categories:
  - technical
tags:
  - real-time
  - semantic-segmentation
  - medium
  - research
---


| ![turtle]({{ site.baseurl }}/images/turtle2.png) | 
|:--:| 
| *Segmenting a turtle - one of the slowest animals on Earth: left - original photo, right - segmentation result (highlighted in different colour)* |

----

*New technological advances that looked like being borrowed from a sci-fi book even few years ago are now becoming reality (e.g., driverless cars), and we are growing less and less surprised by this ever-expanding pool of innovations. Unfortunately, it is known to a much lesser extent that mathematical models powering these breakthroughs require lots and lots of computational resources, which hinders their widespread applicability. As there is no free lunch, there is also no performance benefits when limiting the number of resources available to those models. Thus, it is important to keep in mind the trade-off between the model that does its task quite accurately but slow, versus the model that has low latency but not so-good performance. At the end of the day, would you trust a car that would definitely take you home, say, in a week, or would you rather risk it with a car that may take you there in only half a week, or may not take you there at all?*


In my research I am concentrating on computer vision problems where the goal is to assign some meaningful information to each pixel in a given image - these are usually called **dense per-pixel tasks**. The information can be of different nature: it may convey semantic knowledge about the image - e.g., in the driverless scenario, each pixel can be associated with one of such classes as 'pedestrian', 'car' or 'road'. The information may also be providing some geometrical cues about the scene captured in the image - e.g., by estimating how far each pixel is from the camera's point of view. The former is known as **semantic image segmentation**, while the latter is **depth estimation**. Both of those tasks are widely used across a whole range of different applications (including robotics and driverless cars), and are not the only dense per-pixel tasks that exist, but below I will be focusing solely on semantic segmentation.

For now imagine a fully-automated factory producing extremely important micro-processors for mobile devices. One of 'employees' of that factory is a robot enhanced with a single camera, whose sole goal is to scan a conveyor belt and segment all different details present into one of pre-defined classes, e.g., by different vendors they should go to. The results of this segmentation must be precise as they are being further operated on by various other 'employees' of the factory.  

Here is the caveat, though: this segmentation robot is able to see only one image per each second, which is much slower than the speed with which the conveyor belt runs. The robot has an option to terminate the conveyor belt every once in a while, which, of course, would lead to a better quality in segmentation but an overall procrastination across the whole factory, or it has an option of looking only at one half of the conveyor and, from it, extrapolating the view of the other half, which would most definitely lead to an erroneous segmentation.  

Many other systems relying on semantic segmentation inevitably face the same issue: e.g., robots used in medical applications to detect tumours or blood vessels, or automated cars detecting pedestrians and other vehicles.

And this is exactly the trade-off between sacrificing speed for accuracy, or accuracy for speed, mentioned in the beginning of this post, and that is where our recent research, entitled [*"Light-Weight RefineNet for Real-Time Semantic Segmentation"*](https://www.dropbox.com/sh/7yx3slrg8x10zdu/AABtmRzNK9hO8Vt5YLgaxKPVa/0494.pdf?dl=1) fits in. In particular, we consider the original RefineNet approach proposed by [Lin et al](https://arxiv.org/abs/1611.06612), and re-think its design into the one suitable for real-time calculations on a single GPU card without complicated bells and whistles.  

Returning to our factory analogy, we replace our segmentation robot with a newer one able to process more images of the conveyor belt at any given second without the need of choosing any of the aforementioned options. I will omit technical details (they are laid out extensively in the paper), but I will pinpoint the fact that we were able to achieve practically the same results while saving more than 2x time spent on the training of the models and their utilisation. In return, this saved time can efficiently be re-used for other tasks and processes, e.g., for diagnosing whether our factory details are faulty, or whether a nearby vehicle may be driving too dangerously.

## More information
If you would like to read more detailed post about this research, please follow this [link](https://drsleep.github.io/Light-Weight-RefineNet/)

If you would like to try out our model on your own images, feel free to play with it here using an amazing [Google Colab service](https://colab.research.google.com/drive/1IqLovjytqYXQqG-8Dq73ntKjrbBeNrJv) (it is easy to follow)  

If you would like to read more about semantic segmentation, here is a non-exhaustive list:  
* Nice [exploratory review](http://blog.qure.ai/notes/semantic-segmentation-deep-learning-review) from 2017
* [DeepLab-v3+](https://arxiv.org/abs/1802.02611)
* [RefineNet](https://arxiv.org/abs/1611.06612)
* [ICNet](https://arxiv.org/abs/1704.08545) - real-time semantic segmentation on high-resolution images
* [U-Net](https://arxiv.org/abs/1505.04597) - light-weight network suitable for small segmentation tasks
