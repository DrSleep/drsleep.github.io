---
title: "Number of Citations of Papers Awarded at CVPR conferences"
date: 2020-05-29
categories:
  - technical
tags:
  - exploratory
  - cvpr
layout: splash
---

***CVPR has long been regarded as the cream of the crop in the area of computer vision, attracting high-quality and influential publications. Traditionally, several works have been selected for recognition with one of the prestigious awards at each CVPR conference. In this post, I am going to take a look at the number of citations that these CVPR awardees have accrued over time.***

----

# What are these awards?

In total, there are 4 awards at each CVPR conference:

1. Longuet-Higgins Prize that ["recognizes CVPR papers from ten years ago that have made a significant impact on computer vision research"](https://www.thecvf.com/?page_id=413#LHP);
2. Best Paper Award that ["recognizes the very best work appearing at the conference"](https://www.thecvf.com/?page_id=413#CVPRBest);
3. Best Student Paper Award -- similar to the Best Paper Award but with the condition that ["the first author was a student at the time of submission"](https://www.thecvf.com/?page_id=413#CVPRBestStudent);
4. Best Paper Honorable Mention that ["recognizes outstanding work appearing at the conference"](https://www.thecvf.com/?page_id=413#CVPRBestHonorable).

# Preparing Data

To explore how often the CVPR awardees have been cited, we would need the list of awardees and their citation counts.

## Awardees

The list of awardees for each nomination can be easily scraped from the Computer Vision Foundation [website](https://www.thecvf.com/?page_id=413). The data includes the year of the award, the title of the publication and the authors list. Unfortunately, there are no citation counts and no paper links included.

## Citations

While [Google Scholar](https://scholar.google.com/) does provide a convenient web-interface to search for papers and their citation counts, as it turns out there is no free API service that permits access to that data (if you are aware of one, please let me know). Hence, I had to improvise and instead came up with the solution built on top of [pyautogui](https://pyautogui.readthedocs.io/en/latest/), the python package that can be used to control your mouse and keyboard. Furthermore, I made use of [pytesseract](https://github.com/madmaze/pytesseract), an optical character recognition tool, in order to extract the number of citations as displayed in Google Scholar.


<figure class="align-center" style="width: 75%">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/scholar.gif" alt="Google Scholar">
  <figcaption>If you go too fast, you'll be flagged as robot.</figcaption>
</figure> 

# Analysis

First of all, I was curious to see whether any papers that were recognised as *best*, ten years later were also awarded the Longuet-Higgins (LH) Prize. Out of 21 LH awardees in the dataset, only one of them also won the best paper award: it was "Object Class Recognition by Unsupervised Scale-Invariant Learning" by R. Fergus, P. Perona, A. Zisserman with the best paper award in 2003 and the LH Prize in 2013. As of this moment, the paper has been cited 2784 times.

In the plot below, I am visualising the number of citations of each awarded paper (in the y-axis) together with the year of the award (the x-axis) grouped by the type of the award (the shape and the colour of the marker). Perhaps, not surprisingly, the LH Prize winners tend to be cited much more often -- after all, this award is given to the papers "that have made a significant impact on computer vision research". Two notable outliers among the best papers and best papers honourable mention are "Deep Residual Learning for Image Recognition" by K. He, X. Zhang, S. Ren, J. Sun with nearly 46K citations and "Fully Convolutional Networks for Semantic Segmentation" by J. Long, E. Shelhammer, T. Darell with nearly 16K citations, respectively.

{% include plots/scatter.html %}

To further underline the differences in the number of citations among different award groups, I have added two more plots. As seen below, none of the best student paper awardees have yet attained more than 1000 citations, with the majority of the papers (75%) having less than 400 citations in total. Apart from the three outliers with significantly more than 1000 citations among the best paper honourable mention awardees, the best paper honourable mention group looks very similar to that of the best student paper one.

{% include plots/boxplot.html %}

In contrast, the two top groups of the LH prize and the best paper award winners have collectively accrued more than 230K citations (151K and 84K, respectively). Except for the two best paper awardees that have less than 50 citations (one of them was just published in 2019), these two groups also resemble each other.

{% include plots/barplot.html %}

# Source Code

To reproduce the content of this post, please access the code [here](https://github.com/DrSleep/solyanka/tree/master/best_paper_awards).
