---
title: "Football Stats Quiz"
date: 2023-03-18
categories:
  - technical
tags:
  - stats
  - streamlit
  - football
---

***About a month ago I watched a very awesome and inspirational talk by Patrick Lucey from StatsPerform [on an overview of AI in sport](https://www.youtube.com/watch?v=5itT4XmdRjU). In one of their slides they mention that "sports data reconstructs the story of the match/performance" and "the more granular the data, the better the story". The analogy stuck with me and made me wonder: could I predict the score of a football match if I had only a snapshot of its statistics?***

---

As the result of that I have made a very simple quiz game using Streamlit which is available online here - [https://football-quiz.streamlit.app/](https://football-quiz.streamlit.app/); with all the code located in this repo - [https://github.com/DrSleep/football-stats-quiz](https://github.com/DrSleep/football-stats-quiz).
Inside the game the user is asked to predict the score of some match given stats on shots and possession per each team.


<figure class="align-center" style="width: 35%">
  <img src="{{ site.url }}{{ site.baseurl }}/images/stats_quiz_game.gif" alt="Football Stats Quiz Gameplay">
  <figcaption>Football Stats Quiz Gameplay</figcaption>
</figure>


The biggest challenge for me was to quickly find simple and open-source data with all the stats available. In the end, I relied on two StatsBomb's repos - [https://github.com/statsbomb/statsbombpy](https://github.com/statsbomb/statsbombpy) and [https://github.com/statsbomb/open-data](https://github.com/statsbomb/open-data), where the first one is a handy python package and the second is a storage for a subset of all of their data available for free.

I have been using Streamlit in my work for few years now, and so it was an obvious choice for me to prototype the game in Streamlit. However, I usually build interactive dashboards in Streamlit, certainly not games and quizzes, hence in this particular project I had to rely on Streamlit's `session_state` much more than usual in order to keep track of the index of the current question and the overall game state. Additionally, I also barely dealt with styling in Streamlit up until now, and I found it still quite hacky in nature - in order to apply a unique style for some Streamlit-generated objects I had to dig numerous times through CSS attributes and various parent-child relationships.

---

Overall, I definitely had fun working on this project in my spare time. After playing around 10 games, my best score is 9 out of 15, which I personally think is not too bad, but let us see how it compares with others. Feel free to share your scores in the comments section below!

<figure class="align-center" style="width: 45%">
  <img src="{{ site.url }}{{ site.baseurl }}/images/stats_quiz_game_best_score.png" alt="Football Stats Quiz personal best">
  <figcaption>My best score in the game so far</figcaption>
</figure>
