# Drink Expenses

Small drink expenses API that is used with the [Workflow app][WF] for iPhone.

The company I am currently working with provides soft drinks for a nominal cost. The combination of this API, [jsonbin.org][jsonbin] and Workflow allows me to easily track costs against it.

## Prerequisities 

Node >= 7.6 recommended.

## Instructions

You need to get an API key from [jsonbin.org][jsonbin]. Just login with your Github account to obtain one.

1. Clone the repository
2. `npm install` or `yarn install`
3. `JSONBIN_API_KEY=<key> npm start`

## Hosting on zeit now

I am running this on [zeit now][now]. Follow the instructions there to install.

If you have the `JSONBIN_API_KEY` environment variable locally, you can deploy your app with `now -e JSONBIN_API_KEY`. See the [Tips and Tricks](https://zeit.co/docs/features/env-and-secrets#tips-&-tricks) section for more information.

## Workflows

For use with [Workflow][WF]

* [Buy a Drink][wf1]
* [Drinks Balance][wf2]
* [Pay Your Balance][wf3]

[jsonbin]:https://jsonbin.org
[WF]:https://workflow.is
[now]:https://zeit.co/now
[wf1]:https://github.com/ryanlewis/drink-expenses/blob/master/workflows/Buy%20A%20Drink.wflow
[wf2]:https://github.com/ryanlewis/drink-expenses/blob/master/workflows/Drinks%20Balance.wflow
[wf3]:https://github.com/ryanlewis/drink-expenses/blob/master/workflows/Pay%20Your%20Balance.wflow