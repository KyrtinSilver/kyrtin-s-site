---
title: "063 - Your Own Model"
layout: essay.njk
date: "2023-09-17"
---

Since people seemed to like my SDXL experiment, here are the step-by-step instructions to do it for yourself:

1. Create and/or login to accounts for GitHub and Replicate.

2. Create a new public GitHub repository to store your source files for fine tuning.

3. Prepare a zip file containing 10 or more images clearly showing your face. The more the better, I used 22 in total.

4. Open [this Google Colab](https://colab.research.google.com/drive/1SGzF3PC6uScg9Jj0Xi5wnqUdFy66FIYb?usp=sharing), and walk through the steps, running the code one block at a time.

5. Upload the zip file to your GitHub repo, navigate to the uploaded file, and click the "raw" button.

6. Copy the URL your zip file downloaded from into the training code block in Colab.

7. Go to Replicate and [create a model](https://replicate.com/create). Copy the resulting my-name/my-model into the training code block in Colab.

8. Tweak the parameters if you wish, but otherwise just hit train, and in a few minutes you'll have your own model for generating your own silly images of yourself.

To further improve output images I can also recommend:

- Using "negative prompts" to correct biases in the model, and home in on exactly what you want by excluding specific patterns. For example, SDXL seems to bias heavily toward a cleft chin, but putting that in the negative prompt reduces that bias.

- Using a second system for "Face Swapping" on the output, to bring it that much closer to full fidelity. SDXL captures hair quite well, which face swappers don't handle, so combining the two often works best. This is similar to some methods of reinserting original data with residual layers.

- You can train a model for more steps, and with a higher batch size. A batch size of 6 and 2500 steps (defaults 4 and 1000 respectively) only cost me $1. However, in my experience the model fine tuned for longer performed substantially worse than the default settings.

I tested using a unique identifier other than the default "TOK", but even another truly unique identifier failed horribly compared to far less training on TOK. I recommend not changing that default. For the full list of parameters you can insert into the code, see: [Stability AI SDXL Training Inputs](https://replicate.com/stability-ai/sdxl#training-inputs)

I tested the results against several live 3D facial scanning systems, and they couldn't tell the difference between the resulting images and a live feed of my face.

Enjoy making many silly images of yourself.

#ai #cybersecurity #stablediffusion
