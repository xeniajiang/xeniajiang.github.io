# What Difference Can a Dress Make?

## Using Machine Learning to Open the Black Box of Gender Reading

Sometimes, confusion about the body comes not only from the body itself, but from the way the body is seen. Why can the same body be read consistently as one gender in some clothes, yet suddenly become unstable in others? Why can a dress, a pair of shoes, or the placement of a waistline change how other people see you?

In a study in the sociology of the body, we entered a set of anthropometric measurements into several machine-learning models: height, weight, shoulder width, bust circumference, waist circumference, hip circumference, thigh circumference, and foot length. The task appeared simple: using these variables, predict whether a body would be read as closer to male or female.

This may sound like a dangerous question. It can easily be mistaken for an attempt to use machine learning to determine whether someone “really looks like a woman.” Once the question is formulated more precisely, however, it becomes much more interesting. The model does not directly reproduce how people see in everyday life. Rather, it formalizes one mechanism already embedded in social perception: the use of visible cues to place bodies within a binary gender classification.

In other words, the model shows how a machinery of reading operates. Between the anatomical body and the body visible in everyday life lie clothing, posture, setting, and the habits through which others look.

[[FIGURE:model-flow]]

## The Body in the Measurement Room and the Body on the Street

When we first ran the model, the complete eight-variable specification produced a moderately male-leaning reading for the case of a trans woman. This was somewhat surprising, since in everyday life she was already read consistently as a woman.

That is precisely where the interesting question begins: Why did the model read her this way? Which variables was it relying on?

In the model interpretation, one unexpected variable emerged: thigh circumference. In the full model, an extremely small thigh circumference exerted a strong pull in the male direction. In other words, the model’s male-leaning reading depended heavily on thigh circumference, a variable recorded in the measurement room.

But is thigh circumference actually visible to other people?

Bodies in everyday life rarely appear in an unmodified, motionless state. Long dresses, skirts, loose trousers, A-line silhouettes, and draping fabrics do more than conceal anatomical thigh circumference. They create a different lower-body contour. When someone walks in a long dress, the eye does not land on the actual circumference measured tightly against the skin. It sees the movement of the hem, the fall of the fabric, and the dynamic outline reorganized between waist and knee.

A variable can exist in a dataset without being visible in social interaction. A variable can exist under a measuring tape without entering the gender judgment made by another person’s eyes.

We therefore ran a simple comparison: What would happen if thigh circumference were removed?

The result reversed. Once thigh circumference was excluded, the same body crossed the midpoint into a female-leaning reading. The original male-leaning result had depended heavily on a variable that is usually invisible in everyday dress and therefore could not adequately represent the stable direction in which the body as a whole was seen.

[[FIGURE:thigh-circumference]]

At that moment, machine learning helped us clarify something highly ordinary:

A dress changes the body that enters the machinery of gender reading.

## Clothing as an Interface of Presentation and Reading

In everyday discussions of gender expression, clothing is often treated as decoration. The body is imagined as already there, while clothing is merely added on top to supply style, atmosphere, or gendered symbolism.

This case suggests that clothing does much more.

What clothing manages, in practice, is visibility. Underwear changes the outline of the chest. A skirt reorganizes the relation between hips and thighs. The shape of a shoe conceals foot length. A high waist redraws the waistline. Clothing determines which bodily variables are displayed, hidden, or replaced. Together, these transformations produce a body made available for reading.

The trick of the social world is that this carefully organized body is often taken by others as the expression of a biological or natural essence, while the role of clothing as a medium quietly disappears from view.

This organization of the body never takes place in a vacuum. As Joanne Entwistle argues through the concept of situated bodily practice, dressing does not simply place social symbols over an already completed body. Body, clothing, and setting are continually produced through one another.

Clothing cannot rewrite everything at will. Bone structure, height, shoulder width, and other material distributions remain part of the basis of gender reading. Yet the social gaze of gender is not a scanner obsessed with seeing through to an original body underneath. It is closer to a form of visual computation with default weights. Anatomical measurements recede into the background. What actually shapes the judgment are the visual cues left after clothing has weighted them and the setting has filtered them.

In this case, bust and hip contours produced a strong combined effect in the simulated reading. In the unmodified measurement condition, the body initially received a relatively low probability of being read as female. But under a simulated 4-centimeter increase in apparent bust circumference, the reading crossed the midpoint. When a further 2-centimeter increase in apparent hip circumference was added to represent the silhouette created by garment structure, the female-leaning reading became firmly anchored.

This suggests that the chest and hips do not work in isolation. They can supplement one another and jointly push a body located near an ambiguous boundary across a clearer gender threshold.

[[FIGURE:sensitivity-analysis]]

The performance of high heels in the model complicates another piece of common sense. Many people assume that the gendered effect of high heels lies in making someone taller. Yet the model suggested that a 2-centimeter increase in apparent height had very little effect. Once the contours of the chest and hips were already stable, such a minor adjustment in height barely altered the overall reading.

What produced an additional shift was the shortening of apparent foot length created by the shape and coverage of the shoe. In other words, the gendered effect of high heels may lie less in making someone appear taller than in visually shortening the foot and reorganizing the overall proportion between foot and leg.

These two details come closer to everyday experience. When people judge someone’s “figure,” the eye does not capture a single isolated absolute measurement. Shoulder width alone or height alone cannot determine the result. What produces the so-called feminine silhouette is the relation among chest, waist, hips, and shoulders.

Whether a body is read consistently as a particular gender depends on this intricate network of proportions.

## Proportions Come Closer to the Everyday Gaze Than Absolute Measurements

When the more complex variables were compressed into just three ratios—waist-to-hip ratio, bust-to-waist ratio, and shoulder-to-hip ratio—the model could still recover a considerable amount of information used in binary gender reading.

These ratios already carry the visual script of a traditional gender order. They organize the female body in advance as a set of comparable curves: the waist is expected to narrow, the chest and hips are expected to protrude, and the lower-body contour is expected to provide visual evidence of softness and femininity.

In this real case, the unmodified waist-to-hip ratio was already near the center of the female distribution, while the bust-to-waist ratio was also strongly female-leaning. The shoulder-to-hip ratio was initially high, but this was substantially moderated once apparent hip circumference increased.

The body was already close to a female-leaning reading in several proportional structures. Clothing made that reading more stable.

[[FIGURE:ratio-space]]

The stability of the reading deserves attention. In the model, a “shift” is mathematically only a jump in predicted probability. In the everyday lives of trans people and others who cross gender norms, however, such instability is a deeply embodied experience.

Unstable gender reading often comes with tightened muscles and heightened sensory vigilance. At the entrance to a subway, in a public restroom, or at a convenience-store checkout, every glance from a stranger can feel like physical contact and interrogation.

Gender reading is a chain of small, repeated events. In some clothes, the body contracts almost involuntarily. In others, it can occupy space with ease.

The meaning of clothing therefore exceeds that of cultural symbolism. Clothing provides an everyday form of stability. It acts like a soft buffer, receiving on behalf of the flesh those social gazes charged with the desire to classify. In most ordinary interactions, it allows the body to breathe without remaining constantly prepared for defense.

## Classification Reinforces Binary Separation and Produces an Illusion of Essence

The most important part of this project lies beyond model accuracy.

The full model did perform very well. Given enough anthropometric variables, machine learning could reconstruct male and female labels with considerable accuracy. Yet that accuracy is itself part of the problem.

The task of supervised learning is to find the function that best distinguishes two groups under labels supplied in advance. From the beginning, the training objective forcibly divides bodily samples into two categories. The algorithm then searches within that binary order for the most efficient boundary.

It actively looks for a line of separation and compresses a continuous bodily space onto a probability axis. That axis appears highly objective: 0.2, 0.5, 0.8, as though this set of measurements naturally carried a gender score.

In fact, the score comes from the classification task and from the binary order already built into that task.

To test this, we also conducted an unsupervised principal component analysis. PCA does not ask the model to predict male or female. It examines only how bodily variables form a space.

The result looked very different. Bodily space appeared continuous, overlapping, and gradual. The two groups assigned male and female at birth did show directional differences, but there was no natural fissure between the clouds of points.

[[FIGURE:model-boundary-pca]]

The apparent “accuracy” of an algorithm often comes from dividing the world in advance. When the labels are forcibly set as binary, the model folds overlap, ambiguity, and gradual variation into boundaries that appear clean.

Once we turn away from the classification result and return to bodily experience, reality may look closer to this continuous state. A person’s experience of their body is rarely a binary verdict. It is a set of living forms that shift subtly with posture, breath, clothing, and setting.

Machine learning did not create the binary mechanism. It merely formalized the violent social impulse to split a continuous world into sharply separated parts.

## Conclusion: What Does a Dress Change?

Let us return to the original question: What does a dress actually change?

It does not rewrite existing anatomical conditions. It changes which bodily information enters social reading. It removes certain measurement-room variables from everyday interaction, stabilizes certain visual proportions, and moves the body from one pathway of reading to another.

This is the deeper role of clothing in gender. For many people, dressing carries aesthetics and style, but it is also a crucial technology of survival. It is a way of negotiating with the world, allowing the body to gain a degree of predictability, safety, and freedom from repeated explanation within a binary classificatory system that is not entirely friendly.

Clothing and the binary classificatory gaze also work together to produce what Erving Goffman called institutional reflexivity. Institutions first establish which cues can be read as “male” or “female.” Individuals then organize their visible bodies around those cues in order to survive. When these carefully organized bodies are repeatedly read without difficulty, the institution receives false evidence that binary gender is natural.

The most interesting conclusion of this project therefore goes far beyond any claim that “machine learning proves whether a particular body can be read as female.”

Its real explanatory value lies elsewhere: when machine learning is used carefully as a mirror, it exposes the strict conditions under which binary gender reading becomes possible. It allows us to see how many technical and social premises are required to produce what appears to be a “natural” gendered gaze.

What a dress changes is the interface through which a body is read by the world.

And very often, it is at this interface that the verdict of gender is delivered.

## Appendix: Data and Methods

This essay draws on an original exploratory simulation project. The models use anthropometric variables and assumptions about which bodily information may enter gender reading under different clothing-related scenarios.

The data came primarily from two sources. The first was Chinese ergonomic standards published in 2023, which provide sex-disaggregated anthropometric percentiles for large samples of people aged 18–25. These percentiles were used to generate distributions for height, weight, shoulder width, bust circumference, waist circumference, hip circumference, thigh circumference, foot length, and related variables.

The second source was the ANSUR II anthropometric dataset, which was used as a reference for the correlation structure among variables. This allowed the simulated data to preserve basic anthropometric relationships, such as the tendency for height, foot length, shoulder width, and body circumferences to vary together.

The generation process consisted of three main steps. First, percentile values for each variable were converted into continuous distributions. Second, a reference correlation matrix was used to generate simulated samples for groups assigned male and female at birth. Third, binary gender-reading models were trained on these samples, and the real case was entered under different simulated scenarios for comparison.

The models included logistic regression, random forests, and XGBoost. Logistic regression made it easier to examine the direction of individual variables, while the tree-based models were used to capture nonlinear boundaries. The probabilities discussed in the main text should be understood primarily as a synthesis of results across the three model types.

Two additional analyses were conducted. First, thigh circumference was removed to test the difference between the body recorded in a measurement table and the body more likely to be visible in everyday life. Second, PCA was used as an unsupervised comparison to examine the continuity and overlap of bodily space when binary classification was not imposed in advance.

All results should be understood as formal simulations of gender-reading mechanisms. They indicate directions of reading under particular variables, training objectives, and assumptions about visibility. They are not judgments of identity, nor do they represent every way in which people perceive bodies in the real world.

The individual case used in the essay provided fully informed consent, and all identifying information was anonymized.
