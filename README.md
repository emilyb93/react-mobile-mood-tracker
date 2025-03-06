# Tech Test Screen

This application is my tech test solution for Bearable.

In this tech test I was asked to recreate a simple screen in React Native as well as design my own data entry form.

Incase you have trouble getting this working with Expo for any reason, I have included a short screen recording to show the features requested.

Once you have cloned this repo, open the directory in your terminal and run

```bash
npm install
```

followed by

```bash
npm run start
```

This will start the expo server.

Download the Expo Go app to your device and scan the QR code in your terminal using the app. This should immediately take you to the correct screen.

You will find some test data already implanted in the redux store [here](app/stores/moodSlice.ts).

To use the application, select one of the 10 numbered buttons available to indiciate your mood from 1-10 and then select at least one feeling from the provided options. Finish by pressing Done and you will see immediate changes to the data shown below. Choose another number to add another entry as many times as you wish.

If you wish to inspect the component logic and styling you can find all relevant components in components/bearable.

## Reflection

I consider myself quite good with styling in other frameworks and it had been a while since working with the StyleSheet API. I found the lack of documentation for the StyleSheet API to be my main blocker but it was an interesting challenge nonetheless and I have learned a lot from this exercise.

The brief said to use 1-5 as a way of entering the data though it also said that it would be good to stick to Bearable's design. I really like the gradient rating available in the app and so I decided to recreate it here also. Whilst this does use 1-10 I hope that the gradiation between 5 colours satisfies the brief.

Please let me know if you have any further questions and thoughts or whether you wish to discuss any choices.

Thank you for your time!
