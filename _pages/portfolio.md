---
title: Portfolio
permalink: /portfolio/
---

## Research

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
</thead>
<tbody>

<tr>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;"><img src="{{ site.baseurl }}/images/wacv-video.png"></td>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;">
    **Architecture Search of Dynamic Cells for Semantic Video Segmentation**<br>
    *V.Nekrasov*, H. Chen, C.Shen, I.Reid<br>
    Winter conference on applications of Computer Vision (WACV), 2020<br>
    [paper](https://arxiv.org/abs/1904.02371)<br>
    <details>
    <span style="font-size: 14px">Applying neural architecture search to find dynamic operations for semantic video segmentation</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;"><img src="{{ site.baseurl }}/images/wacv-templates.png"></td>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;">
    **Template-Based Automatic Search of Compact Semantic Segmentation Architectures**<br>
    *V.Nekrasov*, C.Shen, I.Reid<br>
    Winter conference on applications of Computer Vision (WACV), 2020<br>
    [models](https://github.com/DrSleep/nas-segm-pytorch) / [paper](https://arxiv.org/abs/1904.02365)<br>
    <details>
    <span style="font-size: 14px">Automatically discovering compact segmentation networks with less than 0.5M parameters</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;"><img src="{{ site.baseurl }}/images/arch0.png"></td>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;">
    **Fast Neural Architecture Search of Compact Semantic Segmentation Models via Auxiliary Cells**<br>
    *V.Nekrasov*, H. Chen (equal contribution), C.Shen, I.Reid<br>
    Conference on Computer Vision and Pattern Recognition (CVPR), 2019<br>
    [code](https://github.com/DrSleep/nas-segm-pytorch) / [paper](https://arxiv.org/abs/1810.10804)<br>
    <details>
    <span style="font-size: 14px">Fast reinforcement learning (RL)-based approach (in 8 GPU-days) of finding light-weight models for dense per-pixel tasks</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;"><img src="{{ site.baseurl }}/images/jrflw.png"></td>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;">
    **Real-Time Joint Semantic Segmentation and Depth Estimation Using Asymmetric Annotations**<br>
    *V.Nekrasov*, T.Dharmasiri, A.Spek, T.Drummond, C.Shen, I.Reid<br>
    International Conference on Robotics and Automation (ICRA), 2019<br>
    [code](https://github.com/DrSleep/multi-task-refinenet) / [paper](https://arxiv.org/abs/1809.04766)<br>
    <details>
    <span style="font-size: 14px">A simple approach of performing joint segmentation, depth and surface normals estimation in real-time with SOTA results using a single model</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;"><img src="{{ site.baseurl }}/images/rf_lw.png"></td>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;">
    **Light-Weight RefineNet for Real-Time Semantic Segmentation**<br>
    *V.Nekrasov*, C.Shen, I.Reid<br>
    British Machine Vision Conference (BMVC), 2018<br>
    [code](https://github.com/DrSleep/light-weight-refinenet) / [paper](https://arxiv.org/abs/1810.03272)<br>
    <details>
    <span style="font-size: 14px">Re-thinking an encoder-decoder based segmentation network into the one able to attain high performance with the real-time inference</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;"><img src="{{ site.baseurl }}/images/diag.png"></td>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;">
    **Diagnostics in Semantic Segmentation**<br>
    *V.Nekrasov*, C.Shen, I.Reid<br>
    [paper](https://arxiv.org/abs/1809.10328) / [supp](https://cv-conf.shinyapps.io/diag-sem-segm/)<br>
    <details>
    <span style="font-size: 14px">Evaluating SOTA segmentation networks in terms of their sensitivity to object properties and uncertainty measures</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;"><img src="{{ site.baseurl }}/images/gdn.png"></td>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;">
    **Global Deconvolutional Networks for Semantic Segmentation**<br>
    *V.Nekrasov*, J.Ju, J.Choi<br>
    British Machine Vision Conference (BMVC), 2016<br>
    [code](https://github.com/DrSleep/GDN) / [paper](https://arxiv.org/abs/1602.03930)<br>
    <details>
    <span style="font-size: 14px">Learnable matrix-based method for global interpolation inside segmentation networks</span>
    </details>
    </td>
</tr>

</tbody>
</table>

## Re-implementations and extensions

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
</thead>
<tbody>

<tr>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;"><img src="{{ site.baseurl }}/images/sketch.gif"></td>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;">
    **Informative Drawings**<br>
    PyTorch, CoreML<br>
    [code](https://github.com/DrSleep/informative-drawings) / [blogpost](/technical/Neural-Sketching-CoreML/)<br>
    <details>
    <span style="font-size: 14px">Extending the authors' repository with the CoreML model during inference for the neural sketching task</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;"><img src="{{ site.baseurl }}/images/sam.png"></td>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;">
    **Segment Anything Model (SAM)**<br>
    PyTorch, MPS<br>
    [code](https://github.com/drsleep/segment-anything/tree/mps-support) <br>
    <details>
    <span style="font-size: 14px">Extending the authors' repository with the support for MPS (Mac Metal PyTorch backend) during inference</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;"><img src="{{ site.baseurl }}/images/tf-dl1.png"></td>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;">
    **DeepLab-v1**<br>
    TensorFlow<br>
    [code](https://github.com/DrSleep/tensorflow-deeplab-lfov)<br>
    <details>
    <span style="font-size: 14px">Re-implementation of DeepLab-v1 (LargeFOV) in TensorFlow</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;"><img src="{{ site.baseurl }}/images/tf-dl2.png"></td>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;">
    **DeepLab-v2**<br>
    TensorFlow<br>
    [code](https://github.com/DrSleep/tensorflow-deeplab-resnet)<br>
    <details>
    <span style="font-size: 14px">Re-implementation of DeepLab-v2 (ResNet-101) in TensorFlow</span>
    </details>
    </td>
</tr>


<tr>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;"><img src="{{ site.baseurl }}/images/tf-dl3+.png"></td>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;">
    **DeepLab-v3+**<br>
    PyTorch<br>
    [code](https://github.com/DrSleep/pytorch-deeplab-v3-plus)<br>
    <details>
    <span style="font-size: 14px">Conversion of DeepLab-v3+ pre-trained weights from TensorFlow into PyTorch</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;"><img src="{{ site.baseurl }}/images/rf101.png"></td>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;">
    **RefineNet-101**<br>
    PyTorch<br>
    [code](https://github.com/DrSleep/refinenet-pytorch)<br>
    <details>
    <span style="font-size: 14px">RefineNet based on ResNet-101 trained on PASCAL VOC in PyTorch</span>
    </details>
    </td>
</tr>

</tbody>
</table>

## Miscellaneous

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
</thead>
<tbody>

<tr>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;"><img src="{{ site.baseurl }}/images/stats_quiz_game_header.png"></td>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;">
    **Football Stats Quiz Game**<br>
    [app](https://football-quiz.streamlit.app/) / [code](https://github.com/DrSleep/football-stats-quiz) / [blogpost](/technical/Football-Stats-Quiz/)<br>
    <details>
    <span style="font-size: 14px">Simple game on football stats made in Streamlit</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;"><img src="{{ site.baseurl }}/images/citations_header.png"></td>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;">
    **Number of citations of CVPR awardees**<br>
    [code](https://github.com/DrSleep/solyanka/tree/master/best_paper_awards) / [blogpost](/technical/Number-of-Citations-of-Papers-Awarded-at-CVPR-Conferences/)<br>
    <details>
    <span style="font-size: 14px">Looking at the number of citations the papers awarded at CVPR accrued over time</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;"><img src="{{ site.baseurl }}/images/densetorch.png"></td>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;">
    **DenseTorch**<br>
    [code](https://github.com/DrSleep/DenseTorch) / [docs](https://drsleep.github.io/DenseTorch)<br>
    <details>
    <span style="font-size: 14px">PyTorch Wrapper for Smooth Workflow with Dense Per-Pixel Tasks (including multi-task learning)</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;"><img src="{{ site.baseurl }}/images/bme.png"></td>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;">
    **Bio-Data Programming**<br>
    [code](https://github.com/DrSleep/bme403) / [shiny1](https://drsleep.shinyapps.io/shiny/) / [shiny2](https://drsleep.shinyapps.io/bio_data/) <br>
    <details>
    <span style="font-size: 14px">Shiny-based applications developed for the course on biomedical data programming - based on the NCI-60 cancel cell line panel dataset</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;"><img src="{{ site.baseurl }}/images/epl.png"></td>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;">
    **EPL-16 Away Fixtures Map**<br>
    [code](https://github.com/DrSleep/epl_away_map) / [shiny](https://drsleep.shinyapps.io/shiny_map/)<br>
    <details>
    <span style="font-size: 14px">Mapping of away fixtures in English Premier League Season '16-'17 (first half) using leaflet and d3</span>
    </details>
    </td>
</tr>

<tr>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;"><img src="{{ site.baseurl }}/images/gpu.png"></td>
<td markdown="span" style="vertical-align: middle; padding-bottom: 3em;">
    **GPU-server workload visualisation**<br>
    [code](https://github.com/DrSleep/gpu_monitor)<br>
    <details>
    <span style="font-size: 14px">Simple visualisation of workload on a GPU server in d3.js</span>
    </details>
    </td>
</tr>

</tbody>
</table>