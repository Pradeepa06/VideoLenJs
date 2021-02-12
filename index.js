const electron = require ( ' electron ' ) ;

const ffmpeg = require ( ' fluent - ffmpeg ' ) ;

const { app , BrowserWindow, ipcMain} = electron;

let mainWindow;

app.on( ' ready ' ( ) = > {

<!--  console.log ( 'App is now ready' ) ; -->

mainwindow = new BrowserWindow ( { } );
 
mainwindow.loadURL( `file://${__dirname}\index.html`);

ipcMain.on ( ' video : submit ' , ( event , path ) = > {

ffmpeg.ffprobe ( path , ( err , metadata ) = > {
 
<!--- Prints in the terminal console.log ( ' Video duration is : ' , metadata .format . duration ) ;  -->

<!--Prints in the browser  -->

mainWindow.webContents.send ( ' video : metadata ' , metadata.format.duration) ; 
} ) ;

} ) ; 