# Tech Test Screen

Once you have cloned this repo, open the directory in your terminal and run

```bash
npm i
```

followed by

```bash
npm start
```

This will start the expo server - Download the Expo Go app to your device and scan the QR code in your terminal using the app. This should immediately take you to the correct screen.

You will find some test data already implanted in the redux store [here](app/stores/moodSlice.ts)

To use the application, select one of the 10 numbered buttons available to indiciate your mood from 1-10 (10 being the best) and then select at least one feeling from the provided options. Finish by pressing Done and you will see immediate changes to the data shown below.

If you wish to inspect the component logic and styling you can find all relevant components in components/bearable.

## Reflection

I consider myself quite good with styling in other frameworks and it had been a while since working with the StyleSheet API. I found a lack of documentation to be my main blocker but it was an interesting challenge nonetheless.

Please let me know if you have any further questions and thoughts or whether you wish to discuss any choices.

Thanks for your time!
