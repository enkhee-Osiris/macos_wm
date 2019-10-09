# MacOS WM

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->

**Table of Contents**

- [MacOS WM](#macos-wm)
  - [Requirements](#requirements)
    - [Setup](#setup)

<!-- markdown-toc end -->

## ScreenShots

![Alt text](/screenshots/sc_1.png?raw=true "ScreenShot 1")
![Alt text](/screenshots/sc_2.png?raw=true "ScreenShot 2")

## Requirements

- [kitty](https://sw.kovidgoyal.net/kitty/#quickstart)
- [yabai](https://github.com/koekeishiya/yabai#install)
- [skhd](https://github.com/koekeishiya/skhd#install)
- [jq](https://stedolan.github.io/jq/download/)
- [ubersicht](https://github.com/felixhageloh/uebersicht)
- [neofetch](https://github.com/dylanaraps/neofetch/wiki/Installation#macos-homebrew) (Optional)
- [ranger](https://github.com/ranger/ranger) **Available in brew** (Optional)
- [ifstat](http://macappstore.org/ifstat/) **For Übersicht widget**

### Setup

Clone into Ubersicht widgets.

```sh
git clone https://github.com/enkhee-Osiris/macos_wm.git "$HOME/Library/Application Support/Übersicht/widgets/osiris"
```

Create symlinks.

```sh
 ln -s "${HOME}/Library/Application Support/Übersicht/widgets/osiris/.yabairc" "${HOME}/.yabairc"
 ln -s "${HOME}/Library/Application Support/Übersicht/widgets/osiris/.skhdrc" "${HOME}/.skhdrc"
 ln -s "${HOME}/Library/Application Support/Übersicht/widgets/osiris/kitty" "${HOME}/.config/kitty"
```

You will be need spotify oAuth token for [web
api](https://developer.spotify.com/documentation/web-api/reference/tracks/get-track/).  
You can get one from
[here](https://developer.spotify.com/console/get-track/?id=3n3Ppam7vgaVa1iaRUc9Lp)
by clicking **Get Token**. _THIS TOKEN WILL BE EXPIRED QUICK_

```sh
echo -n "TOKEN_HERE" > "${HOME}/Library/Application Support/Übersicht/widgets/osiris/lib/spotify/token.sec"
```
