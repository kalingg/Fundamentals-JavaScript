function gramophone (bandName, albumName,songName ){

    let times = (albumName.length * bandName.length) *songName.length / 2;

    let rotation = Math.ceil(times/2.5);

    console.log(`The plate was rotated ${rotation} times`);

}
gramophone ('Black Sabbath', 'Paranoid', 'War Pigs');
