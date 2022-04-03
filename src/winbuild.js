var electronInstaller = require('electron-winstaller');

var settings = {
    appDirectory: './out/SlivApp-win32-x64',
    outputDirectory: './out/SlivApp-installer',
    authors: 'kirillsaint & clownless',
    exe: './SlivApp.exe',
    iconUrl: 'https://github.com/kirillsaint/slivapp/raw/master/src/images/icon.ico',
    setupIcon: './images/icon.ico',
    noMsi: true,

};

resultPromise = electronInstaller.createWindowsInstaller(settings);

resultPromise.then(() => {
    console.log("The installers of your application were succesfully created !");
}, (e) => {
    console.log(`Well, sometimes you are not so lucky: ${e.message}`)
});