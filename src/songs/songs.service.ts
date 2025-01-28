import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class SongsService {
  // local db
  // local array

  private readonly songs = [];

  create(song: any) {
    // Save the song in the database
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // fetch the songs from the db
    // throw new Error('Error in DB while fetching record')
    return this.songs;
  }
}
