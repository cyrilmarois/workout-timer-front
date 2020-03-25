import { Sound } from './sound.model';
import { SoundService } from './sound.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.sass']
})
export class SoundComponent implements OnInit {
  sounds: Sound[] = [];

  constructor(private soundService: SoundService) { }

  ngOnInit() {
    this.list();
  }

  private async list() {
    this.sounds = await this.soundService.getSounds();
    console.log('sounds', this.sounds);
  }

}
