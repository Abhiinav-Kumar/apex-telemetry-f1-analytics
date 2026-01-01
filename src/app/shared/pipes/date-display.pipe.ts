import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateDisplay',
    standalone: true
})
export class DateDisplayPipe implements PipeTransform {

    transform(value: string | undefined): string {
        if (!value) return '';

        // value is expected to be "yyyy-mm-dd" e.g. "2026-03-08"
        const date = new Date(value);

        // Check if date is valid
        if (isNaN(date.getTime())) return value;

        // formatting to "dd MMM yyyy" e.g. "08 Mar 2026"
        return new Intl.DateTimeFormat('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }).format(date);
    }

}
