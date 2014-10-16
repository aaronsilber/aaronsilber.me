aaronsilber.me
==============

This is the site repository for development + production code of aaronsilber.me.

Have a look at the develop branch. The master branch is updated only with tested, functioning code and is what the live site pulls from when it checks for new code nightly. The develop branch most likely runs, but may be in-progress or lack functionality.

It's worth noting that this repository is not in its entirety what is thrown onto the production server. For security reasons, I manage the following files myself but do not include them in this repo. If you wanted to clone my website (because why not?) you would want to author these yourself.

*   nginx, mongodb config
*   iptables, ufw config
*   logwatch, logrotate, fail2ban config
*   SSL certificates/private keys
*   SSH host/dev keys
*   Production cookie secrets
*   Email config

Ideally GOOD security would permit most of those files to be disclosed, except for certs and keys, and cause no vulnerability. Vagrant config and provisioning scripts are not sensitive and will be included here. Just remember, if you use files from this repo in production without altering their secrets, you are exposing yourself because those secrets are publicly viewable here.