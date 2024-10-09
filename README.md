![test](https://dummyimage.com/2048x410/8c8c8c/ffffff)

<h1 align="center" style="font-weight: normal">Hermes - Training EA/GA Framework</h1>

<h2 align="center" style="font-weight: lighter">A Machine Learning framework for training models on motion capture data using Genetic Algorithms.</h2>

<p align="center">
  <a href="#introduction">Brief Introduction</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#project-breakdown">Project Breakdown</a> •
  <a href="#acknowledgements">Acknowledgements</a> •
  <a href="#support">Support</a> •
  <a href="#contributors">Contributors</a>
</p>

---

<h3 id="introduction" align="left" style="font-weight: lighter">Brief Introduction</h3>

<p><b>"OpenCoach: Bipedal EA/GA Framework"</b> is a Machine Learning framework for training models to perform bipedal activities. For example, when given footage of a yoga trainer this framework can parse the video and teach our model how to perform this activity itself. Furthermore, it can improve upon the techniques it learns so it outperforms the trainers.

|                                         ![test](https://dummyimage.com/1200x650/8c8c8c/ffffff)                                         |
| :------------------------------------------------------------------------------------------------------------------------------------: |
| Figure 1: OpenCoach tracking a trainer practicing Yoga and then learning how to perform the task for itself using "Imitation Learning" |

<h3 align="left" style="font-weight: lighter">Technologies Used</h3>

<p align="justify">
  <img alt="Unity" src="https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white" />

  <img alt="Python" src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" />

  <img alt="Angular" src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" />

  <img alt="PyTorch" src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white" />

  <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />

  <img alt="C-Sharp" src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" />

  <img alt=".NET" src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white" />

</p>

<h3 id="how-to-use" align="left" style="font-weight: lighter">How To Use</h3>

To clone and run this application, you'll need [Unity3D](https://unity.com) and [Python 3](https://python.org). You will need to run the [setup guide](https://github.com/Unity-Technologies/ml-agents/blob/develop/docs/Getting-Started.md) for "Unity ML-Agents" and have both <b>Unity 2021.3.7f1</b> and <b>Unity 2020.3.25f1</b> installed as the current release uses seperate versions for the pose-tracking and EA/GA implementations.

```bash
# Step 1: Clone the repository
git clone https://github.com/Mark-McCormack/OpenCoach.git

# Step 2: Open OpenCoach and Mediapipe Tracker folders
cd OpenCoach-Genetic-Algorithm-Tracking/Mediapipe\ Unity\ Plugin
cd OpenCoach-Genetic-Algorithm-Tracking/marathon-envs-3.0.0/UnitySDK

# Step 3: Open OpenCoach with Unity 2020 and Mediapipe with Unity 2021
```

> **Note**
> If you're using Windows, the commands may be slightly different for your system.

<h3 id="project-breakdown" align="left" style="font-weight: lighter">Project Breakdown</h3>

OpenCoach makes use of both pose-estimation and imitation learning to record an activity performed by a trainer, convert it to an animation and teach our EA/GA models to conduct the activity from this data. From here, the algorithm can learn how to optimise the task being performed to accomplish some predefined goals.

|               ![test](https://dummyimage.com/900x450/8c8c8c/ffffff)                |
| :--------------------------------------------------------------------------------: |
| Figure 2: Mediapipe Unity Plugin tracking a personal trainer from existing footage |

The <b>Mediapipe Unity Plugin</b> project contains three main components. Firstly, we have a canvas which renders the video to be imitated. This can be either an existing video on a live webcam feed, in this example we have used an existing video.

We then have two skeletons that are denoted by orange and blue spheres, which copy the movements in the video. The second of these has extra functionality to ensure all joints and bones have the correct hierarchical order such that it can be reused in Unity in any project.

|              ![test](https://dummyimage.com/900x450/8c8c8c/ffffff)              |
| :-----------------------------------------------------------------------------: |
| Figure 3: Unity ML-Agents performing jumping jacks from provided training video |

The <b>Unity ML-Agents and Marathon Envs</b> projects provide functionality to test our bipedal EA/GA models in a physical environment. The models learn by using <i>"Imitation Learning"</i> from the <kbd>.FBX</kbd> file passed in from our motion capture software.

We then define custom rewards functions once the imitation learning model exceeds a certain threshold of accuracy. This is so once the model learns to perform the activity as the trainer intended, it can improve the task further and conduct it better than the trainer.

|          ![test](https://dummyimage.com/900x450/8c8c8c/ffffff)          |
| :---------------------------------------------------------------------: |
| Figure 4: TensorBoard for the initial generations and final generations |

<h3 id="acknowledgements" align="left" style="font-weight: lighter">Acknowledgements</h3>

This software uses the following open source packages:

- [Unity ML-Agents](https://unity.com/products/machine-learning-agents)
- [Unity Marathon-Envs](https://joanllobera.github.io/marathon-envs/)
- [Unity Mediapipe Plugin](https://github.com/homuler/MediaPipeUnityPlugin)

<h3 id="support" align="left" style="font-weight: lighter">Support</h3>

<h3 id="contributors" align="left" style="font-weight: lighter">Contributors</h3>
