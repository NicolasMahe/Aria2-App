# Aria2-App
A standalone Aria2 app





# Install NPM packages

```sh
npm install
```

# Create the app

## Mac OS X

```sh
electron-packager . Aria2 --platform=darwin --arch=x64 --overwrite --ignore="node_modules/(electron-packager|electron-prebuilt)" --icon=icon/icon.icns  --out="app/"
```

Zip it
```sh
cd app/Aria2-darwin-x64/
zip -r -y ../Aria2.zip Aria2.app/
```

# Source

## Aria2
https://aria2.github.io

## Aria2 WebUI
https://github.com/ziahamza/webui-aria2

## Icon
https://www.iconfinder.com/icons/183185/arrow_circle_down_icon#size=512

# TODO

- [ ] Use conf file for Aria2c and Aria2ui
- [ ] Add maxogden/electron-packager as dependency
- [ ] Improve aria2 command
    * --stop-with-process=<PID>
    * --conf-path
    * --dir
- [ ] Improve readme
- [ ] Windows compatibility
- [ ] Linux compatibility
