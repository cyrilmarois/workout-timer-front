import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'password-validator',
  templateUrl: './password-validator.html',
  styleUrls: ['./password-validator.sass']
})
export class PasswordValidatorComponent implements OnChanges {

  @Input() password: string;
  @Input() label: string;
  bar0: string;
  bar1: string;
  bar2: string;
  bar3: string;
  bar4: string;
  // regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  private colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];

  private static measureStrength(pass: string) {
    console.log('pass', pass);
    let score = 0;
    // award every unique letter until 5 repetitions
    let letters = {};
    for (let i = 0; i< pass.length; i++) {
      letters[pass[i]] = (letters[pass[i]] || 0) + 1;
      score += 5.0 / letters[pass[i]];
    }
    // bonus points for mixing it up
    let variations = {
      digits: /\d/.test(pass),
      lower: /[a-z]/.test(pass),
      upper: /[A-Z]/.test(pass),
      specialChars: /[@$!%*?&]/.test(pass),
    };

    let variationCount = 0;
    for (let check in variations) {
      variationCount += (variations[check]) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;
    console.log('score', score, 'math',  Math.trunc(score));
    return Math.trunc(score);
  }

private getColor(score: number) {
  let idx = 0;
  if (score > 90) {
    idx = 4;
  } else if (score > 70) {
    idx = 3;
  } else if (score >= 40) {
    idx = 2;
  } else if (score >= 20) {
    idx = 1;
  }
  return {
    idx: idx + 1,
    col: this.colors[idx]
  };
}

  ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
      var password = changes['password'].currentValue;
      console.log('password', password);
      this.setBarColors(5, '#DDD');
      if (password) {
          let c = this.getColor(PasswordValidatorComponent.measureStrength(password));
          console.log('c', c);
          this.setBarColors(c.idx, c.col);
      }
  }
  private setBarColors(count, col) {
      for (let _n = 0; _n < count; _n++) {
          this['bar' + _n] = col;
      }
  }
}
