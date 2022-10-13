# OTOT_B2.4_Serverless



The serverless function is deployed on google cloud.


It is using the SG GOV API to get the weather data of all regions in singapore.
The serverless function takes in a input name of the area of residence, and it will return the weather forecast of the next two hours of this region

This is the sample request to the serverless function with input name Clementi:

[https://us-central1-otot-b-ddnote.cloudfunctions.net/weather?name=Clementi](https://us-central1-otot-b-ddnote.cloudfunctions.net/weather?name=Clementi)
