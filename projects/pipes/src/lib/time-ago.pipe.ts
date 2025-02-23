import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgoPipe',
  standalone: false,
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string | Date): string {
    if (!value) return '';

    const date = new Date(value);
    const now = new Date();
    const diff = now.getTime() - date.getTime();

    // Convertir la diferencia a minutos
    const diffMinutes = Math.round(diff / 60000);

    if (diffMinutes < 10) {
      return 'justo ahora';
    } else if (diffMinutes < 60) {
      return `hace ${diffMinutes} ${diffMinutes === 1 ? 'minuto' : 'minutos'}`;
    } else if (diffMinutes < 1440) {
      const diffHours = Math.round(diffMinutes / 60);
      return `hace ${diffHours} ${diffHours === 1 ? 'hora' : 'horas'}`;
    } else {
      const diffDays = Math.round(diffMinutes / 1440);
      return `hace ${diffDays} ${diffDays === 1 ? 'día' : 'días'}`;
    }
  }

}
