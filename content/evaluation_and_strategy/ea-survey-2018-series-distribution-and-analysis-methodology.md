---
title: 'EA Survey 2018 Series: Distribution and Analysis Methodology'
date: 2018-12-12T21:46:49.955Z
description: >-
  We’re excited to continue what should be a lot of analysis and thoughtful
  conversation over the results from the 2018 EA Survey. This post outlines
  methodology and subsequent posts will outline different facets of the results
  that we analyzed and found noteworthy for the community.
author: Lauren Whetstone
originalPublicationURL: >-
  https://forum.effectivealtruism.org/posts/iSjttL9PPq9eiqrc3/ea-survey-2018-series-distribution-and-analysis-methodology
block: true
license:
  - name: Creative Commons Attribution-ShareAlike 3.0
    url: 'https://creativecommons.org/licenses/by-sa/3.0/legalcode'
relatedArticles:
  - {}
---
## Platform and Collection

This year, we moved the survey over to SurveyMonkey instead of LimeSurvey in order to improve the UI and reduce the amount of time needed to format the survey.

Unlike last year, we did not offer a separate “Donations Only” version of the survey because we thought the added benefit of offering a shorter survey did not outweigh the cost of having less survey information to use to perform our analyses. This also represents an acknowledgement that collecting donation data is no longer the primary motivation of running the EA Survey and hasn’t been for a long time. Moreover, it streamlined the survey experience and reduced response bias.

One new thing we did this year, however, was embed a separate, fully anonymous “Community Survey” in order to look more closely at various community health issues, while also fully protecting the identity of our respondents. A full list of questions in the survey (including the “Community Survey”) can be found [here](https://docs.google.com/document/d/1LGxLFDTbjhPnme3ruOnwt_ZLumdwTs7ylkHx0-qJl6I/edit).

## Distribution Strategy

Our distribution strategy remained largely the same as in previous years, so we will not describe our strategy in as much detail as we did in 2017. To see the details, check out [the methodology article from last year.](https://forum.effectivealtruism.org/ea/1e1/ea_survey_2017_series_community_demographics/)

Distribution began on 23 April 2018 and continued until the close of the survey on 25 May 2018. In an attempt to maximize community engagement, we distributed the survey through email lists, the EA slack group, social networks, forums, websites, emailing prior survey takers, and personal contact. The survey was shared in all the same places it was shared last year. We reached 3,537 people in 2018, which is much higher than the 1,837 people we reached in 2017 and the 2,904 people we reached in 2015.

Referrer data was gathered via URL tracking. We also asked people to self-report from where they heard about the survey. As in past years, URL tracking data did not match up perfectly with self-reported data. You can see how people heard about the survey based on URL tracking here:

1228

Official EA Newsletter

441

EA Forum

426

Friends Link

223

80,000 Hours

193

Optimal Memes (Facebook Group)

192

Past Survey Takers (Email)

143

Slate Star Codex

141

EA Facebook Group

114

EA Facebook Local Groups

101

CFAR Alumni

61

Animal Charity Evaluators

61

EA Hangout

45

GWWC (Facebook Group

44

SHIC

24

EA Hub

22

LessWrong

20

Bay Area LessWrong

15

Effective Animal Altruism

13

Bay Area Effective Altruists

13

CEA Twitter (Social Media Accounts)

7

Rethink Charity (Slack Channel)

6

Leverage

4

EAF

## Raw Data

The analysis was done in R. All scripts and associated data can be found in the public GitHub repository for the project (see [the repository here](https://github.com/peterhurford/ea-data) and [the anonymized raw data for the 2018 survey here](https://github.com/peterhurford/ea-data/blob/master/data/2018/2018-ea-survey-anon-currencied-processed.csv)).

Data was collected by [Lauren Whetstone](https://www.linkedin.com/in/laurenwhetstone/) and then transferred to the analysis team in an anonymized format. Currencies were converted into American dollars using the [currencyr R package](https://github.com/peterhurford/currencyr/) created by Peter Hurford. The data was processed and analyzed using the open source [Surveytools2 R package](https://github.com/peterhurford/surveytools2) created by Peter Hurford. Respondents who did not indicate that they were effective altruists were dropped from the survey. There were 315 such respondents removed. In a future report we will explore the difference between those who self-identify as effective altruists, versus those who say they broadly subscribe to effective altruism but do not self-identify.

## Representation

An appropriate amount of caution should accompany any interpretation of the EA survey results. While the distribution plan included all known digital avenues for reaching the EA population, there is room for error and bias in this plan. Claims that a certain percentage of respondents to the survey have certain predispositions or harbor certain beliefs should not necessarily be taken as representative of all EAs, or as “typical” of EAs as a whole. Any additional suggestions on how to more comprehensively reach the EA community are welcome.

In the past, for the [2015](https://forum.effectivealtruism.org/ea/zw/the_2015_survey_of_effective_altruists_results/) and [2017 survey](https://forum.effectivealtruism.org/ea/1e0/effective_altruism_survey_2017_distribution_and/), we established various benchmarks to ensure our survey was representative, looking at whether our various subpopulations (e.g., all EAs who took the survey from LessWrong or the EA Newsletter) successfully capture EA as a whole, and then whether we successfully capture our individual subpopulations. Below are some key considerations we have considered:

* **Do our subpopulations successfully capture EA as a whole?** If we have 2.2% (19 LessWrong refers divided by 856 people who responded) of our population coming from LessWrong, is this close to the “true” number of self-identified EAs that frequent LessWrong more than other channels? Are we over- or under-sampling LessWrong or other channels? Are we systematically missing any part of EA by not identifying the correct channels in order to get people to respond?
* **Do we successfully capture our subpopulations?** Are the people who take the survey from LessWrong actually representative of EAs who frequent LessWrong more than other channels? Are we systematically misrepresenting who EAs are by getting a skewed group of people who take our survey?

Please [refer to previous year analysis](https://forum.effectivealtruism.org/ea/1e0/effective_altruism_survey_2017_distribution_and/) to read more.

## Raw Results

After careful consideration as well as feedback from community members we have decided to rerelease the raw data with the following edits made to the file to preserve privacy.  This year we will be: removing city data, censoring country, changing age to a range, removing birth year, removing free responses, as well as removing anyone who said "No" to all the questions of having their details (name, email) shared with CEA, 80k, and the EA Donation Registry and did not answer yes to any of the other additional data sharing questions. We have also set up [a form](https://goo.gl/forms/csUYPkAWkGlo98NE2) for people to submit requests to have their data removed from any year the EA survey was run as the terms of details being shared was ambiguous. Any questions can be directed to privacy@rtcharity.org.

Next year we will be adding a clearer question to allow people to opt-out of having their data appear in the public dataset.

## Credits

This post was written by Lauren Whetstone and Peter Hurford.

A special thanks to Lauren Whetstone for leading the 2018 EA Survey team, and Peter Hurford and David Moss for contributing analysis. Thanks to Tee Barnett for editing.

We would also like to express our appreciation to the Centre for Effective Altruism, Scott Alexander of Slate Star Codex, 80,000 Hours, EA London, and Animal Charity Evaluators for their assistance in distributing the survey. Thanks also to everyone who took and shared the survey.

The annual EA Survey is a project of Rethink Charity with analysis and commentary from researchers at Rethink Priorities.

Supporting Documents

Other Articles in the 2018 EA Survey Series

Future articles we write about the 2018 Survey will be added here.

I - Community Demographics & Characteristics

II - Distribution & Analysis Methodology

III - EA Survey Series 2018 : How do people get involved in EA?

IV - Subscribers and Identifiers

Prior EA Surveys conducted by Rethink Charity

\    The 2017 Survey of Effective Altruists

\    The 2015 Survey of Effective Altruists: Results and Analysis

\    The 2014 Survey of Effective Altruists: Results and Analysis

Raw Data

Anonymized raw data for the entire 2018 EA Survey can be found here.
