import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'usdBtc'
})

export class UsdBtcPipe implements PipeTransform {

  transform(amountInUsd: number, isBtcUsd: boolean): unknown {
    const EXCHANGE_RATE = 60269.40;

    if (isBtcUsd) {
      return amountInUsd * EXCHANGE_RATE;
    } else {
      return amountInUsd / EXCHANGE_RATE;
    }
  }
}
