export function convertTimeStringToNumber(timeString) {
    const [hoursStr, minutesStr] = timeString.split(' ');
    const hours = Number(hoursStr.slice(0, -1));
    const minutes = Number(minutesStr.slice(0, -1)) / 60;
    return hours + minutes;
}

export const days = [
    [
        { name: 'Instagram', usage: '1h 0m'},
        { name: 'TikTok', usage: '2h 0m' },
        { name: 'Clash of Clans', usage: '0h 45m' },
        { name: 'YouTube', usage: '1h 38m' },
        { name: 'Classroom', usage: '0h 20m' },
        { name: 'WhatsApp', usage: '1h 37m' },
        { name: 'Chess', usage: '0h 42m' },
        { name: 'Gmail', usage: '0h 10m' },
    ],
    [
        { name: 'Netflix', usage: '1h 32m' },
        { name: 'Clash of Clans', usage: '0h 45m' },
        { name: 'Amazon', usage: '0h 14m' },
        { name: 'YouTube', usage: '1h 30m' },
        { name: 'Gmail', usage: '0h 33m' },
        { name: 'Chrome', usage: '1h 4m' },
        { name: 'TikTok', usage: '0h 53' },
        { name: 'WhatsApp', usage: '1h 37m' },
        { name: 'Chess', usage: '0h 26m' },
    ],
    [
        { name: 'Snapchat', usage: '0h 18m' },
        { name: 'TikTok', usage: '1h 39h' },
        { name: 'WhatsApp', usage: '0h 39m' },
        { name: 'Instagram', usage: '1h 3m' },
        { name: 'Amazon', usage: '0h 36m' },
        { name: 'Netflix', usage: '1h 05m' },
    ],
    [
        { name: 'Meet', usage: '1h 21m' },
        { name: 'TikTok', usage: '1h 4m' },
        { name: 'WhatsApp', usage: '1h 43m' },
        { name: 'Google Meet', usage: '0h 28m' },
        { name: 'Clash of Clans', usage: '2h 26m' },
        { name: 'Instagram', usage: '1h 15m' },
        { name: 'Classroom', usage: '0h 27m' },
        { name: 'Youtoube', usage: '0h 48m' },
    ],
    [
        { name: 'Netflix', usage: '1h 16m' },
        { name: 'TikTok', usage: '2h 03m' },
        { name: 'Clash Royale', usage: '0h 56m' },
        { name: 'Youtube', usage: '1h 17m' },
        { name: 'WhatsApp', usage: '0h 51m' },
        { name: 'Instagram', usage: '2h 13m' },
    ],
    [
        { name: 'WhatsApp', usage: '2h 23m' },
        { name: 'Classroom', usage: '0h 14m' },
        { name: 'Instagram', usage: '0h 59m' },
        { name: 'TikTok', usage: '1h 1m' },
        { name: 'Youtube', usage: '1h 34m' },
        { name: 'Discord', usage: '0h 49m' },
        { name: 'Chrome', usage: '1h 48m' },
    ],
    [
        { name: 'TikTok', usage: '1h 49m' },
        { name: 'Clash of Clans', usage: '1h 22m' },
        { name: 'WhatsApp', usage: '1h 03m' },
        { name: 'Gmail', usage: '0h 25m' },
        { name: 'Chess', usage: '0h 21m' },
        { name: 'Clash Royale', usage: '1h 0m' },
        { name: 'Instagram', usage: '1h 28m' },
        { name: 'Snapchat', usage: '0h 34m' },
    ],
];

export const total = ['7h 12m', '6h 29m', '4h 21m', '7h 43m', '7h 54m', '7h 58m', '6h 58m'];