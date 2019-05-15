
chrome.identity.launchWebAuthFlow(
  {
    'url': 'https://github.com/login/oauth/authorize?client_id=236afc9288b3ed29080b&scope=repo%20read:repo_hook',
    'interactive': true
  },
  redirectUrl => {
    console.log("made it through the webflow")
  }
)

let subs = fetch('https://api.github.com/users/plohkoon/subscriptions')
              .then(res => {
                return res.json();
              })

chrome.runtime.onMessage.addListener(
  async (request, sender, sendResp) => {
    console.log("awaiting resolution");
    subs.then(val => {
      console.log("alerting and responding")
      sendResp({data: val});
    })
    return true;
  }
)
