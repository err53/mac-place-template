# mac-place-template

## To use autoplacer (copied from [here](https://github.com/ca-place/ca-place-script/blob/main/README.md))

A script for defending the uni templates onto r/place
This script will automate your tile placements to defend the grey outline and surrounding tiles based on this [template](https://raw.githubusercontent.com/err53/mac-place-template/main/canada_uni_full_size.png)

First, install the [TamperMonkey](https://www.tampermonkey.net/) browser extension:
- [Chrome Webstore](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
 - [FireFox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) (ViolentMonkey)

Install this tamper monkey script **[here](https://raw.githubusercontent.com/err53/mac-place-template/autoplacer.user.js)**

The code is open source! Inspect it for yourself!

## Error Retrieving Folder Fix
Reddit seems to have stopped sending Access-Control-Allow-Origin header in the API we use to get the current canvas. Likely this is an anti-bot countermeasure.

To overcome this, you will need to need to install a second browser extension that disables check for Cross Origin Requests

Chrome: https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino/related?hl=en

Firefox: https://add0n.com/access-control.html?version=0.1.9&type=install

You'll need to click extension to enable it.

Make sure the extention is _only enabled for reddit._ You can do this by clicking on the 3 dots beside the extension and clicking on manage extension. Then go to the site access part and select "on specific sites" and then type reddit.com

Use this extension carefully, you should not enable Cross Origin Requests for any other webpages. Try use it in incognito / do not browse other sites than Reddit!

If you are getting error msg like Error in retrieving folder, that means Cross Origin Requests are not working and your CORS extensions are not set up properly.

## Template

Want a nice template userscript to see where the flag should be? [Install the template userscript](https://github.com/err53/mac-place-template/raw/main/userscript.user.js)
