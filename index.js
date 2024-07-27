/* 
Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
--- Use at least one array.
--- Use at least two classes.
--- Your menu should have the options to create, view, and delete elements
*/

// Creating a music catalogue

class Music {
    constructor (name, artist, length) {
        this.name = name;
        this.artist = artist;
    }

    songInfo() {
        return `The song, ${this.name}, was peformed by ${this.artist}. \n`;
    }
}

// class List {
//     constructor(){
//         this.songs = [];
//     }

//     // addSong () {
//     //     this.songs.push(music);
//     //   }

//     // displaySongs (){
//     //     let songInfo = "";
//     //     for (let i = 0; i < this.list.length; i++) {
//     //       songInfo += `${this.list[i].name}, performed by ${this.list[i].artist}. \n`;
//     //     }
//     //     return songInfo
//     //   }
// }

class Menu {
    constructor () {
        this.music = [];
        // this.selectedSong = [];
    }

    start () {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.addSong();
                    break;
                case '2':
                    this.deleteSong();
                    break;
                case '3':
                    this.displaySongs();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert("Goodbye!")
    }

    showMainMenuOptions(){
        return prompt (`
            0) Exit
            1) Add new song
            2) Delete song
            3) Display all songs
        `);
    }

    addSong (){
        let name = prompt("Enter name of song")
        let artist = prompt ("Enter artist name")
        this.music.push(new Music (name, artist));
    }

    deleteSong(){
        let index = prompt("Enter the index of the song you wish to delete: ");
            if(index > -1 && index < this.music.length) {
                this.music.splice(index, 1);
            }
    }

    displaySongs () {
        let songName = "";
        for (let i = 1; i < this.music.length; i++) {
            songName += `[${i}] ${this.music[i].name}, performed by ${this.music[i].artist}. \n`;
        }
        alert(songName)
    }

}

let menu = new Menu();
menu.start()



// let song1 = new Music("Whatever It Takes", "Stephen Stanley");
// let song2 = new Music("Reckless Love", "Cory Asbury");

// song1.songInfo();
// song2.songInfo();




    




