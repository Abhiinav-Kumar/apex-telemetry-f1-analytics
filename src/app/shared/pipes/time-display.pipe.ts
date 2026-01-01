import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timeDisplay',
    standalone: true
})
export class TimeDisplayPipe implements PipeTransform {

    transform(value: string | undefined): string {
        if (!value) return '';

        // Parsing UTC time string "HH:mm:ssZ" assuming current date or just treating as raw time if needed.
        // However, usually time comes with date or we assume it's today's time in UTC.
        // The user example is "04:00:00Z", which is just time. 
        // We need to construct a full Date object to convert it properly.

        const now = new Date();
        const dateString = now.toISOString().split('T')[0]; // "YYYY-MM-DD"
        // Combine with the time value to make a full ISO string
        // value is "04:00:00Z"

        // We can also just treat the input as a Date input directly if it was a full ISO string, 
        // but the prompt specifically says "time": "04:00:00Z".

        // Let's create a date object with the given time in UTC.
        // We'll use a dummy date, we only care about the time.
        const utcDate = new Date(`1970-01-01T${value}`);

        if (isNaN(utcDate.getTime())) return value;

        // Convert to IST (UTC+5:30)
        return new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZone: 'Asia/Kolkata'
        }).format(utcDate) ;
    }

}
